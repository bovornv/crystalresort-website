const Sitemap = () => {}

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://crystalresortkorat.com'
  const pages = ['', '/rooms', '/cafe', '/gallery', '/location']
  const locales = ['th', 'en']

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) =>
    locales
      .map(
        (locale) => `  <url>
    <loc>${baseUrl}${locale === 'th' ? '' : `/${locale}`}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
      )
      .join('\n')
  )
  .join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap

