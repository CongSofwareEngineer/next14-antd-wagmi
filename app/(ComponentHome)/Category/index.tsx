'use client'
import React from 'react'
import Media from 'react-media'

const Category = () => {

  const renderDesktop = () => {
    return <div className='w-full border border-black rounded-2xl'>
      <div className='w-full bg-green-300 flex gap-2 text-medium'>
      <AlignLeftOutlined style={{ fontSize: 20 }} />
          <span>{messages.category}</span>
      </div>
    </div>
  }

  const renderMobile = () => {
    return <></>
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

export default Category
