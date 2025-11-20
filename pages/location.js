import Head from 'next/head'
import { useTranslations } from '../lib/TranslationsContext'
import MapSection from '../components/MapSection'
import HeroBanner from '../components/HeroBanner'

export default function Location() {
  const t = useTranslations('location')

  return (
    <>
      <Head>
        <title>Location | Crystal Resort Korat</title>
        <meta
          name="description"
          content="Crystal Resort Korat is located at 1268/1 Mittraphap Rd. Naimuang, Muang, Nakorn Ratchasima 30000, just 1 minute walk from The Mall Korat."
        />
      </Head>

      <HeroBanner />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Location Description */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray mb-4 text-left">
            {t('subtitle')}
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left">
            {t('intro')}
          </p>
        </div>

        {/* Map */}
        <div className="mb-12">
          <MapSection />
        </div>

        {/* Getting Here & Nearest Transport */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-gray mb-8">
            {t('gettingHereTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* From Suvarnabhumi Airport */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-[#A47C53]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-2.873-7.253A8.959 8.959 0 0012 12c0 .778.099 1.533.284 2.253M12 3v18m0 0a8.997 8.997 0 01-7.843-4.582M12 21a8.997 8.997 0 008.843-4.582M12 12h.008v.008H12V12z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{t('fromSuvarnabhumiTitle')}</h3>
                <p className="text-gray-600 text-base">{t('fromSuvarnabhumi')}</p>
              </div>
            </div>

            {/* From Don Muang Airport */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-[#A47C53]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-2.873-7.253A8.959 8.959 0 0012 12c0 .778.099 1.533.284 2.253M12 3v18m0 0a8.997 8.997 0 01-7.843-4.582M12 21a8.997 8.997 0 008.843-4.582M12 12h.008v.008H12V12z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{t('fromDonmuangTitle')}</h3>
                <p className="text-gray-600 text-base">{t('fromDonmuang')}</p>
              </div>
            </div>

            {/* Nearest Transport */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-[#A47C53]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{t('nearestTransport')}</h3>
                <p className="text-gray-600 text-base">{t('mallKorat')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

