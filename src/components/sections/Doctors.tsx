import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { doctors } from '../../data/content'
import { clinicImage } from '../../config/images'

export default function Doctors() {
  return (
    <section id="doctors" className="section-pad bg-cream">
      <div className="container-px mx-auto max-w-[110rem]">
        <SectionHeading
          index="05"
          kicker="The Team"
          title="Specialists who put you at ease"
          intro="Skilled, compassionate and genuinely invested in your wellbeing — the people behind every healthy smile."
        />

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, i) => (
            <motion.article
              key={doc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl">
                <ImagePlaceholder
                  label="Dentist Portrait"
                  src={clinicImage(i + 3)}
                  aspect="aspect-[4/5]"
                  rounded="rounded-2xl"
                  className="transition-transform duration-1000 ease-smooth group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-3 border-t-2 border-navy-950 pt-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-navy-950">
                    {doc.name}
                  </h3>
                  <p className="mt-1 text-sm text-navy-600">{doc.specialization}</p>
                </div>
                <span className="shrink-0 text-right text-xs text-navy-400">
                  {doc.experience}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-teal-700">{doc.qualification}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
