import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { clinicImage } from '../../config/images'

const points = [
  { k: 'Expertise', v: 'Experienced, board-qualified dental professionals.' },
  { k: 'Approach', v: 'A genuinely patient-first philosophy on every visit.' },
  { k: 'Technology', v: 'Modern equipment and precise digital diagnostics.' },
  { k: 'Comfort', v: 'A calm, unhurried, anxiety-free treatment experience.' },
  { k: 'Commitment', v: 'A lasting focus on your long-term oral health.' },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-offwhite">
      <div className="container-px mx-auto max-w-[110rem]">
        <SectionHeading
          index="01"
          kicker="About"
          title={<>Thoughtful, modern<br className="hidden sm:block" /> dentistry, built around you</>}
          intro="Great dentistry is as much about trust as it is about technology. Every detail is designed to keep you informed, relaxed and cared for."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-12 lg:gap-14">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4 md:col-span-6 lg:col-span-7">
            <ImagePlaceholder label="Clinic reception" src={clinicImage(0)} aspect="aspect-[3/4]" rounded="rounded-2xl" className="col-span-1 mt-8" />
            <ImagePlaceholder label="Dental treatment room" src={clinicImage(1)} aspect="aspect-[3/4]" rounded="rounded-2xl" />
            <ImagePlaceholder label="Our dental clinic" src={clinicImage(2)} aspect="aspect-[16/10]" rounded="rounded-2xl" className="col-span-2" />
          </div>

          {/* Numbered definition list — not mini-cards */}
          <div className="md:col-span-6 lg:col-span-5">
            <dl>
              {points.map((p, i) => (
                <motion.div
                  key={p.k}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-navy-950/10 py-5"
                >
                  <span className="font-display text-sm tabular-nums text-teal-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <dt className="font-display text-lg font-semibold tracking-tight text-navy-950">
                      {p.k}
                    </dt>
                    <dd className="mt-1 text-pretty text-navy-600">{p.v}</dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
