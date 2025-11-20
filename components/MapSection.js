import { useTranslations } from '../lib/TranslationsContext'

export default function MapSection() {
  const t = useTranslations('location')

  return (
    <section
      id="location"
      className="bg-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-gray">{t('mapTitle')}</h2>
      </div>
      {/* GOOGLE MAP - Full Width */}
      <div className="relative w-full h-[500px]">
        <div 
          className="absolute inset-0 left-0 right-0"
          style={{ 
            left: 'calc((100vw - 100%) / -2)',
            right: 'calc((100vw - 100%) / -2)'
          }}
        >
          <iframe
            src="https://www.google.com/maps?q=Crystal+Resort+Korat+14.980503622014274,102.07551953735171&hl=en&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Crystal Resort Korat Map"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
