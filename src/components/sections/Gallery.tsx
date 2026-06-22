import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { gallery } from '../../data/content'
import { clinicImage } from '../../config/images'

// Deliberate, varied spans for an editorial collage rhythm (not a uniform grid).
const spans = [
  'md:col-span-7 md:row-span-2',
  'md:col-span-5',
  'md:col-span-5',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-6',
  'md:col-span-6',
  'md:col-span-12',
]

const aspects = [
  'aspect-[4/3]',
  'aspect-[5/4]',
  'aspect-[5/4]',
  'aspect-square',
  'aspect-square',
  'aspect-square',
  'aspect-[3/2]',
  'aspect-[3/2]',
  'aspect-[21/9]',
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-cream">
      <div className="container-px mx-auto max-w-[110rem]">
        <SectionHeading
          index="05"
          kicker="Gallery"
          title="A space designed for comfort"
          intro="A look around our modern, spotless clinic — from the welcoming reception to our advanced treatment rooms."
        />

        <div className="mt-14 grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-12">
          {gallery.map((item, i) => (
            <motion.figure
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl ${spans[i % spans.length]}`}
            >
              <ImagePlaceholder
                label={item.label}
                src={clinicImage(i)}
                aspect={aspects[i % aspects.length]}
                rounded="rounded-2xl"
                className="h-full transition-transform duration-1000 ease-smooth group-hover:scale-[1.04]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                <span className="rounded-md bg-navy-950/85 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-sm">
                  {item.category}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
