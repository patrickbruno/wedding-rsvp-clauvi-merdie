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
    // Embedded interactive map (Google "Share → Embed a map" src URL).
    // Set to null to hide the map.
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2667.3907690448377!2d11.9613391!3d48.0447923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dfef2832a639f%3A0x2980e2d2708fe2b4!2sStadthalle%20Grafing!5e0!3m2!1sde!2sde!4v1780618123645!5m2!1sde!2sde',
  },

  // Gallery -----------------------------------------------------
  // Photos of the venue shown in a carousel. Drop the image files in
  // `public/images/` and list them here. Any image that can't be loaded
  // is skipped, and the whole section hides if none are available yet.
  // `src` is relative to the site root (i.e. the `public/` folder).
  gallery: [
    { src: 'images/stadthalle-1.jpg', alt: { de: 'Stadthalle Grafing', en: 'Stadthalle Grafing' } },
    { src: 'images/stadthalle-2.jpg', alt: { de: 'Stadthalle Grafing', en: 'Stadthalle Grafing' } },
    { src: 'images/stadthalle-3.jpg', alt: { de: 'Stadthalle Grafing', en: 'Stadthalle Grafing' } },
  ],

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
