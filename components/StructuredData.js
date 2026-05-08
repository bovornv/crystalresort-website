import { SITE_URL, SITE_NAME } from '../lib/seo'

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: SITE_NAME,
    alternateName: 'คริสตัล รีสอร์ท โคราช',
    description:
      'Crystal Resort Korat — boutique modern resort and café in central Nakhon Ratchasima, just steps from The Mall Korat. คริสตัล รีสอร์ท โคราช ที่พักโคราชใจกลางเมืองนครราชสีมา ใกล้เดอะมอลล์โคราช',
    url: SITE_URL,
    telephone: '+6644257555',
    email: 'enquiry@the-crystalresidence.com',
    image: [
      `${SITE_URL}/photos/p1.1.jpg`,
      `${SITE_URL}/photos/p2.1a.jpg`,
      `${SITE_URL}/photos/garden3.jpg`,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1268/1 Mittraphap Rd. Naimuang',
      addressLocality: 'Nakhon Ratchasima',
      addressRegion: 'Nakhon Ratchasima',
      postalCode: '30000',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.980503622014274,
      longitude: 102.07551953735171,
    },
    priceRange: '฿฿',
    starRating: {
      '@type': 'Rating',
      ratingValue: '3.5',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24-hour Front Desk', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Daily Breakfast', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Laundry Service', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'CCTV Security', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Elevator', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    ],
    sameAs: [
      'https://www.facebook.com/CrystalResortKorat',
      'https://lin.ee/WgiGiVS',
      'https://line.me/R/ti/p/@crystalresort',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
