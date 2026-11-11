import React, { useState, useEffect, useRef, useId } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../common/Reveal';
import { useRegion } from '../../context/RegionContext';

/* ========================================================================= */
/* TWO PRACTICES DATA (Master Brief 1:1 Match)                               */
/* Minimal, non-AI, refined typography without loud icon bubbles             */
/* ========================================================================= */

const odooServices = [
  {
    id: "impl",
    num: "01",
    title: "Odoo Implementation",
    tagline: "Standard-First Architecture",
    description: "Go live on Sales, CRM, Inventory, Purchase, Accounting, Manufacturing, HR, POS and eCommerce, configured around your real workflows. We start with standard Odoo wherever it fits, so you get a cleaner system and easier upgrades.",
    bullets: [
      "Core Sales, CRM, Inventory & POS",
      "Full Accounting & FBR Fiscal Sync",
      "Manufacturing (MRP) & Work Centers",
      "Clean Upgrade-Safe Data Structure"
    ],
    spec: "CORE ERP ROLLOUT",
    image: "/images/services/odoo-implementation.jpg"
  },
  {
    id: "custom",
    num: "02",
    title: "Odoo Customization & Module Development",
    tagline: "Bespoke Python Engineering",
    description: "When standard features aren't enough, our developers build custom modules, reports, dashboards and workflows that fit your exact process without breaking future upgrades.",
    bullets: [
      "Bespoke Python Module Engineering",
      "Automated Custom Financial Reports",
      "Multi-Department Executive Dashboards",
      "Zero-Break Version Upgrade Architecture"
    ],
    spec: "BESPOKE ENGINEERING",
    image: "/images/services/odoo-customization.jpg"
  },
  {
    id: "integration",
    num: "03",
    title: "Odoo Integrations",
    tagline: "Ecosystem Connectivity",
    description: "Connect Odoo to the tools you already rely on: payment gateways, courier services, Shopify and WooCommerce, banks, biometric devices and FBR-compliant invoicing.",
    bullets: [
      "Courier APIs (TCS, Leopards, Trax, CallCourier)",
      "Shopify & WooCommerce Live 2-Way Sync",
      "Banking & Payment Gateway Bridges (Pakistan, UAE & US)",
      "Regional Tax Invoicing & Multi-Currency Compliance"
    ],
    spec: "ECOSYSTEM BRIDGES",
    image: "/images/services/odoo-integrations.jpg"
  },
  {
    id: "migration",
    num: "04",
    title: "Odoo Migration & Upgrades",
    tagline: "Clean Ledger Migration",
    description: "Move from QuickBooks, Excel, Tally or a legacy ERP, or upgrade from an older Odoo version, with your historical data cleaned, mapped and verified before go-live.",
    bullets: [
      "Migration from QuickBooks, Tally & Excel",
      "Legacy Database Cleaning & Sanitization",
      "Opening Balance & Trial Balance Verification",
      "Seamless Upgrade to Odoo 20 Enterprise"
    ],
    spec: "LEDGER TRANSITION",
    image: "/images/services/odoo-migration.jpg"
  },
  {
    id: "rescue",
    num: "05",
    title: "Odoo Rescue",
    tagline: "Project Turnaround",
    description: "Stuck with a half-finished or poorly built system? We audit it, fix what's broken and get you to a stable go-live without starting from scratch.",
    bullets: [
      "Comprehensive Database & Module Audit",
      "Data Integrity & Ledger Reconciliation",
      "Bottleneck Removal & Speed Optimization",
      "Path to Production Go-Live in 30 Days"
    ],
    spec: "RECOVERY SPRINT",
    image: "/images/services/odoo-rescue.jpg"
  },
  {
    id: "support",
    num: "06",
    title: "Odoo Support & Training",
    tagline: "Floor-Level Adoption",
    description: "Ongoing support, health checks and hands-on training so your team actually uses the system, and keeps getting more out of it.",
    bullets: [
      "Dedicated Account Engineer (PK Timezone)",
      "Hands-On Role-Based Team Training",
      "Quarterly Performance & Health Audits",
      "SLA-Guaranteed Response & Bug Fixes"
    ],
    spec: "ONGOING MASTERY",
    image: "/images/services/odoo-support.jpg"
  }
];

const aiServices = [
  {
    id: "agents",
    num: "01",
    title: "AI Agents & Assistants",
    tagline: "Autonomous Workflow Actors",
    description: "AI assistants that work inside Odoo and your business tools: answering customer questions, drafting quotes, updating records and flagging what needs attention.",
    bullets: [
      "WhatsApp & Web Omnichannel Customer Bot",
      "Auto-Drafting Quotations & Estimates",
      "Smart Field Auto-Completion & Enrichment",
      "Real-Time Anomaly & Threshold Alerts"
    ],
    spec: "AUTONOMOUS ACTORS",
    image: "/images/services/ai-agents.jpg"
  },
  {
    id: "idp",
    num: "02",
    title: "Intelligent Document Processing",
    tagline: "Zero-Touch OCR Extraction",
    description: "Turn invoices, receipts, purchase orders and forms into clean Odoo records automatically, with no manual typing.",
    bullets: [
      "PDF Vendor Bill Extraction into Odoo Vendor Bills",
      "Multi-Currency Receipt Parsing",
      "Three-Way PO-Bill-Receipt Automated Matching",
      "99.4% Field Accuracy on Handled Invoices"
    ],
    spec: "ZERO MANUAL ENTRY",
    image: "/images/services/ai-idp.jpg"
  },
  {
    id: "bi",
    num: "03",
    title: "Forecasting & Business Intelligence",
    tagline: "Predictive Analytics",
    description: "Demand forecasts, cash-flow projections and live dashboards built on your Odoo data, so you can act before problems show up.",
    bullets: [
      "ML-Driven Inventory Demand Forecasting",
      "30/60/90 Day Cash-Flow Runway Projections",
      "Live Executive Margin & P&L Dashboards",
      "Customer Churn & Repurchase Predictive Alerts"
    ],
    spec: "DECISION INTELLIGENCE",
    image: "/images/services/ai-bi.jpg"
  },
  {
    id: "bpa",
    num: "04",
    title: "Business Process Automation",
    tagline: "Cross-System Orchestration",
    description: "Map your workflows, remove repetitive steps and automate approvals, reminders and handoffs across departments.",
    bullets: [
      "Multi-Tier Conditional Approval Chains",
      "Cross-Department Automated Task Handoffs",
      "Automated AR Escalation & Payment Reminders",
      "Warehouse-to-Finance Event Synchronization"
    ],
    spec: "FRICTIONLESS HANDOFF",
    image: "/images/services/ai-bpa.jpg"
  },
  {
    id: "consulting",
    num: "05",
    title: "Digital Transformation Consulting",
    tagline: "Strategic Systems Architecture",
    description: "A clear roadmap from where you are to where you need to be: process review, system architecture, rollout plan and change management.",
    bullets: [
      "End-to-End Operational Workflow Audit",
      "Enterprise Target Architecture Blueprint",
      "Phased Multi-Quarter Rollout Strategy",
      "Change Management & Floor Adoption Plan"
    ],
    spec: "STRATEGIC ROADMAP",
    image: "/images/services/ai-consulting.jpg"
  }
];

/* ========================================================================= */
/* LUXURY FROSTED EDITORIAL THEMES (Non-AI Studio Quality)                    */
/* Matching Framer Reference Aesthetics: Ethereal Gradients, Subtle Sheens  */
/* ========================================================================= */

const CARD_THEMES = [
  {
    // 01: Frosted Azure Ice
    bg: "from-[#F3F7FF] via-[#E8F1FF] to-[#D9E7FC]",
    border: "border-[#B9D4FC]/85",
    glow: "rgba(28, 86, 254, 0.16)",
    accentText: "#1C56FE",
    tagColor: "text-[#1C56FE] bg-[#1C56FE]/10 border-[#1C56FE]/25",
    insignia: "text-[#1C56FE] bg-white"
  },
  {
    // 02: Mineral Sage
    bg: "from-[#F3F8F5] via-[#E7F3ED] to-[#D5EAE0]",
    border: "border-[#B6DBC9]/85",
    glow: "rgba(15, 118, 110, 0.15)",
    accentText: "#0F766E",
    tagColor: "text-[#0F766E] bg-[#0F766E]/10 border-[#0F766E]/25",
    insignia: "text-[#0F766E] bg-white"
  },
  {
    // 03: Ethereal Lavender
    bg: "from-[#F7F4FB] via-[#EEE7F7] to-[#E1D4F1]",
    border: "border-[#D0BCF0]/85",
    glow: "rgba(109, 40, 217, 0.15)",
    accentText: "#6D28D9",
    tagColor: "text-[#6D28D9] bg-[#6D28D9]/10 border-[#6D28D9]/25",
    insignia: "text-[#6D28D9] bg-white"
  },
  {
    // 04: Warm Champagne / Cashmere
    bg: "from-[#FAF6F1] via-[#F4EDE1] to-[#E8DDCB]",
    border: "border-[#DCCAB0]/85",
    glow: "rgba(146, 64, 14, 0.15)",
    accentText: "#92400E",
    tagColor: "text-[#92400E] bg-[#92400E]/10 border-[#92400E]/25",
    insignia: "text-[#92400E] bg-white"
  },
  {
    // 05: Rose Quartz / Dusk Horizon
    bg: "from-[#FAF2F5] via-[#F6E6EB] to-[#EAD4DE]",
    border: "border-[#DEB9C8]/85",
    glow: "rgba(157, 23, 77, 0.15)",
    accentText: "#9D174D",
    tagColor: "text-[#9D174D] bg-[#9D174D]/10 border-[#9D174D]/25",
    insignia: "text-[#9D174D] bg-white"
  },
  {
    // 06: Slate Titanium / Platinum
    bg: "from-[#F8FAFC] via-[#EEF2F6] to-[#E1E7EE]",
    border: "border-[#CBD5E1]/90",
    glow: "rgba(15, 23, 42, 0.14)",
    accentText: "#0F172A",
    tagColor: "text-[#0F172A] bg-[#0F172A]/10 border-[#0F172A]/25",
    insignia: "text-[#0F172A] bg-white"
  }
];

// Helper for infinite circular loop: returns signed distance (-total/2 to +total/2)
const getCircularDiff = (index, active, total) => {
  let diff = index - active;
  if (diff > total / 2) {
    diff -= total;
  } else if (diff < -total / 2) {
    diff += total;
  }
  return diff;
};

/* ========================================================================= */
/* MAIN SERVICES & CAPABILITIES SECTION (Universal 3D Arc Carousel)          */
/* Full Screen Web & Mobile: 1 Left, 1 Center, 1 Right + Auto-Swipe         */
/* ========================================================================= */

export default function ServicesSection({ onOpenConsultation }) {
  const { region, isPakistan } = useRegion();
  const [practice, setPractice] = useState('odoo'); // 'odoo' | 'ai'
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const currentList = practice === 'odoo' ? odooServices : aiServices;

  // Window resize listener to calibrate responsive geometry
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous Auto-Swiping: advances every 3.8 seconds automatically
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % currentList.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isDragging, currentList.length]);

  // Reset to first slide when switching practice
  const handlePracticeChange = (newPractice) => {
    setPractice(newPractice);
    setActiveIdx(0);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : currentList.length - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => (prev < currentList.length - 1 ? prev + 1 : 0));
  };

  // Pointer Drag Handling (Mouse on Web + Touch on Mobile)
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || dragStartX === null) return;
    setDragDeltaX(e.clientX - dragStartX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const minDistance = 45;
    if (dragDeltaX < -minDistance) {
      handleNext();
    } else if (dragDeltaX > minDistance) {
      handlePrev();
    }
    setDragStartX(null);
    setDragDeltaX(0);
  };

  // Responsive Arc Parameters: calibrated for Full Screen Web + Tablet + Phone
  // 1 Left, 1 Center, 1 Right cleanly framed without crowding
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  const spacing = isDesktop ? 370 : isTablet ? 290 : 210;
  const tilt = isDesktop ? 7.5 : isTablet ? 8.5 : 9;
  const curveY = isDesktop ? 26 : isTablet ? 22 : 16;
  const cardWidth = isDesktop ? 350 : isTablet ? 315 : 290;
  const cardHeight = isDesktop ? 515 : isTablet ? 485 : 445;
  const stageHeight = isDesktop ? 600 : isTablet ? 560 : 510;

  return (
    <section 
      id="services" 
      className="py-16 sm:py-24 md:py-32 bg-bone text-dark relative scroll-mt-24 border-t border-dark/10 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header & Practice Switcher                       */}
        {/* ======================================================== */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <Reveal direction="up" delay={50}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-accent border border-accent/25 mb-4 bg-accent/5">
              <span>Practices & Capabilities</span>
            </div>

            <h2 className="text-2xl sm:text-5xl lg:text-[54px] font-light tracking-tight text-dark leading-[1.14] sm:leading-[1.1]">
              Odoo implementation services and <span className="text-accent text-[1.06em] font-bold inline-block">AI automation</span>, under one roof
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-dark/70 font-normal leading-relaxed">
              Two practices, one team. We build the system that runs your business, then teach it to work smarter.
            </p>
          </Reveal>

          {/* Practice Switcher Tabs: Clean horizontal pills on mobile */}
          <div className="mt-6 flex items-center justify-start gap-2 max-w-full overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => handlePracticeChange('odoo')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                practice === 'odoo'
                  ? 'bg-dark text-white shadow-xs'
                  : 'bg-white/80 text-dark/70 hover:bg-dark/10'
              }`}
            >
              <span>Odoo ERP ({odooServices.length})</span>
            </button>

            <button
              type="button"
              onClick={() => handlePracticeChange('ai')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                practice === 'ai'
                  ? 'bg-dark text-white shadow-xs'
                  : 'bg-white/80 text-dark/70 hover:bg-dark/10'
              }`}
            >
              <span>AI & Digital ({aiServices.length})</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* UNIVERSAL 3D ARC CAROUSEL STAGE                          */}
        {/* ALWAYS: 1 Left, 1 Center, 1 Right (Infinite Circular)    */}
        {/* High-Fidelity Content-Driven Visual Headers              */}
        {/* ======================================================== */}
        <div 
          className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y"
          style={{ height: `${stageHeight}px` }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {currentList.map((svc, i) => {
            // Infinite circular diff: ALWAYS yields 1 left (-1), 1 center (0), 1 right (+1)
            const diff = getCircularDiff(i, activeIdx, currentList.length);
            const isCenter = diff === 0;
            const isVisible = Math.abs(diff) <= 1;
            const isBuffer = Math.abs(diff) === 2;
            const theme = CARD_THEMES[i % CARD_THEMES.length];

            // 3D Arc Geometry
            const rotateDeg = diff * tilt;
            const translateY = Math.abs(diff) * curveY;
            const dragOffset = isDragging ? dragDeltaX * 0.4 : 0;
            const translateX = diff * spacing + dragOffset;
            const scale = isCenter ? 1 : isVisible ? 0.92 : 0.84;
            const opacity = isCenter ? 1 : isVisible ? 0.88 : 0;
            const zIndex = isCenter ? 30 : isVisible ? 20 : 10;

            return (
              <div
                key={svc.id}
                onClick={(e) => {
                  if (Math.abs(dragDeltaX) > 10) return; // Ignore drag clicks
                  if (isCenter) {
                    onOpenConsultation();
                  } else if (diff === -1) {
                    handlePrev();
                  } else if (diff === 1) {
                    handleNext();
                  } else {
                    setActiveIdx(i);
                  }
                }}
                style={{
                  position: 'absolute',
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  left: `calc(50% - ${cardWidth / 2}px)`,
                  top: '16px',
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transition: isDragging
                    ? 'none'
                    : 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease, box-shadow 400ms ease',
                  pointerEvents: isVisible ? 'auto' : 'none',
                  willChange: 'transform, opacity'
                }}
                className={`rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between border bg-[#0F172A] relative overflow-hidden select-none group ${
                  isCenter
                    ? 'border-white/20 shadow-[0_24px_60px_rgba(15,23,42,0.38)] ring-1 ring-white/20 scale-100'
                    : 'border-white/8 shadow-[0_12px_30px_rgba(15,23,42,0.18)] hover:opacity-100 cursor-pointer'
                }`}
              >
                {/* Visual Header Graphic with Seamless Downward Fade */}
                <div className="absolute top-0 left-0 right-0 h-[210px] sm:h-[235px] overflow-hidden pointer-events-none z-0">
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Top Vignette & Deep Dissolve Gradient into #0F172A */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-[#0F172A] opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/85 to-transparent" />
                </div>

                {/* Foreground Card Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Bar: Minimal Spec Pill + Counter */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-semibold bg-black/50 backdrop-blur-md text-white/90 border border-white/20 shadow-xs">
                        {svc.spec}
                      </span>
                      <span className="text-[11px] font-mono text-white/80 font-semibold drop-shadow-md">
                        {svc.num} / {String(currentList.length).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Spacer to push title right below the image focal visual */}
                    <div className="h-16 sm:h-20" />

                    {/* Title & Tagline */}
                    <h3 className="text-center text-lg sm:text-[21px] font-bold font-heading text-white tracking-tight leading-snug drop-shadow-sm">
                      {svc.title}
                    </h3>
                    <div className="text-center text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white/60 font-semibold mt-1">
                      {svc.tagline}
                    </div>

                    {/* Description: Clean, unclipped 2-3 lines with breathing room */}
                    <p className="text-center text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal mt-2.5 px-1 line-clamp-3">
                      {svc.description}
                    </p>

                    {/* Feature Highlights: 2 Rounded Checklist Pills matching user reference */}
                    <div className="space-y-1.5 mt-3 text-xs text-white">
                      {svc.bullets.slice(0, 2).map((b, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-2 bg-white/5 border border-white/15 px-3 py-1.5 rounded-xl text-[11px] sm:text-xs backdrop-blur-xs"
                        >
                          <span className="text-white text-xs font-bold flex-shrink-0">✓</span>
                          <span className="truncate font-medium text-white/90">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA Button: Crisp White Pill Button */}
                  <div className="mt-4 pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultation();
                      }}
                      className={`w-full py-2.5 sm:py-3 px-4 sm:px-5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                        isCenter
                          ? 'bg-white hover:bg-neutral-100 text-[#0F172A] shadow-md hover:shadow-lg hover:scale-[1.01]'
                          : 'bg-white/10 hover:bg-white text-white hover:text-[#0F172A] border border-white/15'
                      }`}
                    >
                      <span>Discuss Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* NAVIGATION CONTROLS: PREV / NEXT + STEP PILL + DOTS      */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center justify-center gap-3 mt-4">
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-dark/15 text-dark hover:bg-dark hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="px-4 py-1.5 rounded-full bg-white border border-dark/15 text-xs font-mono text-dark/75 font-semibold shadow-xs">
              <span>{currentList[activeIdx]?.num}</span>
              <span className="text-dark/30 mx-1.5">/</span>
              <span>{String(currentList.length).padStart(2, '0')}</span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-dark/15 text-dark hover:bg-dark hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5">
            {currentList.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setActiveIdx(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIdx === activeIdx
                    ? 'w-7 bg-[#0F172A]'
                    : 'w-2 bg-dark/20 hover:bg-dark/40'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* Bottom Editorial Transition Bar                          */}
        {/* ======================================================== */}
        <Reveal direction="up" delay={200}>
          <div className="mt-12 sm:mt-16 pt-8 border-t border-dark/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs sm:text-sm font-mono text-dark/60 max-w-2xl text-center sm:text-left">
              {isPakistan
                ? "Fixed Scope · Milestone Signoff · Direct Senior Architect Access Across Lahore, Karachi & Islamabad"
                : "Fixed Scope · Milestone Signoff · Direct Senior Architect Access Across Pakistan, Dubai & Texas"}
            </p>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-dark hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md group cursor-pointer flex-shrink-0"
            >
              <span>Schedule Discovery Session</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
