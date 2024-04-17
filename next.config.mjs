/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // optimisticClientCache: true,
    // workerThreads: true,
    // optimizeCss: true,
    // gzipSize: true,
    // optimizePackageImports: [
    //   '@nextui-org/react',
    //   '@tanstack/react-query',
    //   'framer-motion',
    //   'styled-components',
    //   'tailwind-merge',
    //   '@emotion/reac'
    // ],
    // optimizeServerReact: true,
    // serverMinification: true
  },
  optimizeFonts: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      minify: true
    }
  }
}

export default nextConfig
