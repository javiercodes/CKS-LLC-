import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  className?: string;
  centered?: boolean;
}

export default function SectionHeading({ 
  children, 
  level = 'h2', 
  className = '',
  centered = false 
}: SectionHeadingProps) {
  const baseClasses = `font-bold text-gray-900 ${centered ? 'text-center' : ''}`;
  
  const levelClasses = {
    h1: 'text-4xl sm:text-5xl lg:text-6xl',
    h2: 'text-3xl sm:text-4xl',
    h3: 'text-2xl sm:text-3xl',
  };

  const Tag = level;

  return (
    <Tag className={`${baseClasses} ${levelClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
} 