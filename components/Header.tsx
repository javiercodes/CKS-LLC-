'use client';

import React, { useState } from 'react';
import Container from './Container';
import { COMPANY, CONTACT } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo-placeholder.svg"
              alt={COMPANY.name}
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-gray-900 hidden sm:block">
              CKS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`tel:${CONTACT.phones.alejandro}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {CONTACT.phones.alejandro}
            </a>
            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Request Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href={`tel:${CONTACT.phones.alejandro}`}
                className="text-gray-600 hover:text-gray-900 transition-colors text-center"
              >
                Call {CONTACT.phones.alejandro}
              </a>
              <button
                onClick={scrollToContact}
                className="btn-primary w-full"
              >
                Request Service
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
} 