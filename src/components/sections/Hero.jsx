import React, { useState, useEffect, useRef } from 'react';
import { useRegion } from '../../context/RegionContext';
import odooLogo from '../../assets/new_logos/odoo.png';
import shopifyLogo from '../../assets/new_logos/shopify.png';
import stripeLogo from '../../assets/new_logos/stripe.png';
import woocommerceLogo from '../../assets/new_logos/woocommerce.png';
import postgresqlLogo from '../../assets/new_logos/postgresql.png';
import pythonLogo from '../../assets/new_logos/python.png';

/* ========================================================================= */
/* USL STUDIO FULL-VIEWPORT HERO + SCROLL-REVEALED TRUST BAR                 */
/* Covers 100vh full screen on initial load.                                 */
/* Institutional status line and trust bar appear on scroll.                 */
/* Desktop: Logos appear one by one with staggered entrance animation.       */
/* Mobile: Continuous infinite marquee moving smoothly from left to right.   */
/* ========================================================================= */

const PARTNER_LOGOS = [
  {
    id: "odoo",
    name: "Odoo Partner",
    render: () => (
      <div className="flex items-center gap-2 flex-shrink-0 hover:scale-105 transition-transform duration-200 cursor-default">
        <img 
          src={odooLogo} 
          alt="Odoo" 
          className="h-[21px] sm:h-[24px] w-auto object-contain" 
        />
        <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-[#875A7B]/25 text-[#875A7B] bg-[#875A7B]/5 font-semibold">
          Partner
        </span>
      </div>
    )
  },
  {
    id: "shopify",
    name: "Shopify",
    render: () => (
      <div className="flex items-center flex-shrink-0 hover:scale-105 transition-transform duration-200 cursor-default">
        <img 
          src={shopifyLogo} 
          alt="Shopify" 
          className="h-[22px] sm:h-[25px] w-auto object-contain" 
        />
      </div>
    )
  },
  {
    id: "stripe",
    name: "Stripe",
    render: () => (
      <div className="flex items-center flex-shrink-0 hover:scale-105 transition-transform duration-200 cursor-default">
        <img 
          src={stripeLogo} 
          alt="Stripe" 
          className="h-[19px] sm:h-[22px] w-auto object-contain" 
        />
      </div>
    )
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    render: () => (
      <div className="flex items-center flex-shrink-0 hover:scale-105 transition-transform duration-200 cursor-default">
        <img 
          src={woocommerceLogo} 
          alt="WooCommerce" 
          className="h-[20px] sm:h-[23px] w-auto object-contain" 
        />
      </div>
    )
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    render: () => (
      <div className="flex items-center flex-shrink-0 hover:scale-105 transition-transform duration-200 cursor-default">
        <img 
          src={postgresqlLogo} 
          alt="PostgreSQL" 
          className="h-[20px] sm:h-[23px] w-auto object-contain" 
        />
      </div>
    )
  },
  {
    id: "python",
    name: "Python",
    render: () => (
      <div className="flex items-center flex-shrink-0 hover:scale-105 transition-transform duration-200 cursor-default">
        <img 
          src={pythonLogo} 
          alt="Python" 
          className="h-[24px] sm:h-[28px] w-auto object-contain" 
        />
      </div>
    )
  }
];

function HeroWord({ children, delay, className = '' }) {
  return (
    <span className={`q-hero-word ${className}`}>
      <span className="q-hero-word-inner q-hero-rise" style={{ '--d': `${delay}s` }}>
        {children}
      </span>
    </span>
  );
}

export default function Hero({ onOpenConsultation }) {
  const { region } = useRegion();
  const trustSectionRef = useRef(null);
  const [trustVisible, setTrustVisible] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#trust' && trustSectionRef.current) {
      trustSectionRef.current.scrollIntoView();
      setTrustVisible(true);
    }

    const el = trustSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrustVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div className="bg-bone text-dark select-none">
      
      {/* ── 1. FULL VIEWPORT (100vh) MONUMENTAL EDITORIAL HERO ── */}
      <section className="q-hero min-h-screen min-h-[100dvh] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 relative z-10">
        
        {/* Main 2-Column Content - Vertically Centered in Available Viewport */}
        <div className="w-full max-w-7xl mx-auto my-auto">
          <div className="q-hero-grid w-full">
            
            {/* Left Column: Exactly 3 clean lines matching user screenshot */}
            <div>
              <h1 className="q-hero-headline font-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-medium tracking-tight text-dark leading-[1.08] sm:leading-[1.05]">
                <span className="q-hero-line block whitespace-normal sm:whitespace-nowrap">
                  <HeroWord delay={0.08}>Your</HeroWord>
                  <HeroWord delay={0.14}>enterprise</HeroWord>
                  <HeroWord delay={0.20}>has</HeroWord>
                </span>
                <span className="q-hero-line block whitespace-normal sm:whitespace-nowrap">
                  <HeroWord delay={0.26}>outgrown</HeroWord>
                  <HeroWord delay={0.32}>its</HeroWord>
                  <HeroWord delay={0.38}>systems.</HeroWord>
                </span>
                <span className="q-hero-line block whitespace-normal sm:whitespace-nowrap">
                  <HeroWord delay={0.44}>We</HeroWord>
                  <HeroWord delay={0.50} className="text-accent font-semibold">
                    calibrate that.
                  </HeroWord>
                </span>
              </h1>
            </div>

            {/* Right Column: Clean single narrative + Underlined CTA link */}
            <div className="q-hero-right flex flex-col justify-center self-center">
              <span className="q-hero-mask">
                <p className="q-hero-description q-hero-rise text-sm sm:text-base md:text-[17px] text-dark/75 leading-relaxed font-normal max-w-md" style={{ '--d': '0.35s' }}>
                  Qalibrate is an official Odoo partner that replaces scattered spreadsheets, disconnected apps and manual reporting with one connected Odoo ERP, then makes it smarter with AI that automates the busywork and surfaces what matters.
                </p>
              </span>

              {/* Clean Underlined CTA Link (Matching Screenshot 1:1) */}
              <div className="mt-5 sm:mt-7">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="q-hero-link-cta font-mono uppercase tracking-wider text-xs sm:text-sm font-semibold text-dark hover:text-accent transition-colors underline underline-offset-4 decoration-dark/40 hover:decoration-accent py-1 cursor-pointer inline-flex items-center gap-1.5 group"
                >
                  <span>Schedule Scope & Quote</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ── 2. TRUST & CREDENTIALS: APPEARS ON SCROLL BELOW THE 100vh FOLD ── */}
      <section 
        id="trust"
        ref={trustSectionRef}
        className="py-10 sm:py-14 md:py-16 border-y border-dark/10 bg-white/70 relative z-10 select-none overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Institutional Status Bar (Appears on scroll as requested) */}
          <div className="pb-8 sm:pb-10 mb-8 sm:mb-10 border-b border-dark/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-dark/50 font-medium">
            <div>Institutional Engineering</div>
            <div>{region.heroStatus}</div>
          </div>

          {/* Subtle Centered Header */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-mono text-dark/50 tracking-wider">
              40+ partners & enterprise platforms connect with our systems
            </span>
          </div>

          {/* DESKTOP & TABLET: Staggered Appearance Animation (One by One) */}
          <div className="hidden md:flex items-center justify-between gap-8 lg:gap-12 py-2 px-2">
            {PARTNER_LOGOS.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  opacity: trustVisible ? 1 : 0,
                  transform: trustVisible ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.96)',
                  transition: `opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100}ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 100}ms`,
                  willChange: 'opacity, transform'
                }}
              >
                {item.render()}
              </div>
            ))}
          </div>

          {/* MOBILE: Continuous Marquee Moving from Left to Right */}
          <div className="md:hidden relative overflow-hidden py-3 -mx-4 sm:-mx-6">
            {/* Left and right soft edge gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-partner-marquee-ltr flex items-center gap-10">
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((item, i) => (
                <div key={`${item.id}-m-${i}`} className="flex-shrink-0">
                  {item.render()}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
