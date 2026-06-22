# Anirudh Dental Care

A premium, modern website for a dental clinic, built with **React + TypeScript + Tailwind CSS + Framer Motion**.

## Features

- Full single-page site: Hero, About, Why Choose Us, Services, Patient Journey, Gallery, Testimonials, Doctors, FAQ, Contact, Footer
- Dedicated **Appointment Booking** page that generates a pre-filled **WhatsApp message** and redirects to WhatsApp
- Fully responsive, mobile-first, SEO-friendly and accessible
- Smooth, healthcare-grade animations (fade-ups, hover effects, timeline reveals, scroll triggers)
- Clearly labelled image placeholders ready for real photography

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Configuration

All clinic details live in one place: **`src/config/clinic.ts`**.

Update these to change contact info across the whole site:

- `whatsappNumber` — used to build the appointment WhatsApp link.
  Must be full international format, **digits only** (no `+`, no spaces).
  Example for India: `919876543210`.
- `phoneDisplay` / `phoneTel`, `email`, `address`, `timings`, `social`
- `mapsEmbedUrl` — paste your Google Maps embed URL to replace the map placeholder in the Contact section.

## Replacing image placeholders

Every placeholder is labelled (e.g. "Clinic Hero Image", "Dentist Portrait").
Swap the `ImagePlaceholder` components for real `<img>` tags when your photos are ready.
Editable content (services, doctors, testimonials, FAQs, gallery) lives in **`src/data/content.ts`**.

## How appointment booking works

The form (`src/pages/Appointment.tsx`) validates all fields, then builds a message via
`src/utils/whatsapp.ts` and opens `https://wa.me/<number>?text=<encoded message>`.
