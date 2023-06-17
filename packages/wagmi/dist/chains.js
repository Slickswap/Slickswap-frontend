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

// chains/index.ts
var chains_exports = {};
__export(chains_exports, {
  default: () => chains_default
});
module.exports = __toCommonJS(chains_exports);

// ../constants/src/common/swap.ts
var FACTORY_ADDRESS = "0x1932C94E65eE132d251d267600542074365AE983";
var INIT_CODE_HASH = "0x8b35138574d7d8c69d827c70b18c34b66cc557802f2a1a757b3b1e90ff763a48";

// ../constants/src/chains/base.ts
var base = {
  id: 84531,
  name: "Base Goerli Mainnet",
  features: ["swap", "farms"],
  network: "base",
  rpcUrls: {
    public: "https://goerli.base.org/",
    default: "https://goerli.base.org/"
  },
  blockExplorers: {
    default: { name: "Base Goerli Explorer", url: "https://goerli.basescan.org" }
  },
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18
  },
  blockInterval: 2,
  multicall: {
    address: "0xB90adcF0B0303017B824f3363796a22aEfB3e279",
    blockCreated: 4354065
  },
  wrappedNative: {
    address: "0x4200000000000000000000000000000000000006",
    decimals: 18,
    symbol: "WETH",
    name: "Wrapped ETH"
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH
  }
};

// ../constants/src/chains/index.ts
var chainMap = { base };
var chains = Object.values(chainMap);
var ChainId = ((ChainId2) => {
  ChainId2[ChainId2["BASE"] = base.id] = "BASE";
  return ChainId2;
})(ChainId || {});

// chains/index.ts
var chains_default = chainMap;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
