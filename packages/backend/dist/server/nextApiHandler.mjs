// src/server/nextApiHandler.ts
import { createNextApiHandler } from "@trpc/server/adapters/next";

// src/server/context.ts
import { getIronSession } from "iron-session";

// src/server/session.ts
import { Role } from "@icecreamswap/database";
var sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "ice-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production"
  }
};
var roleLevel = {
  [Role.ADMIN]: 10,
  [Role.MOD]: 5,
  [Role.USER]: 0
};
var isRole = (user, role) => roleLevel[(user == null ? void 0 : user.role) || Role.USER] >= roleLevel[role];
var isMod = (user) => isRole(user, Role.MOD);

// src/server/context.ts
async function createContext(opts) {
  const session = await getIronSession(opts.req, opts.res, sessionOptions);
  return { session, res: opts.res };
}

// src/server/trpc.ts
import { initTRPC } from "@trpc/server";
var t = initTRPC.context().create({
  errorFormatter({ shape }) {
    return shape;
  }
});
var { router, middleware, mergeRouters } = t;
var publicProcedure = t.procedure;

// src/server/routers/session.ts
import { z as z2 } from "zod";
import { createHash } from "crypto";
import { verifyMessage } from "viem";

// src/zod-utils.ts
import { z } from "zod";
var address = z.string().startsWith("0x").length(42);

// src/server/prisma.ts
import { PrismaClient } from "@icecreamswap/database";
var prismaGlobal = global;
var prisma = prismaGlobal.prisma || new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
});
if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

// src/server/routers/session.ts
var secret = process.env.SECRET_COOKIE_PASSWORD;
var getCurrentNonce = (key) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentHour = currentDate.getHours();
  const secretHash = createHash("sha256");
  secretHash.update(`${key}${currentYear}${currentMonth}${currentDay}${currentHour}${secret}`);
  return secretHash.digest("hex");
};
var sessionRouter = router({
  user: publicProcedure.query(async ({ ctx }) => {
    if (ctx.session.user) {
      return { ...ctx.session.user, isLoggedIn: true };
    }
    return { isLoggedIn: false };
  }),
  nonce: publicProcedure.query(async () => {
    const nonce = getCurrentNonce("session");
    return { nonce };
  }),
  login: publicProcedure.input(z2.object({
    address,
    signature: z2.string()
  })).mutation(async ({ ctx, input }) => {
    if (!await verifyMessage({
      address: input.address,
      message: getCurrentNonce("session"),
      signature: input.signature
    })) {
      ctx.res.status(401);
      return;
    }
    const { session } = ctx;
    const userData = await prisma.user.findFirst({
      where: { wallet: input.address },
      select: {
        name: true,
        role: true,
        wallet: true
      }
    });
    if (userData) {
      session.user = userData;
    } else {
      session.user = { wallet: input.address, name: "Anonymous", role: "USER" };
    }
    await session.save();
  }),
  logout: publicProcedure.mutation(async ({ ctx }) => {
    const { session } = ctx;
    session.user = void 0;
    await ctx.session.save();
  })
});

// src/server/routers/token.ts
import { z as z3 } from "zod";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Listed } from "@icecreamswap/database";
var tokenRouter = router({
  add: publicProcedure.input(z3.object({
    tokenAddress: z3.string(),
    tokenName: z3.string(),
    tokenSymbol: z3.string(),
    tokenDecimals: z3.number(),
    chainId: z3.number(),
    logo: z3.string().optional()
  })).mutation(async ({ input, ctx }) => {
    var _a;
    if (!((_a = ctx.session) == null ? void 0 : _a.user) || !isMod(ctx.session.user)) {
      throw new Error("Unauthorized");
    }
    if (input.logo) {
      const s3Client = new S3Client({});
      const binary = Buffer.from(input.logo, "base64");
      await s3Client.send(new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `token/${input.chainId}/${input.tokenAddress}.png`,
        Body: binary,
        ContentType: "image/png",
        GrantRead: "uri=http://acs.amazonaws.com/groups/global/AllUsers"
      }));
    }
    await prisma.token.create({
      data: {
        name: input.tokenName,
        symbol: input.tokenSymbol,
        address: input.tokenAddress,
        decimals: input.tokenDecimals,
        chainId: input.chainId,
        listed: Listed.DEFAULT_LIST,
        addedBy: {
          connect: {
            wallet: ctx.session.user.wallet
          }
        }
      }
    });
  }),
  defaultList: publicProcedure.query(async () => {
    const tokens = await prisma.token.findMany({
      where: {
        listed: Listed.DEFAULT_LIST
      }
    });
    return {
      name: "IceCreamSwap Default",
      timestamp: new Date().toISOString(),
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      tags: {},
      logoURI: "https://icecreamswap.com/logo.png",
      keywords: ["icecreamswap", "default"],
      tokens: tokens.map((token) => ({
        name: token.name,
        symbol: token.symbol,
        address: token.address,
        chainId: token.chainId,
        decimals: token.decimals,
        logoURI: `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/token/${token.chainId}/${token.address}.png`
      }))
    };
  })
});

// src/server/routers/_app.ts
var appRouter = router({
  health: publicProcedure.query(() => "yay!"),
  session: sessionRouter,
  token: tokenRouter
});

// src/server/nextApiHandler.ts
var nextApiHandler = createNextApiHandler({
  router: appRouter,
  createContext,
  onError: ({ error }) => {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error(error);
    }
  },
  batching: {
    enabled: true
  }
});
export {
  nextApiHandler
};
