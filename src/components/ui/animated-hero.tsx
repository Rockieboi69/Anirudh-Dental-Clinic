import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MoveRight, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { clinicConfig } from '@/config/clinic'

/**
 * Kinetic-typography hero adapted for Anirudh Dental Care.
 * Based on the shadcn "animated-hero" pattern, rebranded with real
 * dental copy, the clinic's fonts/colors and live booking links.
 */
function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => ['gentle', 'modern', 'precise', 'caring', 'trusted'],
    [],
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-32">
          <div>
            <Button asChild variant="secondary" size="sm" className="gap-3 rounded-full">
              <a href="#about">
                Now accepting new patients <MoveRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="max-w-3xl text-center font-display text-5xl font-semibold tracking-tight text-navy-950 md:text-7xl">
              <span>Dental care that's</span>
              <span className="relative flex w-full justify-center overflow-hidden pb-2 pt-1 text-center md:pb-4">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-teal-600"
                    initial={{ opacity: 0, y: '-100' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-navy-600 md:text-xl">
              Advanced dental care with personalized treatment, modern technology
              and a team that genuinely cares about your comfort — because healthy
              smiles begin here.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="outline" className="gap-3">
              <a href={`tel:${clinicConfig.phoneTel}`}>
                Call the clinic <PhoneCall className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" className="gap-3">
              <Link to="/appointment">
                Book appointment <MoveRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
