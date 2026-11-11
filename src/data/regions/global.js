// Global / Main Domain Content Configuration
import pakistanSvg from '../../assets/noun_MinarePakistan_30612.svg';
import dubaiSvg from '../../assets/noun_dubai_burjkhalifa.svg';
import texasSvg from '../../assets/noun_texas_lonestar.svg';

export const globalConfig = {
  regionCode: "global",
  regionPath: "",
  regionName: "Global",
  currency: "USD",
  siteTitle: "Official Odoo Enterprise Partner in Pakistan, Dubai & Texas | Qalibrate",
  metaTitle: "Official Odoo Partner in Pakistan, Dubai & Texas | ERP & Automation – Qalibrate",
  metaDescription: "Official Odoo Enterprise Partner across Pakistan, Dubai, and Texas. Qalibrate implements, customizes and supports institutional Odoo ERP systems with fixed-scope delivery.",
  h1: "Official Odoo Enterprise Partner in Pakistan, Dubai & Texas",
  heroStatus: "Official Odoo Partner · Pakistan · Dubai · Texas",
  subheading: "Qalibrate replaces scattered spreadsheets, disconnected software and manual reporting with one connected, institutional-grade Odoo ERP system, engineered with fixed-scope delivery and on-site deployment across Pakistan, Dubai, and Texas.",
  
  partnerBadge: "Official Odoo Partner",
  
  contactInfo: {
    whatsappNumber: "+923001234567",
    whatsappDisplay: "+92 300 1234567",
    email: "consult@qalibrate.com",
    address: "Pakistan · Dubai · Texas",
    citiesServed: ["Pakistan", "Dubai (UAE)", "Texas (USA)"]
  },

  trustBar: [
    { label: "Official Odoo Partner", detail: "Certified by Odoo S.A." },
    { label: "End-to-End Delivery", detail: "Architecture to Go-Live" },
    { label: "Fixed Scope & Price", detail: "Firm quote before kickoff" },
    { label: "Local Deployment", detail: "Dedicated on-site & remote trainers" },
    { label: "Global Reach", detail: "Pakistan · Dubai · Texas" },
  ],

  hubs: [
    {
      id: "pakistan",
      name: "Pakistan",
      detail: "Islamabad & Lahore",
      svgIcon: pakistanSvg
    },
    {
      id: "dubai",
      name: "Dubai",
      detail: "UAE Regional Hub",
      svgIcon: dubaiSvg
    },
    {
      id: "texas",
      name: "Texas",
      detail: "USA Regional Hub",
      svgIcon: texasSvg
    }
  ],

  methodPillar: {
    title: "Multi-Region Training & Local Handover",
    desc: "We train your staff in your time zone across Pakistan (PKT), Dubai (GST), and Texas (CST). We don't sign off until your operators run daily tasks with confidence."
  },

  whyPillar5: {
    num: "05",
    tag: "Deployment",
    title: "On the ground across Pakistan, Dubai & Texas",
    desc: "We don't just ship code over email. Our deployment teams coordinate across Pakistan, the UAE, and the USA to ensure frictionless implementation."
  },

  servicesHighlight: "Multi-region ecosystem ready (Pakistan · Dubai · Texas)",
  
  faqNote: "Need urgent answers? Message our Lead ERP Architect directly on WhatsApp. We typically respond within minutes during business hours across PKT, GST, and CST."
};
