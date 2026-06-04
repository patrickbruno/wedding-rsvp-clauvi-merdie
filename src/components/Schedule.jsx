import { useLanguage } from '../lib/i18n.jsx'
import { config } from '../config.js'
import Reveal from './Reveal.jsx'

export default function Schedule() {
  const { t, pick } = useLanguage()
  const { items, tentative } = config.schedule

  return (
    <section className="section schedule" id="schedule">
      <Reveal as="h2" className="section__title">
        {t.schedule.title}
      </Reveal>

      {tentative && (
        <Reveal as="p" className="schedule__note" delay={0.05}>
          {t.schedule.tentativeNote}
        </Reveal>
      )}

      <ol className="timeline">
        {items.map((item, i) => (
          <Reveal as="li" className="timeline__item" key={item.time} delay={i * 0.1}>
            <div className="timeline__marker" aria-hidden="true">
              <span className="timeline__dot" />
            </div>
            <div className="timeline__body">
              <span className="timeline__time">{item.time}</span>
              <h3 className="timeline__heading">{pick(item.title)}</h3>
              {item.description && (
                <p className="timeline__desc">{pick(item.description)}</p>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
