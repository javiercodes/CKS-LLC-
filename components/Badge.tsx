import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'primary', 
  className = '' 
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  
  const variantClasses = {
    primary: 'bg-red-100 text-red-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
} 