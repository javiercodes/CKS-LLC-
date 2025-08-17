import type { Metadata } from 'next';
import './globals.css';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'CKS – Commercial Kitchen Solutions | Professional Hood Installation & Repair Services',
  description: 'Expert commercial kitchen services in Southern California. Kitchen exhaust hood installation, fire suppression systems, exhaust fan repair, swamp cooler maintenance, and more. Family-owned, licensed, certified technicians with free estimates. Serving LA, OC, Ventura, SB, Riverside, Santa Barbara.',
  keywords: [
    'commercial kitchen repair',
    'kitchen exhaust hood installation', 
    'exhaust hood cleaning certification',
    'exhaust fan motor repair',
    'commercial kitchen ventilation',
    'fire suppression system installation',
    'swamp cooler maintenance',
    'hood filter sales service',
    'commercial kitchen plumbing',
    'restaurant kitchen repair',
    'Los Angeles commercial kitchen',
    'Orange County kitchen services',
    'Ventura commercial kitchen',
    'San Bernardino kitchen repair',
    'Riverside kitchen services',
    'Santa Barbara commercial kitchen',
    'certified kitchen technicians',
    'commercial kitchen contractors',
    'restaurant equipment repair',
    'kitchen ventilation systems',
  ],
  authors: [{ name: 'CKS Commercial Kitchen Solutions LLC' }],
  metadataBase: new URL('https://cks-commercial-kitchen.vercel.app'),
  openGraph: {
    title: 'CKS – Commercial Kitchen Solutions | Professional Hood Installation & Repair',
    description: 'Expert commercial kitchen services in Southern California. Kitchen exhaust hood installation, fire suppression, exhaust fan repair, and more. Family-owned, certified technicians, free estimates.',
    url: 'https://cks-commercial-kitchen.vercel.app',
    siteName: 'CKS Commercial Kitchen Solutions',
    images: [
      {
        url: '/CKS Service Images/social-share.png',
        width: 1200,
        height: 630,
        alt: 'CKS Commercial Kitchen Solutions - Professional Commercial Kitchen Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CKS – Commercial Kitchen Solutions | Professional Hood Installation & Repair',
    description: 'Expert commercial kitchen services in Southern California. Kitchen exhaust hood installation, fire suppression, exhaust fan repair, and more.',
    images: ['/CKS Service Images/social-share.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cks-commercial-kitchen.vercel.app',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code when available
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
} 