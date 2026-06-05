import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'
import Reveal from './Reveal.jsx'
import Photo from './Photo.jsx'

const AUTOPLAY_MS = 4500

// Colour and black-&-white alternate so the run reads as a curated set.
const photos = [
  { name: 'magnolia', caption: { de: 'Magnolienblüte', en: 'Magnolia blossom' } },
  { name: 'selfie', caption: { de: 'Wir zwei', en: 'The two of us' } },
  { name: 'fountain', caption: { de: 'Am Springbrunnen', en: 'By the fountain' } },
  { name: 'ring', caption: { de: 'Der Antrag', en: 'The proposal' } },
  { name: 'bench', caption: { de: 'Ausblick', en: 'The view' } },
  { name: 'hands', caption: { de: 'Hand in Hand', en: 'Hand in hand' } },
]

export default function Moments() {
  const { t, pick } = useLanguage()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const count = photos.length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, count])

  const go = (n) => setIndex((n + count) % count)

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1))
    touchStartX.current = null
  }

  const current = photos[index]

  return (
    <section className="section moments" id="moments">
      <Reveal as="h2" className="section__title">
        {t.moments.title}
      </Reveal>
      <Reveal as="p" className="moments__subtitle" delay={0.05}>
        {t.moments.subtitle}
      </Reveal>

      <Reveal
        className="moments__carousel"
        delay={0.1}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="moments__stage"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence initial={false} mode="popLayout">
            <motion.figure
              key={current.name}
              className="moments__slide"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Photo name={current.name} alt={pick(current.caption)} loading="eager" />
              <figcaption className="moments__caption">{pick(current.caption)}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="moments__dots" role="tablist" aria-label="Gallery">
          {photos.map((p, i) => (
            <button
              key={p.name}
              className={`moments__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={pick(p.caption)}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
