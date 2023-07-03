import { FACTORY_ADDRESS, INIT_CODE_HASH } from '../common/linea-swap'
import IceChain from '../ice-chain'

export const linea: IceChain = {
  id: 59140,
  name: 'Linea Testnet',
  features: ['swap', 'farms'],
  network: 'linea',
  rpcUrls: {
    public: 'https://rpc.goerli.linea.build/',
    default: 'https://rpc.goerli.linea.build/',
  },
  blockExplorers: {
    default: { name: 'Linear Testnet Explorer', url: 'https://goerli.lineascan.build' },
  },
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  blockInterval: 2,
  multicall: {
    address: '0x96e2bc04FBa86361ecbF879575924f43d06Bf8cE',
    blockCreated: 975028, 
  },
  wrappedNative: {
    address: '0x2C1b868d6596a18e32E61B901E4060C872647b6C',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped ETH',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
}
