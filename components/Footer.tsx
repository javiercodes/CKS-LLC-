import React from 'react';
import Container from './Container';
import { COMPANY, CONTACT, SERVICE_AREAS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{COMPANY.name}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Three brothers, one mission: keep commercial kitchens safe, compliant, and running. 
              Licensed, insured, and ready to solve any problem in your commercial kitchen.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">Alejandro:</span>{' '}
                <a href={`tel:${CONTACT.phones.alejandro}`} className="hover:text-white transition-colors">
                  {CONTACT.phones.alejandro}
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Javier:</span>{' '}
                <a href={`tel:${CONTACT.phones.javier}`} className="hover:text-white transition-colors">
                  {CONTACT.phones.javier}
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Email:</span>{' '}
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToContact}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Request Service
                </button>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#service-areas" className="text-gray-300 hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              {SERVICE_AREAS.slice(0, 4).map((area) => (
                <li key={area}>{area}</li>
              ))}
              <li className="text-gray-400">+ {SERVICE_AREAS.length - 4} more counties</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Licensed, insured, and ready to serve Southern California.
          </p>
        </div>
      </Container>
    </footer>
  );
} 