import { FACTORY_ADDRESS, INIT_CODE_HASH } from '../common/base-swap'
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
    address: '0x6Dd3BE79402E197dd31A763a96C1300e4134Ad09',
    blockCreated: 6255257, 
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
