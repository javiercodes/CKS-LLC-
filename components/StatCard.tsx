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
      className="text-center p-4 bg-gray-50 rounded-xl"
      variants={reducedMotion ? {} : scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
      transition={{ duration: 0.3 }}
      style={{ willChange: 'transform' }}
    >
      <motion.div 
        className="text-2xl font-bold text-red-600 mb-1"
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );
} 