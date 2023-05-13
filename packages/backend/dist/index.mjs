// src/utils/trpc.ts
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
function getBaseUrl() {
  var _a;
  if (typeof window !== "undefined")
    return "";
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${(_a = process.env.PORT) != null ? _a : 3e3}`;
}
var trpc = createTRPCNext({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`
        })
      ]
    };
  },
  ssr: true
});
var trpcClient = createTRPCProxyClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`
    })
  ]
});
export {
  trpc,
  trpcClient
};
