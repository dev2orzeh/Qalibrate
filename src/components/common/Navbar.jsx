import React, { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { useRegion } from '../../context/RegionContext';

export default function Navbar({ onOpenConsultation, onNavigateHome, currentView = 'home' }) {
  const { region, isPakistan, setRegionByPath } = useRegion();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      
      if (currentY > lastScrollY && currentY > 300) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "The Method", href: "#method" },
    { name: "Industries", href: "#industries" },
    { name: "Why Us", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
  ];

  const toggleMobile = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    if (currentView === 'booking' && onNavigateHome) {
      onNavigateHome('');
    } else {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    if (currentView === 'booking' && onNavigateHome) {
      onNavigateHome(href);
    }
  };

  const navClasses = [
    'q-navbar',
    scrolled ? 'q-navbar--scrolled' : '',
    hidden && !mobileMenuOpen ? 'q-navbar--hidden' : '',
    mobileMenuOpen ? 'q-navbar--scrolled' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClasses}>
        {/* Logo */}
        <a 
          href="#" 
          className="q-nav-logo flex items-center gap-2.5 cursor-pointer" 
          onClick={handleHomeClick}
          title="Return to top"
        >
          <img 
            src="/logo-mark.png" 
            alt="Qalibrate" 
          />
          <span 
            className="font-heading font-semibold text-base tracking-tight"
            style={{ color: scrolled || mobileMenuOpen ? '#fff' : 'var(--text-primary)' }}
          >
            Qalibrate
          </span>
        </a>

        {/* Center Nav Links */}
        <ul className="q-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => {
                  if (currentView === 'booking') {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="flex items-center gap-3 relative z-[1060]">
          {/* Subtle Region Selector Switcher */}
          <div className="hidden sm:flex items-center text-[10px] font-mono uppercase tracking-wider rounded-full border border-dark/15 px-1 py-0.5 bg-white/40">
            <button
              onClick={() => {
                setRegionByPath('/');
                window.history.pushState(null, '', '/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-2 py-0.5 rounded-full transition-all ${!isPakistan ? 'bg-dark text-white font-semibold' : 'text-dark/60 hover:text-dark'}`}
            >
              Global
            </button>
            <button
              onClick={() => {
                setRegionByPath('/pk');
                window.history.pushState(null, '', '/pk');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-2 py-0.5 rounded-full transition-all ${isPakistan ? 'bg-accent text-white font-semibold' : 'text-dark/60 hover:text-dark'}`}
            >
              PK
            </button>
          </div>

          <button onClick={onOpenConsultation} className="q-nav-cta">
            Book Consultation <span className="arrow">→</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            className={`q-hamburger ${mobileMenuOpen ? 'q-hamburger--open' : ''}`}
            onClick={toggleMobile}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="q-hamburger-line" />
            <span className="q-hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay — Outside nav to prevent backdrop-filter containment */}
      <div 
        className={`q-mobile-menu ${mobileMenuOpen ? 'q-mobile-menu--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col items-center gap-8 px-6 text-center w-full max-w-sm">
          <ul className="q-mobile-menu-links">
            {navLinks.map((link, i) => (
              <li 
                key={link.name}
                style={{ 
                  transitionDelay: mobileMenuOpen ? `${0.08 + i * 0.04}s` : '0s',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.35s, transform 0.35s'
                }}
              >
                <a 
                  href={link.href} 
                  onClick={(e) => {
                    if (currentView === 'booking') {
                      e.preventDefault();
                    }
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="flex flex-col items-center gap-3.5 w-full pt-4"
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.35s 0.25s, transform 0.35s 0.25s',
            }}
          >
            <button
              onClick={() => { handleNavClick(); onOpenConsultation(); }}
              className="w-full font-mono uppercase tracking-widest text-xs text-white bg-accent hover:bg-accent-hover rounded-full px-8 py-3.5 transition-all shadow-lg font-semibold cursor-pointer"
            >
              Book Consultation <span>→</span>
            </button>

            <a
              href="https://wa.me/923001234567?text=Hello%20Qalibrate%20team"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors py-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-accent" />
              <span>WhatsApp Senior Architect</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
