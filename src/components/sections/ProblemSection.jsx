import React, { useRef, useState, useEffect } from 'react';
import Reveal, { MaskRise } from '../common/Reveal';
import { problemSection } from '../../data/content';
import { ArrowRight, ChevronLeft, ChevronRight, Layers, FileSpreadsheet, AlertTriangle } from 'lucide-react';

/* ========================================================================= */
/* Clean, Modern, Non-AI Editorial Problem Cards                            */
/* Matching exact uploaded stacked-card aesthetic with rich gradient themes  */
/* ========================================================================= */

const EDITORIAL_PROBLEM_CARDS = [
  {
    id: "disconnected",
    challengeNumber: "01",
    tag: "Operational Fragmentation",
    Icon: Layers,
    title: "Disconnected systems create invisible blind spots",
    primaryBenefit: "Zero departmental silos",
    bullet1Title: "Scattered data across tools",
    bullet1Desc: "Sales lives in one CRM, stock in spreadsheets, and accounts in legacy accounting. Nobody sees the full financial reality.",
    bullet2Title: "No real-time truth",
    bullet2Desc: "Every executive report requires hours of manual cross-referencing, copying numbers, and hoping formulas didn't break.",
    gradient: "from-[#058a74] via-[#097b69] to-[#046153]", // Emerald / Teal
    shadowColor: "rgba(5, 138, 116, 0.35)",
    iconBg: "bg-emerald-950/25 border-emerald-400/30 text-emerald-100",
    stackLayerColor: "bg-[#066f5e]",
  },
  {
    id: "manual",
    challengeNumber: "02",
    tag: "Productivity Drain",
    Icon: FileSpreadsheet,
    title: "Manual data entry eats hours every single day",
    primaryBenefit: "Eliminate repetitive tasks",
    bullet1Title: "Trapped in daily administration",
    bullet1Desc: "Sales orders, vendor bills, and follow-ups demand endless typing. Your best professionals spend their time on clerical busywork.",
    bullet2Title: "Preventable error cascades",
    bullet2Desc: "A misplaced decimal or missed dispatch email derails operations. Without automation, mistakes scale faster than revenue.",
    gradient: "from-[#57279e] via-[#481e87] to-[#361369]", // Deep Royal Indigo / Purple
    shadowColor: "rgba(87, 39, 158, 0.35)",
    iconBg: "bg-purple-950/25 border-purple-400/30 text-purple-100",
    stackLayerColor: "bg-[#3e1975]",
  },
  {
    id: "dark",
    challengeNumber: "03",
    tag: "Strategic Risk",
    Icon: AlertTriangle,
    title: "Critical business decisions made in the dark",
    primaryBenefit: "Real-time executive clarity",
    bullet1Title: "Lagging month-end reporting",
    bullet1Desc: "By the time the monthly profit-and-loss statement is compiled, it's 20 days too late to steer inventory or cash flow.",
    bullet2Title: "Reactive firefighting",
    bullet2Desc: "Unexpected stock-outs, delayed customer orders, and overdue receivables show up only after the financial damage is done.",
    gradient: "from-[#e45b1d] via-[#d4480d] to-[#b83804]", // Deep Terracotta / Vibrant Coral Orange
    shadowColor: "rgba(228, 91, 29, 0.35)",
    iconBg: "bg-orange-950/25 border-orange-400/30 text-orange-100",
    stackLayerColor: "bg-[#a63002]",
  }
];

export default function ProblemSection({ onOpenConsultation }) {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
      setActiveIdx((prev) => (prev < EDITORIAL_PROBLEM_CARDS.length - 1 ? prev + 1 : 0));
    } else if (distance < -minDistance) {
      setActiveIdx((prev) => (prev > 0 ? prev - 1 : EDITORIAL_PROBLEM_CARDS.length - 1));
    }
  };

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-bone text-dark relative overflow-hidden select-none scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
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

        {/* MOBILE VIEW (< md): Touch Swipe Slider */}
        <div 
          className="md:hidden relative -mx-4 px-4 sm:-mx-6 sm:px-6 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="overflow-hidden py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex items-stretch gap-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(calc(50% - 150px - (${activeIdx} * 316px)))`,
                willChange: 'transform'
              }}
            >
              {EDITORIAL_PROBLEM_CARDS.map((card, i) => {
                const IconComponent = card.Icon;
                const isActive = activeIdx === i;

                return (
                  <div 
                    key={card.id} 
                    onClick={() => {
                      if (isActive) {
                        onOpenConsultation();
                      } else {
                        setActiveIdx(i);
                      }
                    }}
                    style={{
                      width: '300px',
                      flexShrink: 0,
                    }}
                    className={`relative rounded-3xl bg-gradient-to-b ${card.gradient} p-7 text-white flex flex-col justify-between cursor-pointer min-h-[460px] transition-all duration-300 ${
                      isActive 
                        ? 'ring-2 ring-white/40 shadow-xl scale-100 opacity-100' 
                        : 'scale-95 opacity-80'
                    }`}
                  >
                    {/* Stacked Card Effect Shadows (behind top) */}
                    <div 
                      className={`absolute -top-1.5 left-4 right-4 h-3 rounded-2xl ${card.stackLayerColor} opacity-60 -z-10`} 
                    />
                    <div 
                      className={`absolute -top-3 left-8 right-8 h-3 rounded-2xl ${card.stackLayerColor} opacity-30 -z-20`} 
                    />

                    <div>
                      {/* Top Circular Icon */}
                      <div className={`w-11 h-11 rounded-full border flex items-center justify-center mb-6 ${card.iconBg} backdrop-blur-sm shadow-inner`}>
                        <IconComponent className="w-5 h-5 text-white/95" />
                      </div>

                      {/* Main Problem Headline */}
                      <h3 className="text-2xl font-bold font-heading text-white tracking-tight leading-[1.2] mb-6">
                        {card.title}
                      </h3>

                      {/* Bullet point 1 */}
                      <div className="mb-4">
                        <p className="text-xs text-white/95 leading-relaxed font-light">
                          <strong className="font-semibold text-white">{card.bullet1Title}:</strong> {card.bullet1Desc}
                        </p>
                      </div>

                      {/* Bullet point 2 */}
                      <div>
                        <p className="text-xs text-white/95 leading-relaxed font-light">
                          <strong className="font-semibold text-white">{card.bullet2Title}:</strong> {card.bullet2Desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Pill */}
                    <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/80 font-medium">
                        {card.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-dark flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Bottom Navigation Dots & Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex gap-1.5">
              {EDITORIAL_PROBLEM_CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIdx === i ? 'w-6 bg-accent' : 'w-1.5 bg-dark/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((prev) => (prev > 0 ? prev - 1 : EDITORIAL_PROBLEM_CARDS.length - 1));
                }}
                className="w-8 h-8 rounded-full bg-white border border-dark/15 text-dark flex items-center justify-center shadow-xs cursor-pointer"
                aria-label="Previous challenge"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((prev) => (prev < EDITORIAL_PROBLEM_CARDS.length - 1 ? prev + 1 : 0));
                }}
                className="w-8 h-8 rounded-full bg-white border border-dark/15 text-dark flex items-center justify-center shadow-xs cursor-pointer"
                aria-label="Next challenge"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW (≥ md): 3-Card Stacked Deck Layout Matching Uploaded Reference */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          {EDITORIAL_PROBLEM_CARDS.map((card, i) => {
            const IconComponent = card.Icon;

            return (
              <div 
                key={card.id} 
                className="relative group cursor-pointer h-full"
                onClick={onOpenConsultation}
              >
                {/* Visual Stack Deck Layers (Matches Image Stack Effect) */}
                <div 
                  className={`absolute -top-1.5 left-5 right-5 h-4 rounded-3xl ${card.stackLayerColor} opacity-70 transition-transform duration-300 group-hover:-translate-y-1`} 
                />
                <div 
                  className={`absolute -top-3 left-10 right-10 h-4 rounded-3xl ${card.stackLayerColor} opacity-35 transition-transform duration-300 group-hover:-translate-y-1.5`} 
                />

                {/* Main Card Body */}
                <div
                  style={{
                    boxShadow: `0 20px 40px ${card.shadowColor}`,
                  }}
                  className={`relative z-10 h-full rounded-[30px] lg:rounded-[34px] bg-gradient-to-b ${card.gradient} p-7 lg:p-8 flex flex-col justify-between text-white border border-white/20 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl min-h-[490px]`}
                >
                  <div>
                    {/* Top Circular Badge with Icon */}
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center mb-6 sm:mb-8 ${card.iconBg} backdrop-blur-sm shadow-inner transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl lg:text-[26px] font-bold font-heading text-white tracking-tight leading-[1.2] mb-6">
                      {card.title}
                    </h3>

                    {/* Key Point 1 */}
                    <div className="mb-5">
                      <p className="text-[13px] text-white/90 leading-relaxed font-light">
                        <strong className="font-semibold text-white block mb-0.5">{card.bullet1Title}:</strong>
                        {card.bullet1Desc}
                      </p>
                    </div>

                    {/* Key Point 2 */}
                    <div>
                      <p className="text-[13px] text-white/90 leading-relaxed font-light">
                        <strong className="font-semibold text-white block mb-0.5">{card.bullet2Title}:</strong>
                        {card.bullet2Desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Footer Row with Tag + Arrow Action */}
                  <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-white/80 font-medium">
                      {card.tag}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/15 group-hover:bg-white text-white group-hover:text-dark flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Editorial Transition Bar */}
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
