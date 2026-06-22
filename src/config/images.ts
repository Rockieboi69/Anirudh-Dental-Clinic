/**
 * Real clinic photography, served from /public/images.
 * Swap or extend these as more photos become available.
 */
export const clinicImages = [
  '/images/clinic-1.png',
  '/images/clinic-2.png',
  '/images/clinic-3.png',
  '/images/clinic-4.png',
  '/images/clinic-5.png',
  '/images/clinic-6.png',
] as const

/** Returns an image path, cycling through the available photos. */
export function clinicImage(index: number): string {
  return clinicImages[index % clinicImages.length]
}
