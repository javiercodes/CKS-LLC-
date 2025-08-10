import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { staggerContainer, getReducedMotion } from '@/lib/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  threshold?: number;
}

/**
 * Animated section wrapper that triggers animations when in view
 */
export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  stagger = 0.08,
  threshold = 0.1
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold });
  const reducedMotion = getReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={reducedMotion ? {} : containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
} 