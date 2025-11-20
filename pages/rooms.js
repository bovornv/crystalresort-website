import Head from 'next/head'
import { useTranslations } from '../lib/TranslationsContext'
import { useState } from 'react'
import HeroBanner from '../components/HeroBanner'

export default function Rooms() {
  const t = useTranslations('rooms')

  const rooms = [
    {
      key: 'suite',
      images: ['/photos/p2.1a.jpg', '/photos/p2.1b.jpg'],
      name: t('suite.name'),
      desc: t('suite.desc'),
      amenities: t('suite.amenities'),
    },
    {
      key: 'deluxeTwin',
      images: ['/photos/p2.2.jpg'],
      name: t('deluxeTwin.name'),
      desc: t('deluxeTwin.desc'),
      amenities: t('deluxeTwin.amenities'),
    },
    {
      key: 'deluxeKing',
      images: ['/photos/p2.3.jpg'],
      name: t('deluxeKing.name'),
      desc: t('deluxeKing.desc'),
      amenities: t('deluxeKing.amenities'),
    },
    {
      key: 'deluxeQueen',
      images: ['/photos/p2.4.jpg'],
      name: t('deluxeQueen.name'),
      desc: t('deluxeQueen.desc'),
      amenities: t('deluxeQueen.amenities'),
    },
  ]

  const RoomCarousel = ({ room }) => {
    const [currentImage, setCurrentImage] = useState(0)

    return (
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src={room.images[currentImage]}
                alt={room.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {room.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {room.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImage === index ? 'bg-gold w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Room Details */}
          <div>
            <h2 className="text-3xl font-bold text-dark-gray mb-4">{room.name}</h2>
            <p className="text-xl text-gold mb-6 font-semibold">{room.desc}</p>
            <div className="mb-6">
              <p className="text-gray-700">{room.amenities}</p>
            </div>
            <a
              href="https://line.me/R/ti/p/@crystalresort"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              {t('bookNow')} / จองห้องพัก
            </a>
            <a
              href="tel:044257555"
              className="ml-4 inline-block border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-white transition-colors"
            >
              โทร: 044-257-555
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Rooms | Crystal Resort Korat</title>
        <meta
          name="description"
          content="Choose from our Suite, Deluxe Twin, Deluxe King, and Deluxe Queen rooms. All rooms feature modern amenities, free Wi-Fi, and comfortable accommodations."
        />
      </Head>

      <HeroBanner />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-dark-gray mb-16">
          {t('title')}
        </h1>

        {rooms.map((room) => (
          <RoomCarousel key={room.key} room={room} />
        ))}
      </div>
    </>
  )
}

