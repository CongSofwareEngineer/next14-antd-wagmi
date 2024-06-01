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
  name: 'tc-store',
  description: 'tc-store',
  icons: [
    'https://tcstore.vercel.app/_next/image?url=%2Flogo_tc_store.png&w=1920&q=75'
  ],
  url: 'https://tcstore.vercel.app/'
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
  }),
  enableEmail: true,
  enableWalletConnect: true,
  enableCoinbase: false
})
