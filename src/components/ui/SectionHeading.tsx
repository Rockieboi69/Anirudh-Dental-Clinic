import Reveal from './Reveal'

type SectionHeadingProps = {
  index?: string
  kicker?: string
  title: React.ReactNode
  intro?: string
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Swiss-style section header: a top hairline rule, an index number + label row,
 * then an oversized left-aligned grotesk title with the intro in a second column.
 * Deliberately NOT the centered "kicker + serif heading" formula.
 */
export default function SectionHeading({
  index,
  kicker,
  title,
  intro,
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const light = tone === 'light'
  return (
    <Reveal className={className}>
      <div className={`border-t pt-6 ${light ? 'border-white/15' : 'border-navy-950/12'}`}>
        <div className="flex items-center gap-4">
          {index && (
            <span className={`font-display text-sm font-medium tabular-nums tracking-[0.1em] ${light ? 'text-teal-300' : 'text-teal-600'}`}>
              {index}
            </span>
          )}
          {kicker && (
            <span className={`text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${light ? 'text-white/50' : 'text-navy-400'}`}>
              {kicker}
            </span>
          )}
        </div>

        <div className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-12">
          <h2 className={`heading-lg md:col-span-7 ${light ? 'text-white' : ''}`}>
            {title}
          </h2>
          {intro && (
            <p
              className={`max-w-md self-end text-pretty leading-relaxed md:col-span-5 ${
                light ? 'text-white/70' : 'text-navy-600'
              }`}
            >
              {intro}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  )
}
