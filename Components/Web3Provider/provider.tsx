'use client'
// import { CONFIG_DEFAULT, ProjectId } from '@/Constant/web3Modal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { State, WagmiProvider } from 'wagmi'
// import { State } from 'wagmi'
// import { createWeb3Modal } from '@web3modal/wagmi/react'

const ProviderWeb3Server = ({
  children // initialState
}: {
  children: React.ReactNode
  // initialState?: State
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1
      }
    }
  })

  // if (!ProjectId) throw new Error('Project ID is not defined')

  // createWeb3Modal({
  //   wagmiConfig: CONFIG_DEFAULT,
  //   projectId: ProjectId,
  //   enableAnalytics: true, // Optional - defaults to your Cloud configuration
  //   enableOnramp: true // Optional - false as default
  // })

  return (
    // <WagmiProvider config={CONFIG_DEFAULT} initialState={initialState}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    // </WagmiProvider>
  )
}

export default ProviderWeb3Server
