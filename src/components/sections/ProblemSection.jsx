import React, { useState, useEffect, useRef, useId } from 'react';
import Reveal, { MaskRise } from '../common/Reveal';
import { problemSection } from '../../data/content';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* ========================================================================= */
/* 3D SCULPTURAL GRAPHICS (Exact Match to User Reference Aesthetic)          */
/* Rich Royal/Cobalt Blue, Dimensional Lighting, Bevels & Specular Shading   */
/* Unique SVG Defs with useId + prefix to eliminate display:none masking bugs*/
/* ========================================================================= */

// 1. Seamless Integration Artwork: 3D Fluid Twisted Ribbon / Torus Loop
function SculpturalRibbon3D({ idPrefix = "ribbon" }) {
  const rawId = useId();
  const uid = `${idPrefix}_${rawId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
  const glowId = `glow_${uid}`;
  const frontId = `front_${uid}`;
  const backId = `back_${uid}`;
  const specId = `spec_${uid}`;

  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      <svg 
        className="w-full h-full max-w-[280px] max-h-[220px] overflow-visible drop-shadow-[0_16px_28px_rgba(8,23,69,0.5)]" 
        viewBox="0 0 340 260" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ambient Radial Backlight */}
          <radialGradient id={glowId} cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.55" />
            <stop offset="65%" stopColor="#3B82F6" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
          </radialGradient>

          {/* Front Illuminated Tubular Gradient */}
          <linearGradient id={frontId} x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="25%" stopColor="#60A5FA" />
            <stop offset="55%" stopColor="#1C56FE" />
            <stop offset="85%" stopColor="#1240D0" />
            <stop offset="100%" stopColor="#0B2B96" />
          </linearGradient>

          {/* Underloop Dark Shading */}
          <linearGradient id={backId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#051648" />
            <stop offset="50%" stopColor="#0C2B8E" />
            <stop offset="100%" stopColor="#1E4ED8" />
          </linearGradient>

          {/* Specular Highlight Gradient */}
          <linearGradient id={specId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#BAE6FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient Backlight Aura */}
        <circle cx="170" cy="130" r="115" fill={`url(#${glowId})`} />

        {/* 3D Tubular Torus Ribbon Back Loop (Shadowed Underneath) */}
        <path 
          d="M 60 175 C 30 100, 130 50, 205 95 C 275 135, 305 210, 245 235 C 185 260, 95 220, 115 160" 
          stroke={`url(#${backId})`} 
          strokeWidth="44" 
          strokeLinecap="round" 
          fill="none" 
        />

        {/* 3D Tubular Torus Ribbon Front Loop (Illuminated Crest) */}
        <path 
          d="M 95 180 C 65 110, 150 65, 215 105 C 280 145, 265 225, 210 225 C 155 225, 120 170, 155 135" 
          stroke={`url(#${frontId})`} 
          strokeWidth="38" 
          strokeLinecap="round" 
          fill="none" 
        />

        {/* Specular Ridge Gloss Along Top Arc */}
        <path 
          d="M 105 160 C 90 115, 155 80, 210 112 C 260 140, 250 195, 215 208" 
          stroke={`url(#${specId})`} 
          strokeWidth="9" 
          strokeLinecap="round" 
          fill="none" 
        />
      </svg>
    </div>
  );
}

// 2. Exceptional Security Artwork: 3D Beveled Precision Gear / Cog
function SculpturalGear3D({ idPrefix = "gear" }) {
  const rawId = useId();
  const uid = `${idPrefix}_${rawId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
  const glowId = `glow_${uid}`;
  const frontId = `front_${uid}`;
  const extrudeId = `extrude_${uid}`;
  const boreId = `bore_${uid}`;
  const specId = `spec_${uid}`;

  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      <svg 
        className="w-full h-full max-w-[280px] max-h-[220px] overflow-visible drop-shadow-[0_16px_28px_rgba(8,23,69,0.5)]" 
        viewBox="0 0 340 260" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ambient Glow */}
          <radialGradient id={glowId} cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
          </radialGradient>

          {/* Front Face Linear Gradient */}
          <linearGradient id={frontId} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="30%" stopColor="#3B82F6" />
            <stop offset="70%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0F38B8" />
          </linearGradient>

          {/* 3D Extruded Depth Shading */}
          <linearGradient id={extrudeId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#123AA8" />
            <stop offset="50%" stopColor="#092066" />
            <stop offset="100%" stopColor="#051442" />
          </linearGradient>

          {/* Center Cylindrical Bore Gradient */}
          <radialGradient id={boreId} cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#051442" />
            <stop offset="60%" stopColor="#0A2475" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </radialGradient>

          {/* Top Bevel Highlight */}
          <linearGradient id={specId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient Backlight */}
        <circle cx="170" cy="130" r="115" fill={`url(#${glowId})`} />

        {/* 3D Extrusion Shadow Drop Layer (Depth Under Gear) */}
        <g transform="translate(0, 14)">
          <path 
            d="M 185 45 L 205 47 L 222 62 L 235 68 L 257 58 L 273 70 L 268 93 L 277 107 L 297 117 L 295 138 L 277 151 L 271 166 L 279 188 L 264 203 L 241 198 L 228 206 L 222 227 L 200 233 L 184 220 L 168 221 L 150 234 L 131 228 L 123 207 L 109 200 L 88 206 L 73 190 L 81 168 L 74 153 L 55 141 L 56 120 L 74 107 L 81 92 L 72 70 L 88 56 L 110 65 L 123 58 L 131 38 L 152 34 L 168 46 Z" 
            fill={`url(#${extrudeId})`} 
          />
        </g>

        {/* Front Gear Face (8 Sculptural Teeth) */}
        <path 
          d="M 185 35 L 205 37 L 222 52 L 235 58 L 257 48 L 273 60 L 268 83 L 277 97 L 297 107 L 295 128 L 277 141 L 271 156 L 279 178 L 264 193 L 241 188 L 228 196 L 222 217 L 200 223 L 184 210 L 168 211 L 150 224 L 131 218 L 123 197 L 109 190 L 88 196 L 73 180 L 81 158 L 74 143 L 55 131 L 56 110 L 74 97 L 81 82 L 72 60 L 88 46 L 110 55 L 123 48 L 131 28 L 152 24 L 168 36 Z" 
          fill={`url(#${frontId})`} 
          stroke="#BAE6FD" 
          strokeWidth="1.5" 
          strokeOpacity="0.75" 
        />

        {/* Specular Crest Highlight Along Top Teeth */}
        <path 
          d="M 131 28 L 152 24 L 168 36 L 185 35 L 205 37 L 222 52 L 235 58 L 257 48 L 273 60" 
          stroke={`url(#${specId})`} 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none" 
        />

        {/* Center Hollow Cylindrical Bore with Depth */}
        <ellipse cx="175" cy="125" rx="42" ry="40" fill={`url(#${boreId})`} />
        <ellipse cx="175" cy="123" rx="41" ry="39" stroke="#93C5FD" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
      </svg>
    </div>
  );
}

// 3. High Performance Artwork: 3D Stepped Helical Spiral / Vortex Cone
function SculpturalSpiral3D({ idPrefix = "spiral" }) {
  const rawId = useId();
  const uid = `${idPrefix}_${rawId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
  const glowId = `glow_${uid}`;
  const outerId = `outer_${uid}`;
  const midId = `mid_${uid}`;
  const innerId = `inner_${uid}`;
  const dropId = `drop_${uid}`;

  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      <svg 
        className="w-full h-full max-w-[280px] max-h-[220px] overflow-visible drop-shadow-[0_16px_28px_rgba(8,23,69,0.5)]" 
        viewBox="0 0 340 260" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ambient Glow */}
          <radialGradient id={glowId} cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
          </radialGradient>

          {/* Stepped Helical Gradients */}
          <linearGradient id={outerId} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="35%" stopColor="#3B82F6" />
            <stop offset="70%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0B2782" />
          </linearGradient>

          <linearGradient id={midId} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="40%" stopColor="#60A5FA" />
            <stop offset="75%" stopColor="#1C56FE" />
            <stop offset="100%" stopColor="#0F33A0" />
          </linearGradient>

          <linearGradient id={innerId} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="40%" stopColor="#93C5FD" />
            <stop offset="75%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#1542C2" />
          </linearGradient>

          <filter id={dropId} x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#061645" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Ambient Backlight */}
        <circle cx="170" cy="130" r="115" fill={`url(#${glowId})`} />

        {/* Outer Turn (Broad Base Coil) */}
        <path 
          d="M 60 170 C 60 230, 275 250, 285 180 C 295 110, 115 100, 100 150" 
          stroke={`url(#${outerId})`} 
          strokeWidth="42" 
          strokeLinecap="round" 
          filter={`url(#${dropId})`} 
          fill="none" 
        />

        {/* Middle Turn (Ascending Vortex Coil) */}
        <path 
          d="M 98 150 C 90 200, 245 215, 250 160 C 255 110, 135 110, 130 145" 
          stroke={`url(#${midId})`} 
          strokeWidth="36" 
          strokeLinecap="round" 
          filter={`url(#${dropId})`} 
          fill="none" 
        />

        {/* Inner Apex Turn (Conical Center Swirl) */}
        <path 
          d="M 135 145 C 130 175, 215 185, 220 150 C 225 115, 160 120, 155 140" 
          stroke={`url(#${innerId})`} 
          strokeWidth="30" 
          strokeLinecap="round" 
          filter={`url(#${dropId})`} 
          fill="none" 
        />

        {/* Specular White Rim Highlight */}
        <path 
          d="M 105 138 C 98 185, 238 200, 245 152" 
          stroke="#FFFFFF" 
          strokeOpacity="0.75" 
          strokeWidth="7" 
          strokeLinecap="round" 
          fill="none" 
        />
      </svg>
    </div>
  );
}

/* ========================================================================= */
/* PROBLEM SECTION CARDS: EXACT MATCH TO USER REFERENCE AESTHETIC            */
/* ========================================================================= */

const PROBLEM_CARDS_DATA = [
  {
    id: "disconnected",
    titleLine1: "Disconnected",
    titleLine2: "Systems",
    description: "Sales lives in one app, stock in a spreadsheet and accounts in another tool. Nobody sees the full picture, and every report means copying numbers by hand.",
    pillLabel: "Unified Odoo Core",
    Graphic: SculpturalRibbon3D
  },
  {
    id: "manual",
    titleLine1: "Manual Work",
    titleLine2: "Everywhere",
    description: "Invoices, purchase orders, approvals and follow-ups eat hours every day. Your best people spend their time on data entry instead of growth.",
    pillLabel: "Automated Workflows",
    Graphic: SculpturalGear3D
  },
  {
    id: "dark",
    titleLine1: "Decisions In",
    titleLine2: "The Dark",
    description: "By the time month-end numbers arrive, it's too late to act. Stock-outs, cash gaps and missed opportunities show up after the damage is done.",
    pillLabel: "Real-Time Visibility",
    Graphic: SculpturalSpiral3D
  }
];

export default function ProblemSection({ onOpenConsultation }) {
  const [inView, setInView] = useState(false);
  const [revealedCards, setRevealedCards] = useState([false, false, false]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [spotlightIdx, setSpotlightIdx] = useState(-1);
  const sectionRef = useRef(null);

  // Touch Swipe tracking for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // 1. Intersection Observer: Trigger entrance sequence ONCE when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  // 2. Fast Cascaded Entrance: Cards quickly appear in rapid sequence (0ms, 120ms, 240ms)
  useEffect(() => {
    if (!inView) return;

    const t0 = setTimeout(() => {
      setRevealedCards((prev) => [true, prev[1], prev[2]]);
    }, 60);

    const t1 = setTimeout(() => {
      setRevealedCards((prev) => [true, true, prev[2]]);
    }, 180);

    const t2 = setTimeout(() => {
      setRevealedCards([true, true, true]);
    }, 300);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [inView]);

  // 3. "And then one by one appear / slide" Sequence:
  // After all 3 cards appear, smoothly slide through them one by one
  useEffect(() => {
    if (!inView || isPaused) return;

    // Mobile slide sequence: Card 0 -> Card 1 -> Card 2
    const slideTimer1 = setTimeout(() => {
      if (!isPaused) setActiveIdx(1);
    }, 1600);

    const slideTimer2 = setTimeout(() => {
      if (!isPaused) setActiveIdx(2);
    }, 3400);

    const slideTimer3 = setTimeout(() => {
      if (!isPaused) setActiveIdx(0);
    }, 5200);

    // Desktop spotlight wave: highlights cards sequentially
    const spotTimer0 = setTimeout(() => setSpotlightIdx(0), 1000);
    const spotTimer1 = setTimeout(() => setSpotlightIdx(1), 2200);
    const spotTimer2 = setTimeout(() => setSpotlightIdx(2), 3400);
    const spotTimerClear = setTimeout(() => setSpotlightIdx(-1), 4600);

    return () => {
      clearTimeout(slideTimer1);
      clearTimeout(slideTimer2);
      clearTimeout(slideTimer3);
      clearTimeout(spotTimer0);
      clearTimeout(spotTimer1);
      clearTimeout(spotTimer2);
      clearTimeout(spotTimerClear);
    };
  }, [inView, isPaused]);

  // Swipe gesture handling for mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minDistance = 40;

    if (distance > minDistance) {
      // Swiped left -> next card
      setActiveIdx((prev) => (prev < PROBLEM_CARDS_DATA.length - 1 ? prev + 1 : 0));
    } else if (distance < -minDistance) {
      // Swiped right -> previous card
      setActiveIdx((prev) => (prev > 0 ? prev - 1 : PROBLEM_CARDS_DATA.length - 1));
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsPaused(true);
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : PROBLEM_CARDS_DATA.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setIsPaused(true);
    setActiveIdx((prev) => (prev < PROBLEM_CARDS_DATA.length - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-bone text-dark relative overflow-hidden select-none scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header: USL Studio Typography & Masked Animation */}
        {/* ======================================================== */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <Reveal direction="up" delay={50}>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
              <span>{problemSection.badge}</span>
              <span className="w-8 h-[1px] bg-accent/40" />
            </div>
          </Reveal>

          <h2 className="text-3xl sm:text-5xl md:text-[52px] font-light tracking-tight text-dark leading-[1.14] sm:leading-[1.12]">
            <MaskRise delay={80}>Is your business outgrowing</MaskRise>
            <MaskRise delay={160} className="font-semibold text-dark">
              <span className="text-accent text-[1.06em] font-bold inline-block">spreadsheets</span> and <span className="text-accent text-[1.06em] font-bold inline-block">disconnected</span> software?
            </MaskRise>
          </h2>

          <Reveal direction="up" delay={200}>
            <p className="text-sm sm:text-base text-dark/70 font-normal mt-4 max-w-2xl leading-relaxed">
              {problemSection.subtitle}
            </p>
          </Reveal>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW (< md): FAST CASCADE + BUTTERY SMOOTH SLIDER */}
        {/* Centered Active Card with Peeking Neighbors & Touch-Swipe */}
        {/* ======================================================== */}
        <div 
          className="md:hidden relative -mx-4 px-4 sm:-mx-6 sm:px-6 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Swipe Track Stage */}
          <div 
            className="overflow-hidden py-3"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex items-stretch gap-4 transition-transform duration-650 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                // Keeps active card perfectly centered with next/prev card peeking symmetrically
                transform: `translateX(calc(50% - 150px - (${activeIdx} * 316px)))`,
                willChange: 'transform'
              }}
            >
              {PROBLEM_CARDS_DATA.map((card, i) => {
                const GraphicComponent = card.Graphic;
                const isCardRevealed = revealedCards[i];
                const isActive = activeIdx === i;

                return (
                  <div 
                    key={card.id} 
                    onClick={() => {
                      if (isActive) {
                        onOpenConsultation();
                      } else {
                        setIsPaused(true);
                        setActiveIdx(i);
                      }
                    }}
                    style={{
                      width: '300px',
                      flexShrink: 0,
                      opacity: isCardRevealed ? 1 : 0,
                      transform: isCardRevealed 
                        ? (isActive ? 'scale(1)' : 'scale(0.95)') 
                        : 'translateY(40px) scale(0.88)',
                      transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                      willChange: 'opacity, transform'
                    }}
                    className={`rounded-[28px] bg-[#1C56FE] border p-6 text-white shadow-[0_16px_40px_rgba(28,86,254,0.22)] flex flex-col justify-between cursor-pointer min-h-[490px] relative overflow-hidden transition-all duration-300 ${
                      isActive 
                        ? 'border-white/35 ring-2 ring-white/30 shadow-[0_24px_50px_rgba(28,86,254,0.32)]' 
                        : 'border-white/15 opacity-85'
                    }`}
                  >
                    {/* Top Content */}
                    <div className="relative z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-semibold block mb-1">
                        Challenge 0{i + 1}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-white tracking-tight leading-[1.12]">
                        {card.titleLine1}
                        <br />
                        {card.titleLine2}
                      </h3>

                      <p className="text-xs text-white/85 leading-relaxed font-normal mt-3">
                        {card.description}
                      </p>
                    </div>

                    {/* Middle 3D Sculptural Art */}
                    <div 
                      className="my-2 w-full h-44 flex items-center justify-center relative z-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        transform: isCardRevealed ? 'scale(1) rotate(0deg)' : 'scale(0.82) rotate(-5deg)'
                      }}
                    >
                      <GraphicComponent idPrefix="mob" />
                    </div>

                    {/* Bottom Action Row */}
                    <div className="flex items-center justify-between pt-4 relative z-10">
                      <div className="px-3.5 py-1.5 rounded-full bg-white text-[#1C56FE] font-medium text-xs shadow-md tracking-tight">
                        {card.pillLabel}
                      </div>

                      <div className="w-9 h-9 rounded-full bg-white text-[#1C56FE] shadow-md flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-[#1C56FE]" />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Bottom Navigation Controls */}
          <div className="flex items-center justify-between mt-3 px-2">
            {/* Step Counter Pill */}
            <div className="px-3 py-1 rounded-full bg-white border border-dark/15 text-[11px] font-mono text-dark/70 font-semibold shadow-xs">
              <span>0{activeIdx + 1}</span>
              <span className="text-dark/30 mx-1">/</span>
              <span>03</span>
            </div>

            {/* Pagination Progress Dots */}
            <div className="flex items-center gap-1.5">
              {PROBLEM_CARDS_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => {
                    setIsPaused(true);
                    setActiveIdx(dotIdx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === activeIdx
                      ? 'w-7 bg-[#1C56FE]'
                      : 'w-2 bg-dark/20 hover:bg-dark/40'
                  }`}
                  aria-label={`Slide to challenge 0${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Chevrons */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white border border-dark/15 text-dark hover:bg-dark hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
                aria-label="Previous challenge"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white border border-dark/15 text-dark hover:bg-dark hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
                aria-label="Next challenge"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW (≥ md): 3-COLUMN GRID + FAST CASCADE + WAVE */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-8 items-stretch">
          {PROBLEM_CARDS_DATA.map((card, i) => {
            const GraphicComponent = card.Graphic;
            const isCardRevealed = revealedCards[i];
            const isSpotlight = spotlightIdx === i;

            return (
              <div 
                key={card.id} 
                className="h-full"
                style={{
                  opacity: isCardRevealed ? 1 : 0,
                  transform: isCardRevealed 
                    ? (isSpotlight ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)') 
                    : 'translateY(45px) scale(0.92)',
                  transition: 'opacity 550ms cubic-bezier(0.16, 1, 0.3, 1), transform 550ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms ease',
                  willChange: 'opacity, transform'
                }}
              >
                <div
                  onClick={onOpenConsultation}
                  className={`h-full rounded-[28px] sm:rounded-[36px] bg-[#1C56FE] border p-6 sm:p-8 flex flex-col justify-between cursor-pointer group relative overflow-hidden select-none min-h-[480px] sm:min-h-[510px] transition-all duration-500 ${
                    isSpotlight
                      ? 'border-white/40 ring-2 ring-white/35 shadow-[0_30px_65px_rgba(28,86,254,0.35)]'
                      : 'border-white/20 shadow-[0_16px_40px_rgba(28,86,254,0.18)] hover:shadow-[0_28px_60px_rgba(28,86,254,0.3)] hover:-translate-y-2'
                  }`}
                >
                  {/* Top Text Content */}
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-semibold block mb-1">
                      Challenge 0{i + 1}
                    </span>
                    <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold font-heading text-white tracking-tight leading-[1.12]">
                      {card.titleLine1}
                      <br />
                      {card.titleLine2}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed font-normal mt-3 max-w-[280px]">
                      {card.description}
                    </p>
                  </div>

                  {/* Middle 3D Sculptural Art (Centerpiece) */}
                  <div 
                    className="my-2 sm:my-3 w-full h-44 sm:h-48 flex items-center justify-center relative z-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
                    style={{
                      transform: isCardRevealed ? 'scale(1) rotate(0deg)' : 'scale(0.82) rotate(-5deg)'
                    }}
                  >
                    <GraphicComponent idPrefix="desk" />
                  </div>

                  {/* Bottom Action Row: White Pill Badge (Left) + White Round Arrow (Right) */}
                  <div className="flex items-center justify-between pt-4 relative z-10">
                    <div className="px-4 py-1.5 rounded-full bg-white text-[#1C56FE] font-medium text-xs shadow-md tracking-tight group-hover:bg-white/95 transition-colors">
                      {card.pillLabel}
                    </div>

                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#1C56FE] shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:translate-x-0.5 transition-all">
                      <ArrowRight className="w-4 h-4 text-[#1C56FE]" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* Minimalist Editorial Transition Bar                      */}
        {/* ======================================================== */}
        <Reveal direction="up" delay={300}>
          <div className="mt-14 sm:mt-20 pt-8 border-t border-dark/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs sm:text-sm font-mono text-dark/60 max-w-2xl">
              {problemSection.transitionStatement}
            </p>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-2.5 rounded-full bg-dark hover:bg-dark-card text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md group cursor-pointer flex-shrink-0"
            >
              <span>See if we can help</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
