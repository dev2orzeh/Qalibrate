import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '../common/Reveal';
import { useRegion } from '../../context/RegionContext';

/* ========================================================================= */
/* WHY QALIBRATE — 3D SCROLL-CALIBRATING GYROSCOPE (LIGHT THEME)             */
/* All 6 pillars anchored around the central 3D gyroscope with leader lines. */
/* Light bone/white theme with dark and Klein Blue text accents.             */
/* Followed by the exact minimal stats banner (90% | 180+ | 10K+)            */
/* and clean 4-pillar project commitments matching user reference 1:1.       */
/* ========================================================================= */

const pillars = [
  {
    num: "1",
    title: "OFFICIAL ODOO PARTNER",
    desc: "Recognized by Odoo, with direct access to partner resources, senior engineers, and licensing.",
    tag: "Certified Best Practices",
    side: "left"
  },
  {
    num: "2",
    title: "ERP AND AI IN ONE TEAM",
    desc: "No juggling an ERP vendor and a separate AI agency. One team, one plan, one point of accountability.",
    tag: "Unified Delivery",
    side: "left"
  },
  {
    num: "3",
    title: "STANDARD FIRST, CUSTOM WHEN IT COUNTS",
    desc: "We use Odoo's built-in features wherever possible, so your system stays clean, fast and easy to upgrade.",
    tag: "Clean Architecture",
    side: "left"
  },
  {
    num: "4",
    title: "CLEAR SCOPE AND PRICING",
    desc: "You know what you're getting, what it costs and when it will be ready before engineering begins.",
    tag: "Fixed Scope Guarantee",
    side: "right"
  },
  {
    num: "5",
    title: "MULTI-REGION TEAM, REAL SUPPORT",
    desc: "Operating across Pakistan, Dubai, and Texas, working in your time zone and language, before and long after go-live.",
    tag: "PK · UAE · US Hubs",
    side: "right"
  },
  {
    num: "6",
    title: "BUILT FOR ADOPTION",
    desc: "Training and change management are part of every project, because a system nobody uses is a wasted investment.",
    tag: "Floor-Level Adoption",
    side: "right"
  }
];

const projectInclusions = [
  {
    title: "A named project lead",
    desc: "One senior lead owns your project from discovery to go-live, so you always know who to call."
  },
  {
    title: "Weekly progress updates",
    desc: "A short update every week on what's done, what's next and anything that needs your input. No surprises."
  },
  {
    title: "Training for every user",
    desc: "Hands-on sessions for each team, plus quick-reference guides, so people actually use the system from day one."
  },
  {
    title: "Full documentation",
    desc: "Your workflows, settings and custom modules are documented and handed over, so you're never locked in."
  }
];

export default function WhyUsSection({ onOpenConsultation }) {
  const { region, isPakistan } = useRegion();
  const sectionRef = useRef(null);
  const mobilePillarsRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNode, setActiveNode] = useState(null);
  const [revealedPillars, setRevealedPillars] = useState(0);

  // Dynamic pillars adapting to active region
  const activePillars = pillars.map(p => {
    if (p.num === "5") {
      return {
        ...p,
        title: isPakistan ? "ON THE GROUND IN PAKISTAN" : "MULTI-REGION TEAM, REAL SUPPORT",
        desc: isPakistan 
          ? "Dedicated deployment teams in Lahore, Karachi, Islamabad & Faisalabad, working on-site before and after go-live."
          : "Operating across Pakistan, Dubai, and Texas, working in your time zone and language, before and long after go-live.",
        tag: isPakistan ? "Lahore · Khi · Isb · Fsd" : "PK · UAE · US Hubs"
      };
    }
    return p;
  });

  // Scroll Trigger: Sequential Alternating Entrance (left, right, left, right...)
  useEffect(() => {
    const el = mobilePillarsRef.current || sectionRef.current;
    if (!el) return;

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealedPillars(1);

          let current = 1;
          timer = setInterval(() => {
            current += 1;
            setRevealedPillars((prev) => Math.max(prev, current));
            if (current >= pillars.length) {
              clearInterval(timer);
            }
          }, 220);

          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
      if (timer) clearInterval(timer);
    };
  }, []);

  // Smooth scroll listener for multi-axis rotation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalDist = windowHeight + rect.height;
          const currentDist = windowHeight - rect.top;
          const progress = Math.max(0, Math.min(1, currentDist / totalDist));
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute scroll rotation angles: Outer 3D stator ring is locked at -18deg so all 6 anchor badges remain 100% on the boundary.
  // Inner gimbal rotor spins dynamically on scroll.
  const outerRotate = -18;
  const innerRotate = 35 + (scrollProgress - 0.5) * 90;

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-bone text-dark relative overflow-hidden select-none scroll-mt-24 border-t border-dark/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ======================================================== */}
        {/* 1. SECTION HEADER (Light Theme with Blue Punch Word)     */}
        {/* ======================================================== */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Reveal direction="up" delay={50}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-accent border border-accent/25 mb-4 bg-accent/5">
              <span>Why Qalibrate</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-light tracking-tight text-dark leading-[1.14] sm:leading-[1.1]">
              Why businesses choose Qalibrate as their{' '}
              <span className="text-accent text-[1.06em] font-bold inline-block">Odoo partner</span>{' '}
              across Pakistan, Dubai & Texas
            </h2>

            <p className="mt-4 text-base sm:text-lg text-dark/70 font-normal leading-relaxed">
              We eliminate vendor friction, vague estimations, and software that users abandon. Here is how we engineer operational confidence.
            </p>
          </Reveal>
        </div>

        {/* ======================================================== */}
        {/* 2. THE 3D GYROSCOPE WITH ALL 6 PILLARS & LEADER LINES    */}
        {/* Desktop View: Full 1100x680 Canvas with 6 Anchored Nodes */}
        {/* ======================================================== */}
        <div className="relative mb-20 lg:mb-28 hidden lg:block">
          
          <div className="relative w-full max-w-[1180px] mx-auto h-[660px]">
            
            {/* SVG Gyroscope + Leader Lines Canvas */}
            <svg
              viewBox="0 0 1180 660"
              className="w-full h-full pointer-events-none"
              style={{ overflow: 'visible' }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lightRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E293B" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#0F172A" stopOpacity="1" />
                  <stop offset="100%" stopColor="#334155" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="innerGimbalGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#334155" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#64748B" stopOpacity="0.9" />
                </linearGradient>

                <filter id="ringShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.12" />
                </filter>
                <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* Ground Shadow */}
              <ellipse 
                cx="590" cy="460" rx="280" ry="40" 
                fill="rgba(15,23,42,0.06)" 
                style={{ filter: 'blur(14px)' }} 
              />

              {/* ── OUTER RING: Large 3D Tilted Ellipse ── */}
              <g 
                style={{ 
                  transform: `rotate(${outerRotate}deg)`, 
                  transformOrigin: '590px 330px',
                  transition: 'transform 0.15s ease-out'
                }}
              >
                <ellipse 
                  cx="590" cy="336" rx="282" ry="202"
                  stroke="rgba(15,23,42,0.18)" strokeWidth="14" fill="none"
                />
                
                <ellipse 
                  cx="590" cy="330" rx="280" ry="200"
                  stroke="url(#lightRingGrad)" strokeWidth="11" fill="none"
                  filter="url(#ringShadow)"
                />

                <ellipse 
                  cx="590" cy="330" rx="272" ry="192"
                  stroke="#94A3B8" strokeWidth="0.75" strokeDasharray="3 9" fill="none" opacity="0.4"
                />

                <ellipse 
                  cx="590" cy="326" rx="278" ry="198"
                  stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"
                />
              </g>

              {/* ── INNER RING: Perpendicular Gyroscope Ring ── */}
              <g 
                style={{ 
                  transform: `rotate(${innerRotate}deg)`, 
                  transformOrigin: '590px 330px',
                  transition: 'transform 0.15s ease-out'
                }}
              >
                <ellipse 
                  cx="590" cy="330" rx="80" ry="110"
                  stroke="url(#innerGimbalGrad)" strokeWidth="4.5" fill="none"
                />
                <ellipse 
                  cx="590" cy="330" rx="72" ry="102"
                  stroke="#1C56FE" strokeWidth="0.8" strokeDasharray="2 6" fill="none" opacity="0.5"
                />
              </g>

              {/* ── CENTER CROSSHAIR & CORE INDICATOR ── */}
              <line x1="560" y1="330" x2="620" y2="330" stroke="#0F172A" strokeWidth="1" opacity="0.3" />
              <line x1="590" y1="300" x2="590" y2="360" stroke="#0F172A" strokeWidth="1" opacity="0.3" />
              <circle cx="590" cy="330" r="10" stroke="#1C56FE" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="590" cy="330" r="4.5" fill="#1C56FE" />

              {/* ── NODE 1 (Top-Left): 10:30 Position on Outer Ring ── */}
              <line 
                x1="410" y1="203" x2="330" y2="120" 
                stroke={activeNode === 0 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 0 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 0 ? "1" : "0.35"} 
              />
              <line 
                x1="330" y1="120" x2="280" y2="120" 
                stroke={activeNode === 0 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 0 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 0 ? "1" : "0.35"} 
              />
              <circle cx="410" cy="203" r="14" fill="#FFFFFF" stroke={activeNode === 0 ? "#1C56FE" : "#0F172A"} strokeWidth="2" filter="url(#nodeShadow)" />
              <text x="410" y="208" textAnchor="middle" fill={activeNode === 0 ? "#1C56FE" : "#0F172A"} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">1</text>

              {/* ── NODE 2 (Mid-Left): 9:00 Position on Outer Ring ── */}
              <line 
                x1="320" y1="339" x2="280" y2="339" 
                stroke={activeNode === 1 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 1 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 1 ? "1" : "0.35"} 
              />
              <circle cx="320" cy="339" r="14" fill="#FFFFFF" stroke={activeNode === 1 ? "#1C56FE" : "#0F172A"} strokeWidth="2" filter="url(#nodeShadow)" />
              <text x="320" y="344" textAnchor="middle" fill={activeNode === 1 ? "#1C56FE" : "#0F172A"} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">2</text>

              {/* ── NODE 3 (Bottom-Left): 7:30 Position directly on Black Boundary ── */}
              <line 
                x1="366" y1="482" x2="310" y2="530" 
                stroke={activeNode === 2 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 2 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 2 ? "1" : "0.35"} 
              />
              <line 
                x1="310" y1="530" x2="280" y2="530" 
                stroke={activeNode === 2 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 2 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 2 ? "1" : "0.35"} 
              />
              <circle cx="366" cy="482" r="14" fill="#FFFFFF" stroke={activeNode === 2 ? "#1C56FE" : "#0F172A"} strokeWidth="2" filter="url(#nodeShadow)" />
              <text x="366" y="487" textAnchor="middle" fill={activeNode === 2 ? "#1C56FE" : "#0F172A"} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">3</text>

              {/* ── NODE 4 (Top-Right): 1:30 Position directly on Black Boundary ── */}
              <line 
                x1="814" y1="178" x2="860" y2="120" 
                stroke={activeNode === 3 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 3 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 3 ? "1" : "0.35"} 
              />
              <line 
                x1="860" y1="120" x2="900" y2="120" 
                stroke={activeNode === 3 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 3 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 3 ? "1" : "0.35"} 
              />
              <circle cx="814" cy="178" r="14" fill="#FFFFFF" stroke={activeNode === 3 ? "#1C56FE" : "#0F172A"} strokeWidth="2" filter="url(#nodeShadow)" />
              <text x="814" y="183" textAnchor="middle" fill={activeNode === 3 ? "#1C56FE" : "#0F172A"} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">4</text>

              {/* ── NODE 5 (Mid-Right): 3:00 Position on Outer Ring ── */}
              <line 
                x1="860" y1="321" x2="900" y2="321" 
                stroke={activeNode === 4 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 4 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 4 ? "1" : "0.35"} 
              />
              <circle cx="860" cy="321" r="14" fill="#FFFFFF" stroke={activeNode === 4 ? "#1C56FE" : "#0F172A"} strokeWidth="2" filter="url(#nodeShadow)" />
              <text x="860" y="326" textAnchor="middle" fill={activeNode === 4 ? "#1C56FE" : "#0F172A"} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">5</text>

              {/* ── NODE 6 (Bottom-Right): 4:30 Position on Outer Ring ── */}
              <line 
                x1="770" y1="457" x2="840" y2="530" 
                stroke={activeNode === 5 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 5 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 5 ? "1" : "0.35"} 
              />
              <line 
                x1="840" y1="530" x2="900" y2="530" 
                stroke={activeNode === 5 ? "#1C56FE" : "#0F172A"} 
                strokeWidth={activeNode === 5 ? "1.5" : "0.9"} 
                strokeOpacity={activeNode === 5 ? "1" : "0.35"} 
              />
              <circle cx="770" cy="457" r="14" fill="#FFFFFF" stroke={activeNode === 5 ? "#1C56FE" : "#0F172A"} strokeWidth="2" filter="url(#nodeShadow)" />
              <text x="770" y="462" textAnchor="middle" fill={activeNode === 5 ? "#1C56FE" : "#0F172A"} fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">6</text>

            </svg>

            {/* CALLOUT 1 */}
            <div 
              onMouseEnter={() => setActiveNode(0)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={onOpenConsultation}
              className="absolute text-right group cursor-pointer transition-all duration-200"
              style={{ top: '60px', left: '0', width: '275px' }}
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold mb-1">
                {pillars[0].tag}
              </div>
              <h3 className="text-dark text-sm sm:text-base font-bold tracking-tight uppercase leading-snug mb-1 group-hover:text-accent transition-colors">
                {pillars[0].title}
              </h3>
              <p className="text-dark/70 text-xs font-normal leading-relaxed">
                {pillars[0].desc}
              </p>
            </div>

            {/* CALLOUT 2 */}
            <div 
              onMouseEnter={() => setActiveNode(1)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={onOpenConsultation}
              className="absolute text-right group cursor-pointer transition-all duration-200"
              style={{ top: '280px', left: '0', width: '275px' }}
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold mb-1">
                {pillars[1].tag}
              </div>
              <h3 className="text-dark text-sm sm:text-base font-bold tracking-tight uppercase leading-snug mb-1 group-hover:text-accent transition-colors">
                {pillars[1].title}
              </h3>
              <p className="text-dark/70 text-xs font-normal leading-relaxed">
                {pillars[1].desc}
              </p>
            </div>

            {/* CALLOUT 3 */}
            <div 
              onMouseEnter={() => setActiveNode(2)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={onOpenConsultation}
              className="absolute text-right group cursor-pointer transition-all duration-200"
              style={{ top: '480px', left: '0', width: '275px' }}
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold mb-1">
                {pillars[2].tag}
              </div>
              <h3 className="text-dark text-sm sm:text-base font-bold tracking-tight uppercase leading-snug mb-1 group-hover:text-accent transition-colors">
                {pillars[2].title}
              </h3>
              <p className="text-dark/70 text-xs font-normal leading-relaxed">
                {pillars[2].desc}
              </p>
            </div>

            {/* CALLOUT 4 */}
            <div 
              onMouseEnter={() => setActiveNode(3)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={onOpenConsultation}
              className="absolute text-left group cursor-pointer transition-all duration-200"
              style={{ top: '60px', right: '0', width: '275px' }}
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold mb-1">
                {pillars[3].tag}
              </div>
              <h3 className="text-dark text-sm sm:text-base font-bold tracking-tight uppercase leading-snug mb-1 group-hover:text-accent transition-colors">
                {pillars[3].title}
              </h3>
              <p className="text-dark/70 text-xs font-normal leading-relaxed">
                {pillars[3].desc}
              </p>
            </div>

            {/* CALLOUT 5 */}
            <div 
              onMouseEnter={() => setActiveNode(4)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={onOpenConsultation}
              className="absolute text-left group cursor-pointer transition-all duration-200"
              style={{ top: '280px', right: '0', width: '275px' }}
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold mb-1">
                {pillars[4].tag}
              </div>
              <h3 className="text-dark text-sm sm:text-base font-bold tracking-tight uppercase leading-snug mb-1 group-hover:text-accent transition-colors">
                {pillars[4].title}
              </h3>
              <p className="text-dark/70 text-xs font-normal leading-relaxed">
                {pillars[4].desc}
              </p>
            </div>

            {/* CALLOUT 6 */}
            <div 
              onMouseEnter={() => setActiveNode(5)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={onOpenConsultation}
              className="absolute text-left group cursor-pointer transition-all duration-200"
              style={{ top: '480px', right: '0', width: '275px' }}
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold mb-1">
                {pillars[5].tag}
              </div>
              <h3 className="text-dark text-sm sm:text-base font-bold tracking-tight uppercase leading-snug mb-1 group-hover:text-accent transition-colors">
                {pillars[5].title}
              </h3>
              <p className="text-dark/70 text-xs font-normal leading-relaxed">
                {pillars[5].desc}
              </p>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET RESPONSIVE VIEW (< 1024px)               */}
        {/* Alternating Sequential Entrance: Left, Right, Left, Right */}
        {/* ======================================================== */}
        <div ref={mobilePillarsRef} className="block lg:hidden mb-16 overflow-hidden">
          <div className="w-56 h-56 sm:w-72 sm:h-72 mx-auto relative mb-10 flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
              <ellipse 
                cx="150" cy="150" rx="120" ry="85"
                stroke="#0F172A" strokeWidth="8"
                style={{ 
                  transform: `rotate(${outerRotate}deg)`, 
                  transformOrigin: '150px 150px',
                  transition: 'transform 0.15s ease-out'
                }}
              />
              <ellipse 
                cx="150" cy="150" rx="35" ry="50"
                stroke="#334155" strokeWidth="3"
                style={{ 
                  transform: `rotate(${innerRotate}deg)`, 
                  transformOrigin: '150px 150px',
                  transition: 'transform 0.15s ease-out'
                }}
              />
              <circle cx="150" cy="150" r="4" fill="#1C56FE" />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 overflow-hidden py-1">
            {activePillars.map((pillar, idx) => {
              const isFromLeft = idx % 2 === 0; // Card 1, 3, 5 from left; Card 2, 4, 6 from right
              const isVisible = idx < revealedPillars;

              return (
                <div
                  key={pillar.num}
                  onClick={onOpenConsultation}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateX(0) translateY(0) scale(1)' 
                      : isFromLeft 
                        ? 'translateX(-60px) translateY(10px) scale(0.93)' 
                        : 'translateX(60px) translateY(10px) scale(0.93)',
                    transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease, border-color 300ms ease',
                    willChange: 'opacity, transform'
                  }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-dark/10 hover:border-dark/30 hover:shadow-md transition-all cursor-pointer group shadow-xs active:scale-[0.99]"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-full bg-dark text-white font-mono font-bold text-xs flex items-center justify-center group-hover:bg-accent transition-colors">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-dark font-bold text-sm tracking-tight uppercase mb-1 group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-dark/70 text-xs leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. WHAT EVERY QALIBRATE PROJECT INCLUDES                 */}
        {/* Monumental numbers (01-04) with clean vertical dividers  */}
        {/* Exactly matching user's reference layout with our content*/}
        {/* ======================================================== */}
        <div className="mt-14 sm:mt-24 mb-4">
          <div className="max-w-2xl mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-accent border border-accent/25 mb-4 bg-accent/5">
              <span>Project Commitments</span>
            </div>

            <h3 className="text-2xl sm:text-4xl md:text-[42px] font-light tracking-tight text-dark leading-[1.12]">
              What every Qalibrate <span className="text-accent text-[1.08em] font-bold inline-block">project includes</span>
            </h3>

            <p className="mt-3 text-sm sm:text-base text-dark/70 font-normal leading-relaxed">
              No surprises, hidden hourly billing, or abandoned handovers. Every contract guarantees these four operational standards.
            </p>
          </div>

          {/* 4 Inclusions Divided Row with Monumental Numbers 01-04 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-dark/15 border-t border-b border-dark/15">
            {projectInclusions.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 sm:p-8 flex flex-col justify-between hover:bg-white/40 transition-colors ${
                  idx % 2 !== 0 ? 'sm:border-l sm:border-dark/15' : ''
                } ${
                  idx >= 2 ? 'sm:border-t lg:border-t-0 sm:border-dark/15' : ''
                } ${
                  idx > 0 ? 'lg:border-l lg:border-dark/15' : ''
                }`}
              >
                <div>
                  {/* Monumental Number in exact reference style */}
                  <div className="text-5xl sm:text-6xl lg:text-[76px] font-light tracking-tight text-dark font-sans leading-none mb-5 sm:mb-6">
                    0{idx + 1}
                  </div>

                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-dark tracking-tight mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-dark/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 mt-6 sm:mt-8 border-t border-dark/10 flex items-center gap-2 text-[11px] font-mono text-dark/50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Included as Standard</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 pt-6">
            <div className="text-xs font-mono text-dark/50 tracking-wide text-center sm:text-left">
              Direct accountability · Fixed scope · Zero vendor lock-in
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-dark hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md group cursor-pointer flex-shrink-0"
            >
              <span>Schedule a 30-Min Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
