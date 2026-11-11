import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';
import OdooPartnerBadge from '../common/OdooPartnerBadge';
import Reveal, { MaskRise } from '../common/Reveal';
import { useRegion } from '../../context/RegionContext';
import { submitConsultationLead } from '../../services/formSubmission';

/* ========================================================================= */
/* CONTACT / CONSULTATION SECTION (Master Content Brief 1:1 Match)           */
/* ========================================================================= */

export default function ContactSection({ onOpenConsultation }) {
  const { region, isPakistan } = useRegion();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneWhatsApp: '',
    helpTopic: 'Odoo implementation',
    currentOdoo: 'No ERP / Spreadsheets',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitConsultationLead(formData, 'Homepage Contact Section');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Qalibrate team. I would like to schedule a 30-minute consultation regarding ${formData.helpTopic || 'Odoo ERP and AI automation'}.`
    );
    window.open(`https://wa.me/923001234567?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-bone text-dark relative overflow-hidden select-none scroll-mt-24 border-t border-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Clean Editorial White Consultation Card */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-white text-dark border border-dark/10 shadow-[0_24px_60px_rgba(15,23,42,0.06)] overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
            
            {/* Left Column: Headline, Master Brief Pitch & Direct WhatsApp */}
            <div className="lg:col-span-6 p-5 sm:p-10 md:p-16 flex flex-col justify-between">
              <Reveal direction="left" delay={100}>
                <div>
                  {/* Clean Partner Pill with Official Odoo Icon */}
                  <div className="mb-5 sm:mb-6">
                    <OdooPartnerBadge 
                      theme="light" 
                      text={isPakistan ? "Official Odoo Partner · Pakistan" : "Official Odoo Partner · Pakistan · Dubai · Texas"} 
                    />
                  </div>

                  {/* Monumental Headline matching Brief */}
                  <h2 className="text-3xl sm:text-5xl md:text-[52px] font-light tracking-tight text-dark leading-[1.14] sm:leading-[1.1]">
                    <MaskRise delay={50}>Ready to</MaskRise>
                    <MaskRise delay={150} className="font-semibold text-dark">
                      <span className="text-accent text-[1.06em] font-bold inline-block">calibrate</span> your business?
                    </MaskRise>
                  </h2>

                  <p className="mt-4 sm:mt-5 text-sm sm:text-base text-dark/70 leading-relaxed font-normal max-w-lg">
                    Tell us where things feel stuck. In a free 30-minute consultation, we'll map your needs, show you what Odoo and AI can do for your business, and give you an honest view of scope, timeline and cost.
                  </p>

                  {/* 3 Guarantees from brief */}
                  <div className="mt-6 sm:mt-8 space-y-3 text-xs font-mono text-dark/80">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>30-minute call · No obligation · Straight answers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Fixed scope and clear quote before work starts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{isPakistan ? "On-site deployment team · Lahore, Khi & Isb · In-person handover" : "Multi-region team · Pakistan, Dubai & Texas · Your time zone"}</span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Action Button */}
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-dark/10">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-mono text-xs sm:text-[13px] uppercase tracking-wider font-bold transition-all shadow-[0_8px_20px_rgba(37,211,102,0.28)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.38)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                    >
                      <WhatsAppIcon className="w-5 h-5 flex-shrink-0" circleFill="#FFFFFF" iconFill="#25D366" />
                      <span>Chat on WhatsApp</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <span className="text-[11px] font-mono text-dark/55 text-center sm:text-left">
                      Direct line to Senior ERP Architect
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Clean Form Matching Master Brief */}
            <div className="lg:col-span-6 p-5 sm:p-10 md:p-16 bg-bone/35 border-t lg:border-t-0 lg:border-l border-dark/10 flex items-center justify-center">
              <Reveal direction="right" delay={200} className="w-full max-w-md">
                <div className="w-full">
                  {submitted ? (
                    <div className="py-12 text-center flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-5 border border-accent/25">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-light text-dark tracking-tight">Request Received</h3>
                      <p className="text-sm text-dark/75 mt-3 max-w-xs leading-relaxed font-normal">
                        Thanks! Our team will get back to you within one business day.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-xs font-mono uppercase tracking-wider text-accent hover:underline cursor-pointer font-semibold"
                      >
                        Send another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="mb-5">
                        <h3 className="text-xl sm:text-2xl font-light text-dark tracking-tight">
                          Book a free consultation
                        </h3>
                        <p className="text-xs text-dark/60 mt-1 font-normal">
                          Straight answers on fit, scope, and cost.
                        </p>
                      </div>

                      {/* Row 1: Full Name & Company Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/60 mb-1 font-medium">
                            Full name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Tariq Mehmood"
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-dark/15 bg-white text-dark placeholder:text-dark/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all shadow-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/60 mb-1 font-medium">
                            Company name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Indus Apparel"
                            value={formData.companyName}
                            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                            className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-dark/15 bg-white text-dark placeholder:text-dark/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Row 2: Work Email & Phone / WhatsApp */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/60 mb-1 font-medium">
                            Work email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="tariq@company.pk"
                            value={formData.workEmail}
                            onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                            className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-dark/15 bg-white text-dark placeholder:text-dark/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all shadow-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/60 mb-1 font-medium">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+92 300 1234567"
                            value={formData.phoneWhatsApp}
                            onChange={(e) => setFormData({...formData, phoneWhatsApp: e.target.value})}
                            className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-dark/15 bg-white text-dark placeholder:text-dark/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      {/* What do you need help with? */}
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/60 mb-1 font-medium">
                          What do you need help with?
                        </label>
                        <select
                          value={formData.helpTopic}
                          onChange={(e) => setFormData({...formData, helpTopic: e.target.value})}
                          className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-dark/15 bg-white text-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all shadow-xs cursor-pointer"
                        >
                          <option value="Odoo implementation">Odoo implementation</option>
                          <option value="Customization and module development">Customization and module development</option>
                          <option value="Migration or upgrade">Migration or upgrade</option>
                          <option value="Odoo rescue">Odoo rescue</option>
                          <option value="AI and automation">AI and automation</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>

                      {/* Currently using Odoo? */}
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/60 mb-1 font-medium">
                          Currently using Odoo?
                        </label>
                        <select
                          value={formData.currentOdoo}
                          onChange={(e) => setFormData({...formData, currentOdoo: e.target.value})}
                          className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-dark/15 bg-white text-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all shadow-xs cursor-pointer"
                        >
                          <option value="No ERP / Spreadsheets">No ERP / Using Spreadsheets</option>
                          <option value="Currently Running Odoo">Yes, currently running Odoo</option>
                          <option value="Legacy Software (QuickBooks, Tally, SAP)">Using Legacy Software (QuickBooks, Tally, etc.)</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/60 mb-1 font-medium">
                          Message
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about your processes, pain points or goals..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-dark/15 bg-white text-dark placeholder:text-dark/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all shadow-xs resize-none"
                        />
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 py-3 px-6 rounded-full bg-accent hover:bg-accent-light disabled:opacity-60 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer hover:-translate-y-0.5"
                      >
                        <span>{isSubmitting ? 'Sending Request...' : 'Send my request'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <p className="text-[10px] text-center text-dark/45 font-mono mt-2">
                        No obligation · Response within one business day
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
