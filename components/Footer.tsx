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