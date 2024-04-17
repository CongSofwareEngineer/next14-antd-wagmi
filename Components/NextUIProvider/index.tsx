'use client'
import React from 'react'
import { NextUIProvider as NextUIProviderClient } from '@nextui-org/react'

const NextUIProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProviderClient>{children}</NextUIProviderClient>
}

export default NextUIProvider
