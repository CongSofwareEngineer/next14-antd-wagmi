import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/Styles/globals.scss'
import '@/Styles/override.scss'
import React from 'react'
import StyledComponentsRegistry from '@/Components/RegistryApp'
import ReduxProvider from '@/Components/ReduxProvider'
import MyModalProvider from '@/Components/MyModal'
import Web3Provider from '@/Components/Web3Provider'
// import ClientREnder from '@/Components/ClientRender'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import AntdProvider from '@/Components/AntdProvider'
import ClientRender from '@/Components/ClientRender'
import WalletConnectV1 from '@/Components/WalletConnectV1'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TC-Store',
  description: 'TC Store'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider>
          <StyledComponentsRegistry>
            <AntdRegistry>
              <AntdProvider>
                <ReduxProvider>
                  <MyModalProvider>
                    <WalletConnectV1>
                      <ClientRender>{children}</ClientRender>
                    </WalletConnectV1>
                  </MyModalProvider>
                </ReduxProvider>
              </AntdProvider>
            </AntdRegistry>
          </StyledComponentsRegistry>
        </Web3Provider>
      </body>
    </html>
  )
}
