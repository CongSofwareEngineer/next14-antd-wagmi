'use client'
import React from 'react'
import { Button, Select, SelectItem } from '@nextui-org/react'
import useModal from '@/Hook/useModal'
import { useConnect } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { injected, walletConnect } from 'wagmi/connectors'
import { ProjectId } from '@/Constant/web3Modal'

export const animals = [
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
  const { connect, connectors } = useConnect()
  const { open, close } = useWeb3Modal()

  const handleConnect = () => {
    console.log('handleConnect')

    connect({
      connector: walletConnect({
        projectId: ProjectId
        // metadata:{

        // }
      })
      // chainId: 137
    })
    // console.log('====================================')
    // console.log('handleConnect')
    // console.log('====================================')
    // open()
  }

  const onClick = () => {
    openModal({
      content: <div>hello</div>,
      title: 'Open Modal'
    })
  }
  return (
    <>
      <Button onPress={onClick}>Open Modal</Button>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Select defaultSelectedKeys={[animals[0].value]} className="max-w-xs">
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Button onClick={handleConnect}>connect</Button>
    </>
  )
}

export default PageScreen
