'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';
import { slideUp, slideInLeft, getReducedMotion } from '@/lib/animations';

// Service projects with multiple images per service
const serviceProjects = [
  {
    id: 'kitchen-exhaust-fan-replacement',
    name: 'Kitchen Exhaust Fan Replacement',
    description: 'Professional kitchen exhaust fan replacement and installation services',
    images: [
      {
        id: 1,
        src: '/CKS Service Images/kitchen-exhaust-fan-replacement-1.JPG',
        title: 'Kitchen Exhaust Fan Replacement - Before',
        description: 'Old exhaust fan removal and preparation'
      },
      {
        id: 2,
        src: '/CKS Service Images/kitchen-exhaust-fan-replacement-2.JPG',
        title: 'Kitchen Exhaust Fan Replacement - Completed',
        description: 'New exhaust fan installation completed'
      }
    ]
  },
  {
    id: 'make-up-air-replacement',
    name: 'Make Up Air Replacement',
    description: 'Professional make up air unit replacement and installation services',
    images: [
      {
        id: 1,
        src: '/CKS Service Images/make-up-air-replacement-1.JPG',
        title: 'Make Up Air Replacement - Before',
        description: 'Old make up air unit removal and preparation'
      },
      {
        id: 2,
        src: '/CKS Service Images/make-up-air-replacement-2.JPG',
        title: 'Make Up Air Replacement - Completed',
        description: 'New make up air unit installation completed'
      }
    ]
  },
  {
    id: 'kitchen-hood-installation',
    name: 'Kitchen Hood Installation',
    description: 'Professional kitchen hood installation and setup services',
    images: [
      {
        id: 1,
        src: '/CKS Service Images/kitchen-hood-installation-1.JPG',
        title: 'Kitchen Hood Installation - Before',
        description: 'Kitchen preparation and old hood removal'
      },
      {
        id: 2,
        src: '/CKS Service Images/kitchen-hood-installation-2.JPG',
        title: 'Kitchen Hood Installation - Completed',
        description: 'New kitchen hood installation completed'
      }
    ]
  },
  {
    id: 'kitchen-exhaust-fan-replaced',
    name: 'Kitchen Exhaust Fan Replacement',
    description: 'Complete kitchen exhaust fan replacement and upgrade services',
    images: [
      {
        id: 1,
        src: '/CKS Service Images/kitchen-exhaust-fan-replaced-1.JPG',
        title: 'Kitchen Exhaust Fan Replacement - Before',
        description: 'Old deteriorated exhaust fans removal and preparation'
      },
      {
        id: 2,
        src: '/CKS Service Images/kitchen-exhaust-fan-replaced-2.JPG',
        title: 'Kitchen Exhaust Fan Replacement - Completed',
        description: 'New professional exhaust fan installation completed'
      }
    ]
  },
  {
    id: 'exhaust-fan-replacement-better-suction',
    name: 'Exhaust Fan Replacement - Better Suction',
    description: 'Professional exhaust fan replacement with improved suction and ventilation performance',
    images: [
      {
        id: 1,
        src: '/CKS Service Images/exhaust-fans-1.JPG',
        title: 'Exhaust Fan Replacement - Work in Progress',
        description: 'Professional installation of high-performance exhaust fan system'
      },
      {
        id: 2,
        src: '/CKS Service Images/exhaust-fans-2.JPG',
        title: 'Exhaust Fan Replacement - Technical Work',
        description: 'Detailed fan motor and housing installation for optimal performance'
      },
      {
        id: 3,
        src: '/CKS Service Images/exhaust-fans-3.JPG',
        title: 'Exhaust Fan Replacement - Interior Installation',
        description: 'Interior fan housing installation with improved airflow design'
      },
      {
        id: 4,
        src: '/CKS Service Images/exhaust-fans-4.JPG',
        title: 'Exhaust Fan Replacement - Completed Installation',
        description: 'Completed high-efficiency exhaust fan system with enhanced suction capabilities'
      }
    ]
  }
];

interface LightboxProps {
  images: Array<{
    id: number;
    src: string;
    title: string;
    description: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const currentImage = images[currentIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300 z-10"
          aria-label="Close lightbox"
        >
          ✕
        </button>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            width={800}
            height={600}
            className="max-w-full max-h-[70vh] object-contain"
          />
          
          {/* Image info */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
            <h3 className="font-semibold text-lg mb-1">{currentImage.title}</h3>
            <p className="text-sm text-gray-300">{currentImage.description}</p>
            {images.length > 1 && (
              <p className="text-xs text-gray-400 mt-2">
                {currentIndex + 1} of {images.length}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServiceProjectsGallery() {
  const reducedMotion = getReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentService, setCurrentService] = useState<typeof serviceProjects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeImages, setActiveImages] = useState<{[key: string]: number}>({});

  const openLightbox = (service: typeof serviceProjects[0], imageIndex: number = 0) => {
    setCurrentService(service);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentService(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (currentService) {
      setCurrentImageIndex((prev) => 
        prev === currentService.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentService) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? currentService.images.length - 1 : prev - 1
      );
    }
  };

  const setActiveImage = (serviceId: string, imageIndex: number) => {
    setActiveImages(prev => ({
      ...prev,
      [serviceId]: imageIndex
    }));
  };

  const getActiveImageIndex = (serviceId: string) => {
    return activeImages[serviceId] || 0;
  };

  return (
    <>
      <section className="bg-white section-padding border-t border-light">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={reducedMotion ? {} : slideUp}>
              <div className="section-index">03 — 08</div>
              <h2 className="heading-lg text-gray-900 mb-6">Recent Projects</h2>
            </motion.div>
            <motion.p 
              className="body-lg text-gray-600 max-w-2xl mx-auto"
              variants={reducedMotion ? {} : slideUp}
            >
              Explore our completed projects by service type. Click thumbnails to browse 
              photos or click the main image to view in full screen.
            </motion.p>
          </AnimatedSection>

          <div className="space-y-16">
            {serviceProjects.map((service, serviceIndex) => {
              const activeImageIndex = getActiveImageIndex(service.id);
              const activeImage = service.images[activeImageIndex];
              
              return (
                <AnimatedSection key={service.id} className="space-y-8">
                  {/* Service Title and Description */}
                  <motion.div 
                    variants={reducedMotion ? {} : slideInLeft}
                    className="text-center"
                  >
                    <h3 className="heading-md text-gray-900 mb-4">{service.name}</h3>
                    <p className="body-base text-gray-600 max-w-2xl mx-auto">
                      {service.description}
                    </p>
                  </motion.div>

                  <motion.div 
                    className="max-w-4xl mx-auto"
                    variants={reducedMotion ? {} : slideUp}
                    transition={{ delay: serviceIndex * 0.1 }}
                  >
                    {/* Hero Image */}
                    <motion.div
                      className="relative group cursor-pointer mb-6 rounded-lg overflow-hidden"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openLightbox(service, activeImageIndex)}
                    >
                      <div className="relative h-96 bg-gray-100">
                        {/* Preload all images and show only the active one */}
                        {service.images.map((image, imageIndex) => (
                          <Image
                            key={image.id}
                            src={image.src}
                            alt={image.title}
                            width={800}
                            height={384}
                            className={`w-full h-full object-cover transition-all duration-300 absolute inset-0 ${
                              imageIndex === activeImageIndex 
                                ? 'opacity-100 group-hover:scale-105' 
                                : 'opacity-0'
                            }`}
                            priority={imageIndex === 0} // Prioritize first image
                          />
                        ))}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 z-10" />
                        
                        {/* Click to enlarge overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="bg-white bg-opacity-90 text-gray-900 px-6 py-3 rounded-lg font-medium text-lg">
                            Click to enlarge
                          </div>
                        </div>

                        {/* Image counter badge */}
                        {service.images.length > 1 && (
                          <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-full z-20">
                            {activeImageIndex + 1} of {service.images.length}
                          </div>
                        )}
                      </div>

                      {/* Image info overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
                        <h4 className="text-white font-semibold text-xl mb-2">
                          {activeImage.title}
                        </h4>
                        <p className="text-gray-200 text-sm">
                          {activeImage.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Thumbnail Strip */}
                    {service.images.length > 1 && (
                      <motion.div 
                        className="flex gap-3 justify-center"
                        variants={reducedMotion ? {} : slideUp}
                        transition={{ delay: serviceIndex * 0.1 + 0.2 }}
                      >
                        {service.images.map((image, imageIndex) => (
                          <motion.button
                            key={image.id}
                            className={`relative group flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                              imageIndex === activeImageIndex 
                                ? 'border-red-500 ring-2 ring-red-200' 
                                : 'border-gray-200 hover:border-red-300'
                            }`}
                            onClick={() => setActiveImage(service.id, imageIndex)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Image
                              src={image.src}
                              alt={image.title}
                              width={120}
                              height={80}
                              className="w-24 h-16 object-cover"
                            />
                            {imageIndex !== activeImageIndex && (
                              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300" />
                            )}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          {serviceProjects.length === 0 && (
            <motion.div 
              className="text-center py-20"
              variants={reducedMotion ? {} : slideUp}
            >
              <p className="body-lg text-gray-500">
                Project gallery coming soon. Check back for our latest completed work!
              </p>
            </motion.div>
          )}

          <motion.div 
            className="text-center mt-16"
            variants={reducedMotion ? {} : slideUp}
          >
            <p className="body-base text-gray-600 mb-6">
              Don&apos;t See Your Project Type?
            </p>
            <motion.a 
              href="#contact"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Custom Quote
            </motion.a>
          </motion.div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentService && (
          <Lightbox
            images={currentService.images}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </>
  );
} 