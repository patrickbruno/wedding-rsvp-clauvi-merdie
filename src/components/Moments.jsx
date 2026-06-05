import { motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'
import Reveal from './Reveal.jsx'
import Photo from './Photo.jsx'

// Order is chosen for rhythm: colour and black-&-white alternate so the
// masonry reads as a curated set rather than a dump of files.
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

  return (
    <section className="section moments" id="moments">
      <Reveal as="h2" className="section__title">
        {t.moments.title}
      </Reveal>
      <Reveal as="p" className="moments__subtitle" delay={0.05}>
        {t.moments.subtitle}
      </Reveal>

      <div className="moments__grid">
        {photos.map((p, i) => (
          <motion.figure
            className="moments__item"
            key={p.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Photo name={p.name} alt={pick(p.caption)} />
            <figcaption className="moments__caption">{pick(p.caption)}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
