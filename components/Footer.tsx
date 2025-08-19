import React from 'react';
import Container from './Container';
import { COMPANY, CONTACT, SERVICE_AREAS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-bg section-padding border-t border-gray-800">
      <Container>
        <div className="mb-16">
          <div className="section-index text-gray-500">08 — 08</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="footer-heading">{COMPANY.name}</h3>
            <p className="body-base text-gray-300 mb-8 leading-relaxed max-w-sm">
              Three brothers, one mission: keep commercial kitchens safe, compliant, and running.
            </p>
            <div className="space-y-3">
              <p className="body-sm text-gray-400">
                <span className="text-white">Alejandro:</span>{' '}
                <a href={`tel:${CONTACT.phones.alejandro}`} className="footer-link">
                  {CONTACT.phones.alejandro}
                </a>
              </p>
              <p className="body-sm text-gray-400">
                <span className="text-white">Javier:</span>{' '}
                <a href={`tel:${CONTACT.phones.javier}`} className="footer-link">
                  {CONTACT.phones.javier}
                </a>
              </p>
              <p className="body-sm text-gray-400">
                <span className="text-white">Email:</span>{' '}
                <a href={`mailto:${CONTACT.email}`} className="footer-link">
                  {CONTACT.email}
                </a>
              </p>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="footer-heading mb-4">Follow Us</h4>
              <a
                href="https://www.instagram.com/cks.chino_ca?igsh=eWFvYmR1NzJ6c2Ey&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="body-sm">@cks.chino_ca</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={scrollToContact}
                  className="footer-link text-left"
                >
                  Request Service
                </button>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#service-areas" className="footer-link">
                  Service Areas
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="footer-heading">Service Areas</h4>
            <ul className="space-y-2">
              {SERVICE_AREAS.slice(0, 4).map((area) => (
                <li key={area} className="body-sm text-gray-400">{area}</li>
              ))}
              <li className="body-sm text-gray-500">+ {SERVICE_AREAS.length - 4} more counties</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="body-sm text-gray-500">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p className="body-sm text-gray-500 mt-4 md:mt-0">
            Licensed, insured, and ready to serve Southern California.
          </p>
        </div>
      </Container>
    </footer>
  );
} 