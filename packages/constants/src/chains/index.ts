import { bitgert } from './bitgert'
import { bsc } from './bsc'
import { core } from './core'
import { dogechain } from './dogechain'
import { dokenchain } from './dokenchain'
import { base } from './base'
import { fuse } from './fuse'
import { xdc } from './xdc'

export const chainMap = { base }
export const chains = Object.values(chainMap)

export const getChain = (chainId: number) => {
  return chains.find((chain) => chain.id === chainId)
}

export enum ChainId {
  // BITGERT = bitgert.id,
  // BSC = bsc.id,
  // CORE = core.id,
  // DOGE = dogechain.id,
  // DOKEN = dokenchain.id,
  // FUSE = fuse.id,
  // XDC = xdc.id,
  BASE = base.id,
}
