import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cardHover, getReducedMotion } from '@/lib/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image?: string;
  onLearnMore?: () => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon,
  image,
  onLearnMore 
}: ServiceCardProps) {
  const reducedMotion = getReducedMotion();

  return (
    <motion.div 
      className="service-card cursor-pointer group overflow-hidden"
      initial="rest"
      whileHover={reducedMotion ? {} : { y: -4 }}
      whileFocus={reducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.3 }}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${title}`}
      onClick={onLearnMore}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onLearnMore?.();
        }
      }}
    >
      {/* Mobile: Vertical Layout */}
      <div className="flex flex-col h-full md:hidden">
        {/* Top Image */}
        {image && (
          <div className="w-full relative">
            <div className="h-48 relative overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={400}
                height={192}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
          </div>
        )}

        {/* Bottom Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <motion.span 
                className="text-2xl text-red-600 block mb-3" 
                role="img" 
                aria-label={title}
                whileHover={reducedMotion ? {} : {
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.span>
              <h3 className="heading-sm text-gray-900 mb-3">{title}</h3>
            </div>
            
            <p className="body-base text-gray-600 mb-6 leading-relaxed">{description}</p>
          </div>
          
          <motion.span
            className="text-red-600 font-medium inline-flex items-center text-sm uppercase tracking-[0.1em] group-hover:text-red-700 transition-colors duration-200"
            whileHover={reducedMotion ? {} : {
              x: 4,
            }}
            transition={{ duration: 0.2 }}
          >
            Learn more
            <motion.span
              className="ml-2"
              whileHover={reducedMotion ? {} : {
                x: 2,
              }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.span>
        </div>
      </div>

      {/* Desktop/Tablet: Horizontal Layout */}
      <div className="hidden md:flex h-full">
        {/* Left Content */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <motion.span 
                className="text-3xl text-red-600 block mb-4" 
                role="img" 
                aria-label={title}
                whileHover={reducedMotion ? {} : {
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.span>
              <h3 className="heading-md text-gray-900 mb-4">{title}</h3>
            </div>
            
            <p className="body-base text-gray-600 mb-8 leading-relaxed">{description}</p>
          </div>
          
          <motion.span
            className="text-red-600 font-medium inline-flex items-center text-sm uppercase tracking-[0.1em] group-hover:text-red-700 transition-colors duration-200"
            whileHover={reducedMotion ? {} : {
              x: 4,
            }}
            transition={{ duration: 0.2 }}
          >
            Learn more
            <motion.span
              className="ml-2"
              whileHover={reducedMotion ? {} : {
                x: 2,
              }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.span>
        </div>

        {/* Right Image */}
        {image && (
          <div className="flex-shrink-0 w-1/2 relative">
            <div className="h-full relative overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
} 