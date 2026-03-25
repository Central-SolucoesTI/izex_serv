import { createContext, useContext, useMemo, useState } from 'react'
import { translations } from './translations'

const STORAGE_KEY = 'izex-language'
const FALLBACK_LANGUAGE = 'pt'

const LanguageContext = createContext(undefined)

function getStoredLanguage() {
  if (typeof window === 'undefined') {
    return FALLBACK_LANGUAGE
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') {
    return stored
  }

  return FALLBACK_LANGUAGE
}

function getValueByPath(objectValue, path) {
  return path.split('.').reduce((result, segment) => {
    if (result && Object.prototype.hasOwnProperty.call(result, segment)) {
      return result[segment]
    }

    return undefined
  }, objectValue)
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getStoredLanguage)

  const setLanguage = (nextLanguage) => {
    if (nextLanguage !== 'pt' && nextLanguage !== 'en') {
      return
    }

    setLanguageState(nextLanguage)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage)
    }
  }

  const value = useMemo(() => {
    const dictionary = translations[language] || translations[FALLBACK_LANGUAGE]

    const t = (path, fallback = path) => {
      const result = getValueByPath(dictionary, path)
      return result === undefined ? fallback : result
    }

    return {
      language,
      setLanguage,
      t,
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
