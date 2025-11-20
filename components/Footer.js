import { useTranslations } from '../lib/TranslationsContext'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-dark-gray mb-3">{t('contact')}</h3>
          <p className="text-sm text-gray-600 mb-1">{t('address')}</p>
          <p className="text-sm text-gray-600 mb-1">{t('phone')}</p>
          <p className="text-sm text-gray-600">{t('email')}</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-dark-gray mb-3">{t('follow')}</h3>
          <div className="flex items-center space-x-4 mt-3">
            <a
              href="https://www.facebook.com/CrystalResortKorat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://line.me/R/ti/p/@crystalresort"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Line OA"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058.9-.031.19-.099.232-.2.14-.495-.42-1.098-.927-1.51-1.27-2.49-2.11-3.436-4.77-3.436-7.768 0-4.247 3.768-7.702 8.41-7.702 4.644 0 8.41 3.455 8.41 7.702 0 2.998-.946 5.658-3.436 7.768-.412.343-.915.85-1.51 1.27-.101.092-.169.05-.2-.14-.021-.134-.062-.599.058-.9.135-.332.667-.508 1.058-.59C19.73 19.156 24 15.125 24 10.314" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600 flex items-end justify-start md:justify-end">
          <p>© {new Date().getFullYear()} Crystal Resort Korat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

