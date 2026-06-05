import { useLanguage } from '../lib/i18n.jsx'
import { config } from '../config.js'
import { mapsUrl, googleCalendarUrl } from '../lib/datetime.js'
import Reveal from './Reveal.jsx'

export default function Details() {
  const { t, pick } = useLanguage()

  const calendarHref = googleCalendarUrl({
    title: `${config.couple.partnerA} ${t.hero.and} ${config.couple.partnerB}`,
    details: t.hero.kicker,
    location: config.venue.mapsQuery,
  })

  return (
    <section className="section details" id="details">
      <Reveal as="h2" className="section__title">
        {t.details.title}
      </Reveal>

      <div className="details__grid">
        <Reveal className="detail-card" delay={0.05}>
          <span className="detail-card__label">{t.details.whenLabel}</span>
          <span className="detail-card__value">{config.date.display}</span>
          <span className="detail-card__sub">{pick(config.date.weekday)}</span>
          <a className="link-btn" href={calendarHref} target="_blank" rel="noreferrer">
            {t.details.addCalendar}
          </a>
        </Reveal>

        <Reveal className="detail-card" delay={0.15}>
          <span className="detail-card__label">{t.details.whereLabel}</span>
          <span className="detail-card__value">{pick(config.venue.name)}</span>
          <span className="detail-card__sub">{config.venue.address}</span>
          <a className="link-btn" href={mapsUrl()} target="_blank" rel="noreferrer">
            {t.details.openMaps}
          </a>
        </Reveal>
      </div>

      {config.venue.embedUrl && (
        <Reveal className="details__map" delay={0.2}>
          <iframe
            title={pick(config.venue.name)}
            src={config.venue.embedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      )}
    </section>
  )
}
