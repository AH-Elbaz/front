'use client';

import React from 'react';

interface FeatureCardProps {
  imageSrc: string;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute top-6 left-6">
        <h3 className="text-white text-2xl font-bold max-w-[200px]">{title}</h3>
      </div>
      <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer group-hover:bg-white/30 transition-colors">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </div>
  );
};

export default FeatureCard;
