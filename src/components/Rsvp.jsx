import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../lib/i18n.jsx'
import { config } from '../config.js'
import Reveal from './Reveal.jsx'

const EMPTY = {
  attending: 'yes',
  name: '',
  plusOne: 'no',
  plusOneName: '',
  phone: '',
  message: '',
}

function Segment({ active, onClick, children }) {
  return (
    <button
      type="button"
      className={`segment ${active ? 'is-active' : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      {children}
    </button>
  )
}

export default function Rsvp() {
  const { t } = useLanguage()
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const setField = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const deadline = config.rsvp.deadline
  const intro = deadline
    ? t.rsvp.intro.replace('{deadline}', deadline.display)
    : t.rsvp.introNoDeadline

  function buildMailto() {
    const couple = `${config.couple.partnerA} & ${config.couple.partnerB}`
    const subject = t.rsvp.mailSubject.replace('{names}', form.name || '—')

    const yn = (v, yes, no) => (v === 'yes' ? yes : no)
    const lines = [
      `${t.rsvp.attendingLabel} ${yn(form.attending, t.rsvp.yes, t.rsvp.no)}`,
      `${t.rsvp.nameLabel} ${form.name}`,
      `${t.rsvp.plusOneLabel} ${yn(form.plusOne, t.rsvp.plusOneYes, t.rsvp.plusOneNo)}`,
    ]
    if (form.plusOne === 'yes' && form.plusOneName.trim()) {
      lines.push(`${t.rsvp.plusOneNameLabel}: ${form.plusOneName}`)
    }
    if (form.phone.trim()) lines.push(`${t.rsvp.phoneLabel}: ${form.phone}`)
    if (form.message.trim()) lines.push(`${t.rsvp.messageLabel}: ${form.message}`)
    lines.push('', `— ${couple}`)

    const body = lines.join('\n')
    return `mailto:${config.rsvp.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim()) {
      setError(t.rsvp.requiredName)
      return
    }
    setError('')
    // Open the guest's mail client pre-filled with their answers.
    window.location.href = buildMailto()
    setSent(true)
  }

  function reset() {
    setForm(EMPTY)
    setSent(false)
    setError('')
  }

  return (
    <section className="section rsvp" id="rsvp">
      <Reveal as="h2" className="section__title">
        {t.rsvp.title}
      </Reveal>
      <Reveal as="p" className="rsvp__intro" delay={0.05}>
        {intro}
      </Reveal>

      <Reveal className="rsvp__card" delay={0.1}>
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="sent"
              className="rsvp__sent"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="rsvp__sent-mark" aria-hidden="true">✓</div>
              <h3>{t.rsvp.sentTitle}</h3>
              <p>{t.rsvp.sentBody}</p>
              <button type="button" className="btn btn--ghost" onClick={reset}>
                {t.rsvp.sentAgain}
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="rsvp__form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              noValidate
            >
              {/* Attending */}
              <fieldset className="field">
                <legend className="field__label">{t.rsvp.attendingLabel}</legend>
                <div className="segmented">
                  <Segment
                    active={form.attending === 'yes'}
                    onClick={() => setField('attending', 'yes')}
                  >
                    {t.rsvp.yes}
                  </Segment>
                  <Segment
                    active={form.attending === 'no'}
                    onClick={() => setField('attending', 'no')}
                  >
                    {t.rsvp.no}
                  </Segment>
                </div>
              </fieldset>

              {/* Name */}
              <label className="field">
                <span className="field__label">{t.rsvp.nameLabel}</span>
                <input
                  className="field__input"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder={t.rsvp.namePlaceholder}
                  autoComplete="name"
                  required
                />
              </label>

              {/* Plus one */}
              <fieldset className="field">
                <legend className="field__label">{t.rsvp.plusOneLabel}</legend>
                <div className="segmented">
                  <Segment
                    active={form.plusOne === 'yes'}
                    onClick={() => setField('plusOne', 'yes')}
                  >
                    {t.rsvp.plusOneYes}
                  </Segment>
                  <Segment
                    active={form.plusOne === 'no'}
                    onClick={() => setField('plusOne', 'no')}
                  >
                    {t.rsvp.plusOneNo}
                  </Segment>
                </div>
              </fieldset>

              <AnimatePresence initial={false}>
                {form.plusOne === 'yes' && (
                  <motion.label
                    className="field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <span className="field__label">{t.rsvp.plusOneNameLabel}</span>
                    <input
                      className="field__input"
                      type="text"
                      value={form.plusOneName}
                      onChange={update('plusOneName')}
                      placeholder={t.rsvp.plusOneNamePlaceholder}
                    />
                  </motion.label>
                )}
              </AnimatePresence>

              {/* Phone */}
              <label className="field">
                <span className="field__label">{t.rsvp.phoneLabel}</span>
                <input
                  className="field__input"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder={t.rsvp.phonePlaceholder}
                  autoComplete="tel"
                />
              </label>

              {/* Message */}
              <label className="field">
                <span className="field__label">{t.rsvp.messageLabel}</span>
                <textarea
                  className="field__input field__textarea"
                  value={form.message}
                  onChange={update('message')}
                  placeholder={t.rsvp.messagePlaceholder}
                  rows={4}
                />
              </label>

              {error && <p className="field__error" role="alert">{error}</p>}

              <button type="submit" className="btn btn--solid">
                {t.rsvp.submit}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  )
}
