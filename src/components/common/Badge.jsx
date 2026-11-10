import React from 'react';

export default function Badge({ children, variant = 'neutral', className = '' }) {
  const variantStyles = {
    neutral: 'bg-neutral-50 text-neutral-900 border-neutral-200 shadow-2xs',
    lime: 'bg-neutral-100 text-neutral-900 border-neutral-200',
    emerald: 'bg-neutral-100 text-neutral-900 border-neutral-200',
    purple: 'bg-neutral-50 text-neutral-900 border-neutral-200',
    slate: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    dark: 'bg-neutral-950 text-white border-neutral-800'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border transition-all ${variantStyles[variant] || variantStyles.neutral} ${className}`}>
      {children}
    </span>
  );
}
