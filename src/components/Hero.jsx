import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'
import { config } from '../config.js'
import Photo from './Photo.jsx'

const headGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.45 } },
}
const footGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 1.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const { t, pick } = useLanguage()
  const { partnerA, partnerB } = config.couple

  return (
    <header className="hero" id="top">
      {/* Full-bleed B&W portrait, shot on black so it fuses with the hero */}
      <motion.div
        className="hero__media"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <Photo name="portrait" alt={`${partnerA} ${t.hero.and} ${partnerB}`} loading="eager" />
      </motion.div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__inner">
        <motion.div className="hero__head" variants={headGroup} initial="hidden" animate="show">
          <motion.p className="hero__kicker" variants={item}>
            {t.hero.kicker}
          </motion.p>
          <h1 className="hero__names">
            <motion.span className="hero__name hero__name--a" variants={item}>
              {partnerA}
            </motion.span>
            <motion.span className="hero__amp" variants={item}>
              {t.hero.and}
            </motion.span>
            <motion.span className="hero__name hero__name--b" variants={item}>
              {partnerB}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div className="hero__foot" variants={footGroup} initial="hidden" animate="show">
          <motion.p className="hero__date" variants={item}>
            {pick(config.date.weekday)}, {config.date.display}
          </motion.p>
          <motion.p className="hero__place" variants={item}>
            {pick(config.venue.name)}
          </motion.p>
          <motion.a className="hero__cta" href="#rsvp" variants={item}>
            {t.hero.rsvpCta}
          </motion.a>
          <motion.a
            className="hero__scroll"
            href="#details"
            variants={item}
            aria-label={t.hero.scroll}
          >
            <span className="hero__chevron" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </header>
  )
}
