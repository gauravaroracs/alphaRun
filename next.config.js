/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '/',
  trailingSlash: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Disable server-side features
  experimental: {
    appDir: false,
  },
  // Ensure static export works
  distDir: 'out',
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig