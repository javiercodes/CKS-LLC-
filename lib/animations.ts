import { Variants } from 'framer-motion';

// Animation durations and easing
export const ANIMATION = {
  durations: {
    fast: 0.15,
    normal: 0.25,
    slow: 0.4,
    slower: 0.6,
  },
  ease: {
    smooth: [0.25, 0.46, 0.45, 0.94],
    spring: [0.34, 1.56, 0.64, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
  stagger: {
    fast: 0.03,
    normal: 0.08,
    slow: 0.15,
  },
} as const;

// Check for reduced motion preference
export const getReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Base animation variants
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
    transition: { duration: ANIMATION.durations.fast }
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: ANIMATION.durations.normal,
      ease: ANIMATION.ease.smooth 
    }
  },
};

export const slideUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 8,
    transition: { duration: ANIMATION.durations.fast }
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: ANIMATION.durations.normal,
      ease: ANIMATION.ease.smooth 
    }
  },
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0,
    x: -24,
    transition: { duration: ANIMATION.durations.fast }
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: ANIMATION.durations.normal,
      ease: ANIMATION.ease.smooth 
    }
  },
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0,
    x: 24,
    transition: { duration: ANIMATION.durations.fast }
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: ANIMATION.durations.normal,
      ease: ANIMATION.ease.smooth 
    }
  },
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.96,
    transition: { duration: ANIMATION.durations.fast }
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: ANIMATION.durations.normal,
      ease: ANIMATION.ease.smooth 
    }
  },
};

// Stagger container variants
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: ANIMATION.stagger.normal,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: ANIMATION.stagger.fast,
    },
  },
};

// Text animation variants for splitting lines
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.durations.normal,
      ease: ANIMATION.ease.smooth,
    },
  },
};

// Card hover variants
export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    transition: {
      duration: ANIMATION.durations.fast,
      ease: ANIMATION.ease.smooth,
    },
  },
  hover: {
    y: -4,
    scale: 1,
    transition: {
      duration: ANIMATION.durations.fast,
      ease: ANIMATION.ease.smooth,
    },
  },
};

// Button press variants
export const buttonPress: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  press: {
    scale: 0.98,
    y: 1,
    transition: {
      duration: ANIMATION.durations.fast,
      ease: ANIMATION.ease.smooth,
    },
  },
};

// Floating animation for idle states
export const floating: Variants = {
  animate: {
    y: [-3, 3, -3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Parallax variants
export const parallaxSlow: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: ANIMATION.durations.slower,
      ease: ANIMATION.ease.smooth,
    },
  },
  animate: {
    scale: 1.03,
    transition: {
      duration: ANIMATION.durations.slower,
      ease: ANIMATION.ease.smooth,
    },
  },
}; 