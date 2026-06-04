import { useLanguage } from '../lib/i18n.jsx'
import { config } from '../config.js'
import Reveal from './Reveal.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <Reveal className="footer__inner">
        <p className="footer__names">
          {config.couple.partnerA} <span className="footer__amp">{t.hero.and}</span>{' '}
          {config.couple.partnerB}
        </p>
        <p className="footer__date">{config.date.display}</p>
        <p className="footer__see-you">{t.footer.seeYou}</p>
        <p className="footer__credit">
          {t.footer.madeWith} <span aria-hidden="true">♡</span>
        </p>
      </Reveal>
    </footer>
  )
}
