/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig

