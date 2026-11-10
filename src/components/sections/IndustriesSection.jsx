import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal, { MaskRise } from '../common/Reveal';

/* ========================================================================= */
/* INDUSTRY SECTORS CONFIGURATION (Pure Typography, Zero Emojis, Zero Media)  */
/* Minimal, premium, non-AI, warm bone canvas, crisp white card              */
/* ========================================================================= */

const industriesData = [
  {
    id: 'retail',
    num: '01',
    name: 'Retail & eCommerce',
    tagline: 'Omnichannel POS, Live Inventory & Multi-Branch Sync',
    description: 'Physical POS counters, Shopify and WooCommerce webstores, and central distribution warehouses operating on a unified live ledger. Eliminates overselling, manual reconciliation, and stock variance across all points of sale.',
    highlights: [
      'High-speed barcode scanning & thermal receipt POS with offline checkout continuity',
      'Real-time 2-way sync with Shopify & WooCommerce catalogs, orders, and pricing',
      'Integrated digital FBR fiscalization with automated invoice QR generation',
      'Unified omnichannel loyalty points, customer profiles, and automated SMS alerts'
    ],
    modules: 'Point of Sale (POS), Inventory, Shopify Connector, FBR Fiscalization'
  },
  {
    id: 'mfg',
    num: '02',
    name: 'Manufacturing & Assembly',
    tagline: 'Multi-Level BOMs, Work Centers & Floor Tracking',
    description: 'From raw materials procurement to finished goods packaging. Manage multi-level bills of materials, work center capacity, machine routings, scrap calculations, and exact unit inventory valuation.',
    highlights: [
      'Multi-level BOMs supporting nested sub-assemblies, by-products, and automated reservations',
      'Tablet operator terminals on the manufacturing floor for clock-in, cycle time, and scrap logging',
      'Automated MRP purchase triggering based on sales orders, demand forecasts, and safety stock',
      'Exact landed cost accounting factoring labor hours, power usage, and machine depreciation'
    ],
    modules: 'Manufacturing (MRP), Maintenance, Quality Control, Cost Accounting'
  },
  {
    id: 'logistics',
    num: '03',
    name: 'Distribution & Logistics',
    tagline: 'Multi-Warehouse Routing, Dispatch & Fleet Operations',
    description: 'Designed for FMCG distributors, wholesale traders, and 3PL networks. Real-time batch picking, multi-tier warehouse bin locations, dispatch manifests, and automated delivery note tracking.',
    highlights: [
      'Granular aisle-rack-bin storage hierarchies with wave picking routes to minimize travel time',
      'Vehicle fleet trip sheets, driver manifests, capacity load balancing, and route clustering',
      'Strict customer credit limit controls, aging report dashboards, and field booking approvals',
      'Import shipment tracking from bill of lading to bonded warehouse with landed cost distribution'
    ],
    modules: 'Inventory & Logistics, Fleet Management, Wholesale Sales, Invoicing'
  },
  {
    id: 'food',
    num: '04',
    name: 'Food & Dining',
    tagline: 'Kitchen Display Systems (KDS) & Recipe Portioning',
    description: 'Built for restaurant chains, bakeries, cloud kitchens, and central commissaries. Connect touch POS terminals to kitchen display screens, track recipe yield, and replenish multi-branch stocks in real-time.',
    highlights: [
      'Kitchen Display System (KDS) routing tickets to grill, fry, and plating prep stations with timers',
      'Automatic ingredient deduction from sub-inventories in real-time using recipe BOMs',
      'Central commissary replenishment processing daily branch supply orders and transfer notes',
      'FBR POS certified receipts compliant with PRA, SRB, and provincial revenue authorities'
    ],
    modules: 'Restaurant POS, Kitchen Display (KDS), Recipe Costing, Commissary Replenishment'
  },
  {
    id: 'services',
    num: '05',
    name: 'Professional Services',
    tagline: 'Billable Timesheets, Milestone Contracts & Retainers',
    description: 'For IT consultancies, engineering firms, creative agencies, and law practices. Track billable consultant hours, milestone sign-offs, retainer billing schedules, and project profitability.',
    highlights: [
      'One-click consultant timesheet logging on tasks with manager approval workflows',
      'Automated milestone contract billing and recurring monthly retainer invoices',
      'Real-time project profitability dashboards comparing labor cost vs billed revenue',
      'Integrated helpdesk ticketing with customer portal and SLA tracking'
    ],
    modules: 'Timesheets, Project Billing, Retainers, Helpdesk, Profitability BI'
  },
  {
    id: 'pharma',
    num: '06',
    name: 'Pharma & Healthcare',
    tagline: 'Batch Serialization & Regulatory Quarantine',
    description: 'For pharmaceutical manufacturers, diagnostic labs, and medical supply distributors. Maintain strict lot tracking, automated expiry date quarantining, and DRAP compliance.',
    highlights: [
      'Automated lot and batch tracking across supplier receipts, testing, and pharmacy dispatch',
      'Automatic quarantining for inventory items within 90/180 days of expiry',
      'Immutable digital audit trails recording every stock movement, test result, and sign-off',
      'Controlled substance access safeguards requiring dual supervisor digital signatures'
    ],
    modules: 'Batch & Lot Serialization, Quality Inspection, Quarantine Warehouse, DRAP Audit Trail'
  }
];

export default function IndustriesSection({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const current = industriesData[activeTab];

  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActiveTab((prev) => (prev + 1) % industriesData.length);
    } else if (isRightSwipe) {
      setActiveTab((prev) => (prev - 1 + industriesData.length) % industriesData.length);
    }
  };

  return (
    <section id="industries" className="pt-16 sm:pt-24 md:pt-32 pb-8 md:pb-10 bg-bone text-dark relative overflow-hidden select-none scroll-mt-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header: USL Studio Light Editorial Typography    */}
        {/* ======================================================== */}
        <Reveal direction="up" delay={50}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-16 pb-8 border-b border-dark/10">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-3">
                Industries
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-dark leading-[1.14] sm:leading-[1.08]">
                <MaskRise delay={50}>Odoo ERP solutions</MaskRise>
                <MaskRise delay={150} className="font-semibold text-dark">
                  for your <span className="text-accent text-[1.06em] font-bold inline-block">industry.</span>
                </MaskRise>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-base sm:text-lg text-dark/70 leading-relaxed font-normal">
                Every industry has its own edge cases. We configure Odoo and AI around yours.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* MOVING SECTOR MARQUEE (Continuously Glides, Zero Emojis) */}
        {/* Light warm bone styling, pauses on hover, zero blue flood */}
        {/* ======================================================== */}
        <div className="relative mb-12 overflow-hidden py-2 select-none">
          {/* Subtle edge fade masks on bone canvas */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bone to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bone to-transparent z-10 pointer-events-none" />

          {/* Continuously Moving Ribbon Track */}
          <div className="flex gap-3 w-max animate-industry-scroll hover:[animation-play-state:paused] cursor-pointer">
            {[...industriesData, ...industriesData, ...industriesData].map((ind, i) => {
              const isCurrent = current.id === ind.id;
              const originalIndex = industriesData.findIndex(item => item.id === ind.id);

              return (
                <button
                  key={`${ind.id}-${i}`}
                  type="button"
                  onClick={() => setActiveTab(originalIndex)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-300 border flex-shrink-0 cursor-pointer ${
                    isCurrent
                      ? 'bg-dark text-white border-dark font-semibold shadow-md scale-102'
                      : 'bg-white/80 hover:bg-white text-dark/70 hover:text-dark border-dark/10 hover:border-dark/30 shadow-xs'
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isCurrent ? 'text-accent font-bold' : 'text-dark/40'}`}>
                    {ind.num}
                  </span>
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* CRISP WHITE EDITORIAL CARD (Swipeable on Mobile)         */}
        {/* ======================================================== */}
        <Reveal direction="up" delay={150} key={current.id}>
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="bg-white rounded-[28px] sm:rounded-[32px] border border-dark/10 p-6 sm:p-10 md:p-16 shadow-[0_20px_50px_rgba(15,23,42,0.06)] relative overflow-hidden"
          >
            
            {/* Top Specification Header */}
            <div className="flex items-center justify-between text-xs font-mono text-dark/50 border-b border-dark/10 pb-4 sm:pb-5 mb-6 sm:mb-8">
              <span className="uppercase tracking-widest text-accent font-semibold text-[11px] sm:text-xs">
                SECTOR {current.num} · DOMAIN ARCHITECTURE
              </span>
              <div className="flex items-center gap-2">
                <span className="text-dark/40 font-medium">
                  {current.num} / 06
                </span>
                <span className="text-[10px] font-mono text-accent/70 hidden sm:inline">
                  (Swipe left/right)
                </span>
              </div>
            </div>

            {/* Main Sector Headline & Narrative */}
            <div className="max-w-4xl mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-light sm:font-normal text-dark tracking-tight leading-[1.12] mb-4 sm:mb-6">
                {current.tagline}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-dark/70 leading-relaxed font-normal">
                {current.description}
              </p>
            </div>

            {/* Divided Capabilities List */}
            <div className="border-t border-b border-dark/10 divide-y divide-dark/10 py-1 mb-8 sm:mb-10">
              {current.highlights.map((item, idx) => (
                <div 
                  key={`${current.id}-${idx}`} 
                  className="py-3.5 sm:py-4 flex items-start text-xs sm:text-sm md:text-base text-dark/85 font-normal transition-all duration-300"
                  style={{
                    animation: `industryHighlightFade 400ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 90}ms both`
                  }}
                >
                  <span className="text-accent mr-3 font-mono select-none font-bold">→</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Mobile Prev/Next Navigator */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-dark/10 text-xs font-mono sm:hidden">
              <button 
                type="button"
                onClick={() => setActiveTab((prev) => (prev - 1 + industriesData.length) % industriesData.length)}
                className="px-3 py-1.5 rounded-full bg-bone/70 text-dark font-medium hover:bg-accent hover:text-white transition-colors cursor-pointer"
              >
                ← Prev Sector
              </button>
              <span className="text-[10px] text-dark/40">Swipe or Tap</span>
              <button 
                type="button"
                onClick={() => setActiveTab((prev) => (prev + 1) % industriesData.length)}
                className="px-3 py-1.5 rounded-full bg-bone/70 text-dark font-medium hover:bg-accent hover:text-white transition-colors cursor-pointer"
              >
                Next Sector →
              </button>
            </div>

            {/* Bottom Meta & Call-To-Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-1">
              <div className="text-xs font-mono text-dark/50">
                <span className="text-dark/70 font-semibold mr-2">Configured Modules:</span>
                <span>{current.modules}</span>
              </div>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest font-semibold text-dark hover:text-accent transition-colors group cursor-pointer flex-shrink-0"
              >
                <span>Request {current.name} Scope Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}