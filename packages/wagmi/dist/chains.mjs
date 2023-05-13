// ../constants/src/common/swap.ts
var FACTORY_ADDRESS = "0x1932C94E65eE132d251d267600542074365AE983";
var INIT_CODE_HASH = "0x8b35138574d7d8c69d827c70b18c34b66cc557802f2a1a757b3b1e90ff763a48";

// ../constants/src/chains/bitgert.ts
var bitgert = {
  id: 32520,
  name: "Bitgert Mainnet",
  features: ["swap", "bridge", "info", "farms", "staking", "locks"],
  network: "bitgert",
  rpcUrls: {
    public: "https://rpc.icecreamswap.com",
    default: "https://rpc.icecreamswap.com"
  },
  blockExplorers: {
    default: { name: "Brisescan", url: "https://brisescan.com" }
  },
  nativeCurrency: {
    name: "Brise",
    symbol: "Brise",
    decimals: 18
  },
  blockInterval: 15,
  multicall: {
    address: "0x2490b172F7de4f518713fB03E6D3f57B558c9964",
    blockCreated: 1541584
  },
  locks: {
    factoryAddress: "0x9Cf1e91106CA675040a4eC9647f875785bCcAB71"
  },
  wrappedNative: {
    address: "0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710",
    decimals: 18,
    symbol: "WBRISE",
    name: "Wrapped Brise"
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH
  }
};

// ../constants/src/chains/bsc.ts
var bscExplorer = { name: "BscScan", url: "https://bscscan.com" };
var bsc = {
  id: 56,
  name: "BNB Smart Chain",
  features: ["bridge"],
  network: "binance",
  rpcUrls: {
    public: "https://bscrpc.com",
    default: "https://bscrpc.com"
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer
  },
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18
  },
  blockInterval: 3,
  multicall: {
    address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    blockCreated: 15921452
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH
  },
  wrappedNative: {
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    decimals: 18,
    symbol: "WBNB",
    name: "Wrapped BNB"
  }
};

// ../constants/src/chains/core.ts
var core = {
  id: 1116,
  name: "Core Blockchain",
  features: ["swap", "bridge", "farms", "info", "locks", "staking"],
  network: "core",
  rpcUrls: {
    public: "https://rpc.coredao.org/",
    default: "https://rpc.coredao.org/"
  },
  blockExplorers: {
    default: { name: "CORE Explorer", url: "https://scan.coredao.org" }
  },
  nativeCurrency: {
    name: "CORE",
    symbol: "CORE",
    decimals: 18
  },
  multicall: {
    address: "0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62",
    blockCreated: 852772
  },
  locks: {
    factoryAddress: "0xFDfD00471d8bebA97B40f5D1599b7A84C16dd7d2",
    factoryAddress2: "0xA48E76d95619f4c9838Df19FDeE690a06581b5dD"
  },
  tokenDeployer: {
    address: "0x3d14cB33D5A4ce59625C32291719691953061903"
  },
  blockInterval: 3,
  wrappedNative: {
    address: "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    decimals: 18,
    symbol: "WCORE",
    name: "Wrapped CORE"
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH
  },
  campaignFactory: "0x79218D6d562a435ec258f2f4D8D17f1DEbbb114a",
  kyc: {
    stableCoin: "0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44",
    fee: 3,
    feeWallet: "0x2Bfd1fc5e25a8F55C2E849492ad7966EA8A0dd9E",
    tokenAddress: "0x913E332d552b98355587BBa82b1256BCAdbCeD48"
  }
};

// ../constants/src/chains/dogechain.ts
var dogechain = {
  id: 2e3,
  name: "Dogechain Mainnet",
  features: ["swap", "bridge"],
  network: "dogechain",
  rpcUrls: {
    public: "https://rpc.dogechain.dog",
    default: "https://rpc.dogechain.dog"
  },
  blockExplorers: {
    default: { name: "Dogechain Explorer", url: "https://explorer.dogechain.dog" }
  },
  nativeCurrency: {
    name: "Dogecoin",
    symbol: "DOGE",
    decimals: 18
  },
  blockInterval: 2,
  multicall: {
    address: "0x3d2e33eb61677869d87ac92d3c8891ec5c57fa5b",
    blockCreated: 4308714
  },
  wrappedNative: {
    address: "0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101",
    decimals: 18,
    symbol: "WDOGE",
    name: "Wrapped Doge"
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH
  }
};

// ../constants/src/chains/dokenchain.ts
var dokenchain = {
  id: 61916,
  name: "DoKEN Super Chain Mainnet",
  features: ["swap"],
  network: "doken",
  rpcUrls: {
    public: "https://nyrpc.doken.dev",
    default: "https://nyrpc.doken.dev"
  },
  blockExplorers: {
    default: { name: "Doken Explorer", url: "https://explorer.doken.dev" }
  },
  nativeCurrency: {
    name: "Doken",
    symbol: "DKN",
    decimals: 18
  },
  blockInterval: 10,
  multicall: {
    address: "0xb999ea90607a826a3e6e6646b404c3c7d11fa39d",
    blockCreated: 451563
  },
  wrappedNative: {
    address: "0x27b45bCC26e01Ed50B4080A405D1c492FEe89d63",
    decimals: 18,
    symbol: "WDKN",
    name: "Wrapped DoKEN"
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH
  }
};

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

// ../constants/src/chains/fuse.ts
var fuse = {
  id: 122,
  name: "Fuse Mainnet",
  features: ["swap", "bridge"],
  network: "fuse",
  rpcUrls: {
    public: "https://rpc.fuse.io",
    default: "https://rpc.fuse.io"
  },
  blockExplorers: {
    default: { name: "Fuse Explorer", url: "https://explorer.fuse.io" }
  },
  nativeCurrency: {
    name: "Fuse",
    symbol: "FUSE",
    decimals: 18
  },
  blockInterval: 5,
  multicall: {
    address: "0x43891084581fD07Ee1189f3a2f04e51c26a95B77",
    blockCreated: 20060779
  },
  wrappedNative: {
    address: "0x0BE9e53fd7EDaC9F859882AfdDa116645287C629",
    decimals: 18,
    symbol: "WFUSE",
    name: "Wrapped Fuse"
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH
  }
};

// ../constants/src/chains/xdc.ts
var xdc = {
  id: 50,
  name: "XinFin XDC Network",
  features: ["swap", "bridge", "farms", "staking", "locks"],
  network: "xdc",
  rpcUrls: {
    public: "https://erpc.xinfin.network",
    default: "https://erpc.xinfin.network"
  },
  blockExplorers: {
    default: { name: "XDC Explorer", url: "https://xdcscan.io" }
  },
  nativeCurrency: {
    name: "XDC",
    symbol: "XDC",
    decimals: 18
  },
  blockInterval: 2,
  multicall: {
    address: "0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62",
    blockCreated: 53792616
  },
  locks: {
    factoryAddress: "0xE4d6908351B613143AF81aaC6e34Eaa4b72acF5B"
  },
  wrappedNative: {
    address: "0x951857744785E80e2De051c32EE7b25f9c458C42",
    decimals: 18,
    symbol: "WXDC",
    name: "Wrapped XDC"
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH
  }
};

// ../constants/src/chains/index.ts
var chainMap = { bitgert, bsc, core, dogechain, dokenchain, fuse, xdc, base };
var chains = Object.values(chainMap);
var ChainId = ((ChainId2) => {
  ChainId2[ChainId2["BITGERT"] = bitgert.id] = "BITGERT";
  ChainId2[ChainId2["BSC"] = bsc.id] = "BSC";
  ChainId2[ChainId2["CORE"] = core.id] = "CORE";
  ChainId2[ChainId2["DOGE"] = dogechain.id] = "DOGE";
  ChainId2[ChainId2["DOKEN"] = dokenchain.id] = "DOKEN";
  ChainId2[ChainId2["FUSE"] = fuse.id] = "FUSE";
  ChainId2[ChainId2["XDC"] = xdc.id] = "XDC";
  ChainId2[ChainId2["BASE"] = base.id] = "BASE";
  return ChainId2;
})(ChainId || {});

// chains/index.ts
var chains_default = chainMap;
export {
  chains_default as default
};
