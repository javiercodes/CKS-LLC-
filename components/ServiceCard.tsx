import React from 'react';
import { motion } from 'framer-motion';
import { cardHover, getReducedMotion } from '@/lib/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  onLearnMore?: () => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon,
  onLearnMore 
}: ServiceCardProps) {
  const reducedMotion = getReducedMotion();

  return (
    <motion.div 
      className="service-card cursor-pointer group"
      initial="rest"
      whileHover={reducedMotion ? {} : { y: -2 }}
      whileFocus={reducedMotion ? {} : { y: -2 }}
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
      <div className="mb-6">
        <motion.span 
          className="text-2xl text-red-600 block mb-4" 
          role="img" 
          aria-label={title}
          whileHover={reducedMotion ? {} : {
            scale: 1.1,
          }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
        <h3 className="heading-sm text-gray-900 mb-4">{title}</h3>
      </div>
      
      <p className="body-base text-gray-600 mb-6 leading-relaxed">{description}</p>
      
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
    </motion.div>
  );
} 