import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Services from '../components/sections/Services'
import Journey from '../components/sections/Journey'
import Gallery from '../components/sections/Gallery'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Journey />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
