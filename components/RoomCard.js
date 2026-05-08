import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from '../lib/TranslationsContext'

export default function RoomCard({ room }) {
  const t = useTranslations('rooms')

  return (
    <Link href="/rooms" className="block">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer">
        {/* Label Ribbon */}
        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded z-10">
          {room.label}
        </div>

        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={room.image}
            alt={`${room.name} — ห้องพักโคราช คริสตัล รีสอร์ท โคราช`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{room.name}</h3>
          
          <div className="flex items-center text-sm text-gray-600 gap-3">
            <span>📏 {room.size}</span>
            <span>👥 {room.pax}</span>
          </div>

          <div className="mt-2">
            <p className="text-sm">
              <span className="text-gray-800">{t('from')} </span>
              <span className="text-gray-400 line-through">{room.oldPrice}</span>
            </p>
            <p className="text-2xl font-bold text-[#A47C53]">
              {room.newPrice}.00{' '}
              <span className="text-base font-medium text-gray-700">{t('night')}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
