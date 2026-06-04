import { config } from '../config.js'

/** Milliseconds remaining until the wedding (never negative). */
export function getTimeLeft(targetIso = config.date.iso) {
  const target = new Date(`${targetIso}T00:00:00`).getTime()
  const diff = target - Date.now()
  if (diff <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }
  const seconds = Math.floor((diff / 1000) % 60)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  return { total: diff, days, hours, minutes, seconds, isPast: false }
}

/** "Open in Maps" link that works on both Apple and Google maps. */
export function mapsUrl(query = config.venue.mapsQuery) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/** Build a Google Calendar "add event" URL (all-day event on the wedding date). */
export function googleCalendarUrl({ title, details, location }) {
  const start = config.date.iso.replace(/-/g, '')
  // Google's all-day events are exclusive of the end date → +1 day.
  const next = new Date(`${config.date.iso}T00:00:00`)
  next.setDate(next.getDate() + 1)
  const end = next.toISOString().slice(0, 10).replace(/-/g, '')

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    details: details || '',
    location: location || '',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
