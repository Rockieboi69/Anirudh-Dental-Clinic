import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { clinicImage } from '../../config/images'
import {
  ArrowRightIcon,
  ShieldIcon,
  TechIcon,
  HeartIcon,
} from '../ui/Icons'

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

const trust = [
  { icon: TechIcon, label: 'Modern Technology' },
  { icon: ShieldIcon, label: 'Sterile & Safe' },
  { icon: HeartIcon, label: 'Personalised Care' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 lg:pt-40">
      {/* Soft animated background shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-24 h-[32rem] w-[32rem] rounded-full bg-teal-100/50 blur-[120px] animate-drift" />
        <div className="absolute -right-32 top-40 h-[34rem] w-[34rem] rounded-full bg-teal-200/30 blur-[130px] animate-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15,76,129,0.05) 1px, transparent 0)',
            backgroundSize: '26px 26px',
          }}
        />
      </div>

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-16 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-32">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="kicker">
            Premium Dental Care
          </motion.span>

          <motion.h1 variants={item} className="heading-xl mt-6 text-balance">
            Healthy smiles
            <br />
            <span className="italic text-teal-700">begin here.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-pretty text-lg leading-[1.8] text-navy-600">
            Advanced dental care with personalized treatment, modern technology
            and a compassionate team — designed around your comfort at every visit.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/appointment" className="btn-cta group">
              Book Appointment
              <ArrowRightIcon className="btn-arrow h-4 w-4" />
            </Link>
            <a href="#services" className="btn-ghost">
              Explore Services
            </a>
          </motion.div>

          {/* Qualitative trust indicators (no fabricated metrics) */}
          <motion.div variants={item} className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-navy-100 pt-7">
            {trust.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.label} className="flex flex-col gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="text-sm font-medium leading-snug text-navy-700">{t.label}</span>
                </div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Layered image composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative frame offset */}
          <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] border border-teal-200/60 lg:block" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-float ring-1 ring-[rgba(15,76,129,0.08)]">
            <ImagePlaceholder
              label="Clinic Image Placeholder"
              src={clinicImage(0)}
              aspect="aspect-[4/5]"
              rounded="rounded-[2rem]"
            />
          </div>

          {/* Floating glass trust card */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="glass absolute -right-3 top-10 hidden items-center gap-3 rounded-2xl p-4 shadow-card ring-1 ring-[rgba(15,76,129,0.08)] sm:flex lg:-right-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700 text-white">
              <ShieldIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-navy-950">Trusted Care</p>
              <p className="text-xs text-navy-500">Modern, sterile clinic</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
