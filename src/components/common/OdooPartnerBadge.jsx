import React from 'react';
import odooLogo from '../../assets/logos/odoo.png';
import odooWhiteLogo from '../../assets/logos/odoo-white.png';

// Official Odoo Brand Logo (Real Asset from Official Spec)
export function OdooLogo({ className = "h-3.5 w-auto", fill, theme = "light" }) {
  const isDark = theme === "dark" || fill === "#FFFFFF" || fill === "white";
  return (
    <img
      src={isDark ? odooWhiteLogo : odooLogo}
      alt="Odoo"
      className={`${className} object-contain inline-block align-middle`}
    />
  );
}

export function OdooGlyph({ className = "w-4 h-4", theme = "light" }) {
  return (
    <img
      src={theme === "dark" ? odooWhiteLogo : odooLogo}
      alt="Odoo"
      className={`${className} object-contain inline-block align-middle`}
    />
  );
}

/**
 * Clean, elegant Official Odoo Partner pill badge.
 * Replaces loud electric blue borders/text with refined neutral borders & typography,
 * paired with the official Odoo brand logo.
 */
export default function OdooPartnerBadge({
  text = "Official Odoo Partner",
  theme = "light", // 'light' | 'dark'
  className = ""
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={`inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold select-none transition-all duration-200 ${isDark
        ? 'bg-white/5 border border-white/15 text-white/90 shadow-2xs hover:border-white/30'
        : 'bg-dark/5 border border-dark/15 text-dark/80 shadow-2xs hover:border-dark/25'
        } ${className}`}
    >
      <OdooLogo
        className="h-3 sm:h-3.5 w-auto flex-shrink-0"
        theme={isDark ? "dark" : "light"}
      />
      <span className={`w-px h-3 ${isDark ? 'bg-white/20' : 'bg-dark/20'}`} />
      <span className="truncate">{text}</span>
    </div>
  );
}

