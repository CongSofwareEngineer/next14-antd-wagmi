'use client'
import React from 'react'
// import { Button, Select, SelectItem } from '@nextui-org/react'
import MySelect from '@/Components/MySelect'
import useWalletConnectV1 from '@/Hook/useWalletConnectV1'
import PrimaryButton from '@/Components/PrimaryButton'
import { useAppSelector } from '@/Redux/store'

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
  const { connect,disconnect } = useWalletConnectV1()
  const { ConnectedChain } = useAppSelector((state) => state.app)
  const onChangeSelect = (value: any) => {
    console.log('====================================')
    console.log({ value })
    console.log('====================================')
  }

  return (
    <div className="w-full h-f flex flex-col gap-10 justify-center items-center">
      <PrimaryButton onClick={() => connect()}>connect</PrimaryButton>
      <PrimaryButton onClick={() => disconnect()}>disconnect</PrimaryButton>
      <MySelect
        defaultValue={animals[0]}
        onChange={(value: string) => onChangeSelect(ConnectedChain)}
        option={animals}
        className="w-[300px]"
      />
    </div>
  )
}

export default PageScreen
