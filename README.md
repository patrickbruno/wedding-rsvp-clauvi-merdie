# Clauvi & Merdie — Wedding RSVP

A beautiful, mobile-first wedding invitation page with a bilingual (DE/EN)
interface, smooth scroll animations, a live countdown, and an RSVP form.

**The day:** 10.10.2026 · Jahnstraße 13, 85567 Grafing bei München

## Design

- Black / white / warm-cream palette
- Serif display type (Cormorant Garamond) paired with a clean sans (Jost)
- Animated hero, scroll-reveal sections, animated divider & countdown
- Fully responsive, respects `prefers-reduced-motion`

## Tech stack

- [React](https://react.dev) + [Vite](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion/) for animations

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

The build uses a relative base, so `dist/` can be dropped onto any static
host (GitHub Pages, Netlify, Vercel, an S3 bucket, a subfolder…).

## Editing the content

Everything about the day lives in **`src/config.js`** — you don't need to
touch the components:

- **Couple names**, **date**, and **venue**
- **Schedule** — add/remove timeline items. While the schedule isn't final,
  keep `schedule.tentative: true` to show a gentle "subject to change" note.
- **RSVP email** — the address guests' answers are sent to, plus an optional
  reply-by deadline.
- **`defaultLanguage`** — `'de'` or `'en'` (a guest's saved choice and their
  browser language take precedence).

Reusable interface text (button labels, headings) is in
**`src/translations.js`**, with a `de` and an `en` block.

## How RSVP works

The form collects:

- whether the guest is attending
- who is coming (name)
- whether they bring someone else (+ that person's name)
- a phone number
- a comment / message

On submit it opens the guest's email app with a pre-filled message addressed
to `config.rsvp.email` (the **mailto** flow — no server required). To switch
to a hosted form later (Formspree, a Google Sheet, a small backend), replace
the `handleSubmit`/`buildMailto` logic in `src/components/Rsvp.jsx`.
