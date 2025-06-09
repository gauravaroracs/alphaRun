/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    basePath: '',
    assetPrefix: '/',
    trailingSlash: true,
    poweredByHeader: false,
}

module.exports = nextConfig