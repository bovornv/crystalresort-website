import { useTranslations } from '../lib/TranslationsContext'
import { useState, useRef } from 'react'

export default function AmenitiesGrid() {
  const t = useTranslations('amenities')
  const tHero = useTranslations('hero')
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const amenities = [
    { key: 'breakfast', icon: 'breakfast' },
    { key: 'frontdesk', icon: 'clock' },
    { key: 'laundry', icon: 'laundry' },
    { key: 'cctv', icon: 'camera' },
    { key: 'parking', icon: 'car' },
    { key: 'elevator', icon: 'elevator' },
    { key: 'wifi', icon: 'wifi' },
  ]

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 300
      const newScrollLeft =
        container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0)
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
    }
  }

  const Icon = ({ name, className }) => {
    const iconClasses = 'w-14 h-14 text-gold'
    switch (name) {
      case 'breakfast':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        )
      case 'clock':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      case 'laundry':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        )
      case 'camera':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )
      case 'car':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 8v8m0-8h4m-4 4h4"
            />
          </svg>
        )
      case 'elevator':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        )
      case 'wifi':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-dark-gray mb-4 text-left">
          {tHero('subheadline')}
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6 text-left leading-relaxed">
          {t('description')}
        </p>
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide gap-8 px-2 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {amenities.map((amenity) => (
              <div
                key={amenity.key}
                className="flex flex-col items-center text-center p-6 min-w-[160px] hover:bg-white rounded-lg transition-colors flex-shrink-0"
              >
                <div className="mb-4 flex items-center justify-center">
                  <Icon name={amenity.icon} />
                </div>
                <p className="text-base md:text-lg text-gray-700 font-medium whitespace-nowrap">
                  {t(amenity.key)}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
