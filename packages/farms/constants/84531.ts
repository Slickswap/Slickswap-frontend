import { SerializedFarmConfig } from '@pancakeswap/farms'
import { baseTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
    {
        pid: 0,
        lpSymbol: 'SLICK-WETH LP',
        lpAddress: '',
        token: baseTokens.weth,
        quoteToken: baseTokens.slick,
    },
    {
        pid: 1,
        lpSymbol: 'SLICK-USDT LP',
        lpAddress: '',
        token: baseTokens.slick,
        quoteToken: baseTokens.usdt,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
