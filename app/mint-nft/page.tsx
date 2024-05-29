'use client'
import React from 'react'
import Media from 'react-media'

const MintNFT = () => {
  const renderMobile = () => {
    return <div>Mobile</div>
  }
  const renderDesktop = () => {
    return <div>Desktop</div>
  }
  return (
    <Media query="(min-width: 768px)">
      {(match) => {
        if (match) {
          return renderDesktop()
        }
        return renderMobile()
      }}
    </Media>
  )
}

export default MintNFT
