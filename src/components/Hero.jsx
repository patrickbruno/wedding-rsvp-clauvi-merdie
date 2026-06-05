import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'
import { config } from '../config.js'
import Photo from './Photo.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}
const portraitIn = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { t, pick } = useLanguage()
  const { partnerA, partnerB } = config.couple

  return (
    <header className="hero" id="top">
      {/* Soft animated backdrop */}
      <div className="hero__bg" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <div className="grain" />
      </div>

      <motion.div className="hero__inner" variants={container} initial="hidden" animate="show">
        <motion.p className="hero__kicker" variants={rise}>
          {t.hero.kicker}
        </motion.p>

        <motion.h1 className="hero__names" variants={rise}>
          <span className="hero__name">{partnerA}</span>
          <span className="hero__amp">{t.hero.and}</span>
          <span className="hero__name">{partnerB}</span>
        </motion.h1>

        <motion.div className="hero__rule" variants={rise}>
          <span className="hero__rule-line" />
          <span className="hero__rule-dot" />
          <span className="hero__rule-line" />
        </motion.div>

        <motion.div className="hero__portrait" variants={portraitIn}>
          <Photo name="portrait" alt={`${partnerA} ${t.hero.and} ${partnerB}`} loading="eager" />
        </motion.div>

        <motion.p className="hero__date" variants={rise}>
          {pick(config.date.weekday)}, {config.date.display}
        </motion.p>
        <motion.p className="hero__place" variants={rise}>
          {pick(config.venue.name)} · {config.venue.address}
        </motion.p>
      </motion.div>

      <motion.a
        href="#details"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span>{t.hero.scroll}</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </motion.a>
    </header>
  )
}
