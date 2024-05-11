'use client'
import React, { useEffect } from 'react'
// import { Button, Select, SelectItem } from '@nextui-org/react'
import useModal from '@/Hook/useModal'
import MySelect from '@/Components/MySelect'
import SecondButton from '@/Components/SecondButton'
import PrimaryButton from '@/Components/PrimaryButton'
import { useConnect, useGasPrice } from 'wagmi'
// import { useWeb3Modal } from '@web3modal/wagmi/react'
import { injected, walletConnect } from 'wagmi/connectors'
import { ProjectId } from '@/Constant/web3Modal'

const animals = [
  {
    label: 'Cat',
    value: 'cat',
    description: 'The second most popular pet in the world'
  },
  { label: 'Dog', value: 'dog', description: 'The most popular pet in the world' },
  { label: 'Elephant', value: 'elephant', description: 'The largest land animal' },
  { label: 'Lion', value: 'lion', description: 'The king of the jungle' },
  { label: 'Tiger', value: 'tiger', description: 'The largest cat species' },
  { label: 'Giraffe', value: 'giraffe', description: 'The tallest land animal' },
  {
    label: 'Dolphin',
    value: 'dolphin',
    description: 'A widely distributed and diverse group of aquatic mammals'
  },
  {
    label: 'Penguin',
    value: 'penguin',
    description: 'A group of aquatic flightless birds'
  },
  {
    label: 'Zebra',
    value: 'zebra',
    description: 'A several species of African equids'
  },
  {
    label: 'Shark',
    value: 'shark',
    description:
      'A group of elasmobranch fish characterized by a cartilaginous skeleton'
  },
  {
    label: 'Whale',
    value: 'whale',
    description: 'Diverse group of fully aquatic placental marine mammals'
  },
  {
    label: 'Otter',
    value: 'otter',
    description: 'A carnivorous mammal in the subfamily Lutrinae'
  },
  {
    label: 'Crocodile',
    value: 'crocodile',
    description: 'A large semiaquatic reptile'
  }
]

const PageScreen = () => {
  const { openModal } = useModal()
  const { connect, error, isPending, status, isSuccess } = useConnect()
  const { data } = useGasPrice({ chainId: 56 })
  // const { open, close } = useWeb3Modal()
  console.log('====================================')

  console.log({ error, isPending, status, isSuccess })
  console.log('====================================')
  if (data) {
    const bigIntValue = BigInt(data)
    console.log({ bigIntValue: bigIntValue.toString() })
  }
  useEffect(() => {
    console.log({ data })
    if (data) {
      console.log({ bigIntValue: data.toString() })
    }
  }, [data])

  const handleConnectMetamask = () => {
    connect({
      connector: injected(),
      chainId: 56
    })
    // connectAsync({
    //   connector: injected(),
    //   chainId: 56
    // })
  }

  const handleWalletConnect = () => {
    console.log('handleConnect')

    connect({
      connector: walletConnect({
        projectId: ProjectId,
        metadata: {
          name: 'DienCong',
          description: 'diencong',
          url: 'tc-sctore.com',
          icons: ['']
        }
      }),
      chainId: 56
    })
    // console.log('====================================')
    // console.log('handleConnect')
    // console.log('====================================')
    // open()
  }

  const onClick = () => {
    openModal({
      content: <div>hello</div>,
      title: 'Open Modal hello'
    })
  }

  const onChangeSelect = (value: any) => {
    console.log('====================================')
    console.log({ value })
    console.log('====================================')
  }

  return (
    <>
      <PrimaryButton onClick={onClick} size="middle">
        Open Modal
      </PrimaryButton>
      <SecondButton onClick={onClick} size="large">
        Open Modal
      </SecondButton>

      <SecondButton onClick={handleWalletConnect} size="large">
        wallet Connect
      </SecondButton>

      <SecondButton onClick={handleConnectMetamask} size="large">
        metamask Connect
      </SecondButton>
      <MySelect
        defaultValue={animals[0]}
        onChange={(value: string) => onChangeSelect(value)}
        option={animals}
        className="w-[300px]"
      />
    </>
  )
}

export default PageScreen
