import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { clinicConfig } from '../config/clinic'
import { treatmentOptions } from '../data/content'
import { buildWhatsAppLink, type AppointmentData } from '../utils/whatsapp'
import {
  WhatsAppIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldIcon,
  ClockIcon,
  PhoneIcon,
} from '../components/ui/Icons'

type FormState = AppointmentData
type Errors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  treatment: '',
  date: '',
  time: '',
  message: '',
}

const today = new Date().toISOString().split('T')[0]

export default function Appointment() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = (): boolean => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    else if (form.name.trim().length < 2) next.name = 'Name looks too short.'

    const phoneDigits = form.phone.replace(/\D/g, '')
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
    else if (phoneDigits.length < 7 || phoneDigits.length > 15)
      next.phone = 'Enter a valid phone number.'

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address.'

    if (!form.treatment) next.treatment = 'Please select a treatment.'
    if (!form.date) next.date = 'Please choose a preferred date.'
    if (!form.time) next.time = 'Please choose a preferred time.'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      // focus first invalid field
      const firstError = document.querySelector<HTMLElement>('[data-invalid="true"]')
      firstError?.focus()
      return
    }
    const link = buildWhatsAppLink(form)
    setSubmitted(true)
    // brief pause so the success animation is visible before the redirect
    setTimeout(() => {
      window.open(link, '_blank', 'noopener,noreferrer')
    }, 1400)
  }

  const resetForm = () => {
    setForm(initialState)
    setErrors({})
    setSubmitted(false)
  }

  const fieldBase =
    'w-full rounded-xl border bg-white px-4 py-3.5 text-navy-900 placeholder:text-navy-300 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-500/10'

  const fieldClass = (field: keyof FormState) =>
    `${fieldBase} ${errors[field] ? 'border-red-300 focus:border-red-400' : 'border-navy-200 focus:border-teal-500'}`

  const floatInputClass = (field: keyof FormState) =>
    `peer w-full rounded-xl border bg-white px-4 py-3.5 text-navy-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-500/10 ${
      errors[field] ? 'border-red-300 focus:border-red-400' : 'border-navy-200 focus:border-teal-500'
    }`

  return (
    <div className="bg-cream pt-20">
      {/* Header band */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-teal-500/15 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-navy-500/20 blur-3xl" />
        </div>
        <div className="container-px relative mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="kicker justify-center text-aqua-300 before:bg-aqua-300/60"
          >
            Book Appointment
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="heading-lg mt-4 text-white"
          >
            Reserve your visit in minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-4 max-w-xl text-navy-200/80"
          >
            Fill in your details below. When you submit, we'll open WhatsApp with a
            ready-to-send message so our team can confirm your slot quickly.
          </motion.p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-px mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="panel relative overflow-hidden p-6 sm:p-9"
          >
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 px-6 text-center backdrop-blur"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-500 text-white shadow-float"
                  >
                    <CheckIcon className="h-10 w-10" />
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="heading-md mt-6"
                  >
                    Almost done!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-2 max-w-sm text-navy-600"
                  >
                    We're opening WhatsApp with your appointment details. If it
                    doesn't open automatically, use the button below.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mt-7 flex flex-col gap-3 sm:flex-row"
                  >
                    <a
                      href={buildWhatsAppLink(form)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-cta px-6"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Open WhatsApp
                    </a>
                    <button type="button" onClick={resetForm} className="btn-ghost">
                      Book Another
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <FloatField
                  label="Patient Name"
                  required
                  error={errors.name}
                  filled={!!form.name}
                >
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder=" "
                    className={floatInputClass('name')}
                    data-invalid={!!errors.name}
                    autoComplete="name"
                  />
                </FloatField>

                <FloatField
                  label="Phone Number"
                  required
                  error={errors.phone}
                  filled={!!form.phone}
                >
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder=" "
                    className={floatInputClass('phone')}
                    data-invalid={!!errors.phone}
                    autoComplete="tel"
                  />
                </FloatField>
              </div>

              <FloatField
                label="Email (optional)"
                error={errors.email}
                filled={!!form.email}
              >
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder=" "
                  className={floatInputClass('email')}
                  data-invalid={!!errors.email}
                  autoComplete="email"
                />
              </FloatField>

              <Field label="Treatment Required" error={errors.treatment} required>
                <select
                  value={form.treatment}
                  onChange={(e) => update('treatment', e.target.value)}
                  className={`${fieldClass('treatment')} ${form.treatment ? '' : 'text-navy-400'}`}
                  data-invalid={!!errors.treatment}
                >
                  <option value="" disabled>
                    Select a treatment
                  </option>
                  {treatmentOptions.map((t) => (
                    <option key={t} value={t} className="text-navy-900">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Preferred Date" error={errors.date} required>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                    className={fieldClass('date')}
                    data-invalid={!!errors.date}
                  />
                </Field>

                <Field label="Preferred Time" error={errors.time} required>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => update('time', e.target.value)}
                    className={fieldClass('time')}
                    data-invalid={!!errors.time}
                  />
                </Field>
              </div>

              <FloatField
                label="Message (optional)"
                error={errors.message}
                filled={!!form.message}
              >
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={4}
                  placeholder=" "
                  className={`${floatInputClass('message')} resize-none`}
                />
              </FloatField>

              <button type="submit" className="btn-cta group w-full justify-center px-6 py-4 text-base">
                <WhatsAppIcon className="h-5 w-5" />
                Book Appointment
                <ArrowRightIcon className="btn-arrow h-4 w-4" />
              </button>
              <p className="text-center text-xs text-navy-400">
                By booking, you'll be redirected to WhatsApp to confirm your
                appointment with our team.
              </p>
            </form>
          </motion.div>

          {/* Side info */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 p-7 text-white shadow-card">
              <h3 className="font-display text-2xl">Prefer to talk to us?</h3>
              <p className="mt-2 text-sm text-navy-200/80">
                Our friendly front desk is happy to help you find the perfect time.
              </p>
              <a
                href={`tel:${clinicConfig.phoneTel}`}
                className="mt-5 flex items-center gap-3 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
              >
                <PhoneIcon className="h-5 w-5 text-teal-300" />
                <span className="font-medium">{clinicConfig.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${clinicConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-3 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
              >
                <WhatsAppIcon className="h-5 w-5 text-teal-300" />
                <span className="font-medium">Message us on WhatsApp</span>
              </a>
            </div>

            <div className="panel p-7">
              <ul className="space-y-4 text-sm">
                <InfoRow icon={ShieldIcon} title="Safe & sterile" text="Strict hygiene at every step of your visit." />
                <InfoRow icon={ClockIcon} title="Flexible timing" text="Appointment times arranged to suit your schedule." />
                <InfoRow icon={CheckIcon} title="Quick confirmation" text="We respond promptly to every request." />
              </ul>
            </div>

            <Link to="/" className="block text-center text-sm font-medium text-navy-500 transition-colors hover:text-teal-700">
              ← Back to home
            </Link>
          </motion.aside>
        </div>
      </section>
    </div>
  )
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-800">
        {label}
        {required && <span className="text-teal-600"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  )
}

function FloatField({
  label,
  error,
  required,
  filled,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  filled: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <div className={`float-field ${filled ? 'filled' : ''}`}>
        {children}
        <label>
          {label}
          {required && ' *'}
        </label>
      </div>
      {error && <span className="mt-1.5 block text-xs font-medium text-red-500">{error}</span>}
    </div>
  )
}

function InfoRow({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  text: string
}) {
  return (
    <li className="flex gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-medium text-navy-900">{title}</p>
        <p className="text-navy-500">{text}</p>
      </div>
    </li>
  )
}
