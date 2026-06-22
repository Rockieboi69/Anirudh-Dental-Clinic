import { Link } from 'react-router-dom'
import { clinicConfig } from '../../config/clinic'
import {
  ToothIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from '../ui/Icons'

const quickLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Why Choose Us', href: '/#why' },
  { label: 'Patient Journey', href: '/#journey' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'FAQ', href: '/#faq' },
]

const serviceLinks = [
  'General Dentistry',
  'Dental Implants',
  'Root Canal Treatment',
  'Orthodontics',
  'Teeth Whitening',
  'Cosmetic Dentistry',
]

export default function Footer() {
  const waLink = `https://wa.me/${clinicConfig.whatsappNumber}`

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                <ToothIcon className="h-6 w-6" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold text-white">
                  Anirudh
                </span>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-teal-300">
                  Dental Care
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200/80">
              Advanced dental care with personalized treatment, modern technology
              and compassionate service — because healthy smiles begin here.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-navy-200/80 transition-colors hover:text-teal-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Dental Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="/#services" className="text-navy-200/80 transition-colors hover:text-teal-300">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + timings */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-navy-200/80">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <span>
                  {clinicConfig.address.line2}
                  <br />
                  {clinicConfig.address.line3}
                </span>
              </li>
              <li>
                <a href={`tel:${clinicConfig.phoneTel}`} className="flex items-center gap-2.5 transition-colors hover:text-teal-300">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-teal-300" />
                  {clinicConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={waLink} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-teal-300">
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-teal-300" />
                  {clinicConfig.whatsappDisplay}
                </a>
              </li>
              {clinicConfig.email.includes('@') && (
                <li>
                  <a href={`mailto:${clinicConfig.email}`} className="flex items-center gap-2.5 transition-colors hover:text-teal-300">
                    <MailIcon className="h-4 w-4 shrink-0 text-teal-300" />
                    {clinicConfig.email}
                  </a>
                </li>
              )}
            </ul>

            <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Clinic Timings
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-navy-200/80">
              {clinicConfig.timings.map((t) => (
                <li key={t.day} className="flex justify-between gap-4">
                  <span>{t.day}</span>
                  <span className="text-navy-100">{t.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-navy-300/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Anirudh Dental Care. All rights reserved.</p>
          <p>Designed with care for healthier, happier smiles.</p>
        </div>
      </div>
    </footer>
  )
}
