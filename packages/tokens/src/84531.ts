import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'

export const baseTokens = {
  weth: WETH9[ChainId.BASE],
  slick: new ERC20Token(ChainId.BASE, '0x4D7f3DC684f4E3Dd555D52A01C1FcFEfe626aA13', 18, 'SLICK', 'Slick', 'https://slickswap.org'),
  usdt: new ERC20Token(ChainId.BASE, '0x3e8B7c72f4a9f4C8ec375c11F44FB84242c3893F', 18, 'USDT', 'Tether USD'),
}
