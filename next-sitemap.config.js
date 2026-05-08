/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.the-crystalresidence.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  alternateRefs: [
    {
      href: 'https://www.the-crystalresidence.com',
      hreflang: 'th',
    },
    {
      href: 'https://www.the-crystalresidence.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://www.the-crystalresidence.com',
      hreflang: 'x-default',
    },
  ],
  exclude: ['/sitemap.xml', '/_error', '/api/*'],
}
