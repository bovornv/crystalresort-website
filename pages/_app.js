import { useRouter } from 'next/router'
import { TranslationsProvider } from '../lib/TranslationsContext'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingLineButton from '../components/FloatingLineButton'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale || 'th'

  return (
    <TranslationsProvider locale={locale}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-[140px]">
          <Component {...pageProps} />
        </main>
        <Footer />
        <FloatingLineButton />
      </div>
    </TranslationsProvider>
  )
}

