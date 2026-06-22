import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { faqs } from '../../data/content'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad bg-offwhite">
      <div className="container-px mx-auto max-w-[110rem]">
        <SectionHeading
          index="06"
          kicker="FAQ"
          title="Questions, answered"
          intro="Still curious about something? Reach out any time — we love helping patients feel completely at ease."
        />

        <div className="mt-14 grid lg:grid-cols-12">
          <ul className="border-t border-navy-950/12 lg:col-span-10 lg:col-start-2">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <li key={faq.question} className="border-b border-navy-950/12">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center gap-5 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-display text-sm tabular-nums transition-colors ${isOpen ? 'text-teal-600' : 'text-navy-300'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`flex-1 font-display text-xl font-medium tracking-tight transition-colors sm:text-2xl ${isOpen ? 'text-navy-950' : 'text-navy-600'}`}>
                      {faq.question}
                    </span>
                    <span className="relative h-4 w-4 shrink-0">
                      <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-navy-950" />
                      <span className={`absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-navy-950 transition-transform duration-500 ease-smooth ${isOpen ? 'scale-y-0' : 'scale-y-100'}`} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-9 text-pretty leading-relaxed text-navy-600">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
