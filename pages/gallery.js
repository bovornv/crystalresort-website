import Head from 'next/head'
import { useTranslations } from '../lib/TranslationsContext'
import GalleryGrid from '../components/GalleryGrid'
import HeroBanner from '../components/HeroBanner'

export default function Gallery() {
  const t = useTranslations('gallery')

  const galleryImages = [
    '/photos/front1.jpg',
    '/photos/garden2.1.jpg',
    '/photos/garden2.jpg',
    '/photos/garden3.jpg',
    '/photos/garden4.jpg',
    '/photos/garden5.jpg',
    '/photos/garden6.jpg',
    '/photos/garden7.jpg',
    '/photos/cafe3.jpg',
    '/photos/cafe1.jpg',
    '/photos/cafe2.jpg',
    '/photos/farm indoor.jpg',
    '/photos/food.jpg',
    '/photos/pizza.jpg',
    '/photos/bingsu.jpg',
    '/photos/fried-pork.jpg',
    '/photos/tea.jpg',
    '/photos/soda.jpg',
  ]

  return (
    <>
      <Head>
        <title>Gallery | Crystal Resort Korat</title>
        <meta
          name="description"
          content="View our photo gallery showcasing the beautiful rooms, café, gardens, and facilities at Crystal Resort Korat."
        />
      </Head>

      <HeroBanner />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-dark-gray mb-12">
          {t('title')}
        </h1>
        <GalleryGrid images={galleryImages} />
      </div>
    </>
  )
}

