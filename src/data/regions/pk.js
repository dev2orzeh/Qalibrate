// Pakistan Market Localized Content Configuration
import minarSvg from '../../assets/noun_MinarePakistan_30612.svg';
import mazarSvg from '../../assets/noun_mazarequaid_5459404.svg';
import islamabadSvg from '../../assets/noun_islamabad_1039387.svg';
import faisalabadSvg from '../../assets/noun_faisalabadclocktower_4722882.svg';

export const pkConfig = {
  regionCode: "pk",
  regionPath: "/pk",
  regionName: "Pakistan",
  currency: "PKR",
  siteTitle: "Official Odoo Partner in Pakistan | Complete ERP & Automation Solutions – Qalibrate",
  metaTitle: "Official Odoo Partner in Pakistan | ERP & Automation – Qalibrate",
  metaDescription: "Official Odoo Enterprise Partner in Pakistan. Qalibrate implements, customizes and supports Odoo ERP for Pakistani enterprises with FBR digital invoicing and localized accounting.",
  h1: "Official Odoo Enterprise Partner in Pakistan",
  heroStatus: "Official Odoo Enterprise Partner · Pakistan Deployments",
  subheading: "Qalibrate replaces scattered spreadsheets, disconnected software and manual reporting with one connected, institutional-grade Odoo ERP system. Engineered with fixed-scope delivery and on-site implementation across Lahore, Karachi, Islamabad, and Faisalabad.",
  
  partnerBadge: "Official Odoo Partner Pakistan",
  
  contactInfo: {
    whatsappNumber: "+923001234567",
    whatsappDisplay: "+92 300 1234567",
    email: "consult@qalibrate.com",
    address: "Islamabad · Lahore · Karachi",
    citiesServed: ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Rawalpindi", "Sialkot", "Multan"]
  },

  trustBar: [
    { label: "Official Odoo Partner", detail: "Certified in Pakistan" },
    { label: "End-to-End Delivery", detail: "Architecture to Go-Live" },
    { label: "Fixed Scope & Price", detail: "Firm quote before kickoff" },
    { label: "Local Deployment", detail: "On-site teams in Lahore, Khi & Isb" },
    { label: "FBR Digital Invoicing", detail: "SRB, PRA & Sales Tax Ready" },
  ],

  hubs: [
    {
      id: "lahore",
      name: "Lahore",
      detail: "Punjab Regional Hub",
      svgIcon: minarSvg
    },
    {
      id: "karachi",
      name: "Karachi",
      detail: "Sindh & Port Commercial Hub",
      svgIcon: mazarSvg
    },
    {
      id: "islamabad",
      name: "Islamabad",
      detail: "Capital & Executive Office",
      svgIcon: islamabadSvg
    },
    {
      id: "faisalabad",
      name: "Faisalabad",
      detail: "Textile & Manufacturing Hub",
      svgIcon: faisalabadSvg
    }
  ],

  methodPillar: {
    title: "Dedicated Pakistani Deployment Teams",
    desc: "Our senior architects and functional consultants deploy on-site at your facilities across Lahore, Karachi, Islamabad, and Faisalabad to train your operators in person in Urdu and English."
  },

  whyPillar5: {
    num: "05",
    tag: "Deployment",
    title: "On the ground across Pakistan",
    desc: "We don't just ship software remotely. Our deployment teams sit with your department heads in Lahore, Karachi, Islamabad, and Faisalabad until daily operations run flawlessly."
  },

  servicesHighlight: "Pakistan Ecosystem Ready (FBR Invoicing · Courier APIs · Local Payment Gateways)",
  
  faqNote: "Need urgent consultation in Pakistan? Speak directly to our Lead ERP Architect via WhatsApp in Urdu or English."
};
