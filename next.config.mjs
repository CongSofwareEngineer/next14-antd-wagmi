/** @type {import('next').NextConfig} */
// const path = require('path')
// import envJson from './env.json'

// const env = require('./env.json')
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: {
    // optimisticClientCache: true,
    // workerThreads: true,
    // optimizeCss: true,
    // gzipSize: true,
    optimizePackageImports: [
      '@nextui-org/react',
      '@tanstack/react-query',
      'framer-motion',
      'styled-components',
      'tailwind-merge',
      '@emotion/reac'
    ]
    // optimizeServerReact: true,
    // serverMinification: true
  },
  env: {
    NEXT_PUBLIC_PROJECT_ID: '5a998e5a831f4de43423a0ee6314508b'
  },
  // sassOptions: {
  //   fiber: false,
  //   includePaths: [path.join(__dirname, 'styles')]
  // },
  // optimizeFonts: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      minify: true
    }
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
}

export default nextConfig
