import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'

export const lineaTokens = {
  weth: WETH9[ChainId.LINEA],
  slick: new ERC20Token(ChainId.LINEA, '0x6B85FE7a15a4cF6e00936fC0505781da564f69De', 18, 'SLICK', 'Slick', 'https://slickswap.org'),
  usdt: new ERC20Token(ChainId.LINEA, '0x83240E55e35147B095e8958103a4fd4B32700a3C', 18, 'USDT', 'Tether USD'),
}
