import React from 'react';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CKS Commercial Kitchen Solutions LLC",
    "alternateName": "CKS",
    "description": "Professional commercial kitchen services including exhaust hood installation, fire suppression systems, exhaust fan repair, swamp cooler maintenance, and more. Family-owned business serving Southern California.",
    "url": "https://cks-commercial-kitchen.vercel.app",
    "telephone": "323-450-6561",
    "email": "CksolutionsLA@gmail.com",
    "logo": "https://cks-commercial-kitchen.vercel.app/cks-logo.png",
    "image": "https://cks-commercial-kitchen.vercel.app/CKS Service Images/social-share.png",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Check, Credit Card",
    "currenciesAccepted": "USD",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Los Angeles",
        "addressRegion": "CA"
      },
      {
        "@type": "City", 
        "name": "Orange County",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Ventura",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "San Bernardino",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Riverside",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Santa Barbara", 
        "addressRegion": "CA"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "geoRadius": "100"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Kitchen Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Exhaust Hood Installation",
            "description": "Professional installation, maintenance, and repair of commercial kitchen exhaust hoods"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Exhaust Hood Cleaning & Certification",
            "description": "Comprehensive cleaning and certification services to ensure compliance and safety standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Exhaust Fan & Motor Repair",
            "description": "Expert repair and maintenance of exhaust fans and motors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fire Suppression System Installation", 
            "description": "New system installation, system updates, and fire extinguishers for complete fire safety"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Evaporative Swamp Cooler Service",
            "description": "Expert installation and equipment maintenance of cooling systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Kitchen Plumbing",
            "description": "Complete plumbing solutions for commercial kitchens"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47"
    },
    "openingHours": "Mo-Su 06:00-22:00",
    "sameAs": [
      "https://www.instagram.com/cks.chino_ca"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
} 