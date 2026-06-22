import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { clinicConfig } from '../../config/clinic'
import {
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  MailIcon,
  ClockIcon,
  ArrowRightIcon,
} from '../ui/Icons'

export default function Contact() {
  const waLink = `https://wa.me/${clinicConfig.whatsappNumber}`

  const cards = [
    {
      icon: MapPinIcon,
      label: 'Visit Us',
      value: `${clinicConfig.address.line2}, ${clinicConfig.address.line3}`,
      href: undefined,
    },
    {
      icon: PhoneIcon,
      label: 'Call Us',
      value: clinicConfig.phoneDisplay,
      href: `tel:${clinicConfig.phoneTel}`,
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: clinicConfig.whatsappDisplay,
      href: waLink,
    },
    {
      icon: MailIcon,
      label: 'Email Us',
      value: clinicConfig.email,
      href: `mailto:${clinicConfig.email}`,
    },
  ]

  return (
    <section id="contact" className="section-pad bg-offwhite">
      <div className="container-px mx-auto max-w-[110rem]">
        <SectionHeading
          index="07"
          kicker="Contact"
          title="We are here to help"
          intro="Reach out with any question, or simply walk in — our friendly team is always happy to welcome you."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Info side */}
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((c) => {
                const Icon = c.icon
                const inner = (
                  <>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">
                      {c.label}
                    </p>
                    <p className="mt-1.5 text-sm text-navy-700">{c.value}</p>
                  </>
                )
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="panel group p-6 transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-card"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="panel group p-6">
                    {inner}
                  </div>
                )
              })}
            </div>

            {/* Timings */}
            <div className="panel mt-4 p-6">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">
                <ClockIcon className="h-5 w-5" />
                Clinic Timings
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {clinicConfig.timings.map((t) => (
                  <li key={t.day} className="flex justify-between gap-4 text-navy-700">
                    <span>{t.day}</span>
                    <span className="font-medium text-navy-900">{t.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/appointment" className="btn-cta group mt-4 w-full text-[0.95rem]">
              Book Your Appointment
              <span className="btn-icon">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>

          {/* Map side */}
          <Reveal delay={0.1}>
            <div className="panel h-full min-h-[420px] overflow-hidden p-0">
              {clinicConfig.mapsEmbedUrl ? (
                <iframe
                  title="Anirudh Dental Care location"
                  src={clinicConfig.mapsEmbedUrl}
                  className="h-full min-h-[420px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center bg-gradient-to-br from-navy-50 via-offwhite to-teal-50 text-center">
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(31,56,121,0.10) 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                    aria-hidden="true"
                  />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-soft">
                    <MapPinIcon className="h-7 w-7" />
                  </span>
                  <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                    Google Maps Location
                  </p>
                  <p className="relative mt-1 max-w-xs text-sm text-navy-500">
                    Embedded map placeholder — add your clinic's Maps link in the
                    configuration file.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
