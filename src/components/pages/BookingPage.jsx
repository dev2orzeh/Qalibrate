import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Calendar,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import OdooPartnerBadge, { OdooLogo } from '../common/OdooPartnerBadge';
import WhatsAppIcon from '../common/WhatsAppIcon';
import Reveal from '../common/Reveal';
import { submitConsultationLead } from '../../services/formSubmission';

// Qalibrate Brand Mark
import qalibrateLogoMark from '../../assets/logo-mark.png';

// Direct imports for the senior team member avatars (ensures Vite bundles & serves with correct MIME types)
import avatar1 from '../../assets/avatars/avatar-1.jpg';
import avatar2 from '../../assets/avatars/avatar-2.jpg';
import avatar3 from '../../assets/avatars/avatar-3.jpg';
import avatar4 from '../../assets/avatars/avatar-4.jpg';
import avatar5 from '../../assets/avatars/avatar-5.jpg';
import avatar6 from '../../assets/avatars/avatar-6.jpg';
import avatar7 from '../../assets/avatars/avatar-7.jpg';
import avatar8 from '../../assets/avatars/avatar-8.jpg';
import avatar9 from '../../assets/avatars/avatar-9.jpg';
import avatar10 from '../../assets/avatars/avatar-10.jpg';
import avatar11 from '../../assets/avatars/avatar-11.jpg';
import avatar12 from '../../assets/avatars/avatar-12.jpg';

// Direct imports for partner logos
import woocommerceWhiteLogo from '../../assets/logos/woocommerce-white.png';
import postgresqlWhiteLogo from '../../assets/logos/postgresql-white.png';

/* ========================================================================= */
/* DEDICATED CONSULTATION BOOKING PAGE                                       */
/* Exact 1:1 Blueprint of Reference Design adapted to Dark Navy & Pure White */
/* Left Column: Concentric Radar Arcs + 12 Expert Avatar Badges + Socials   */
/* Right Column: Clean High-Contrast Form + Double-Row Vector Logo Ecosystem */
/* ========================================================================= */

// 12 Senior Team Member / Architect Avatars positioned on the concentric arcs
const RADAR_AVATARS = [
  {
    id: "avatar-1",
    name: "Tariq Malik",
    role: "Chief Odoo Architect",
    image: avatar1,
    top: "23.1%",
    left: "59.6%"
  },
  {
    id: "avatar-2",
    name: "Ayesha Khan",
    role: "AI Systems Specialist",
    image: avatar2,
    top: "38.1%",
    left: "12.3%"
  },
  {
    id: "avatar-3",
    name: "Sarah Chen",
    role: "Senior Solutions Consultant",
    image: avatar3,
    top: "40.8%",
    left: "66.7%"
  },
  {
    id: "avatar-4",
    name: "Hamza Farooq",
    role: "Supply Chain & MRP Lead",
    image: avatar4,
    top: "55.6%",
    left: "45.6%"
  },
  {
    id: "avatar-5",
    name: "Bilal Ahmed",
    role: "Migration & Ledger Lead",
    image: avatar5,
    top: "69.6%",
    left: "68.2%"
  },
  {
    id: "avatar-6",
    name: "Zainab Raza",
    role: "IDP & OCR Specialist",
    image: avatar6,
    top: "74.9%",
    left: "32.3%"
  },
  {
    id: "avatar-7",
    name: "Usman Qureshi",
    role: "Financial Systems Architect",
    image: avatar7,
    top: "89.9%",
    left: "65.8%"
  },
  {
    id: "avatar-8",
    name: "Fatima Zahra",
    role: "Enterprise Architecture Lead",
    image: avatar8,
    top: "26.9%",
    left: "81.6%"
  },
  {
    id: "avatar-9",
    name: "Dr. Asad Siddiqui",
    role: "AI Systems Architect",
    image: avatar9,
    top: "21.5%",
    left: "38.9%"
  },
  {
    id: "avatar-10",
    name: "Omer Sheikh",
    role: "Cloud Infrastructure Lead",
    image: avatar10,
    top: "69.9%",
    left: "12.3%"
  },
  {
    id: "avatar-11",
    name: "Mariam Shah",
    role: "Senior Solutions Consultant",
    image: avatar11,
    top: "54.0%",
    left: "80.9%"
  },
  {
    id: "avatar-12",
    name: "Kamran Ali",
    role: "Database & Security Lead",
    image: avatar12,
    top: "95.0%",
    left: "46.4%"
  }
];

export default function BookingPage({ onNavigateHome }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredAvatar, setHoveredAvatar] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneWhatsApp: '',
    service: 'Odoo Implementation (Core ERP)',
    teamSize: '1-50 people',
    meetingDate: '',
    meetingTime: 'Morning (10:00 AM - 1:00 PM PKT)',
    message: '',
    privacyAgreed: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitConsultationLead(formData, 'Booking Page');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Qalibrate team. My name is ${formData.firstName || '[Name]'} ${formData.lastName || ''} from ${formData.companyName || '[Company]'}. I would like to schedule a consultation regarding ${formData.service}.`
    );
    window.open(`https://wa.me/923001234567?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-bone text-dark pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative select-none">
      <div className="max-w-6xl mx-auto">

        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-dark/60 hover:text-dark transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>

          <OdooPartnerBadge theme="light" text="Official Odoo Partner · Pakistan · Dubai · Texas" />
        </div>

        {/* ── MAIN CARD: Split into Left Illustration & Right Booking Form ── */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] md:rounded-[40px] shadow-[0_24px_80px_rgba(15,23,42,0.12)] border border-dark/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12">

          {/* ================================================================ */}
          {/* LEFT COLUMN: Clean White Panel with Radar Arcs & Team Avatars   */}
          {/* ================================================================ */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-dark/10 min-h-[500px] lg:min-h-[720px]">

            {/* Top Header: Qalibrate Official "Q" Logo Mark + Brand Name */}
            <div className="relative z-10">
              <div 
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2.5 cursor-pointer group"
                title="Return to homepage"
              >
                <img 
                  src={qalibrateLogoMark} 
                  alt="Qalibrate" 
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-200 group-hover:scale-105" 
                />
                <span className="font-heading font-bold text-xl sm:text-2xl text-dark tracking-tight">
                  Qalibrate
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-dark/60 mt-2 max-w-xs font-normal leading-relaxed">
                Direct senior architect advisory. Connect with our engineering leads across Pakistan, Dubai, and Texas.
              </p>
            </div>

            {/* Central Orbital Arcs with Live Avatar Nodes */}
            <div className="relative w-full h-[340px] sm:h-[400px] my-auto overflow-hidden">
              {/* Concentric Radar SVG radiating from the right edge */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 340 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle right-side ambient radial glow */}
                  <radialGradient id="radarCenterGlow" cx="100%" cy="54%" r="48%">
                    <stop offset="0%" stopColor="#0F172A" stopOpacity="0.08" />
                    <stop offset="50%" stopColor="#0F172A" stopOpacity="0.02" />
                    <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#radarCenterGlow)" />

                {/* Concentric Orbital Rings centered at (340, 216) */}
                <circle cx="340" cy="216" r="65" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.14" />
                <circle cx="340" cy="216" r="125" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.12" />
                <circle cx="340" cy="216" r="185" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.10" />
                <circle cx="340" cy="216" r="245" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.08" />
                <circle cx="340" cy="216" r="305" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.06" />
                <circle cx="340" cy="216" r="365" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.04" />

                {/* Center Focal Cross Point at right seam */}
                <circle cx="340" cy="216" r="3.5" fill="#0F172A" fillOpacity="0.25" />
              </svg>

              {/* Avatar Nodes Placed Exactly on the Orbital Tracks */}
              {RADAR_AVATARS.map((person) => {
                const isHovered = hoveredAvatar === person.id;
                return (
                  <div
                    key={person.id}
                    onMouseEnter={() => setHoveredAvatar(person.id)}
                    onMouseLeave={() => setHoveredAvatar(null)}
                    style={{ top: person.top, left: person.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white shadow-[0_4px_14px_rgba(15,23,42,0.18)] overflow-hidden transition-all duration-300 group-hover:scale-120 group-hover:shadow-[0_8px_20px_rgba(15,23,42,0.25)] group-hover:border-dark/40 bg-bone">
                      <img
                        src={person.image}
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Role Popover Tooltip */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2.5 py-1 rounded-md bg-[#0F172A] text-white text-[10px] font-mono whitespace-nowrap shadow-md pointer-events-none transition-all duration-200 z-30 ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-1 scale-95'
                        }`}
                    >
                      <div className="font-bold">{person.name}</div>
                      <div className="text-white/60 text-[9px]">{person.role}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Contact & Social Links matching reference layout */}
            <div className="relative z-10 pt-4 border-t border-dark/10 space-y-2 text-xs font-mono text-dark/75">
              <a
                href="https://twitter.com/qalibrate"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-dark transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-dark/5 flex items-center justify-center font-bold text-[10px] text-dark">𝕏</span>
                <span>@qalibrate</span>
              </a>
              <a
                href="https://linkedin.com/company/qalibrate"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-dark transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-dark/5 flex items-center justify-center font-bold text-[10px] text-dark">in</span>
                <span>@qalibrate</span>
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-dark transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-dark/5 flex items-center justify-center text-dark">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>+92 300 1234567</span>
              </a>
              <a
                href="mailto:solutions@qalibrate.pk"
                className="flex items-center gap-2.5 hover:text-dark transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-dark/5 flex items-center justify-center text-dark">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span>solutions@qalibrate.pk</span>
              </a>
            </div>

          </div>

          {/* ================================================================ */}
          {/* RIGHT COLUMN: Obsidian Dark Navy Panel + High-Contrast Form    */}
          {/* ================================================================ */}
          <div className="lg:col-span-7 bg-[#0F172A] p-6 sm:p-10 md:p-12 text-white flex flex-col justify-between relative">

            {submitted ? (
              /* Success State */
              <div className="py-16 my-auto text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Consultation Request Received
                </h3>
                <p className="text-white/70 text-sm sm:text-base mt-2 max-w-md leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.firstName || 'there'}</span>. A Senior ERP Architect has received your request and will reach out with a calendar invitation within 24 hours.
                </p>

                <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10 text-left w-full max-w-md text-xs font-mono space-y-2 text-white/80">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-white/40">NAME:</span>
                    <span className="font-semibold text-white">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-white/40">EMAIL:</span>
                    <span className="text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-white/40">SERVICE:</span>
                    <span className="text-white">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">WINDOW:</span>
                    <span className="text-white">{formData.meetingDate || 'Earliest slot'} · {formData.meetingTime}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={onNavigateHome}
                    className="flex-1 py-3 px-5 rounded-xl bg-white hover:bg-neutral-100 text-[#0F172A] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Back to Home</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Active Booking Form matching Reference Blueprint */
              <div>

                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-tight">
                    Book Consultation
                  </h2>
                  <p className="text-white/70 text-xs sm:text-sm mt-2 font-normal leading-relaxed">
                    Reach out and we'll get in touch within 24 hours.
                  </p>
                </div>

                {/* Form Controls */}
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Row 1: First name & Last name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                        className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs placeholder:text-dark/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        required
                        className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs placeholder:text-dark/40"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company name & Phone/WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company or entity"
                        className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs placeholder:text-dark/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phoneWhatsApp"
                        value={formData.phoneWhatsApp}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs placeholder:text-dark/40"
                      />
                    </div>
                  </div>

                  {/* Row 3: Email */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs placeholder:text-dark/40"
                    />
                  </div>

                  {/* Row 3: Service of interest & Team size / Setup */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                        Service of interest
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs appearance-none cursor-pointer pr-10"
                        >
                          <option value="Odoo Implementation (Core ERP)">Odoo Implementation (Core ERP)</option>
                          <option value="Custom Module Engineering">Custom Python Module Development</option>
                          <option value="Ecosystem & Courier Integrations">Ecosystem & Courier Integrations</option>
                          <option value="QuickBooks/Excel Data Migration">QuickBooks / Excel Data Migration</option>
                          <option value="Odoo Rescue & Code Audit">Odoo Project Rescue & Audit</option>
                          <option value="Dedicated SLA & Floor Training">Dedicated Support & SLA</option>
                          <option value="AI Autonomous Agents">AI Autonomous Agents & Bots</option>
                          <option value="Intelligent Document Processing">Intelligent Document Processing (IDP)</option>
                          <option value="Predictive BI & Forecasting">Predictive BI & Forecasting</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#0F172A]/60">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                        Team size
                      </label>
                      <div className="relative">
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleChange}
                          className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs appearance-none cursor-pointer pr-10"
                        >
                          <option value="1-20 people">1-20 people</option>
                          <option value="1-50 people">1-50 people</option>
                          <option value="50-200 people">50-200 people</option>
                          <option value="200+ enterprise">200+ enterprise</option>
                          <option value="QuickBooks migration">QuickBooks / Excel transition</option>
                          <option value="Existing Odoo setup">Already running Odoo</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#0F172A]/60">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Preferred Date & Time Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="meetingDate"
                        value={formData.meetingDate}
                        onChange={handleChange}
                        className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                        Preferred Time Window
                      </label>
                      <div className="relative">
                        <select
                          name="meetingTime"
                          value={formData.meetingTime}
                          onChange={handleChange}
                          className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs appearance-none cursor-pointer pr-10"
                        >
                          <option value="Morning (PKT / GST / CST)">Morning (10:00 AM - 1:00 PM)</option>
                          <option value="Afternoon (PKT / GST / CST)">Afternoon (2:00 PM - 5:00 PM)</option>
                          <option value="Evening (PKT / GST / CST)">Evening (5:00 PM - 8:00 PM)</option>
                          <option value="Earliest Available Slot">Earliest Available Slot (Any Time Zone)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#0F172A]/60">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Leave us a message... Tell us about your current operational setup or goals..."
                      className="w-full bg-white text-[#0F172A] rounded-xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white font-medium shadow-xs resize-none placeholder:text-dark/40"
                    />
                  </div>

                  {/* Checkbox: Privacy policy agreement */}
                  <div className="pt-1">
                    <label className="flex items-center gap-2.5 text-xs text-white/75 font-normal cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="privacyAgreed"
                        checked={formData.privacyAgreed}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 rounded text-[#0F172A] bg-white border-0 focus:ring-0 cursor-pointer"
                      />
                      <span>
                        You agree to our friendly <span className="underline underline-offset-2 text-white font-medium">privacy policy</span> & mutual NDA.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button: Crisp White Pill Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-white hover:bg-neutral-100 disabled:opacity-60 text-[#0F172A] font-bold text-xs sm:text-sm font-mono uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'Send message'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>

              </div>
            )}

            {/* ============================================================ */}
            {/* BOTTOM LOGO STRIP: 10 Brand Icons (Replacing Plain Names)    */}
            {/* Matches reference design with high-fidelity vector icons     */}
            {/* ============================================================ */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3.5 text-center sm:text-left font-semibold">
                Enterprise Platform & Carrier Ecosystem
              </div>

              {/* Row 1 Logos: Odoo Partner, Shopify, Stripe, WooCommerce, FastAPI */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 sm:gap-4 items-center">
                {/* 1. Odoo Partner */}
                <div className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity justify-center sm:justify-start">
                  <OdooLogo className="h-3.5 w-auto fill-white" />
                  <span className="text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/15 text-white">
                    PARTNER
                  </span>
                </div>

                {/* 2. Shopify Logo */}
                <div className="flex items-center justify-center sm:justify-start opacity-75 hover:opacity-100 transition-opacity">
                  <svg className="h-4.5 sm:h-5 w-auto fill-white" viewBox="0 0 115 32">
                    <path d="M22.5 5.5c-.1-.3-.4-.5-.7-.5l-5.8-.4-3.8-3.7a.9.9 0 0 0-1-.1L4.5 4.3a.9.9 0 0 0-.5.7L3.2 22.8c0 .4.2.7.6.8l14.3 4.2c.1 0 .2 0 .3 0 .3 0 .5-.1.7-.3l7.9-11.4c.1-.2.2-.4.1-.6L22.5 5.5zm-7.6 1.8l-2.9-2.9 3.3-.9 2.1 3.4-2.5.4zm-6.2-1.6l4.2-.9-1.5 3.1-3.7.5 1-2.7z" />
                    <path d="M14.9 7.3l2.5-.4-2.1-3.4-3.3.9 2.9 2.9z" />
                    <text x="30" y="21" fontFamily="var(--font-heading), Inter, sans-serif" fontSize="17" fontWeight="700" fill="white" letterSpacing="-0.5px">shopify</text>
                  </svg>
                </div>

                {/* 3. Stripe Logo */}
                <div className="flex items-center justify-center sm:justify-start opacity-75 hover:opacity-100 transition-opacity">
                  <svg className="h-3.5 sm:h-4 w-auto fill-white" viewBox="0 0 512 214">
                    <path d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-25.031-3.414-36.409-9.53v31.432c12.231 5.404 26.311 8.249 38.399 8.249c30.294 0 47.787-14.791 47.787-37.404c.143-35.698-54.044-30.863-54.044-48.071" />
                  </svg>
                </div>

                {/* 4. WooCommerce Official Logo Image */}
                <div className="flex items-center justify-center sm:justify-start opacity-75 hover:opacity-100 transition-opacity">
                  <img
                    src={woocommerceWhiteLogo}
                    alt="WooCommerce"
                    className="h-4 sm:h-4.5 w-auto object-contain"
                  />
                </div>

                {/* 5. FastAPI Official Logo */}
                <div className="flex items-center justify-center sm:justify-start opacity-75 hover:opacity-100 transition-opacity">
                  <svg className="h-4 sm:h-4.5 w-auto" viewBox="0 0 100 28" fill="none">
                    <circle cx="14" cy="14" r="11" fill="white" fillOpacity="0.2" />
                    <path d="M15 6L8 15h5l-1 7 7-9h-5l1-7z" fill="white" />
                    <text x="32" y="19" fontFamily="var(--font-heading), Inter, sans-serif" fontSize="14" fontWeight="700" fill="white">FastAPI</text>
                  </svg>
                </div>
              </div>

              {/* Row 2 Logos: PostgreSQL, Python, TCS, FBR, Docker */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 sm:gap-4 items-center mt-3">
                {/* 6. PostgreSQL Official Logo Image */}
                <div className="flex items-center justify-center sm:justify-start opacity-75 hover:opacity-100 transition-opacity">
                  <img
                    src={postgresqlWhiteLogo}
                    alt="PostgreSQL"
                    className="h-5 sm:h-5.5 w-auto object-contain"
                  />
                </div>

                {/* 7. Python 3.12 Logo */}
                <div className="flex items-center justify-center sm:justify-start opacity-75 hover:opacity-100 transition-opacity">
                  <svg className="h-4.5 sm:h-5 w-auto" viewBox="0 0 110 32">
                    <g transform="translate(0, 2)">
                      <path fill="white" d="M13.9 1c-4.2 0-3.9 1.8-3.9 1.8v1.9h4.3v.6H8S5.2 5.1 5.2 9.3s2.4 4.1 2.4 4.1h1.4v-2c0-2.3 2.3-2.3 2.3-2.3h4.2s2.3 0 2.3-2.3V2.4s.3-1.4-3.9-1.4zm-1.3 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
                      <path fill="white" opacity="0.75" d="M14.1 25c4.2 0 3.9-1.8 3.9-1.8v-1.9h-4.3v-.6h6.3s2.8.2 2.8-4-2.4-4.1-2.4-4.1h-1.4v2c0 2.3-2.3 2.3-2.3 2.3h-4.2s-2.3 0-2.3 2.3v4.6s-.3 1.4 3.9 1.4zm1.3-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
                    </g>
                    <text x="32" y="21" fontFamily="var(--font-heading), Inter, sans-serif" fontSize="15" fontWeight="700" fill="white" letterSpacing="-0.3px">Python</text>
                  </svg>
                </div>

                {/* 8. TCS Courier Logistics API Logo */}
                <div className="flex items-center justify-center sm:justify-start opacity-75 hover:opacity-100 transition-opacity">
                  <svg className="h-4 sm:h-4.5 w-auto" viewBox="0 0 100 26" fill="none">
                    <path d="M2 13L10 5v5h8v6h-8v5L2 13z" fill="white" />
                    <path d="M12 13L20 5v5h6v6h-6v5L12 13z" fill="white" opacity="0.6" />
                    <text x="32" y="18" fontFamily="var(--font-heading), Inter, sans-serif" fontSize="13" fontWeight="800" fill="white" letterSpacing="0.5px">TCS API</text>
                  </svg>
                </div>

                {/* 9. FBR Fiscal API Logo */}
                <div className="flex items-center justify-center sm:justify-start opacity-75 hover:opacity-100 transition-opacity">
                  <svg className="h-4 sm:h-4.5 w-auto" viewBox="0 0 100 26" fill="none">
                    <path d="M11 2L3 5v7c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3zm-1 14l-3-3 1.4-1.4 1.6 1.6 4.6-4.6L16 10l-6 6z" fill="white" />
                    <text x="25" y="18" fontFamily="var(--font-heading), Inter, sans-serif" fontSize="13" fontWeight="800" fill="white" letterSpacing="0.5px">FBR SYNC</text>
                  </svg>
                </div>

                {/* 10. Docker Swarm Logo */}
                <div className="flex items-center justify-center sm:justify-start opacity-75 hover:opacity-100 transition-opacity">
                  <svg className="h-4.5 sm:h-5 w-auto fill-white" viewBox="0 0 24 24">
                    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.76 9.89a4.84 4.84 0 00-2.884-2.873.184.184 0 00-.227.068c-.45.69-.99 1.488-1.572 2.373-.13-.01-.26-.017-.393-.017H1.365a.186.186 0 00-.186.186c0 1.25.26 2.47.766 3.593.633 1.408 1.6 2.627 2.798 3.525 1.543 1.157 3.4 1.766 5.37 1.766 6.012 0 11.238-3.978 12.756-9.664.08-.3.26-.653.89-.958" />
                  </svg>
                  <span className="font-heading font-bold text-xs ml-1 text-white">docker</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
