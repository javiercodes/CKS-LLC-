import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { scaleIn, getReducedMotion } from '@/lib/animations';

interface FloatingCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

/**
 * Clean feature card with numbered circles and minimal design
 */
export default function FloatingCard({ 
  number, 
  title, 
  description, 
  delay = 0 
}: FloatingCardProps) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const reducedMotion = getReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="text-center group cursor-default"
      variants={reducedMotion ? {} : scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      style={{ willChange: 'transform' }}
    >
      <motion.div
        className="w-20 h-20 border-2 border-gray-300 flex items-center justify-center mx-auto mb-8"
        whileHover={reducedMotion ? {} : {
          borderColor: '#dc2626',
          scale: 1.05,
        }}
        transition={{ duration: 0.3 }}
        style={{
          borderRadius: '50%',
        }}
      >
        <motion.span 
          className="text-2xl text-red-600 font-bold"
          whileHover={reducedMotion ? {} : { scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {number}
        </motion.span>
      </motion.div>
      
      <h3 className="heading-sm text-gray-900 mb-4">
        {title}
      </h3>
      
      <p className="body-base text-gray-600">
        {description}
      </p>
    </motion.div>
  );
} 