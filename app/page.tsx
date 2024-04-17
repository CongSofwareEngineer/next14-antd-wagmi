'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import useModal from '@/Hook/useModal'

const PageScreen = () => {
  const { openModal } = useModal()
  const onClick = () => {
    openModal({
      content: <div>hello</div>,
      title: 'Open Modal'
    })
  }
  return (
    <>
      <Button onPress={onClick}>Open Modal</Button>
    </>
  )
}

export default PageScreen
