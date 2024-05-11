'use client'

import { ConfigProvider } from 'antd'
import React from 'react'

const AntdProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg:
              'linear-gradient(to right top, rgb(236, 72, 153),rgb(234, 179, 8))',
            defaultColor: 'white',
            defaultHoverBg:
              'linear-gradient(to right top, rgb(236, 72, 153),rgb(234, 179, 8))',
            defaultHoverColor: 'white',
            defaultHoverBorderColor: 'transparent',
            defaultActiveBg:
              'linear-gradient(to right top, rgb(236, 72, 153),rgb(234, 179, 8))',
            defaultActiveColor: 'white',
            defaultActiveBorderColor: 'transparent'
          },
          Select: {}
        }
      }}>
      {children}
    </ConfigProvider>
  )
}

export default AntdProvider
