import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  KEYWORDS_TH,
  KEYWORDS_EN,
  getPageMeta,
} from '../lib/seo'

export default function SeoHead({
  path,
  title: titleOverride,
  description: descriptionOverride,
  image = DEFAULT_OG_IMAGE,
}) {
  const router = useRouter()
  const locale = router.locale || 'th'
  const meta = getPageMeta(path, locale)
  const title = titleOverride || meta.title
  const description = descriptionOverride || meta.description
  const keywords = locale === 'th' ? KEYWORDS_TH : KEYWORDS_EN

  // For Thai (default locale) the URL has no prefix; for English it's /en/...
  const localePrefix = locale === 'th' ? '' : `/${locale}`
  const canonical = `${SITE_URL}${localePrefix}${path === '/' ? '' : path}`
  const thHref = `${SITE_URL}${path === '/' ? '' : path}`
  const enHref = `${SITE_URL}/en${path === '/' ? '' : path}`
  const ogLocale = locale === 'th' ? 'th_TH' : 'en_US'
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical & alternates */}
      <link rel="canonical" href={canonical} key="canonical" />
      <link rel="alternate" hrefLang="th" href={thHref} key="alt-th" />
      <link rel="alternate" hrefLang="en" href={enHref} key="alt-en" />
      <link rel="alternate" hrefLang="x-default" href={thHref} key="alt-default" />

      {/* Geo */}
      <meta name="geo.region" content="TH-30" />
      <meta name="geo.placename" content="Nakhon Ratchasima" />
      <meta name="geo.position" content="14.980503;102.075520" />
      <meta name="ICBM" content="14.980503, 102.075520" />
    </Head>
  )
}
