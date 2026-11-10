import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import OdooPartnerBadge from './OdooPartnerBadge';
import { submitConsultationLead } from '../../services/formSubmission';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneWhatsApp: '',
    helpTopic: 'Odoo implementation',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitConsultationLead(formData, 'Quick Consultation Modal');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Qalibrate team. My name is ${formData.fullName || '[Name]'} from ${formData.companyName || '[Company]'}. I would like to schedule a consultation regarding ${formData.helpTopic}.`
    );
    window.open(`https://wa.me/923001234567?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3.5 sm:p-6 bg-dark/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Card (Short, Simple, Easily Scrollable) */}
      <div 
        className="relative w-full max-w-lg max-h-[88dvh] sm:max-h-[85vh] bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_25px_80px_rgba(15,23,42,0.22)] border border-dark/10 flex flex-col text-dark overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact Modal Header */}
        <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-4 border-b border-dark/8 flex items-start justify-between bg-white relative z-10 flex-shrink-0">
          <div className="pr-3">
            <div className="mb-2">
              <OdooPartnerBadge theme="light" text="Official Odoo Partner" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-dark tracking-tight leading-snug">
              Book a <span className="text-accent">Consultation</span>
            </h3>
            <p className="text-xs text-dark/65 mt-0.5 font-normal">
              30-min call · Direct senior architect · Straight answers on fit & cost.
            </p>
          </div>

          <button 
            type="button"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full text-dark/40 hover:text-dark hover:bg-dark/5 transition-colors cursor-pointer flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-3.5 scrollbar-thin">
          {submitted ? (
            <div className="py-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4 border border-accent/25">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-dark tracking-tight">Request Received</h4>
              <p className="text-xs sm:text-sm text-dark/70 mt-1.5 max-w-sm leading-relaxed">
                Thank you! A senior architect will reach out within one business day.
              </p>
              
              <div className="mt-5 p-4 rounded-xl bg-bone/50 border border-dark/10 text-left w-full text-xs font-mono text-dark space-y-1.5">
                <div><span className="text-dark/50">NAME:</span> <span className="font-semibold">{formData.fullName}</span></div>
                <div><span className="text-dark/50">COMPANY:</span> <span className="font-semibold">{formData.companyName}</span></div>
                <div><span className="text-dark/50">FOCUS:</span> <span className="font-semibold text-accent">{formData.helpTopic}</span></div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-2.5 w-full">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3 px-5 rounded-full bg-dark/5 hover:bg-dark/10 text-dark font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/70 mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asad Qureshi"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-bone/35 border border-dark/15 text-dark placeholder:text-dark/35 focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/70 mb-1 font-semibold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Indus Apparel"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-bone/35 border border-dark/15 text-dark placeholder:text-dark/35 focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone/WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/70 mb-1 font-semibold">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="asad@indus.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-bone/35 border border-dark/15 text-dark placeholder:text-dark/35 focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/70 mb-1 font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phoneWhatsApp}
                    onChange={(e) => setFormData({...formData, phoneWhatsApp: e.target.value})}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-bone/35 border border-dark/15 text-dark placeholder:text-dark/35 focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Help Topic */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/70 mb-1 font-semibold">
                  What Do You Need Help With?
                </label>
                <select
                  value={formData.helpTopic}
                  onChange={(e) => setFormData({...formData, helpTopic: e.target.value})}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-bone/35 border border-dark/15 text-dark focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer"
                >
                  <option value="Odoo implementation">Odoo Implementation (New ERP Rollout)</option>
                  <option value="Customization and module development">Customization & Module Engineering</option>
                  <option value="Migration or upgrade">Migration from Legacy / Excel / Older Odoo</option>
                  <option value="Odoo rescue">Odoo Rescue & System Stabilization</option>
                  <option value="AI and automation">AI Agents, OCR & Process Automation</option>
                  <option value="Not sure yet">General Consultation & Process Audit</option>
                </select>
              </div>

              {/* Row 4: Brief Notes (Optional) */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-dark/70 mb-1 font-semibold">
                  Brief Project Notes <span className="text-dark/40 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your team size, key pain points or goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-bone/35 border border-dark/15 text-dark placeholder:text-dark/35 focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-1.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-full bg-[#0F172A] hover:bg-accent disabled:opacity-60 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99]"
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'Submit Consultation Request'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Or Quick WhatsApp */}
              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline font-mono font-semibold cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>Prefer WhatsApp? Chat directly with us →</span>
                </button>
              </div>

              {/* NDA Protection Line */}
              <div className="flex items-center justify-center gap-1.5 pt-1 text-[10px] font-mono text-dark/45">
                <ShieldCheck className="w-3 h-3 text-accent" />
                <span>NDA Protected · 1-Business-Day SLA Across Pakistan, Dubai & Texas</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
