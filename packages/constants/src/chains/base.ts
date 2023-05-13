import { FACTORY_ADDRESS, INIT_CODE_HASH } from '../common/swap'
import IceChain from '../ice-chain'

export const base: IceChain = {
  id: 84531,
  name: 'Base Goerli Mainnet',
  features: ['swap', 'farms'],
  network: 'base',
  rpcUrls: {
    public: 'https://goerli.base.org/',
    default: 'https://goerli.base.org/',
  },
  blockExplorers: {
    default: { name: 'Base Goerli Explorer', url: 'https://goerli.basescan.org' },
  },
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  blockInterval: 2,
  multicall: {
    address: '0xB90adcF0B0303017B824f3363796a22aEfB3e279',
    blockCreated: 4354065, 
  },
  wrappedNative: {
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped ETH',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
}
