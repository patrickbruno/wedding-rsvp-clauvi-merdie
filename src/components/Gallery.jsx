import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'
import { config } from '../config.js'
import Reveal from './Reveal.jsx'

const asset = (p) => `${import.meta.env.BASE_URL}${p}`.replace(/([^:])\/\//g, '$1/')
const AUTOPLAY_MS = 5000

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
}

export default function Gallery() {
  const { t, pick } = useLanguage()
  const items = config.gallery || []

  // Only keep images that actually load — avoids broken-image icons and lets
  // the section disappear cleanly until real photos are added.
  const [ready, setReady] = useState([])
  const [[index, dir], setIndex] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  useEffect(() => {
    let alive = true
    const loaded = []
    let pending = items.length
    if (pending === 0) return
    items.forEach((item, i) => {
      const img = new Image()
      img.onload = () => {
        loaded.push(i)
        if (--pending === 0 && alive) setReady(loaded.sort((a, b) => a - b))
      }
      img.onerror = () => {
        if (--pending === 0 && alive) setReady(loaded.sort((a, b) => a - b))
      }
      img.src = asset(item.src)
    })
    return () => {
      alive = false
    }
  }, [])

  const slides = ready.map((i) => items[i])
  const count = slides.length

  useEffect(() => {
    if (count <= 1 || paused) return
    const id = setInterval(() => setIndex(([i]) => [(i + 1) % count, 1]), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [count, paused])

  if (count === 0) return null

  const safeIndex = index % count
  const go = (dir) => setIndex(([i]) => [(i + dir + count) % count, dir])
  const goTo = (n) => setIndex(([i]) => [n, n > i ? 1 : -1])

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1)
    touchStartX.current = null
  }

  const current = slides[safeIndex]

  return (
    <section className="section gallery" id="gallery">
      <Reveal as="h2" className="section__title">
        {t.gallery.title}
      </Reveal>

      <Reveal
        className="carousel"
        delay={0.05}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="carousel__viewport"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.img
              key={current.src}
              src={asset(current.src)}
              alt={pick(current.alt) || ''}
              className="carousel__img"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              draggable={false}
            />
          </AnimatePresence>

          {count > 1 && (
            <>
              <button
                className="carousel__arrow carousel__arrow--prev"
                onClick={() => go(-1)}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                className="carousel__arrow carousel__arrow--next"
                onClick={() => go(1)}
                aria-label="Next photo"
              >
                ›
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="carousel__dots" role="tablist">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot ${i === safeIndex ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-selected={i === safeIndex}
                role="tab"
              />
            ))}
          </div>
        )}
      </Reveal>
    </section>
  )
}
