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

// ../constants/src/common/base-swap.ts
var FACTORY_ADDRESS = "0x05F2D5C58E137D2b258fA842c67134dE1F45fC11";
var INIT_CODE_HASH = "0x8b35138574d7d8c69d827c70b18c34b66cc557802f2a1a757b3b1e90ff763a48";

// ../constants/src/chains/base.ts
var base = {
  id: 84531,
  name: "Base Goerli Testnet",
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
    address: "0x6Dd3BE79402E197dd31A763a96C1300e4134Ad09",
    blockCreated: 6255257
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

// ../constants/src/common/linea-swap.ts
var FACTORY_ADDRESS2 = "0xdC667BCa5B37fCfE17EFAaA1026a35464F345924";
var INIT_CODE_HASH2 = "0x8b35138574d7d8c69d827c70b18c34b66cc557802f2a1a757b3b1e90ff763a48";

// ../constants/src/chains/linea.ts
var linea = {
  id: 59140,
  name: "Linea Testnet",
  features: ["swap", "farms"],
  network: "linea",
  rpcUrls: {
    public: "https://rpc.goerli.linea.build/",
    default: "https://rpc.goerli.linea.build/"
  },
  blockExplorers: {
    default: { name: "Linear Testnet Explorer", url: "https://goerli.lineascan.build" }
  },
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18
  },
  blockInterval: 2,
  multicall: {
    address: "0x96e2bc04FBa86361ecbF879575924f43d06Bf8cE",
    blockCreated: 975028
  },
  wrappedNative: {
    address: "0x2C1b868d6596a18e32E61B901E4060C872647b6C",
    decimals: 18,
    symbol: "WETH",
    name: "Wrapped ETH"
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS2,
    initCodeHash: INIT_CODE_HASH2
  }
};

// ../constants/src/chains/index.ts
var chainMap = { base, linea };
var chains = Object.values(chainMap);
var ChainId = ((ChainId2) => {
  ChainId2[ChainId2["BASE"] = base.id] = "BASE";
  ChainId2[ChainId2["LINEA"] = linea.id] = "LINEA";
  return ChainId2;
})(ChainId || {});

// chains/index.ts
var chains_default = chainMap;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
