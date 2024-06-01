'use client'
import WalletConnect from '@walletconnect/client'
import React, {
  createContext,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import { Address, getAddress } from 'viem'
import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal'
import { CookieKeys } from '@/Constant/web3'
import { getCookie, setCookie } from '@/Services/CookeisService'
import { WalletConnectV1ContextType, initValue } from './type'
import { useSelector } from 'react-redux'
import { useAppSelector } from '@/Redux/store'
import { SLICE } from '@/Constant/redux'

export const WalletConnectV1Context =
  createContext<WalletConnectV1ContextType>(initValue)

const WalletConnectV1 = async({ children }: { children: React.ReactNode }) => {
   const [connection, setConnection] = useState<WalletConnect | null>(null)
  const [connected, setConnected] = useState(connection?.connected || false)
  const [address, setAddress] = useState<Address | null>(null)

 
  useLayoutEffect(() => {
    const getData = async () => {
      const sessionV1: WalletConnect | null = await getCookie(
        CookieKeys.WalletConnectSessionV1
      )
      console.log('====================================');
      console.log({sessionV1});
      console.log('====================================');
   
      if (sessionV1) {
        const walletConnect = new WalletConnect({
          bridge: 'https://bridge.keyringpro.com',
          qrcodeModal: WalletConnectQRCodeModal,
          storageId: 'walletconnect-v1', 
         })
        setConnection(walletConnect)
        setConnected(true)
      }
    }
    if (!connection) {
      getData()
    }
    console.log('====================================');
    console.log({connection});
    console.log('====================================');
  }, [connection])

  useLayoutEffect(() => {
    if (connection?.session) {
      connection.on('connect', (error, payload) => {
        console.log('WC v1 connected', payload, connection?.session)
        setCookie(
          CookieKeys.WalletConnectSessionV1,
          connection?.session || null
        )
        const accounts = connection?.accounts.map((address) =>
          getAddress(address)
        )
        console.log('====================================')
        console.log({ accounts })
        console.log('====================================')
        setAddress(accounts?.[0] || null)
      })

      connection.on('disconnect', () => {
        console.log('WC v1 disconnected', connection?.session)
        setCookie(CookieKeys.WalletConnectSessionV1, null)
      })

      connection.on('session_update', (error, payload) => {
        console.log('WC v1 session_update', payload, connection?.session)
        setCookie(
          CookieKeys.WalletConnectSessionV1,
          connection?.session || null
        )
        const accounts = connection?.accounts.map((address) =>
          getAddress(address)
        )
        console.log('====================================')
        console.log({ accounts })
        console.log('====================================')
      })
    }
  }, [connected])

  const connect = useCallback(
    async (chainId = 56) => {
      try {
        let walletClient = connection
        if (!walletClient?.connected) {
          walletClient = new WalletConnect({
            bridge: 'https://bridge.keyringpro.com',
          qrcodeModal: WalletConnectQRCodeModal,
          storageId: 'walletconnect-v1', 
          })
          setConnection(walletClient)
        }
        console.log('====================================');
        console.log({walletClient,chainId});
        console.log('====================================');

        if (walletClient.connected) {
          setCookie(CookieKeys.WalletConnectSessionV1, walletClient?.session || null)
          const accounts = walletClient.accounts.map((address) =>
            getAddress(address)
          )
          setAddress(accounts?.[0] || null)
          setConnected(true)
          return walletClient
        } else {
          await walletClient.createSession({
            chainId: typeof chainId === 'object' ? 56 : chainId
          })
          return walletClient
        }

        return null
      } catch (error) {
        return null
      }
    },
    [connected, address]
  )

  const disconnect = useCallback(async () => {}, [connected, address])

  const signMessage = useCallback(
    async (message: string, address: string) => {
      return address + message
    },
    [connected, address]
  )

  const sendTransaction = useCallback(async () => {
    return ''
  }, [connected, address])

  const addChain = useCallback(async () => {
    return true
  }, [connected, address])

  const switchChain = useCallback(async () => {
    return true
  }, [connected, address])

  const openConnectedApp = useCallback(async () => {}, [connected, address])

  return (
    <WalletConnectV1Context.Provider
      value={{
        client: connection,
        address,
        connected,
        connect,
        disconnect,
        signMessage,
        sendTransaction,
        addChain,
        switchChain,
        openConnectedApp
      }}>
      {children}
    </WalletConnectV1Context.Provider>
  )
}

export default WalletConnectV1
