import WalletConnect from "@walletconnect/client"
import { Address } from "viem"

export type TxParams = {
  from: Address
  // eslint-disable-next-line prettier/prettier
  data?: string
  gasLimit?: string
  gasPrice?: string
  nonce?: string
  to?: Address
  value?: string
}

export type WalletConnectV1ContextType = {
  client: WalletConnect | null
  address: Address | null
  connected: boolean
  connect: ( chainId?: any) => Promise<WalletConnect | null>
  disconnect: () => Promise<void>
  signMessage: (message: string, address: string) => Promise<string | null>
  sendTransaction: (tx: TxParams) => Promise<string | null>
  addChain: (chainId: number) => Promise<boolean>
  switchChain: (chainId: number) => Promise<boolean>
  openConnectedApp: () => void
}

export const initValue = {
  client: null,
  address: null,
  addresses: [],
  chainId: null,
  connected: false,
  async connect(chainId?: number) {
    return null
  },
  async disconnect() {},
  async switchChain(chainId: number) {
    return false
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
   async signMessage(message: string) {
    return null
  },
  async sendTransaction(tx: any) {
    return null
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async addChain(chainId: number) {
    return false
  },
  openConnectedApp() {}
}
