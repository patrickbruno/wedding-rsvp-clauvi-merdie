import { motion } from 'framer-motion'

/** A slim animated rule used between sections. */
export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <motion.span
        className="divider__line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="divider__diamond" />
      <motion.span
        className="divider__line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
