import React, { useState } from 'react';
import { faqList } from '../../data/content';
import { ChevronDown, Search, ArrowRight, MessageCircle } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';
import Reveal, { MaskRise } from '../common/Reveal';
import { useRegion } from '../../context/RegionContext';

export default function FaqSection({ onOpenConsultation }) {
  const { region, isPakistan } = useRegion();
  const [openIndex, setOpenIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqList.filter(
    item => item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      isPakistan 
        ? "Hello Qalibrate, I have a specific question about Odoo ERP licensing and implementation in Pakistan." 
        : "Hello Qalibrate, I have a specific question about Odoo ERP licensing and implementation in Pakistan, Dubai, or Texas."
    );
    window.open(`https://wa.me/923001234567?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="pt-6 md:pt-10 pb-12 md:pb-16 bg-bone text-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header: Light + Blue with MaskRise */}
        <Reveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-accent border border-accent/25 mb-4 bg-accent/5">
              <span>FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-light tracking-tight text-dark leading-[1.14] sm:leading-[1.1]">
              <MaskRise delay={50}>Odoo ERP and AI:</MaskRise>
              <MaskRise delay={150} className="font-semibold text-dark">
                <span className="text-accent text-[1.06em] font-bold inline-block">frequently asked</span> questions
              </MaskRise>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-dark/70 leading-relaxed font-normal max-w-xl mx-auto">
              {isPakistan 
                ? "Straight answers on fit, scope, licensing, Pakistani FBR digital invoicing, and localized enterprise rollout." 
                : "Straight answers on fit, scope, licensing, multi-region localization (Pakistan, UAE & US), and AI automation."}
            </p>

            {/* Quick Search Input */}
            <div className="mt-8 relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-dark/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics (e.g. cost, migration, FBR, timeline)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 text-xs sm:text-sm rounded-full border border-dark/15 bg-white text-dark placeholder:text-dark/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all shadow-xs"
              />
            </div>
          </div>
        </Reveal>

        {/* USL Studio Accordion Cards */}
        <Reveal direction="up" delay={150}>
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index}
                  className={`rounded-[24px] border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-accent/30 shadow-md ring-1 ring-accent/10' 
                      : 'bg-white hover:border-dark/20 border-dark/10 shadow-xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5">
                      <span className="text-xs font-mono font-bold text-accent pt-0.5 sm:pt-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-sm sm:text-base font-semibold tracking-tight transition-colors leading-snug ${
                        isOpen ? 'text-accent' : 'text-dark'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5 sm:mt-0 ${
                      isOpen ? 'bg-accent text-white rotate-180 shadow-xs' : 'bg-bone text-dark hover:bg-dark hover:text-white'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-dark/75 leading-relaxed font-normal border-t border-dark/5">
                      <p className="pl-6 sm:pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Bottom WhatsApp / Direct Question Pill */}
        <Reveal direction="up" delay={200}>
          <div className="mt-12 sm:mt-14 p-5 sm:p-8 rounded-[24px] sm:rounded-[28px] bg-white border border-dark/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-dark">
                Have an unlisted operational question?
              </h4>
              <p className="text-xs text-dark/60 mt-1">
                Speak directly with a Senior ERP Architect.
              </p>
            </div>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-sm cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
              <span>Ask on WhatsApp</span>
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
