import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // 1. REMOVE 'unoptimized: true'
    // 2. Set the allowed formats (AVIF is ~20% smaller than WebP)
    formats: ['image/avif', 'image/webp'],
    // 3. Set device sizes to help Next.js generate responsive variants
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // 4. Optional: Increase the TTL for the cache (default is 60 seconds)
    minimumCacheTTL: 60,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)