import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  onLearnMore?: () => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon,
  onLearnMore 
}: ServiceCardProps) {
  return (
    <div className="card p-6">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3" role="img" aria-label={title}>
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <button
        onClick={onLearnMore}
        className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200 focus:outline-none focus:underline"
      >
        Learn more →
      </button>
    </div>
  );
} 