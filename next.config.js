/** @type {import('next').NextConfig} */
const platform = process.env.NEXT_PUBLIC_PLATFORM || 'vercel'
const isStatic = platform === 'static'

const nextConfig = {
  // Static export for GitHub Pages
  output: isStatic ? 'export' : undefined,
  basePath: isStatic ? '/matransformlab' : undefined,
  assetPrefix: isStatic ? '/matransformlab/' : undefined,
  
  // Enable static features only
  staticPageGenerationTimeout: 120,
  trailingSlash: isStatic,
  
  // API routes disabled for static builds
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: isStatic ? ['prisma', 'stripe'] : [],
  },
  
  // Disable dynamic routes for static
  async rewrites() {
    if (isStatic) return []
    return [
      {
        source: '/api/webhooks/:path*',
        destination: '/api/webhooks/:path*',
      },
    ]
  },
  
  // Image optimization settings
  images: {
    unoptimized: isStatic ? true : false,
    formats: isStatic ? [] : ['image/webp', 'image/avif'],
    deviceSizes: isStatic ? [640, 1080] : [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: isStatic ? [16, 64, 256] : [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // API routes config
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
