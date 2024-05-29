import { Affix } from 'antd'
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useChains } from 'wagmi'

const Header = () => {
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const chains = useChains()
  console.log('====================================')
  console.log({ chains })
  console.log('====================================')

  const renderDesktop = () => {
    return (
      <Affix className="w-full desktop">
        <div className="border-b-4 border-indigo-500 h-14 w-full flex m-auto justify-center items-center bg-white">
          <div className="px-12 w-full max-w-[1350px] flex justify-between items-center">
            <div>Logo</div>
            <div className="fex gap-2 items-center">
              {isConnected ? (
                <div className="max-w-[100px] overflow-hidden text-ellipsis">
                  {address}
                </div>
              ) : (
                <PrimaryButton onClick={() => open()} className="w-[100px] h-full">
                  Login
                </PrimaryButton>
              )}
            </div>
          </div>
        </div>
      </Affix>
    )
  }
  return renderDesktop()
}

export default Header
