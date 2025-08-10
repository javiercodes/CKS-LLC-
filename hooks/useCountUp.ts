import { useState, useEffect } from 'react';
import { getReducedMotion } from '@/lib/animations';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnMount?: boolean;
}

/**
 * Lightweight count-up animation hook
 * Respects prefers-reduced-motion setting
 */
export const useCountUp = ({ 
  end, 
  duration = 1500, 
  startOnMount = false 
}: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(startOnMount);

  useEffect(() => {
    if (!isActive) return;

    // If user prefers reduced motion, set final value immediately
    if (getReducedMotion()) {
      setCount(end);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (end - startValue) * easeProgress);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [isActive, end, duration]);

  const start = () => setIsActive(true);
  const reset = () => {
    setIsActive(false);
    setCount(0);
  };

  return { count, start, reset, isActive };
}; 