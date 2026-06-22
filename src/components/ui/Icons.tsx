import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
})

export const ToothIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5.5c-1.6-1.6-4-2.2-5.7-1.2C4.3 5.4 4 8 4.6 10.6c.4 1.7.5 2.4.8 4.3.3 2 .8 4.6 2 4.6 1 0 1.3-1.4 1.7-3 .4-1.6.7-2.7 1.9-2.7s1.5 1.1 1.9 2.7c.4 1.6.7 3 1.7 3 1.2 0 1.7-2.6 2-4.6.3-1.9.4-2.6.8-4.3.6-2.6.3-5.2-1.7-6.3-1.7-1-4.1-.4-5.7 1.2" />
  </svg>
)

export const CheckupIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12h3l2 5 4-12 2 7h2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
)

export const SparkleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8.5c.5 2 1.5 3 3.5 3.5-2 .5-3 1.5-3.5 3.5-.5-2-1.5-3-3.5-3.5 2-.5 3-1.5 3.5-3.5Z" />
  </svg>
)

export const RootCanalIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4c-2-1.6-4.6-1.4-6 .4C4.4 6.6 5 10 5.6 12.5 6.2 15 6.6 20 8 20c1.2 0 1.2-3 2-5" />
    <path d="M12 4c2-1.6 4.6-1.4 6 .4.9 1.1 1 2.6.8 4.1" />
    <path d="M15 13l4 4M19 13l-4 4" />
  </svg>
)

export const ImplantIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3c-2 0-3 1.5-3 3 0 1 .4 1.7 1 2.5" />
    <path d="M12 3c2 0 3 1.5 3 3 0 1-.4 1.7-1 2.5" />
    <path d="M10 9h4M9.5 12h5M10.5 15h3M11.5 18h1M12 8.5V21" />
  </svg>
)

export const BracesIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 9c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z" />
    <path d="M9 7v8M15 7v8M4 11h16" />
  </svg>
)

export const WhiteningIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 8h10a2 2 0 0 1 2 2v3a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5v-3a2 2 0 0 1 2-2Z" />
    <path d="M9 8V6.5M12 8V6M15 8V6.5M9 12v3M15 12v3" />
  </svg>
)

export const CosmeticIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 18c-3 0-5-2.2-5-5.5C4 9 6 7 9 7c1.5 0 2.3.6 3 1.3C12.7 7.6 13.5 7 15 7c3 0 5 2 5 5.5C20 15.8 18 18 15 18" />
    <path d="M12 8.3V18" />
    <path d="M17.5 4.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4L15.5 6.5l1.4-.6.6-1.4Z" />
  </svg>
)

export const PediatricIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M9.5 7.5h.01M14.5 7.5h.01M10 10c.6.6 1.3.9 2 .9s1.4-.3 2-.9" />
    <path d="M5 21c0-3.3 3.1-6 7-6s7 2.7 7 6" />
  </svg>
)

export const ExtractionIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10 4.5c-1.6-1.3-3.7-1.1-4.8.4C4 6.4 4.5 9 5 11c.4 1.5.5 4.5 1.5 4.5.9 0 .9-2.3 1.5-3.8" />
    <path d="M14 4.5c1.6-1.3 3.7-1.1 4.8.4" />
    <path d="M14 14l5 5M19 14l-5 5" />
  </svg>
)

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const HeartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.3-9.3-8.5C1.2 8.6 2.5 5.5 5.5 5.1 7.5 4.8 9 6 12 8.5 15 6 16.5 4.8 18.5 5.1c3 .4 4.3 3.5 2.8 6.4C19 15.7 12 20 12 20Z" />
  </svg>
)

export const TechIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4M7 9h4M7 12h7" />
  </svg>
)

export const SmileIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10h.01M15 10h.01M8 14c1 1.3 2.4 2 4 2s3-.7 4-2" />
  </svg>
)

export const TagIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 11.5V5a2 2 0 0 1 2-2h6.5a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8l-6.5 6.5a2 2 0 0 1-2.8 0l-7-7a2 2 0 0 1-.6-1.4Z" />
    <circle cx="7.5" cy="7.5" r="1.4" />
  </svg>
)

export const AmbulanceIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
    <circle cx="7" cy="18" r="1.8" />
    <circle cx="17" cy="18" r="1.8" />
    <path d="M8 10v3M6.5 11.5h3" />
  </svg>
)

export const UsersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M16 5.5a3 3 0 0 1 0 5.5M20.5 20c0-2.6-1.6-4.4-4-4.9" />
  </svg>
)

export const CalendarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
  </svg>
)

export const StethoscopeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 3v5a4 4 0 0 0 8 0V3" />
    <path d="M5 3H3.5M13 3h1.5M9 16v1a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-2" />
    <circle cx="18" cy="11" r="2.5" />
  </svg>
)

export const ClipboardIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4M9 11h6M9 15h4" />
  </svg>
)

export const ProcedureIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 3l7 7-4 1-1 4-7-7" />
    <path d="M9 8l-6 6 4 4 6-6M5 16l-2 2 1 1 2-2" />
  </svg>
)

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  </svg>
)

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const MapPinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
)

export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const WhatsAppIcon = (p: IconProps) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.25 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
  </svg>
)

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const QuoteIcon = (p: IconProps) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.5 5C6.5 6 4.5 8.8 4.5 12.4V19h6.3v-6.6H7.6c0-2.1 1-3.6 2.9-4.4L9.5 5Zm9 0c-3 1-5 3.8-5 7.4V19h6.3v-6.6h-3.2c0-2.1 1-3.6 2.9-4.4L18.5 5Z" />
  </svg>
)

export const StarIcon = (p: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
  </svg>
)

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12 5 5L20 7" />
  </svg>
)
