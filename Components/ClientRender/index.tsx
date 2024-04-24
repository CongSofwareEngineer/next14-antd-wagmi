'use client'
import React, { useLayoutEffect, useState } from 'react'

const ClientREnder = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isClient, setIsClient] = useState(false)

  useLayoutEffect(() => {
    setIsClient(true)
  }, [])

  // return isClient && children
  return children
}

export default ClientREnder
