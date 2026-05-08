import th from '../locales/th.json'
import en from '../locales/en.json'

const translations = {
  th,
  en,
}

export const getTranslations = (locale = 'th') => {
  const localeData = translations[locale] || translations.th

  return (key) => {
    const keys = key.split('.')
    let value = localeData

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        // Fallback to English if translation not found
        value = translations.en
        for (const k2 of keys) {
          if (value && typeof value === 'object') {
            value = value[k2]
          } else {
            value = key
            break
          }
        }
        break
      }
    }

    return typeof value === 'string' ? value : key
  }
}

export default translations

