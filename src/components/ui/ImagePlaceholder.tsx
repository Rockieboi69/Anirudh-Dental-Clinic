type ImagePlaceholderProps = {
  label: string
  /** When provided, renders a real image instead of the placeholder. */
  src?: string
  className?: string
  /** Optional aspect ratio utility, e.g. "aspect-[4/5]" */
  aspect?: string
  rounded?: string
}

/**
 * Renders a real clinic image when `src` is provided, otherwise a
 * clearly-labelled, premium placeholder.
 */
export default function ImagePlaceholder({
  label,
  src,
  className = '',
  aspect = '',
  rounded = 'rounded-3xl',
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${aspect} ${className} bg-navy-100`}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`group relative isolate overflow-hidden ${rounded} ${aspect} ${className} bg-gradient-to-br from-navy-50 via-offwhite to-teal-50`}
      role="img"
      aria-label={`${label} (image placeholder)`}
    >
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(29,54,112,0.10) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-navy-400 shadow-soft backdrop-blur">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2.5" />
            <circle cx="8.5" cy="9.5" r="1.6" />
            <path d="m4 17 4.5-4.5a2 2 0 0 1 2.8 0L17 18" />
            <path d="m14 15 1.5-1.5a2 2 0 0 1 2.8 0L21 16" />
          </svg>
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
          {label}
        </span>
      </div>
    </div>
  )
}
