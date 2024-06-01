import { WalletConnectV1Context } from '@/Components/WalletConnectV1'
import React, { useContext } from 'react'

const useWalletConnectV1 = () => {
  const walletConnectV1=useContext(WalletConnectV1Context)
  
  return {
    ...walletConnectV1
  }
}

export default useWalletConnectV1