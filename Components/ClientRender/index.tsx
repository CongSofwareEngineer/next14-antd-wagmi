'use client'

import dynamic from 'next/dynamic'
const FirstLoading = dynamic(() => import('../FirstLoading'))
const Header = dynamic(() => import('../Header'), { ssr: true })

// import React, { useLayoutEffect, useState } from 'react'

const ClientREnder = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  // const [isClient, setIsClient] = useState(false)

  // useLayoutEffect(() => {
  //   setIsClient(true)
  // }, [])

  // return isClient && children
  return (
    <>
      <Header />
      <section className="min-h-[calc(100vh-56px)] md:px-12 px-5 w-full ">
        {children}
      </section>
      <FirstLoading />
    </>
  )
}

export default ClientREnder
