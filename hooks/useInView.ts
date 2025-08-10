import { useInView as useInViewOriginal } from 'react-intersection-observer';
import { getReducedMotion } from '@/lib/animations';

interface UseInViewOptions {
  triggerOnce?: boolean;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook for intersection observer with animation support
 * Respects prefers-reduced-motion setting
 */
export const useInView = (options: UseInViewOptions = {}) => {
  const {
    triggerOnce = true,
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
  } = options;

  const { ref, inView } = useInViewOriginal({
    triggerOnce,
    threshold,
    rootMargin,
  });

  // If user prefers reduced motion, trigger immediately
  const shouldAnimate = getReducedMotion() ? true : inView;

  return { ref, inView: shouldAnimate };
};

/**
 * Hook for staggered animations with sequential triggers
 */
export const useStaggeredInView = (count: number, options: UseInViewOptions = {}) => {
  const { ref, inView } = useInView(options);
  
  // Generate staggered visibility states
  const items = Array.from({ length: count }, (_, index) => ({
    isVisible: inView,
    delay: index * 0.08, // 80ms stagger
  }));

  return { ref, items };
}; 