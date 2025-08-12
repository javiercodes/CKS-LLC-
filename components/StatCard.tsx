import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { scaleIn, getReducedMotion } from '@/lib/animations';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
}

/**
 * Animated stat card with count-up animation when in view
 */
export default function StatCard({ value, label, suffix = '' }: StatCardProps) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { count, start } = useCountUp({ 
    end: value, 
    duration: 1500 
  });
  const reducedMotion = getReducedMotion();

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return (
    <motion.div
      ref={ref}
      className="text-center border border-gray-200 bg-white p-8"
      variants={reducedMotion ? {} : scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={reducedMotion ? {} : {
        y: -2,
        borderColor: '#dc2626'
      }}
      transition={{ duration: 0.3 }}
      style={{ willChange: 'transform' }}
    >
      <motion.div 
        className="text-4xl font-bold text-red-600 mb-2"
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="body-sm text-gray-600 uppercase tracking-[0.1em]">{label}</div>
    </motion.div>
  );
} 