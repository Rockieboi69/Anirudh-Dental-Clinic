import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../../data/content'
import { ArrowRightIcon, StarIcon } from '../ui/Icons'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const multiple = testimonials.length > 1

  const paginate = useCallback((d: number) => {
    setDir(d)
    setIndex((p) => (p + d + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!multiple) return
    const id = setInterval(() => paginate(1), 7000)
    return () => clearInterval(id)
  }, [paginate, multiple])

  const t = testimonials[index]

  return (
    <section className="section-pad bg-navy-950 text-cream">
      <div className="container-px mx-auto max-w-[110rem]">
        <div className="flex items-center gap-4 border-t border-white/15 pt-6">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/50">
            Patient Stories
          </span>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex gap-1 text-teal-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-5 w-5" />
                  ))}
                </div>
                <p className="font-display text-2xl font-medium leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-[2.4rem]">
                  <span className="text-teal-400">“</span>
                  {t.quote}
                  <span className="text-teal-400">”</span>
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <span className="font-display text-lg font-semibold tracking-tight text-white">
                    {t.name}
                  </span>
                  <span className="h-4 w-px bg-white/25" />
                  <span className="text-sm text-white/55">{t.detail}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls — only shown when there are multiple reviews */}
          {multiple && (
            <div className="flex items-end justify-between lg:col-span-3 lg:flex-col lg:items-end lg:justify-end lg:gap-6">
              <span className="font-display text-sm tabular-nums text-white/40">
                {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => paginate(-1)}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:border-teal-400 hover:text-teal-300"
                >
                  <ArrowRightIcon className="h-5 w-5 rotate-180" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => paginate(1)}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:border-teal-400 hover:text-teal-300"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
