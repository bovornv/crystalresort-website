import { createContext, useContext } from 'react'
import { getTranslations } from './translations'

const TranslationsContext = createContext()

export function TranslationsProvider({ children, locale = 'th' }) {
  const t = getTranslations(locale)

  return (
    <TranslationsContext.Provider value={{ t, locale }}>
      {children}
    </TranslationsContext.Provider>
  )
}

export function useTranslations(namespace) {
  const { t, locale } = useContext(TranslationsContext)

  return (key) => {
    const fullKey = namespace ? `${namespace}.${key}` : key
    return t(fullKey)
  }
}

