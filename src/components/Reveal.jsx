import { motion } from 'framer-motion'

/**
 * Fades + lifts its children into view the first time they're scrolled to.
 * `delay` staggers siblings; `as` lets you keep semantic tags.
 */
export default function Reveal({ children, delay = 0, y = 28, as = 'div', className, ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
