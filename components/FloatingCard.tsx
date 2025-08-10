import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { scaleIn, floating, getReducedMotion } from '@/lib/animations';

interface FloatingCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

/**
 * Floating card with subtle hover effects and idle animation
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
        className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
        variants={reducedMotion ? {} : floating}
        animate="animate"
        whileHover={{
          scale: 1.1,
          backgroundColor: 'rgb(254, 226, 226)', // red-100 to red-50
        }}
        whileFocus={{
          scale: 1.1,
          boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.3)',
        }}
        transition={{ 
          scale: { duration: 0.2 },
          backgroundColor: { duration: 0.3 }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Feature ${number}: ${title}`}
      >
        {/* Concentric halo effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{
            scale: [1, 1.2, 1.4],
            opacity: [0.3, 0.15, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)',
          }}
        />
        
        <motion.span 
          className="text-2xl text-red-600 font-bold relative z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {number}
        </motion.span>
      </motion.div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
} 