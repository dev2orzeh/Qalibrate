import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Lightbulb, 
  Compass, 
  Code2, 
  Rocket, 
  Sliders, 
  ShieldCheck 
} from 'lucide-react';
import Reveal, { MaskRise } from '../common/Reveal';

/* ========================================================================= */
/* THE QALIBRATE METHOD (Master Content Brief 1:1 Match)                     */
/* Minimal Editorial Palette: Navbar Dark (#0F172A) + White (#FFFFFF)        */
/* Universal Spacious S-Curve Serpentine Roadmap (Mobile, Tablet & Full Web) */
/* ========================================================================= */

const methodSteps = [
  {
    step: "01",
    phase: "DISCOVERY AUDIT",
    title: "Discover",
    duration: "Week 1 · Sprint 0",
    description: "We study how your business really runs: people, processes, pain points and goals. You receive a fixed-scope blueprint and clear timeline before any work starts.",
    mobileDesc: "Ground reality audit, pain point mapping & fixed-scope blueprint.",
    deliverable: "Ground Reality Audit & Fixed Scope",
    Icon: Lightbulb
  },
  {
    step: "02",
    phase: "SYSTEM ARCHITECTURE",
    title: "Design",
    duration: "Week 2 · Sprint 1",
    description: "We map your future workflows in Odoo and decide where AI adds real value, with fixed scope, prototype demonstration, and zero upgrade bloat.",
    mobileDesc: "Workflow architecture in Odoo with prototype demonstration.",
    deliverable: "Workflow Architecture & Prototype",
    Icon: Compass
  },
  {
    step: "03",
    phase: "MODULAR ENGINEERING",
    title: "Build",
    duration: "Weeks 3–6 · Sprints 2–5",
    description: "We configure, customize, integrate and migrate your data, testing collaboratively with your team at every milestone stage.",
    mobileDesc: "Configured core apps, custom modules & data migration.",
    deliverable: "Tested Modules & Verified Migration",
    Icon: Code2
  },
  {
    step: "04",
    phase: "FLOOR DEPLOYMENT",
    title: "Launch",
    duration: "Go-Live Milestone",
    description: "We train your people hands-on, go live with dedicated support, and make sure the system is actually used with 100% floor confidence.",
    mobileDesc: "Hands-on staff training with on-site floor launch support.",
    deliverable: "User Training & On-Site Go-Live",
    Icon: Rocket
  },
  {
    step: "05",
    phase: "CONTINUOUS TUNING",
    title: "Calibrate",
    duration: "Ongoing Evolution",
    description: "We measure results, fine-tune workflows, automate reconciliations, and add automation as your transaction volume grows.",
    mobileDesc: "Fine-tune workflows and automate reconciliations at scale.",
    deliverable: "Performance Metrics & Workflow Tuning",
    Icon: Sliders
  },
  {
    step: "06",
    phase: "INSTITUTIONAL SLA",
    title: "Live Assurance",
    duration: "99.9% Uptime SLA",
    description: "Ongoing support, health checks and named senior architects so your system stays stable, up to date, and continually improving.",
    mobileDesc: "Enterprise SLA support, version upgrades & senior advisory.",
    deliverable: "SLA Guarantee & Code Handover",
    Icon: ShieldCheck
  }
];

export default function MethodSection({ onOpenConsultation }) {
  const [revealedCount, setRevealedCount] = useState(0);
  const containerRef = useRef(null);
  const roadmapRef = useRef(null);

  // Scroll Trigger: Sequential Curvy Entrance appears one-by-one slowly upon scrolling into view
  useEffect(() => {
    const el = roadmapRef.current;
    if (!el) return;

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal step 1 right away
          setRevealedCount(1);

          // Reveal subsequent steps one by one slowly (every 380ms)
          let current = 1;
          timer = setInterval(() => {
            current += 1;
            setRevealedCount((prev) => Math.max(prev, current));
            if (current >= methodSteps.length) {
              clearInterval(timer);
            }
          }, 380);

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

  return (
    <section 
      id="method" 
      ref={containerRef}
      className="py-16 sm:py-20 md:py-24 bg-white text-dark relative overflow-hidden select-none scroll-mt-24 border-y border-dark/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header: Minimal Studio Typography                */}
        {/* ======================================================== */}
        <div className="max-w-4xl mb-10 sm:mb-14 md:mb-16">
          <Reveal direction="up" delay={50}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-dark/70 border border-dark/15 mb-4 bg-dark/5">
              <span>How We Work</span>
            </div>
          </Reveal>

          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-light tracking-tight text-dark leading-[1.14] sm:leading-[1.1]">
            <MaskRise delay={80}>The Qalibrate Method:</MaskRise>
            <MaskRise delay={160} className="font-semibold text-dark">
              our <span className="font-bold inline-block border-b-2 border-dark pb-0.5">six-step</span> Odoo implementation process.
            </MaskRise>
          </h2>

          <Reveal direction="up" delay={200}>
            <p className="mt-4 text-base sm:text-lg text-dark/70 font-normal max-w-2xl leading-relaxed">
              Most ERP projects fail because they skip the thinking and jump straight to configuration. Our method puts your process first.
            </p>
          </Reveal>
        </div>

        {/* ======================================================== */}
        {/* UNIVERSAL SERPENTINE ROADMAP (Mobile, Tablet & Full Web) */}
        {/* Slim, Lightweight, Minimalist Capsules (#0F172A + White) */}
        {/* ======================================================== */}
        <div 
          ref={roadmapRef}
          className="relative py-4 sm:py-6 md:py-8 mb-8 sm:mb-12 select-none max-w-4xl mx-auto"
        >
          
          {/* Continuous Dotted S-Curve SVG Behind Nodes */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Mobile S-Curve SVG (< md) */}
            <svg 
              className="md:hidden w-full h-full" 
              viewBox="0 0 360 760" 
              preserveAspectRatio="none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 210 20 C 235 20, 255 45, 255 75 C 255 145, 105 145, 105 215 C 105 285, 255 285, 255 355 C 255 425, 105 425, 105 495 C 105 565, 255 565, 255 635 C 255 705, 105 705, 105 735"
                stroke="#0F172A" 
                strokeWidth="4" 
                strokeOpacity="0.04"
                strokeLinecap="round"
              />
              <path 
                d="M 210 20 C 235 20, 255 45, 255 75 C 255 145, 105 145, 105 215 C 105 285, 255 285, 255 355 C 255 425, 105 425, 105 495 C 105 565, 255 565, 255 635 C 255 705, 105 705, 105 735"
                stroke="#0F172A" 
                strokeWidth="1.5" 
                strokeDasharray="4 6" 
                strokeOpacity="0.28"
                strokeLinecap="round"
                className="animate-pipeline-flow"
              />
              <circle cx="210" cy="20" r="3.5" fill="#0F172A" fillOpacity="0.35" />
              <circle cx="105" cy="735" r="3.5" fill="#0F172A" fillOpacity="0.35" />
            </svg>

            {/* Desktop & Tablet S-Curve SVG (≥ md): Slim Gentle Flow */}
            <svg 
              className="hidden md:block w-full h-full" 
              viewBox="0 0 1000 960" 
              preserveAspectRatio="none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 520 20 C 550 20, 580 40, 580 85 C 580 175, 420 175, 420 260 C 420 345, 580 345, 580 430 C 580 515, 420 515, 420 600 C 420 685, 580 685, 580 770 C 580 855, 420 855, 420 920 C 420 945, 450 955, 480 955"
                stroke="#0F172A" 
                strokeWidth="6" 
                strokeOpacity="0.04"
                strokeLinecap="round"
              />
              <path 
                d="M 520 20 C 550 20, 580 40, 580 85 C 580 175, 420 175, 420 260 C 420 345, 580 345, 580 430 C 580 515, 420 515, 420 600 C 420 685, 580 685, 580 770 C 580 855, 420 855, 420 920 C 420 945, 450 955, 480 955"
                stroke="#0F172A" 
                strokeWidth="2" 
                strokeDasharray="5 7" 
                strokeOpacity="0.25"
                strokeLinecap="round"
                className="animate-pipeline-flow"
              />
              <circle cx="520" cy="20" r="4.5" fill="#0F172A" fillOpacity="0.35" />
              <circle cx="480" cy="955" r="4.5" fill="#0F172A" fillOpacity="0.35" />
            </svg>
          </div>

          {/* 6 Serpentine Steps: Slim & Lightweight Capsules */}
          <div className="relative z-10 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {methodSteps.map((item, idx) => {
              const isOdd = idx % 2 === 0; // idx 0 (01), idx 2 (03), idx 4 (05) are Odd (Capsule Left)
              const StepIcon = item.Icon;
              const isStepVisible = idx < revealedCount;

              return (
                <div 
                  key={item.step}
                  onClick={onOpenConsultation}
                  className="flex items-center justify-between cursor-pointer group active:scale-[0.99] transition-transform"
                >
                  {isOdd ? (
                    /* ODD STEP (01, 03, 05): Capsule Left ─► Target Node + STEP Right */
                    <>
                      {/* Slim Left Capsule Shape (Navbar Dark #0F172A) */}
                      <div 
                        className="w-[72%] sm:w-[64%] md:w-[52%] lg:w-[48%] max-w-[420px] rounded-full py-2.5 px-3.5 sm:py-3 sm:px-4.5 md:py-3.5 md:px-5 text-white relative shadow-[0_8px_22px_rgba(15,23,42,0.16)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.22)] flex items-center justify-between gap-2.5 sm:gap-3.5 bg-[#0F172A] border border-white/10 group-hover:border-white/25 transition-all duration-300"
                        style={{
                          opacity: isStepVisible ? 1 : 0,
                          transform: isStepVisible ? 'translateX(0) scale(1)' : 'translateX(-40px) scale(0.94)',
                          transition: 'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1), transform 750ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease, border-color 300ms ease',
                          willChange: 'opacity, transform'
                        }}
                      >
                        <div className="flex-1 min-w-0 pr-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-white/60 font-semibold block leading-tight">
                              {item.duration}
                            </span>
                            <span className="hidden md:inline-block text-[9px] font-mono uppercase tracking-widest text-white/35">
                              · {item.phase}
                            </span>
                          </div>

                          <h4 className="text-sm sm:text-base md:text-lg font-bold font-heading text-white leading-tight truncate mt-0.5">
                            {item.title}
                          </h4>

                          <p className="text-[11px] sm:text-xs text-white/75 leading-snug line-clamp-2 mt-0.5 font-normal">
                            {item.mobileDesc}
                          </p>
                        </div>

                        {/* Slim White Inner Circle Button with Pointer Notch */}
                        <div className="relative flex-shrink-0">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white shadow-sm flex items-center justify-center border border-black/10 group-hover:scale-105 transition-transform">
                            <StepIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" />
                          </div>
                          {/* Pointer Notch ▶ */}
                          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#0F172A]" />
                        </div>
                      </div>

                      {/* Right Target Node + Step Number (Navbar Dark #0F172A) */}
                      <div 
                        className="w-[28%] sm:w-[36%] md:w-[48%] lg:w-[52%] flex items-center justify-start gap-2 sm:gap-3.5 md:gap-5 pl-2 sm:pl-3 md:pl-6 lg:pl-10"
                        style={{
                          opacity: isStepVisible ? 1 : 0,
                          transform: isStepVisible ? 'translateX(0) scale(1)' : 'translateX(25px) scale(0.88)',
                          transition: 'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) 120ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) 120ms',
                          willChange: 'opacity, transform'
                        }}
                      >
                        {/* Target Node (Concentric Ring) */}
                        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 border-[#0F172A] bg-white flex items-center justify-center flex-shrink-0 shadow-xs z-10 group-hover:scale-110 transition-transform">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#0F172A]" />
                        </div>

                        {/* Step Typography */}
                        <div className="flex flex-col">
                          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-dark/45 font-bold leading-none">
                            STEP
                          </span>
                          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading leading-none tracking-tight text-[#0F172A] mt-0.5">
                            {item.step}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* EVEN STEP (02, 04, 06): STEP + Target Node Left ◄─ Capsule Right */
                    <>
                      {/* Left Step Number + Target Node (Navbar Dark #0F172A) */}
                      <div 
                        className="w-[28%] sm:w-[36%] md:w-[48%] lg:w-[52%] flex items-center justify-end gap-2 sm:gap-3.5 md:gap-5 pr-2 sm:pr-3 md:pr-6 lg:pr-10"
                        style={{
                          opacity: isStepVisible ? 1 : 0,
                          transform: isStepVisible ? 'translateX(0) scale(1)' : 'translateX(-25px) scale(0.88)',
                          transition: 'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) 120ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) 120ms',
                          willChange: 'opacity, transform'
                        }}
                      >
                        {/* Step Typography */}
                        <div className="flex flex-col items-end">
                          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-dark/45 font-bold leading-none text-right">
                            STEP
                          </span>
                          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading leading-none tracking-tight text-right text-[#0F172A] mt-0.5">
                            {item.step}
                          </span>
                        </div>

                        {/* Target Node (Concentric Ring) */}
                        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 border-[#0F172A] bg-white flex items-center justify-center flex-shrink-0 shadow-xs z-10 group-hover:scale-110 transition-transform">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#0F172A]" />
                        </div>
                      </div>

                      {/* Slim Right Capsule Shape (Navbar Dark #0F172A) */}
                      <div 
                        className="w-[72%] sm:w-[64%] md:w-[52%] lg:w-[48%] max-w-[420px] rounded-full py-2.5 px-3.5 sm:py-3 sm:px-4.5 md:py-3.5 md:px-5 text-white relative shadow-[0_8px_22px_rgba(15,23,42,0.16)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.22)] flex items-center justify-between gap-2.5 sm:gap-3.5 bg-[#0F172A] border border-white/10 group-hover:border-white/25 transition-all duration-300"
                        style={{
                          opacity: isStepVisible ? 1 : 0,
                          transform: isStepVisible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.94)',
                          transition: 'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1), transform 750ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease, border-color 300ms ease',
                          willChange: 'opacity, transform'
                        }}
                      >
                        {/* Slim White Inner Circle Button with Pointer Notch */}
                        <div className="relative flex-shrink-0">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white shadow-sm flex items-center justify-center border border-black/10 group-hover:scale-105 transition-transform">
                            <StepIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F172A]" />
                          </div>
                          {/* Pointer Notch ◀ */}
                          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-[#0F172A]" />
                        </div>

                        <div className="flex-1 min-w-0 pl-1 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <span className="hidden md:inline-block text-[9px] font-mono uppercase tracking-widest text-white/35">
                              {item.phase} ·
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-white/60 font-semibold block leading-tight">
                              {item.duration}
                            </span>
                          </div>

                          <h4 className="text-sm sm:text-base md:text-lg font-bold font-heading text-white leading-tight truncate mt-0.5">
                            {item.title}
                          </h4>

                          <p className="text-[11px] sm:text-xs text-white/75 leading-snug line-clamp-2 mt-0.5 font-normal">
                            {item.mobileDesc}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ======================================================== */}
        {/* Bottom Status Guarantee & Action Bar                     */}
        {/* ======================================================== */}
        <div className="mt-12 sm:mt-18 pt-8 border-t border-dark/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs font-mono text-dark/60 tracking-wide text-center sm:text-left">
            Fixed scope · Clear milestones · Hands-on training included across Pakistan, Dubai & Texas
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-dark hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md group cursor-pointer flex-shrink-0"
          >
            <span>Schedule Discovery Session</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
