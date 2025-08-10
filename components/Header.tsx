'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import { COMPANY, CONTACT } from '@/lib/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { buttonPress, getReducedMotion } from '@/lib/animations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition(24);
  const reducedMotion = getReducedMotion();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'shadow-lg backdrop-blur-md bg-white/95' 
          : 'shadow-sm'
      }`}
      initial={false}
      animate={{
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img
                src="/cks-logo.png"
                alt={COMPANY.name}
                className="h-16 sm:h-18 w-16 sm:w-18 object-contain hover:opacity-90 transition-opacity"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`tel:${CONTACT.phones.alejandro}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {CONTACT.phones.alejandro}
            </a>
            <motion.button
              onClick={scrollToContact}
              className="btn-primary"
              variants={reducedMotion ? {} : buttonPress}
              initial="rest"
              whileHover="rest"
              whileTap="press"
              animate={{
                scale: isScrolled ? 0.98 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              Request Service
            </motion.button>
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
              <motion.button
                onClick={scrollToContact}
                className="btn-primary w-full"
                variants={reducedMotion ? {} : buttonPress}
                initial="rest"
                whileHover="rest"
                whileTap="press"
              >
                Request Service
              </motion.button>
            </div>
          </div>
        )}
      </Container>
    </motion.header>
  );
} 