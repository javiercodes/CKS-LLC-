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
        <div className="flex items-center justify-between h-28 py-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <Image
                src="/cks-logo.png"
                alt={COMPANY.name}
                width={108}
                height={108}
                className="h-24 sm:h-27 w-24 sm:w-27 object-contain hover:opacity-90 transition-opacity"
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
            <a
              href="https://www.instagram.com/cks.chino_ca?igsh=eWFvYmR1NzJ6c2Ey&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors p-2"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
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
                  <motion.a
                    href="https://www.instagram.com/cks.chino_ca?igsh=eWFvYmR1NzJ6c2Ey&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600 transition-colors text-center py-2 flex items-center justify-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: reducedMotion ? 0.1 : 0.2,
                      delay: reducedMotion ? 0 : 0.175,
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Follow on Instagram</span>
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