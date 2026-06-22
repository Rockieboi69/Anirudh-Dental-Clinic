import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { journey } from '../../data/content'

export default function Journey() {
  return (
    <section id="journey" className="section-pad bg-offwhite">
      <div className="container-px mx-auto max-w-[110rem]">
        <SectionHeading
          index="04"
          kicker="Patient Journey"
          title="Five steps to a healthier smile"
          intro="Every stage of your visit is refined to feel clear, calm and completely transparent — no surprises, just great care."
        />

        {/* Horizontal stepped band */}
        <div className="mt-14 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-5">
          {journey.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t-2 border-navy-950 pt-5"
            >
              {/* progress dot on the top rule */}
              <span className="absolute -top-[5px] left-0 h-2 w-2 rounded-full bg-teal-500" />
              <span className="font-display text-5xl font-medium tracking-tight text-navy-200 transition-colors duration-500 group-hover:text-teal-500">
                {s.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-tight tracking-tight text-navy-950">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[15rem] text-pretty text-sm leading-relaxed text-navy-600">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
