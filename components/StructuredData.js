export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Crystal Resort Korat',
    description:
      'Boutique & Budget 3.5-star resort and café, newly renovated, just steps from The Mall Korat',
    image: 'https://crystalresortkorat.com/photos/logo.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1268/1 Mittraphap Rd. Naimuang',
      addressLocality: 'Muang',
      addressRegion: 'Nakorn Ratchasima',
      postalCode: '30000',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '14.9716',
      longitude: '102.0834',
    },
    telephone: '+6644257555',
    email: 'enquiry@the-crystalresidence.com',
    priceRange: 'THB 790 - 1,590',
    starRating: {
      '@type': 'Rating',
      ratingValue: '3.5',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free Wi-Fi',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Parking',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '24-hour Front Desk',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Breakfast',
      },
    ],
    sameAs: [
      'https://www.facebook.com/CrystalResortKorat',
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

