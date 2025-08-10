import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerFast, textReveal, getReducedMotion } from '@/lib/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

/**
 * Animated text component that splits text into lines and animates them with stagger
 */
export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const reducedMotion = getReducedMotion();
  
  // Split text into lines (assuming text has line breaks or we split by certain length)
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  // If no line breaks, split by words and group into reasonable lines
  if (lines.length === 1) {
    const words = text.split(' ');
    const linesFromWords: string[] = [];
    let currentLine = '';
    
    words.forEach((word, index) => {
      if (currentLine.length + word.length + 1 <= 50) { // Approximate line length
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        if (currentLine) linesFromWords.push(currentLine);
        currentLine = word;
      }
      
      if (index === words.length - 1 && currentLine) {
        linesFromWords.push(currentLine);
      }
    });
    
    return (
      <motion.div 
        className={className}
        variants={reducedMotion ? {} : staggerContainerFast}
        initial="hidden"
        animate="visible"
        style={{ willChange: 'transform' }}
        transition={{ delay }}
      >
        {linesFromWords.map((line, index) => (
          <motion.div
            key={index}
            variants={reducedMotion ? {} : textReveal}
            className="overflow-hidden"
          >
            <motion.span className="inline-block">
              {line}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={className}
      variants={reducedMotion ? {} : staggerContainerFast}
      initial="hidden"
      animate="visible"
      style={{ willChange: 'transform' }}
      transition={{ delay }}
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          variants={reducedMotion ? {} : textReveal}
          className="overflow-hidden"
        >
          <motion.span className="inline-block">
            {line}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
} 