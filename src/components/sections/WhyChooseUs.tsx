import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { features } from '../../data/content'

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-pad bg-navy-950">
      <div className="container-px mx-auto max-w-[110rem]">
        <SectionHeading
          index="02"
          kicker="Why Choose Us"
          title="A standard of care you can feel"
          intro="Every part of the clinic is shaped around one goal — making excellent dental care feel effortless, honest and reassuring."
          tone="light"
        />

        <div className="mt-14 grid gap-px border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="group relative border-b border-r border-white/10 p-7 transition-colors duration-500 ease-smooth hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm tabular-nums text-teal-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon className="h-6 w-6 text-white/40 transition-colors duration-500 group-hover:text-teal-300" strokeWidth={1.4} />
                </div>
                <h3 className="mt-10 font-display text-lg font-semibold leading-tight tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-white/55">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
