import type { ComponentType, SVGProps } from 'react'
import {
  ToothIcon,
  CheckupIcon,
  SparkleIcon,
  RootCanalIcon,
  ImplantIcon,
  BracesIcon,
  WhiteningIcon,
  CosmeticIcon,
  PediatricIcon,
  ExtractionIcon,
  ShieldIcon,
  HeartIcon,
  TechIcon,
  SmileIcon,
  TagIcon,
  AmbulanceIcon,
  UsersIcon,
  StethoscopeIcon,
} from '../components/ui/Icons'

type Icon = ComponentType<SVGProps<SVGSVGElement>>

export type Service = {
  title: string
  description: string
  icon: Icon
}

export const services: Service[] = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive everyday care that keeps your teeth and gums healthy for life.',
    icon: ToothIcon,
  },
  {
    title: 'Dental Checkups',
    description: 'Thorough examinations and digital diagnostics to catch issues early.',
    icon: CheckupIcon,
  },
  {
    title: 'Teeth Cleaning',
    description: 'Gentle professional scaling and polishing for a fresh, healthy mouth.',
    icon: SparkleIcon,
  },
  {
    title: 'Root Canal Treatment',
    description: 'Painless, precise endodontic care that saves your natural tooth.',
    icon: RootCanalIcon,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth.',
    icon: ImplantIcon,
  },
  {
    title: 'Orthodontics (Braces)',
    description: 'Modern braces and aligners to beautifully straighten your smile.',
    icon: BracesIcon,
  },
  {
    title: 'Teeth Whitening',
    description: 'Safe, advanced whitening for a brighter, more confident smile.',
    icon: WhiteningIcon,
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Veneers, bonding and smile design tailored to your features.',
    icon: CosmeticIcon,
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Caring, gentle treatment that makes children feel at ease.',
    icon: PediatricIcon,
  },
  {
    title: 'Tooth Extraction',
    description: 'Comfortable, expert removal with careful aftercare guidance.',
    icon: ExtractionIcon,
  },
]

export type Feature = {
  title: string
  description: string
  icon: Icon
}

export const features: Feature[] = [
  {
    title: 'Experienced Dentists',
    description: 'A team of qualified specialists with years of clinical expertise.',
    icon: StethoscopeIcon,
  },
  {
    title: 'Modern Dental Technology',
    description: 'Digital imaging and advanced equipment for precise treatment.',
    icon: TechIcon,
  },
  {
    title: 'Pain-Free Procedures',
    description: 'Gentle techniques designed around your comfort at every step.',
    icon: HeartIcon,
  },
  {
    title: 'Personalized Treatment Plans',
    description: 'Care tailored to your unique needs, goals and budget.',
    icon: ClipboardPlaceholder,
  },
  {
    title: 'Hygienic Environment',
    description: 'Strict sterilization protocols for a safe, spotless clinic.',
    icon: ShieldIcon,
  },
  {
    title: 'Affordable Care',
    description: 'Transparent pricing and flexible options for every patient.',
    icon: TagIcon,
  },
  {
    title: 'Emergency Dental Support',
    description: 'Prompt attention when dental pain just cannot wait.',
    icon: AmbulanceIcon,
  },
  {
    title: 'Friendly Staff',
    description: 'A warm, welcoming team that treats you like family.',
    icon: UsersIcon,
  },
]

// Small wrapper so the feature uses the Smile icon without a circular import issue.
function ClipboardPlaceholder(props: SVGProps<SVGSVGElement>) {
  return SmileIcon(props)
}

export type JourneyStep = {
  step: string
  title: string
  description: string
}

export const journey: JourneyStep[] = [
  {
    step: '01',
    title: 'Book Appointment',
    description: 'Reserve your visit in seconds through WhatsApp or a quick call.',
  },
  {
    step: '02',
    title: 'Consultation & Examination',
    description: 'We listen carefully and perform a detailed clinical assessment.',
  },
  {
    step: '03',
    title: 'Diagnosis & Treatment Plan',
    description: 'A clear, personalized plan explained in simple, honest terms.',
  },
  {
    step: '04',
    title: 'Treatment Procedure',
    description: 'Comfortable, precise care delivered with modern technology.',
  },
  {
    step: '05',
    title: 'Follow-Up Care',
    description: 'Ongoing guidance and reviews to keep your smile thriving.',
  },
]

export type GalleryItem = {
  label: string
  category: 'Reception' | 'Treatment Rooms' | 'Equipment' | 'Patient Care' | 'Interior'
}

export const galleryCategories = [
  'All',
  'Reception',
  'Treatment Rooms',
  'Equipment',
  'Patient Care',
  'Interior',
] as const

export const gallery: GalleryItem[] = [
  { label: 'Clinic Reception', category: 'Reception' },
  { label: 'Dental Treatment Room', category: 'Treatment Rooms' },
  { label: 'Advanced Dental Equipment', category: 'Equipment' },
  { label: 'Patient Care Moment', category: 'Patient Care' },
  { label: 'Clinic Interior', category: 'Interior' },
  { label: 'Reception Waiting Lounge', category: 'Reception' },
  { label: 'Treatment Room — Chair Two', category: 'Treatment Rooms' },
  { label: 'Digital X-Ray Suite', category: 'Equipment' },
  { label: 'Consultation In Progress', category: 'Patient Care' },
]

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Anirudh Dental Care near Reliance Fresh in Peelamedu is truly a gem! The excellent treatment I received exceeded my expectations. The staff is incredibly professional and attentive, making sure to explain every procedure in detail. The clinic is well-maintained and equipped with the latest technology, ensuring a comfortable experience. I highly recommend this place for anyone seeking top-notch dental care!',
    name: 'Sangeetha',
    detail: 'Excellent treatment',
  },
  {
    quote:
      'Dr Vijay Balasundaram is a highly talented professional dental surgeon. With his vast experience he carries out every procedure with ease — knowledgeable, kind and a wonderful service. Even though there are so many dentists around Coimbatore, he is a gem and unique, and he charges very reasonably. I am very much happy with his service. Thanks, Dr. Vijay Balasundaram.',
    name: 'Balasundaram Du',
    detail: 'Verified Patient Review',
  },
]

export type Doctor = {
  name: string
  qualification: string
  specialization: string
  experience: string
}

// Placeholder profiles — replace with client-provided doctor details.
export const doctors: Doctor[] = [
  {
    name: 'Doctor Name',
    qualification: 'Qualification Placeholder',
    specialization: 'Specialization',
    experience: 'Years of Experience',
  },
  {
    name: 'Doctor Name',
    qualification: 'Qualification Placeholder',
    specialization: 'Specialization',
    experience: 'Years of Experience',
  },
  {
    name: 'Doctor Name',
    qualification: 'Qualification Placeholder',
    specialization: 'Specialization',
    experience: 'Years of Experience',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'How often should I visit a dentist?',
    answer:
      'For most people we recommend a checkup and professional cleaning every six months. Patients with specific conditions may benefit from more frequent visits, which we will advise during your consultation.',
  },
  {
    question: 'Do you provide emergency dental care?',
    answer:
      'Yes. We reserve time for dental emergencies such as severe pain, swelling, or a broken tooth. Call us as early as possible and we will do our best to see you the same day.',
  },
  {
    question: 'Are dental procedures painful?',
    answer:
      'Modern dentistry is far gentler than most people expect. We use effective local anaesthesia and minimally invasive techniques so the vast majority of treatments are comfortable and pain-free.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We aim to keep payment simple and flexible. Please contact our front desk for current payment options and any available plans for larger treatments.',
  },
  {
    question: 'Do you treat children?',
    answer:
      'Absolutely. Our pediatric care is designed to be calm and friendly so children feel safe, building positive dental habits that last a lifetime.',
  },
  {
    question: 'How long does a dental implant procedure take?',
    answer:
      'Placing an implant is usually a single short appointment. Full healing and the final crown typically take a few months, ensuring a strong, natural and long-lasting result.',
  },
]

export const treatmentOptions = [
  'General Dentistry',
  'Dental Checkup',
  'Teeth Cleaning',
  'Root Canal Treatment',
  'Dental Implants',
  'Orthodontics (Braces)',
  'Teeth Whitening',
  'Cosmetic Dentistry',
  'Pediatric Dentistry',
  'Tooth Extraction',
  'Emergency Care',
  'Other / Not Sure',
]
