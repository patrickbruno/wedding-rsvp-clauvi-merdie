/**
 * ────────────────────────────────────────────────────────────
 *  WEDDING CONFIGURATION
 *  Edit everything about the day here — no need to touch the
 *  components. Bilingual strings are written as { de, en }.
 * ────────────────────────────────────────────────────────────
 */

export const config = {
  // Couple ------------------------------------------------------
  couple: {
    partnerA: 'Clauvi',
    partnerB: 'Merdie',
    // "&" or "und" / "and" is rendered between the two names.
  },

  // The big day -------------------------------------------------
  // ISO date is used for the countdown + calendar maths.
  // `display` is what people actually see.
  date: {
    iso: '2026-10-10',
    display: '10.10.2026',
    weekday: { de: 'Samstag', en: 'Saturday' },
  },

  // Venue -------------------------------------------------------
  venue: {
    name: { de: 'Stadthalle Grafing', en: 'Stadthalle Grafing' },
    address: 'Jahnstraße 13, 85567 Grafing bei München',
    // Used for the "Open in Maps" button.
    mapsQuery: 'Stadthalle Grafing, Jahnstraße 13, 85567 Grafing bei München',
    // Venue photo shown in the details section. Files live in
    // `public/images/<photo>.avif|webp`. Set to null to hide it.
    photo: 'stadthalle',
  },

  // Schedule ----------------------------------------------------
  // The day's timeline. Set `tentative: true` while it's not final
  // and a gentle "subject to change" note will be shown.
  schedule: {
    tentative: true,
    items: [
      {
        time: '14:00',
        title: { de: 'Vortrag in der Versammlung', en: 'Talk at the assembly' },
        description: {
          de: 'Beginn des Tages mit dem Vortrag in der Versammlung.',
          en: 'The day begins with the talk at the assembly.',
        },
      },
      {
        time: '16:00',
        title: { de: 'Hochzeitslocation', en: 'Wedding location' },
        description: {
          de: 'Wir feiern gemeinsam an der Hochzeitslocation.',
          en: 'We celebrate together at the wedding location.',
        },
      },
    ],
  },

  // RSVP --------------------------------------------------------
  rsvp: {
    // Where the "send" button delivers the answers. With the
    // mailto flow the form opens the guest's email app pre-filled.
    email: 'clauvi.merdie@example.com',
    // Reply-by date shown on the form (optional, set to null to hide).
    deadline: { iso: '2026-09-10', display: '10.09.2026' },
  },

  // Misc --------------------------------------------------------
  // Default language when a guest first opens the page: 'de' | 'en'.
  defaultLanguage: 'de',
}

export default config
