export const COMPANY = {
  name: 'CKS – Commercial Kitchen Solutions (LLC)',
  tagline: 'Commercial Kitchen Experts You Can Call Today',
  description: 'Family-run specialists in hood systems, ventilation, electrical, and plumbing—serving LA, OC, Ventura, SB, Riverside, and Santa Barbara Counties.',
} as const;

export const CONTACT = {
  phones: {
    alejandro: '323-450-6561',
    javier: '323-427-1740',
  },
  email: 'CksolutionsLA@gmail.com',
} as const;

export const BRAND_COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#DC2626',
} as const;

export const SERVICES = [
  {
    id: 'kitchen-exhaust-hood',
    title: 'Kitchen Exhaust Hood',
    description: 'Professional installation, maintenance, and repair of commercial kitchen exhaust hoods for optimal ventilation.',
    icon: '🏭',
    image: '/CKS Service Images/kitchen-exhause-hood.JPEG',
  },
  {
    id: 'exhaust-hood-cleaning',
    title: 'Exhaust Hood Cleaning & Certification',
    description: 'Comprehensive cleaning and certification services to ensure compliance and safety standards.',
    icon: '🧽',
    image: '/CKS Service Images/hood-clean.jpg',
  },
  {
    id: 'exhaust-fan-motor-repair',
    title: 'Exhaust Fan & Motor Repair',
    description: 'Expert repair and maintenance of exhaust fans and motors to keep your ventilation system running smoothly.',
    icon: '🔧',
    image: '/CKS Service Images/fan-motor-side-by-side.jpg',
  },
  {
    id: 'hood-install-repair',
    title: 'Hood Installation & Repairs',
    description: 'Code-compliant installs, fast diagnostics, and durable repairs that keep your line moving.',
    icon: '🏭',
    image: '/CKS Service Images/kitchen-hood-installation-2.JPG',
  },
  {
    id: 'swamp-cooler',
    title: 'Evaporative Swamp Cooler',
    description: 'Expert installation and equipment maintenance of cooling systems to maintain optimal kitchen temperatures.',
    icon: '❄️',
    image: '/CKS Service Images/swamp-cooler.JPEG',
  },
  {
    id: 'hood-filters',
    title: 'Hood Filter Sales & Service',
    description: 'Quality filters, sales and service, and maintenance to keep your ventilation system running efficiently.',
    icon: '🔧',
    image: '/CKS Service Images/hood-filters.JPEG',
  },
  {
    id: 'fire-suppression',
    title: 'Fire System Suppression',
    description: 'New system installation, system updates, and fire extinguishers for complete fire safety solutions.',
    icon: '🔥',
    image: '/CKS Service Images/fire-system-supression.JPG',
  },
  {
    id: 'plumbing',
    title: 'Kitchen Plumbing Repair',
    description: 'Complete plumbing solutions for commercial kitchens, ensuring smooth operations.',
    icon: '🔧',
    image: '/CKS Service Images/commercial-plumbing.jpg',
  },
] as const;

export const SERVICE_AREAS = [
  'Los Angeles County',
  'Orange County',
  'Ventura County',
  'San Bernardino County',
  'Riverside County',
  'Santa Barbara County',
] as const;

export const TARGET_CUSTOMERS = [
  'commercial kitchens',
  'restaurants',
  'churches',
  'senior homes',
  'schools',
  'hotels',
] as const;

export const WHY_CHOOSE_US = [
  {
    title: 'Multi-Trade Expertise',
    description: 'Complete solutions for all your commercial kitchen needs under one roof.',
  },
  {
    title: 'Compliance & Safety First',
    description: 'Licensed, insured, and committed to keeping your kitchen code-compliant.',
  },
  {
    title: 'Fast Response',
    description: 'Same-day service available when you need it most.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Fair, upfront pricing with no hidden fees or surprises.',
  },
] as const;

export const FORM_OPTIONS = {
  services: [
    'Kitchen Exhaust Hood',
    'Exhaust Hood Cleaning & Certification',
    'Exhaust Fan & Motor Repair',
    'Hood Install/Repair',
    'Swamp Cooler',
    'Hood Filters',
    'Fire System Suppression',
    'Plumbing',
    'Other',
  ],
  urgency: [
    'Emergency—today',
    'Within 48 hours',
    'This week',
    'Flexible',
  ],
  counties: SERVICE_AREAS,
  contactMethods: [
    'Phone',
    'Email',
    'Either',
  ],
} as const; 