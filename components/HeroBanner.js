import Image from 'next/image'
import { useTranslations } from '../lib/TranslationsContext'

export default function HeroBanner() {
  const t = useTranslations('hero')

  return (
    <section className="relative w-full h-[50vh] min-h-[350px] overflow-hidden">
      <div className="relative h-full max-w-7xl mx-auto px-4">
        <div className="absolute inset-y-0 left-0 right-0" style={{ left: 'calc((100vw - 100%) / -2)', right: 'calc((100vw - 100%) / -2)' }}>
          <Image
            src="/photos/p1.1.jpg"
            alt="คริสตัล รีสอร์ท โคราช — ที่พักโคราชใจกลางเมืองนครราชสีมา ใกล้เดอะมอลล์โคราช"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-110 contrast-105 saturate-110"
            style={{ objectPosition: 'center 60%' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        <div className="absolute top-6 left-4 bg-[#A47C53] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-sm shadow-md tracking-wide z-10">
          RESORT NEXT TO THE MALL KORAT
        </div>
      </div>
    </section>
  )
}
