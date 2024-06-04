'use client'
import WalletConnect from '@walletconnect/client'
import React, {
  createContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState
} from 'react'
import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal'
import { CookieKeys } from '@/Constant/web3'
import { getCookie, setCookie } from '@/Services/CookeisService'
import { WalletConnectV1ContextType, initValue } from './type'
import { Metadata } from '@/Constant/web3Modal'

export const WalletConnectV1Context =
  createContext<WalletConnectV1ContextType>(initValue)

const WalletConnectV1 = ({ children }: { children: React.ReactNode }) => {
  const [connection, setConnection] = useState<WalletConnect | null>(null)
  const [connected, setConnected] = useState(connection?.connected || false)
  const [address, setAddress] = useState<string | null>(null)

  useLayoutEffect(() => {
    const getData = async () => {
      const sessionV1: WalletConnect | null = await getCookie(
        CookieKeys.WalletConnectSessionV1
      )
      if (sessionV1) {
        const walletConnect = new WalletConnect({
          bridge: 'https://bridge.keyringpro.com',
          storageId: 'walletconnect-v1',
          session: sessionV1
        })
        console.log('====================================')
        console.log({ walletConnect })
        console.log('====================================')
        setConnection(walletConnect)
        setConnected(true)
        setAddress(sessionV1.accounts[0])
      } else {
      }
    }
    if (!connection) {
      getData()
    }
  }, [connection])

  useLayoutEffect(() => {
    console.log('====================================')
    console.log({ 'session:connection?.session': connection?.session })
    console.log('====================================')
    console.log('====================================')
    console.log({ connection, connected, address })
    console.log('====================================')

    if (connection?.session) {
      console.log('====================================')
      console.log('addd event')
      console.log('====================================')
      connection.on('connect', (error, payload) => {
        console.log('WC v1 connected', payload, connection?.session)
        setCookie(CookieKeys.WalletConnectSessionV1, connection?.session || null)
        setAddress(connection?.accounts[0])
      })

      connection.on('disconnect', () => {
        console.log('WC v1 disconnected', connection?.session)
        setCookie(CookieKeys.WalletConnectSessionV1, null)
        setAddress(null)
        setConnection(null)
        setConnected(false)
      })

      connection.on('session_update', (error, payload) => {
        console.log('WC v1 session_update', payload, connection?.session)
        setCookie(CookieKeys.WalletConnectSessionV1, connection?.session || null)
        setAddress(connection?.accounts[0])
      })
    }

    return () => {
      if (connection) {
        connection.off('connect')
        connection.off('disconnect')
        connection.off('session_update')
      }
    }
  }, [connection])

  const connect = useCallback(
    async (chainId = 56) => {
      try {
        let walletClient = connection
        if (!walletClient?.connected) {
          walletClient = new WalletConnect({
            bridge: 'https://bridge.keyringpro.com',
            qrcodeModal: WalletConnectQRCodeModal,
            storageId: 'walletconnect-v1',
            clientMeta: Metadata
          })
        }
        console.log('====================================')
        console.log({ walletClient, chainId })
        console.log('====================================')

        if (walletClient.connected) {
          console.log('====================================')
          console.log('walletClient.connected')
          console.log('====================================')
          setCookie(CookieKeys.WalletConnectSessionV1, walletClient?.session || null)
          setAddress(walletClient.accounts[0])
          setConnected(true)
          setConnection(walletClient)
          return walletClient
        } else {
          console.log('createSession')
          await walletClient.createSession({
            chainId: typeof chainId === 'object' ? 56 : chainId
          })
          setConnection(walletClient)
          return walletClient
        }

        return null
      } catch (error) {
        return null
      }
    },
    [connected, address]
  )

  const disconnect = useCallback(async () => {
    if (connection) {
      await connection.killSession()
    }
    setConnection(null)
    setAddress(null)
    setConnected(false)
  }, [connected, address, connection])

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
