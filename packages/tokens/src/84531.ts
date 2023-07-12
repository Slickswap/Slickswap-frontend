import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'

export const baseTokens = {
  weth: WETH9[ChainId.BASE],
  slick: new ERC20Token(ChainId.BASE, '0xaBcd5b2F296b6E5881779170C60CA2620C565524', 18, 'SLICK', 'Slick', 'https://slickswap.org'),
  usdt: new ERC20Token(ChainId.BASE, '0x3e8B7c72f4a9f4C8ec375c11F44FB84242c3893F', 18, 'USDT', 'Tether USD'),
}
