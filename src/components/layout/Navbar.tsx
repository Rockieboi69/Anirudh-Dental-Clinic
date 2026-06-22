import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ToothIcon, ArrowRightIcon } from '../ui/Icons'

const navLinks = [
  { label: 'About', to: '/#about' },
  { label: 'Why Us', to: '/#why' },
  { label: 'Services', to: '/#services' },
  { label: 'Process', to: '/#journey' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (e: React.MouseEvent, to: string) => {
    const [path, hash] = to.split('#')
    e.preventDefault()
    if ((path === '/' || path === '') && location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 120)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-out-quint ${
          scrolled ? 'glass border-b border-[rgba(15,76,129,0.08)] shadow-soft' : 'bg-transparent'
        }`}
      >
        <nav className="container-px mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5">
              <ToothIcon className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl font-semibold tracking-tight text-navy-950">
                Anirudh
              </span>
              <span className="mt-0.5 block text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-teal-700">
                Dental Care
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => go(e, link.to)}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:text-teal-800"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-teal-500 transition-transform duration-300 ease-out-quint group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/appointment" className="btn-cta group text-sm">
              Book Appointment
              <ArrowRightIcon className="btn-arrow h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-500 ease-out-quint ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-500 ease-out-quint ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass fixed inset-0 top-[4.75rem] z-40 flex flex-col px-6 py-8 lg:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.to}
                  onClick={(e) => go(e, link.to)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-[rgba(15,76,129,0.08)] py-4 font-display text-2xl font-semibold tracking-tight text-navy-950"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <Link to="/appointment" className="btn-cta mt-8 w-full">
              Book Appointment
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
