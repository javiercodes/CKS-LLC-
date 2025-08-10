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
      className="card p-6 cursor-pointer group"
      variants={reducedMotion ? {} : cardHover}
      initial="rest"
      whileHover={{
        ...(!reducedMotion && cardHover.hover),
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      whileFocus={{
        ...(!reducedMotion && cardHover.hover),
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
      transition={{ duration: 0.2 }}
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
      <div className="flex items-center mb-4">
        <motion.span 
          className="text-3xl mr-3" 
          role="img" 
          aria-label={title}
          whileHover={reducedMotion ? {} : {
            x: 3,
            rotate: 5,
          }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <motion.span
        className="text-red-600 font-medium inline-flex items-center group-focus:underline"
        whileHover={reducedMotion ? {} : {
          x: 6,
        }}
        transition={{ duration: 0.2 }}
      >
        Learn more
        <motion.span
          className="ml-1"
          whileHover={reducedMotion ? {} : {
            x: 4,
            opacity: 0.7,
          }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </motion.span>
    </motion.div>
  );
} 