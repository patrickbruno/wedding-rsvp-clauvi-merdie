import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../translations.js'
import { config } from '../config.js'

const STORAGE_KEY = 'cm-wedding-lang'

const LanguageContext = createContext(null)

function resolveInitialLanguage() {
  if (typeof window !== 'undefined') {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'de' || saved === 'en') return saved
    // Fall back to the browser preference, then the configured default.
    const browser = (window.navigator.language || '').slice(0, 2).toLowerCase()
    if (browser === 'de' || browser === 'en') return browser
  }
  return config.defaultLanguage === 'en' ? 'en' : 'de'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(resolveInitialLanguage)

  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang
    if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === 'de' ? 'en' : 'de')),
      t: translations[lang],
      // Pick the right side of a { de, en } object (or pass through a string).
      pick: (entry) =>
        entry && typeof entry === 'object' ? entry[lang] ?? entry.de ?? '' : entry,
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
