/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
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
    experimental: {
      appDir: false,
    },
    poweredByHeader: false,
  }