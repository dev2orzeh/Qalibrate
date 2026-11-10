import React from 'react';
import Reveal from '../common/Reveal';
import WhatsAppIcon from '../common/WhatsAppIcon';
import OdooPartnerBadge from '../common/OdooPartnerBadge';
import qalibrateWhiteLogo from '../../assets/logo-full-white.png';
import { ArrowUpRight, ArrowUp, MapPin } from 'lucide-react';

/* ========================================================================= */
/* ARCHITECTURAL EDITORIAL FOOTER (Well-Spaced, Non-AI, Luxury Craft)         */
/* ========================================================================= */

export default function Footer({ onOpenConsultation }) {
  const odooServices = [
    { name: "Enterprise Implementation", href: "#services" },
    { name: "Custom Module Development", href: "#services" },
    { name: "API & System Integrations", href: "#services" },
    { name: "Version Upgrades & Migration", href: "#services" },
    { name: "ERP Rescue & Code Audit", href: "#services" },
    { name: "Dedicated SLA & Support", href: "#services" }
  ];

  const industrySolutions = [
    { name: "Manufacturing & MRP", href: "#industries" },
    { name: "Retail POS & Omnichannel", href: "#industries" },
    { name: "Distribution & Logistics", href: "#industries" },
    { name: "FBR Digital Fiscalization", href: "#services" },
    { name: "Upgrade-Safe Architecture", href: "#why-us" }
  ];

  const companyLinks = [
    { name: "The Method", href: "#method" },
    { name: "Industry Verticals", href: "#industries" },
    { name: "Global Deployment Network", href: "#deployment-network" },
    { name: "Architecture FAQ", href: "#faq" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/923001234567?text=Hello%20Qalibrate%20team', '_blank');
  };

  return (
    <footer className="bg-[#080B11] text-white relative overflow-hidden select-none border-t border-white/10">
      {/* Subtle Blueprint Radial Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-24 md:pt-28 pb-14 sm:pb-18 md:pb-20 relative z-10">
        
        {/* ── TOP SECTION: ARCHITECTURAL BRAND STATEMENT & DIRECT INQUIRY ── */}
        <Reveal direction="up" delay={40}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-14 sm:pb-16 md:pb-20 border-b border-white/10">
            
            {/* Left 7 Cols: Brand Identity & Concrete Engineering Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3.5 mb-5">
                  <img 
                    src={qalibrateWhiteLogo} 
                    alt="Qalibrate" 
                    className="h-7 sm:h-8 w-auto object-contain cursor-pointer hover:opacity-85 transition-opacity" 
                    onClick={scrollToTop}
                    title="Return to top"
                  />
                  <OdooPartnerBadge theme="dark" text="Official Odoo Partner" />
                </div>

                <p className="text-sm sm:text-base text-white/65 leading-relaxed max-w-xl font-normal">
                  Institutional ERP engineering for growing enterprises in Pakistan, Dubai, and Texas. We replace fragmented spreadsheets and brittle point solutions with a single, connected Odoo foundation built to scale.
                </p>
              </div>

              {/* Status Badge with Live Pulse */}
              <div className="mt-8 flex items-center">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono text-white/75">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>All Systems Operational · Odoo 20 Ready</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Direct Inquiries & Physical Presence */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-0 lg:pl-6 lg:border-l lg:border-white/10">
              {/* Direct Inquiries */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-2 font-semibold">
                  Direct Inquiries & Scope
                </div>
                <a
                  href="mailto:solutions@qalibrate.pk"
                  className="font-heading text-lg sm:text-xl text-white hover:text-white/80 transition-colors font-medium inline-flex items-center gap-2 group"
                >
                  <span>solutions@qalibrate.pk</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
                <p className="text-xs text-white/50 mt-1.5 font-normal">
                  Guaranteed response within 1 business day from a Senior ERP Architect.
                </p>
              </div>

              {/* Physical Deployment Hubs */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3 font-semibold">
                  Global Deployment Hubs
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/70">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-white/60 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Pakistan</div>
                      <div className="text-white/50">Islamabad & Lahore</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-white/60 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Dubai</div>
                      <div className="text-white/50">UAE Regional Hub</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-white/60 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Texas</div>
                      <div className="text-white/50">US Operations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Trigger */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-white/90 hover:text-white transition-colors cursor-pointer group"
                >
                  <span>Schedule Scope & Quote Consultation</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>

            </div>

          </div>
        </Reveal>

        {/* ── MIDDLE SECTION: REFINED 3-COLUMN DIRECTORY WITH GENEROUS SPACING ── */}
        <Reveal direction="up" delay={80}>
          <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 border-b border-white/10">
            
            {/* Col 1: Odoo ERP Practice */}
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-5 font-semibold">
                Odoo Practice
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-white/70">
                {odooServices.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Solutions & Compliance */}
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-5 font-semibold">
                Solutions & Standards
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-white/70">
                {industrySolutions.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Firm Navigation */}
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-5 font-semibold">
                Firm
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-white/70 mb-6">
                {companyLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Architect Desk</span>
                </button>
              </div>
            </div>

          </div>
        </Reveal>

        {/* ── BOTTOM UTILITY BAR: GENEROUS PADDING, UNCONGESTED METADATA ── */}
        <div className="pt-8 sm:pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-white/45">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div>© {new Date().getFullYear()} Qalibrate</div>
            <span className="hidden sm:inline text-white/20">·</span>
            <div>All rights reserved.</div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="text-white/60">Official Odoo Partner</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white/50 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
