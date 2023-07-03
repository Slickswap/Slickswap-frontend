import { SerializedFarmConfig } from '@pancakeswap/farms'
import { lineaTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
    {
        pid: 0,
        lpSymbol: 'SLICK-WETH LP',
        lpAddress: '',
        token: lineaTokens.weth,
        quoteToken: lineaTokens.slick,
    },
    {
        pid: 1,
        lpSymbol: 'SLICK-USDT LP',
        lpAddress: '',
        token: lineaTokens.slick,
        quoteToken: lineaTokens.usdt,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
