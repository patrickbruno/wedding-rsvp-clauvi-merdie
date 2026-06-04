import { useLanguage } from '../lib/i18n.jsx'

export default function LanguageToggle() {
  const { lang, toggle, t } = useLanguage()
  return (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label={`Switch language to ${t.switchTo}`}
      title={`Switch language to ${t.switchTo}`}
    >
      <span className={lang === 'de' ? 'is-active' : ''}>DE</span>
      <span className="lang-sep" aria-hidden="true">/</span>
      <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  )
}
