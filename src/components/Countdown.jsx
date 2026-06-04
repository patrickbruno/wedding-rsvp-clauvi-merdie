import { useEffect, useState } from 'react'
import { useLanguage } from '../lib/i18n.jsx'
import { getTimeLeft } from '../lib/datetime.js'
import Reveal from './Reveal.jsx'

export default function Countdown() {
  const { t } = useLanguage()
  const [time, setTime] = useState(() => getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (time.isPast) {
    return (
      <section className="countdown" aria-label="countdown">
        <Reveal className="countdown__married">{t.countdown.married}</Reveal>
      </section>
    )
  }

  const units = [
    { value: time.days, label: t.countdown.days },
    { value: time.hours, label: t.countdown.hours },
    { value: time.minutes, label: t.countdown.minutes },
    { value: time.seconds, label: t.countdown.seconds },
  ]

  return (
    <section className="countdown" aria-label="countdown">
      <Reveal className="countdown__title">{t.countdown.title}</Reveal>
      <Reveal className="countdown__grid" delay={0.1}>
        {units.map((u) => (
          <div className="count-cell" key={u.label}>
            <span className="count-cell__value">{String(u.value).padStart(2, '0')}</span>
            <span className="count-cell__label">{u.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
