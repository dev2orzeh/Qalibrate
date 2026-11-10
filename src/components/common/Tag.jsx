import React from 'react';

/**
 * Small label pill with a vertical accent bar, matching the reference design.
 * variant: 'light' (on light backgrounds) | 'dark' (on dark backgrounds)
 */
export default function Tag({ children, variant = 'light', className = '' }) {
  const styles = {
    light: 'bg-neutral-50 text-neutral-900 border-neutral-200',
    dark: 'bg-neutral-900 text-white border-neutral-800',
    muted: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md border font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-wider ${styles[variant] || styles.light} ${className}`}
    >
      <span className={`w-[2px] h-3 rounded-full ${variant === 'dark' ? 'bg-white' : 'bg-neutral-950'}`} aria-hidden="true" />
      {children}
    </span>
  );
}
