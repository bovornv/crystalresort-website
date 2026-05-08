import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from '../lib/TranslationsContext'
import SeoHead from '../components/SeoHead'
import HeroBanner from '../components/HeroBanner'
import RoomCard from '../components/RoomCard'
import AmenitiesGrid from '../components/AmenitiesGrid'
import MapSection from '../components/MapSection'
import ContactSection from '../components/ContactSection'
import StructuredData from '../components/StructuredData'

export default function Home() {
  const t = useTranslations('rooms')
  const tInfo = useTranslations('info')
  const tLocation = useTranslations('location')
  const tCafe = useTranslations('cafe')

  const rooms = [
    {
      name: t('suite.name'),
      label: t('suite.label'),
      size: t('suite.size'),
      pax: t('suite.pax'),
      oldPrice: t('suite.oldPrice'),
      newPrice: t('suite.newPrice'),
      desc: t('suite.desc'),
      image: '/photos/p2.1a.jpg',
    },
    {
      name: t('deluxeTwin.name'),
      label: t('deluxeTwin.label'),
      size: t('deluxeTwin.size'),
      pax: t('deluxeTwin.pax'),
      oldPrice: t('deluxeTwin.oldPrice'),
      newPrice: t('deluxeTwin.newPrice'),
      desc: t('deluxeTwin.desc'),
      image: '/photos/p2.2.jpg',
    },
    {
      name: t('deluxeKing.name'),
      label: t('deluxeKing.label'),
      size: t('deluxeKing.size'),
      pax: t('deluxeKing.pax'),
      oldPrice: t('deluxeKing.oldPrice'),
      newPrice: t('deluxeKing.newPrice'),
      desc: t('deluxeKing.desc'),
      image: '/photos/p2.3.jpg',
    },
    {
      name: t('deluxeQueen.name'),
      label: t('deluxeQueen.label'),
      size: t('deluxeQueen.size'),
      pax: t('deluxeQueen.pax'),
      oldPrice: t('deluxeQueen.oldPrice'),
      newPrice: t('deluxeQueen.newPrice'),
      desc: t('deluxeQueen.desc'),
      image: '/photos/p2.4.jpg',
    },
  ]

  const cafeImages = [
    '/photos/cafe1.jpg',
    '/photos/food.jpg',
    '/photos/pizza.jpg',
    '/photos/bingsu.jpg',
  ]

  return (
    <>
      <SeoHead path="/" />
      <StructuredData />

      <h1 className="sr-only">
        คริสตัล รีสอร์ท โคราช — ที่พักใจกลางเมืองนครราชสีมา ใกล้เดอะมอลล์โคราช
      </h1>

      <HeroBanner />

      {/* Amenities Section */}
      <AmenitiesGrid />

      {/* Rooms Preview Section */}
      <section id="rooms" className="py-12 bg-[#A47C53]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
            {t('title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <RoomCard key={index} room={room} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/rooms"
              className="inline-block bg-white text-[#A47C53] px-6 py-2 rounded-full font-medium hover:bg-[#F2ECE4] hover:scale-105 transition-all"
            >
              {t('seeAllRooms')}
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Nearby Section */}
      <MapSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Café Preview Section */}
      <section id="cafe" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-gray mb-12">
            {tCafe('title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cafeImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`คริสตัล คาเฟ่ โคราช — บรรยากาศและเมนู ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/cafe"
              className="inline-block text-[#A47C53] font-semibold hover:underline"
            >
              ดูคาเฟ่ในโคราช คริสตัล คาเฟ่ →
            </Link>
          </div>
        </div>
      </section>

      {/* Resort Policy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-gray mb-12">
            {tInfo('title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Check in / Check Out */}
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 text-base mb-1">
                  <span className="font-bold text-gray-800">{tInfo('checkinLabel')}</span> {tInfo('checkin')}
                </p>
                <p className="text-gray-600 text-base">
                  <span className="font-bold text-gray-800">{tInfo('checkoutLabel')}</span> {tInfo('checkout')}
                </p>
              </div>
            </div>

            {/* Smoke Free Hotel */}
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
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 10h6M9 14h6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{tInfo('smokeFree')}</h3>
                <p className="text-gray-600 text-base">{tInfo('smokingPolicy')}</p>
              </div>
            </div>

            {/* Breakfast Rate */}
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
                    d="M5 3h10a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 00-2 2v2a2 2 0 01-2-2V5a2 2 0 012-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 13h6M7 9h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{tInfo('breakfastRateTitle')}</h3>
                <p className="text-gray-600 text-base">{tInfo('breakfastRate')}</p>
              </div>
            </div>

            {/* Extra Bed */}
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
                    d="M3 12h18M3 6h18M3 18h18"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 8v8M19 8v8"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{tInfo('extraBedTitle')}</h3>
                <p className="text-gray-600 text-base">{tInfo('extraBed')}</p>
              </div>
            </div>

            {/* Kids Stay Free */}
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{tInfo('kidsStayFreeTitle')}</h3>
                <p className="text-gray-600 text-base">{tInfo('kidsStayFree')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

