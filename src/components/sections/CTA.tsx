import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import { clinicConfig } from '../../config/clinic'
import { ArrowRightIcon, WhatsAppIcon } from '../ui/Icons'

export default function CTA() {
  return (
    <section className="bg-cream pb-20 md:pb-28">
      <div className="container-px mx-auto max-w-[110rem]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-teal-400">
                  Book Today
                </span>
                <h2 className="heading-lg mt-5 text-white">
                  Ready for a healthier,
                  <br className="hidden sm:block" /> brighter smile?
                </h2>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/60">
                  Book your appointment today and experience dental care that feels
                  genuinely different — gentle, modern and built around you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
                <Link to="/appointment" className="btn-cta group">
                  Book Appointment
                  <ArrowRightIcon className="btn-arrow h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${clinicConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn border border-white/20 px-6 py-3.5 text-white hover:bg-white/10"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
