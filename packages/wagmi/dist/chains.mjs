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
export {
  chains_default as default
};
