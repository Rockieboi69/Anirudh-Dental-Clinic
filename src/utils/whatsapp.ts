import { clinicConfig } from '../config/clinic'

export type AppointmentData = {
  name: string
  phone: string
  email: string
  treatment: string
  date: string
  time: string
  message: string
}

/**
 * Builds the WhatsApp appointment message in the required format and
 * returns a fully URL-encoded wa.me link.
 */
export function buildWhatsAppLink(data: AppointmentData): string {
  const lines = [
    `Hello ${clinicConfig.name},`,
    'I would like to book an appointment.',
    '',
    `Patient Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || '-'}`,
    `Treatment: ${data.treatment}`,
    `Preferred Date: ${data.date}`,
    `Preferred Time: ${data.time}`,
    `Message: ${data.message || '-'}`,
    '',
    'Please contact me regarding appointment availability.',
    'Thank you.',
  ]

  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${clinicConfig.whatsappNumber}?text=${text}`
}
