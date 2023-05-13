"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/server/nextApiHandler.ts
var nextApiHandler_exports = {};
__export(nextApiHandler_exports, {
  nextApiHandler: () => nextApiHandler
});
module.exports = __toCommonJS(nextApiHandler_exports);
var import_next = require("@trpc/server/adapters/next");

// src/server/context.ts
var import_iron_session = require("iron-session");

// src/server/session.ts
var import_database = require("@icecreamswap/database");
var sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "ice-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production"
  }
};
var roleLevel = {
  [import_database.Role.ADMIN]: 10,
  [import_database.Role.MOD]: 5,
  [import_database.Role.USER]: 0
};
var isRole = (user, role) => roleLevel[(user == null ? void 0 : user.role) || import_database.Role.USER] >= roleLevel[role];
var isMod = (user) => isRole(user, import_database.Role.MOD);

// src/server/context.ts
async function createContext(opts) {
  const session = await (0, import_iron_session.getIronSession)(opts.req, opts.res, sessionOptions);
  return { session, res: opts.res };
}

// src/server/trpc.ts
var import_server = require("@trpc/server");
var t = import_server.initTRPC.context().create({
  errorFormatter({ shape }) {
    return shape;
  }
});
var { router, middleware, mergeRouters } = t;
var publicProcedure = t.procedure;

// src/server/routers/session.ts
var import_zod2 = require("zod");
var import_crypto = require("crypto");
var import_viem = require("viem");

// src/zod-utils.ts
var import_zod = require("zod");
var address = import_zod.z.string().startsWith("0x").length(42);

// src/server/prisma.ts
var import_database2 = require("@icecreamswap/database");
var prismaGlobal = global;
var prisma = prismaGlobal.prisma || new import_database2.PrismaClient({
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
  const secretHash = (0, import_crypto.createHash)("sha256");
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
  login: publicProcedure.input(import_zod2.z.object({
    address,
    signature: import_zod2.z.string()
  })).mutation(async ({ ctx, input }) => {
    if (!await (0, import_viem.verifyMessage)({
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
var import_zod3 = require("zod");
var import_client_s3 = require("@aws-sdk/client-s3");
var import_database3 = require("@icecreamswap/database");
var tokenRouter = router({
  add: publicProcedure.input(import_zod3.z.object({
    tokenAddress: import_zod3.z.string(),
    tokenName: import_zod3.z.string(),
    tokenSymbol: import_zod3.z.string(),
    tokenDecimals: import_zod3.z.number(),
    chainId: import_zod3.z.number(),
    logo: import_zod3.z.string().optional()
  })).mutation(async ({ input, ctx }) => {
    var _a;
    if (!((_a = ctx.session) == null ? void 0 : _a.user) || !isMod(ctx.session.user)) {
      throw new Error("Unauthorized");
    }
    if (input.logo) {
      const s3Client = new import_client_s3.S3Client({});
      const binary = Buffer.from(input.logo, "base64");
      await s3Client.send(new import_client_s3.PutObjectCommand({
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
        listed: import_database3.Listed.DEFAULT_LIST,
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
        listed: import_database3.Listed.DEFAULT_LIST
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
var nextApiHandler = (0, import_next.createNextApiHandler)({
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  nextApiHandler
});
