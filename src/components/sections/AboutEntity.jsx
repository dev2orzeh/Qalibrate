import React from 'react';
import Reveal, { MaskRise } from '../common/Reveal';
import { useRegion } from '../../context/RegionContext';

export default function AboutEntity({ onOpenConsultation }) {
  const { region, isPakistan } = useRegion();

  return (
    <section id="deployment-network" className="py-14 sm:py-18 md:py-24 bg-bone text-dark relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Horizontal Editorial Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Pill, Monumental Headline & Narrative */}
          <div className="max-w-xl">
            <Reveal direction="up" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-dark/70 border border-dark/15 mb-5 bg-white/40">
                <span>{isPakistan ? "PAKISTAN DEPLOYMENT NETWORK" : "GLOBAL DEPLOYMENT NETWORK"}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-dark leading-[1.14] sm:leading-[1.1] mb-4">
                <MaskRise delay={50}>On the ground.</MaskRise>
                <MaskRise delay={150} className="font-semibold text-dark">
                  <span className="text-accent text-[1.06em] font-bold inline-block">
                    {isPakistan ? "Across Lahore, Karachi & Islamabad." : "Across Pakistan, Dubai & Texas."}
                  </span>
                </MaskRise>
              </h2>

              <p className="text-sm sm:text-base text-dark/65 font-normal leading-relaxed max-w-md">
                {isPakistan
                  ? "Institutional ERP engineering and business automation with dedicated on-site deployment teams active across Pakistan's industrial and corporate capitals."
                  : "Institutional ERP engineering and AI automation with dedicated on-site and remote teams across Pakistan, Dubai, and Texas."
                }
              </p>
            </Reveal>
          </div>

          {/* Right Column: Landmark Regional Blocks with Hairline Dividers */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Reveal direction="scale" delay={120}>
              <div className="flex items-center justify-between sm:justify-start gap-2 xs:gap-3 sm:gap-6 md:gap-8">
                {region.hubs.map((hub, idx) => (
                  <React.Fragment key={hub.id}>
                    {/* Landmark Unit */}
                    <div 
                      onClick={onOpenConsultation}
                      className="flex flex-col items-center group cursor-pointer flex-1 sm:flex-initial"
                    >
                      <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-2xl sm:rounded-3xl bg-white border border-dark/10 shadow-xs flex items-center justify-center p-3 sm:p-4 group-hover:border-accent/40 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                        <img 
                          src={hub.svgIcon} 
                          alt={`${hub.name} Landmark`} 
                          className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain opacity-85 group-hover:opacity-100 transition-opacity" 
                        />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base font-semibold text-dark tracking-tight text-center mt-2 sm:mt-3 group-hover:text-accent transition-colors">
                        {hub.name}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-dark/45 tracking-tight text-center mt-0.5">
                        {hub.detail}
                      </span>
                    </div>

                    {/* Hairline Divider between items (hidden after last item) */}
                    {idx < region.hubs.length - 1 && (
                      <div className="w-px h-10 xs:h-12 sm:h-16 md:h-18 bg-dark/12 self-center mx-1 sm:mx-3 md:mx-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
