import Image from 'next/image'
import { useTranslations } from '../lib/TranslationsContext'
import SeoHead from '../components/SeoHead'

export default function Cafe() {
  const t = useTranslations('cafe')

  // Parse social media text and create clickable links
  const socialMediaText = t('socialMedia')
  const parseSocialMedia = (text) => {
    const fbMatch = text.match(/FB\s*:\s*([^,]+)/i)
    const igMatch = text.match(/IG\s*:\s*([^,]+)/i)
    const tiktokMatch = text.match(/Tiktok\s*:\s*([^,]+)/i)
    
    const fbHandle = fbMatch ? fbMatch[1].trim() : null
    const igHandle = igMatch ? igMatch[1].trim() : null
    const tiktokHandle = tiktokMatch ? tiktokMatch[1].trim() : null

    return { fbHandle, igHandle, tiktokHandle }
  }

  const { fbHandle, igHandle, tiktokHandle } = parseSocialMedia(socialMediaText)

  // Parse phone number
  const phoneText = t('phone')
  const phoneMatch = phoneText.match(/Tel:\s*([\d\s]+)/i) || phoneText.match(/([\d\s]+)/)
  const phoneNumber = phoneMatch ? phoneMatch[1].trim().replace(/\s/g, '') : null

  const cafeImages = [
    '/photos/cafe1.jpg',
    '/photos/cafe2.jpg',
    '/photos/cafe3.jpg',
    '/photos/farm indoor.jpg',
    '/photos/garden2.1.jpg',
    '/photos/garden2.jpg',
    '/photos/garden4.jpg',
    '/photos/garden6.jpg',
    '/photos/food.jpg',
    '/photos/pizza.jpg',
    '/photos/tea.jpg',
    '/photos/soda.jpg',
  ]

  return (
    <>
      <SeoHead path="/cafe" image="/photos/garden3.jpg" />

      <h1 className="sr-only">
        คริสตัล คาเฟ่ — คาเฟ่ในโคราช ใกล้เดอะมอลล์โคราช ที่ คริสตัล รีสอร์ท โคราช
      </h1>

      {/* Custom Hero Banner for Cafe Page */}
      <section className="relative w-full h-[50vh] min-h-[350px] overflow-hidden">
        <div className="relative h-full max-w-7xl mx-auto px-4">
          <div className="absolute inset-y-0 left-0 right-0" style={{ left: 'calc((100vw - 100%) / -2)', right: 'calc((100vw - 100%) / -2)' }}>
            <Image
              src="/photos/garden3.jpg"
              alt="คริสตัล คาเฟ่ ในสวนของคริสตัล รีสอร์ท โคราช"
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-110 contrast-105 saturate-110"
              style={{ objectPosition: 'center 40%' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
          <div className="absolute top-6 left-4 bg-[#A47C53] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-sm shadow-md tracking-wide z-10">
            RESORT NEXT TO THE MALL KORAT
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Concept Text */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4 text-center">
              {t('conceptTitle')}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#A47C53] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-base md:text-lg text-gray-700 font-medium">
                  {t('open')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#A47C53] mt-0.5"
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
                <p className="text-base md:text-lg text-gray-700 font-medium">
                  {t('location')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#A47C53] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8.684 13.342c-.396 0-.72-.316-.72-.707V8.707c0-.391.324-.707.72-.707h6.632c.396 0 .72.316.72.707v3.928c0 .391-.324.707-.72.707h-1.368v1.5h1.368c.396 0 .72.316.72.707v3.928c0 .391-.324.707-.72.707H8.684c-.396 0-.72-.316-.72-.707v-3.928c0-.391.324-.707.72-.707h1.368v-1.5H8.684z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 2v20M2 12h20"
                    />
                  </svg>
                </div>
                <div className="text-base md:text-lg text-gray-700 font-medium">
                  <span className="mr-2">FB:</span>
                  {fbHandle && (
                    <a
                      href={`https://www.facebook.com/${fbHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A47C53] hover:underline"
                    >
                      {fbHandle}
                    </a>
                  )}
                  <span className="mx-2">, IG:</span>
                  {igHandle && (
                    <a
                      href={`https://www.instagram.com/${igHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A47C53] hover:underline"
                    >
                      {igHandle}
                    </a>
                  )}
                  <span className="mx-2">, Tiktok:</span>
                  {tiktokHandle && (
                    <a
                      href={`https://www.tiktok.com/@${tiktokHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A47C53] hover:underline"
                    >
                      {tiktokHandle}
                    </a>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#A47C53] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                {phoneNumber ? (
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-base md:text-lg text-gray-700 font-medium text-[#A47C53] hover:underline"
                  >
                    {t('phone')}
                  </a>
                ) : (
                  <p className="text-base md:text-lg text-gray-700 font-medium">
                    {t('phone')}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cafeImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`คริสตัล คาเฟ่ โคราช — บรรยากาศและเมนู ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  style={index === 3 ? { objectPosition: '70% center' } : {}}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

