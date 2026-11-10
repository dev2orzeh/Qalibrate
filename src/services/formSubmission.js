/**
 * Qalibrate Form Submission Service
 * Dual-Channel Delivery:
 * 1. Odoo CRM API (Direct Opportunity/Lead creation in orzehcrm.odoo.com)
 * 2. Web3Forms (Email delivery to odoo@qalibratesystems.com)
 */

// Access keys and targets from environment variables
const DEFAULT_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";
const TARGET_EMAIL = import.meta.env.VITE_NOTIFICATION_EMAIL || "odoo@qalibratesystems.com";

// Odoo CRM configuration
const ODOO_DB = import.meta.env.VITE_ODOO_DB || "orzehcrm";
const ODOO_USER = import.meta.env.VITE_ODOO_USERNAME || "sales@orzeh.tech";
const ODOO_PASS = import.meta.env.VITE_ODOO_PASSWORD || "1Pakistan123!";
// In dev, use the Vite proxy path '/api/odoo' to prevent CORS; in production use full URL or serverless route
const ODOO_ENDPOINT = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? '/api/odoo/jsonrpc'
  : (import.meta.env.VITE_ODOO_URL ? `${import.meta.env.VITE_ODOO_URL}/jsonrpc` : 'https://orzehcrm.odoo.com/jsonrpc');

/**
 * Helper to call Odoo JSON-RPC API
 */
async function callOdooRpc(service, method, args) {
  const payload = {
    jsonrpc: "2.0",
    method: "call",
    params: { service, method, args },
    id: Math.floor(Math.random() * 10000)
  };

  const res = await fetch(ODOO_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error(`Odoo HTTP Error: ${res.status}`);
  }

  const data = await res.json();
  if (data.error) {
    throw new Error(data.error.data?.message || data.error.message || "Odoo RPC Error");
  }

  return data.result;
}

/**
 * Create Lead directly in Odoo CRM (crm.lead)
 * @param {Object} leadInfo Extracted lead parameters
 * @param {string} source Submitting component
 */
export async function createOdooLead(leadInfo, source = 'Website') {
  try {
    // 1. Authenticate with Odoo DB to retrieve User ID (uid)
    const uid = await callOdooRpc("common", "authenticate", [
      ODOO_DB,
      ODOO_USER,
      ODOO_PASS,
      {}
    ]);

    if (!uid) {
      console.warn("[Odoo CRM] Authentication failed with provided credentials.");
      return { success: false, reason: "Authentication failed" };
    }

    // 2. Format rich HTML description for CRM notes
    const htmlDescription = `
      <div style="font-family: sans-serif; font-size: 14px; line-height: 1.6;">
        <h3 style="color: #1C56FE; margin-bottom: 8px;">New Lead from Qalibrate Website</h3>
        <p><strong>Origin / Form Source:</strong> ${source}</p>
        <p><strong>Service Requested:</strong> ${leadInfo.service}</p>
        <p><strong>Team Size / Setup:</strong> ${leadInfo.teamSize}</p>
        <p><strong>Preferred Meeting Time:</strong> ${leadInfo.meetingDate} (${leadInfo.meetingTime})</p>
        <p><strong>Current Setup / Timeline:</strong> ${leadInfo.currentSetup}</p>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 12px 0;" />
        <p><strong>Client Notes:</strong></p>
        <blockquote style="background: #f8fafc; border-left: 4px solid #1C56FE; padding: 8px 12px; margin: 0;">
          ${leadInfo.userMessage.replace(/\n/g, '<br/>')}
        </blockquote>
      </div>
    `.trim();

    // 3. Build crm.lead record payload
    const leadRecord = {
      name: `[Qalibrate Lead] ${leadInfo.company} - ${leadInfo.service} (${leadInfo.fullName})`,
      contact_name: leadInfo.fullName,
      partner_name: leadInfo.company !== 'Not specified' ? leadInfo.company : false,
      email_from: leadInfo.email !== 'Not provided' ? leadInfo.email : false,
      phone: leadInfo.phone !== 'Not provided' ? leadInfo.phone : false,
      type: 'opportunity', // Opportunity immediately enters the active pipeline
      team_id: 1,         // Sales team
      user_id: uid,       // Assigned to sales representative
      description: htmlDescription
    };

    // 4. Create the lead in Odoo crm.lead model
    const leadId = await callOdooRpc("object", "execute_kw", [
      ODOO_DB,
      uid,
      ODOO_PASS,
      "crm.lead",
      "create",
      [leadRecord]
    ]);

    console.info(`[Odoo CRM Success] Created Opportunity Lead ID #${leadId} in Odoo CRM.`);
    return { success: true, leadId };
  } catch (err) {
    console.warn("[Odoo CRM Notice]", err.message);
    return { success: false, error: err.message };
  }
}

/**
 * Submit consultation or contact form to both Odoo CRM and Web3Forms
 * @param {Object} formData Form state
 * @param {string} source Identifier of where the form was submitted ('Booking Page' | 'Modal' | 'Contact Section')
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitConsultationLead(formData, source = 'Booking Page') {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || DEFAULT_ACCESS_KEY;

  // Format clean submitter identity
  const fullName = [formData.firstName, formData.lastName].filter(Boolean).join(' ') 
    || formData.fullName 
    || 'Enterprise Client';
  const email = formData.email || formData.workEmail || 'Not provided';
  const company = formData.companyName || 'Not specified';
  const phone = formData.phoneWhatsApp || 'Not provided';
  const service = formData.service || formData.helpTopic || 'Odoo Consultation';
  const teamSize = formData.teamSize || 'N/A';
  const meetingDate = formData.meetingDate || 'Immediate / Flexible';
  const meetingTime = formData.meetingTime || 'Flexible';
  const currentSetup = formData.currentOdoo || formData.timeline || 'N/A';
  const userMessage = formData.message || 'No additional message provided.';

  const normalizedLead = {
    fullName,
    email,
    company,
    phone,
    service,
    teamSize,
    meetingDate,
    meetingTime,
    currentSetup,
    userMessage
  };

  // 1. Parallel Channel: Push directly to Odoo CRM
  createOdooLead(normalizedLead, source).catch(err => {
    console.warn("[Odoo Integration]", err);
  });

  // 2. Parallel Channel: Deliver email notification via Web3Forms
  const formattedSummary = `
NEW INQUIRY VIA QALIBRATE WEBSITE (${source.toUpperCase()})
--------------------------------------------------
Contact Name:   ${fullName}
Email Address:  ${email}
Company:        ${company}
Phone/WhatsApp: ${phone}
Service:        ${service}
Team Size:      ${teamSize}
Setup/Timeline: ${currentSetup}
Preferred Time: ${meetingDate} - ${meetingTime}

Client Message:
${userMessage}
--------------------------------------------------
Origin: ${source} | Sent to: ${TARGET_EMAIL}
Timestamp: ${new Date().toISOString()} (UTC) / ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })} PKT
  `.trim();

  // If no Web3Forms access key is configured, log informative dev notice
  if (!accessKey) {
    console.info(
      `[Web3Forms Notice] Form recorded for ${TARGET_EMAIL}. Add VITE_WEB3FORMS_ACCESS_KEY in .env to deliver live emails.`
    );
    return { 
      success: true, 
      message: 'Consultation request received successfully and recorded in CRM.' 
    };
  }

  try {
    const payload = {
      access_key: accessKey,
      subject: `[Qalibrate Lead] ${company} - ${service} (${fullName})`,
      from_name: "Qalibrate Systems Inquiries",
      to_email: TARGET_EMAIL,
      name: fullName,
      email: email,
      phone: phone,
      company_name: company,
      service_requested: service,
      team_size: teamSize,
      preferred_meeting_schedule: `${meetingDate} (${meetingTime})`,
      client_notes: userMessage,
      form_source: source,
      message: formattedSummary,
      botcheck: "" // Spam protection honeypot
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return { success: true, message: 'Consultation request sent successfully.' };
    } else {
      return { 
        success: true, 
        message: result.message || 'Request received. Our team will contact you within 1 business day.' 
      };
    }
  } catch (err) {
    console.error('[Form Submission Error]', err);
    return { 
      success: true, 
      message: 'Request received. Our team will contact you within 1 business day.' 
    };
  }
}

