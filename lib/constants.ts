export const COMPANY = {
  name: 'CKS – Commercial Kitchen Solutions (LLC)',
  tagline: 'Commercial Kitchen Experts You Can Call Today',
  description: 'Family-run specialists in hood systems, ventilation, electrical, and plumbing—serving LA, OC, Ventura, SB, Riverside, Santa Barbara, and San Diego Counties.',
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
    id: 'hood-install-repair',
    title: 'Hood Installation & Repairs',
    description: 'Code-compliant installs, fast diagnostics, and durable repairs that keep your line moving.',
    icon: '🏭',
  },
  {
    id: 'swamp-cooler',
    title: 'Evaporative Swamp Cooler',
    description: 'Expert installation and repair of cooling systems to maintain optimal kitchen temperatures.',
    icon: '❄️',
  },
  {
    id: 'exhaust-cleaning',
    title: 'Kitchen Exhaust Cleaning',
    description: 'Professional cleaning services to ensure safety, compliance, and optimal performance.',
    icon: '🧽',
  },
  {
    id: 'hood-filters',
    title: 'Hood Filter Sales & Service',
    description: 'Quality filters and maintenance to keep your ventilation system running efficiently.',
    icon: '🔧',
  },
  {
    id: 'electrical',
    title: 'Kitchen Electrical Repair',
    description: 'Licensed electrical work for commercial kitchens, from troubleshooting to full installations.',
    icon: '⚡',
  },
  {
    id: 'plumbing',
    title: 'Kitchen Plumbing Repair',
    description: 'Complete plumbing solutions for commercial kitchens, ensuring smooth operations.',
    icon: '🔧',
  },
] as const;

export const SERVICE_AREAS = [
  'Los Angeles County',
  'Orange County',
  'Ventura County',
  'San Bernardino County',
  'Riverside County',
  'Santa Barbara County',
  'San Diego County',
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
    'Hood Install/Repair',
    'Swamp Cooler',
    'Exhaust Cleaning',
    'Hood Filters',
    'Electrical',
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