import { useBCakeProxyContract } from 'hooks/useContract'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCallback } from 'react'
import { useAppDispatch } from 'state'
import { useGasPrice } from 'state/user/hooks'
import { harvestFarm, stakeFarm, unstakeFarm } from 'utils/calls/farms'
import { fetchFarmUserDataAsync } from 'state/farms'
import { useBCakeProxyContractAddress } from 'views/Farms/hooks/useBCakeProxyContractAddress'
import { useApproveBoostProxyFarm } from '../../../hooks/useApproveFarm'
import useProxyICEBalance from './useProxyICEBalance'

export default function useProxyStakedActions(pid, lpContract) {
  const { account, chainId } = useActiveWeb3React()
  const { proxyAddress } = useBCakeProxyContractAddress(account, chainId)
  const bCakeProxy = useBCakeProxyContract(proxyAddress)
  const dispatch = useAppDispatch()
  const gasPrice = useGasPrice()
  const { proxyCakeBalance, refreshProxyCakeBalance } = useProxyICEBalance()

  const onDone = useCallback(() => {
    refreshProxyCakeBalance()
    dispatch(fetchFarmUserDataAsync({ account, pids: [pid], chainId, proxyAddress }))
  }, [account, proxyAddress, chainId, pid, dispatch, refreshProxyCakeBalance])

  const { onApprove } = useApproveBoostProxyFarm(lpContract, proxyAddress)

  const onStake = useCallback((value) => stakeFarm(bCakeProxy, pid, value, gasPrice), [bCakeProxy, pid, gasPrice])

  const onUnstake = useCallback((value) => unstakeFarm(bCakeProxy, pid, value, gasPrice), [bCakeProxy, pid, gasPrice])

  const onReward = useCallback(() => harvestFarm(bCakeProxy, pid, gasPrice), [bCakeProxy, pid, gasPrice])

  return {
    onStake,
    onUnstake,
    onReward,
    onApprove,
    onDone,
    proxyCakeBalance,
  }
}
