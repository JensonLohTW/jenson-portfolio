/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/jenson-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jenson-portfolio/' : '',
  distDir: 'out',
}

export default nextConfig