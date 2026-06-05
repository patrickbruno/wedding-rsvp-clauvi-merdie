# Venue photos

Drop your **Stadthalle Grafing** photos in this folder, then list them in
`src/config.js` under `gallery` (each entry is `{ src, alt }`).

The default config already expects these filenames — name your files to match
and the carousel will pick them up automatically:

- `stadthalle-1.jpg`
- `stadthalle-2.jpg`
- `stadthalle-3.jpg`

You can add as many as you like (any number of entries in `gallery`). Use
landscape photos around **1600×1067** (3:2) for the sharpest result. JPG, PNG
and WebP all work.

Notes:
- Files in `public/` are copied to the site root as-is, so a file named
  `stadthalle-1.jpg` here is referenced as `images/stadthalle-1.jpg` in config.
- The gallery section automatically hides any image that fails to load, and
  hides the whole section if none of the listed photos are present yet.
