'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
              <Image
                src="/cks-logo.png"
                alt={COMPANY.name}
                width={72}
                height={72}
                className="h-16 sm:h-18 w-16 sm:w-18 object-contain hover:opacity-90 transition-opacity"
                priority
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
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 relative"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="block h-0.5 w-6 bg-current mb-1"
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: reducedMotion ? 0.1 : 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current mb-1"
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: reducedMotion ? 0.1 : 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current"
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: reducedMotion ? 0.1 : 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-gray-200 overflow-hidden"
              initial={{ 
                height: 0,
                opacity: 0,
              }}
              animate={{ 
                height: "auto",
                opacity: 1,
              }}
              exit={{ 
                height: 0,
                opacity: 0,
              }}
              transition={{ 
                duration: reducedMotion ? 0.1 : 0.3,
                ease: "easeInOut",
              }}
            >
              <motion.div 
                className="py-4 bg-white"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ 
                  duration: reducedMotion ? 0.1 : 0.2,
                  delay: reducedMotion ? 0 : 0.1,
                }}
              >
                <div className="flex flex-col space-y-4">
                  <motion.a
                    href={`tel:${CONTACT.phones.alejandro}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-center py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: reducedMotion ? 0.1 : 0.2,
                      delay: reducedMotion ? 0 : 0.15,
                    }}
                  >
                    Call {CONTACT.phones.alejandro}
                  </motion.a>
                  <motion.button
                    onClick={scrollToContact}
                    className="btn-primary w-full"
                    variants={reducedMotion ? {} : buttonPress}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    whileHover="rest"
                    whileTap="press"
                    transition={{ 
                      duration: reducedMotion ? 0.1 : 0.2,
                      delay: reducedMotion ? 0 : 0.2,
                    }}
                  >
                    Request Service
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
} 