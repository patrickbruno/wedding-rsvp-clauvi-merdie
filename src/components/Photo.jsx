/**
 * Renders a responsive <picture> that serves AVIF, then WebP.
 * Files live in /public/photos as `<name>.avif` + `<name>.webp`.
 * Paths are relative (no leading slash) so the site also works when
 * deployed in a subfolder (matches Vite's relative `base`).
 */
export default function Photo({
  name,
  alt = '',
  className,
  loading = 'lazy',
  sizes,
  draggable = false,
}) {
  const base = `photos/${name}`
  return (
    <picture className={className}>
      <source srcSet={`${base}.avif`} type="image/avif" sizes={sizes} />
      <source srcSet={`${base}.webp`} type="image/webp" sizes={sizes} />
      <img
        src={`${base}.webp`}
        alt={alt}
        loading={loading}
        decoding="async"
        draggable={draggable}
      />
    </picture>
  )
}
