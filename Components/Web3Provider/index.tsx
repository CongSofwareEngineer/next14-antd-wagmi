import ProviderWeb3Server from './provider'
import { headers } from 'next/headers'
import { CONFIG_DEFAULT } from '@/Constant/web3Modal'
import { cookieToInitialState } from 'wagmi'

const Web3Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const initialState = cookieToInitialState(CONFIG_DEFAULT, headers().get('cookie'))

  return (
    <ProviderWeb3Server initialState={initialState}>{children}</ProviderWeb3Server>
    // children
  )
}

export default Web3Provider
