import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from '../lib/TranslationsContext'
import { useState } from 'react'

export default function Navbar() {
  const t = useTranslations('nav')
  const tContact = useTranslations('contactBar')
  const router = useRouter()
  const { locale, pathname, asPath } = router
  const [menuOpen, setMenuOpen] = useState(false)

  const switchLocale = (newLocale) => {
    router.push(pathname, asPath, { locale: newLocale })
  }

  const linkStyle = (href) =>
    `px-3 py-1.5 font-medium transition-colors hover:text-gold text-sm ${
      pathname === href ? 'text-gold' : 'text-dark-gray'
    }`

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* First Line: Logo, Resort Name, Language Switcher */}
        <div className="flex items-center justify-between mb-3">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/photos/logo.jpg"
              alt="Crystal Resort Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-semibold text-xl md:text-2xl text-dark-gray hidden sm:block">
              Crystal Resort Korat
            </span>
          </Link>

          {/* Language Switch */}
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => switchLocale('th')}
              className={`hover:text-gold transition-colors ${
                locale === 'th' ? 'text-gold font-semibold' : 'text-gray-600'
              }`}
            >
              🇹🇭 TH
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => switchLocale('en')}
              className={`hover:text-gold transition-colors ${
                locale === 'en' ? 'text-gold font-semibold' : 'text-gray-600'
              }`}
            >
              🇬🇧 EN
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-dark-gray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Info Bar - Between Resort Name and Menu */}
      <div className="w-full bg-white text-gray-700 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center py-2 px-4 gap-4 md:gap-5">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#A47C53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-bold text-sm hidden sm:inline">{tContact('address')}</span>
            <span className="font-bold text-sm sm:hidden">{tContact('addressShort')}</span>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#A47C53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:enquiry@the-crystalresidence.com" className="font-bold text-sm hover:text-[#A47C53] transition-colors">
              enquiry@the-crystalresidence.com
            </a>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#A47C53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:044257555" className="font-bold text-sm hover:text-[#A47C53] transition-colors">
              044-257-555
            </a>
            <span className="text-gray-400">|</span>
            <a href="tel:0656329868" className="font-bold text-sm hover:text-[#A47C53] transition-colors">
              065-632-9868
            </a>
          </span>
        </div>
      </div>

      {/* Second Line: Desktop Menu - Full Width */}
      <div className="hidden md:flex items-center justify-start bg-gray-100 w-full py-2">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center space-x-8">
          <Link href="/" className={linkStyle('/')}>
            {t('main')}
          </Link>
          <Link href="/rooms" className={linkStyle('/rooms')}>
            {t('rooms')}
          </Link>
          <Link href="/cafe" className={linkStyle('/cafe')}>
            {t('cafe')}
          </Link>
          <Link href="/gallery" className={linkStyle('/gallery')}>
            {t('gallery')}
          </Link>
          <Link href="/location" className={linkStyle('/location')}>
            {t('location')}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link
            href="/"
            className="block px-4 py-3 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            {t('main')}
          </Link>
          <Link
            href="/rooms"
            className="block px-4 py-3 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            {t('rooms')}
          </Link>
          <Link
            href="/cafe"
            className="block px-4 py-3 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            {t('cafe')}
          </Link>
          <Link
            href="/gallery"
            className="block px-4 py-3 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            {t('gallery')}
          </Link>
          <Link
            href="/location"
            className="block px-4 py-3 hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            {t('location')}
          </Link>

          <div className="px-4 py-3 flex space-x-4 text-sm border-t border-gray-200">
            <button
              onClick={() => {
                switchLocale('th')
                setMenuOpen(false)
              }}
              className={`${locale === 'th' ? 'text-gold font-semibold' : 'text-gray-600'}`}
            >
              🇹🇭 TH
            </button>
            <button
              onClick={() => {
                switchLocale('en')
                setMenuOpen(false)
              }}
              className={`${locale === 'en' ? 'text-gold font-semibold' : 'text-gray-600'}`}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

