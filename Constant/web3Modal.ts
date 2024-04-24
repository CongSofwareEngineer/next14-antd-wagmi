import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import {
  mainnet,
  sepolia,
  polygon,
  bsc,
  arbitrum,
  optimism,
  bscTestnet
} from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const ProjectId: string = process.env.NEXT_PUBLIC_PROJECT_ID || ''

export const Metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const CHAIN_SUPPORT = [
  mainnet,
  sepolia,
  polygon,
  bsc,
  arbitrum,
  optimism,
  bscTestnet
] as const

export const CONFIG_DEFAULT = defaultWagmiConfig({
  chains: CHAIN_SUPPORT,
  projectId: ProjectId,
  metadata: Metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})
