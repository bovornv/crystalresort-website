import Image from 'next/image'
import { useTranslations } from '../lib/TranslationsContext'
import LineAddFriendButton from './LineAddFriendButton'

export default function ContactSection() {
  const t = useTranslations('contact')
  const tFooter = useTranslations('footer')
  const tCta = useTranslations('cta')

  return (
    <section id="contact" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-dark-gray mb-3">{t('title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('lead')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact details */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                {t('addressLabel')}
              </p>
              <p className="text-gray-800">{tFooter('address')}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                {t('phoneLabel')}
              </p>
              <p className="text-gray-800">
                <a href="tel:044257555" className="hover:text-[#A47C53]">044-257-555</a>
                <span className="mx-2 text-gray-300">|</span>
                <a href="tel:0656329868" className="hover:text-[#A47C53]">065-632-9868</a>
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                {t('emailLabel')}
              </p>
              <a
                href="mailto:enquiry@the-crystalresidence.com"
                className="text-gray-800 hover:text-[#A47C53]"
              >
                enquiry@the-crystalresidence.com
              </a>
            </div>
          </div>

          {/* LINE CTA + QR */}
          <div className="flex flex-col items-start md:items-center gap-4">
            <p className="text-gray-700 font-medium">{tCta('askViaLine')}</p>
            <LineAddFriendButton />
            <div className="mt-2 flex flex-col items-start md:items-center gap-2">
              <Image
                src="/line-qr-crystalresort.png"
                alt="Crystal Resort Korat LINE QR Code @crystalresort"
                width={180}
                height={180}
                className="rounded-md border border-gray-200 bg-white p-2 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px]"
              />
              <p className="text-sm text-gray-600 max-w-[220px] text-left md:text-center">
                {t('scanLineQR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
