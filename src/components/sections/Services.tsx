import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { services } from '../../data/content'
import { ArrowRightIcon } from '../ui/Icons'
import { clinicImage } from '../../config/images'

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="section-pad bg-cream">
      <div className="container-px mx-auto max-w-[110rem]">
        <SectionHeading
          index="03"
          kicker="Services"
          title="Complete care for every smile"
          intro="From routine checkups to advanced restorative and cosmetic treatments — every service under one trusted roof."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Expanding accordion list */}
          <ul className="border-t border-navy-950/12 lg:col-span-7">
            {services.map((service, i) => {
              const Icon = service.icon
              const open = active === i
              return (
                <li key={service.title} className="border-b border-navy-950/12">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center gap-5 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className={`font-display text-sm tabular-nums transition-colors ${open ? 'text-teal-600' : 'text-navy-300'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon className={`h-6 w-6 shrink-0 transition-colors ${open ? 'text-teal-600' : 'text-navy-400'}`} strokeWidth={1.4} />
                    <span className={`flex-1 font-display text-xl font-semibold tracking-tight transition-colors sm:text-2xl ${open ? 'text-navy-950' : 'text-navy-500'}`}>
                      {service.title}
                    </span>
                    <ArrowRightIcon
                      className={`h-5 w-5 shrink-0 transition-all duration-500 ease-smooth ${open ? 'translate-x-0 text-teal-600 opacity-100' : '-translate-x-2 text-navy-300 opacity-0'}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-[auto_1fr] gap-x-5 pb-6 pl-0 sm:pl-11">
                          <span className="hidden sm:block" />
                          <div>
                            <p className="max-w-md text-pretty leading-relaxed text-navy-600">
                              {service.description}
                            </p>
                            <Link
                              to="/appointment"
                              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
                            >
                              Book this treatment
                              <ArrowRightIcon className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>

          {/* Sticky preview image that swaps with the active service */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImagePlaceholder
                    label={`${services[active].title}`}
                    src={clinicImage(active)}
                    aspect="aspect-[5/6]"
                    rounded="rounded-3xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
