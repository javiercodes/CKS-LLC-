import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CKS – Commercial Kitchen Solutions | Expert Hood & Ventilation Services',
  description: 'Family-run commercial kitchen specialists serving Southern California. Hood installation, exhaust cleaning, electrical & plumbing repair. Licensed, insured, same-day service available.',
  keywords: [
    'commercial kitchen repair',
    'hood installation',
    'kitchen exhaust cleaning',
    'commercial kitchen electrical',
    'commercial kitchen plumbing',
    'Los Angeles kitchen services',
    'Orange County kitchen repair',
  ],
  authors: [{ name: 'CKS Commercial Kitchen Solutions' }],
  openGraph: {
    title: 'CKS – Commercial Kitchen Solutions',
    description: 'Family-run commercial kitchen specialists serving Southern California. Hood installation, exhaust cleaning, electrical & plumbing repair.',
    url: 'https://cks-commercial-kitchen.vercel.app',
    siteName: 'CKS Commercial Kitchen Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CKS – Commercial Kitchen Solutions',
    description: 'Family-run commercial kitchen specialists serving Southern California.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
} 