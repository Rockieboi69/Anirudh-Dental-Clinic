/**
 * Central clinic configuration.
 *
 * IMPORTANT: All contact values below are PLACEHOLDERS. Replace them with the
 * client's real details before launch. Nothing here should be presented to
 * patients as verified information until it is confirmed by the clinic.
 *
 * `whatsappNumber` must be in full international format, digits only, no "+".
 */
export const clinicConfig = {
  name: 'Anirudh Dental Care',
  tagline: 'Healthy Smiles Begin Here',

  // Clinic's WhatsApp number — appointment bookings are sent here.
  whatsappNumber: '918754083691',
  whatsappDisplay: '+91 87540 83691',

  phoneDisplay: '+91 79471 29268',
  phoneTel: '+917947129268',

  // PLACEHOLDER — add the clinic's email when available.
  email: 'Email Address',

  address: {
    line1: 'Anirudh Dental Care',
    line2: 'No 79/1, Divine Spaces, Balan Nagar, Near Reliance Fresh',
    line3: 'Masakalipalayam Road, Peelamedu, Coimbatore - 641004, Tamil Nadu',
  },

  // Google Maps embed for the clinic address (no API key required).
  mapsEmbedUrl:
    'https://www.google.com/maps?q=No%2079%2F1%2C%20Divine%20Spaces%2C%20Balan%20Nagar%2C%20Near%20Reliance%20Fresh%2C%20Masakalipalayam%20Road%2C%20Peelamedu%2C%20Coimbatore-641004%2C%20Tamil%20Nadu&output=embed',

  // Clinic timings.
  timings: [
    { day: 'Monday – Saturday', hours: '10 AM – 2 PM, 5 – 8:30 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],

  social: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
    twitter: '#',
  },
} as const

export type ClinicConfig = typeof clinicConfig
