import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendLeadNotification(lead: {
  name: string;
  phone: string;
  email?: string | null;
  requirement?: string | null;
  source: string;
}) {
  if (!resend) {
    console.warn('RESEND_API_KEY not configured - skipping email');
    return null;
  }

  try {
    const data = await resend.emails.send({
      from: 'Balaji Entrepreneurs <noreply@balajientrepreneurs.com>',
      to: ['balajientrepreneurs9@gmail.com'],
      subject: `New Lead from ${lead.source}: ${lead.name}`,
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Email:</strong> ${lead.email || 'Not provided'}</p>
        <p><strong>Source:</strong> ${lead.source}</p>
        ${lead.requirement ? `<p><strong>Requirement:</strong> ${lead.requirement}</p>` : ''}
        <p><em>Received at: ${new Date().toLocaleString()}</em></p>
      `,
    });

    return data;
  } catch (error) {
    console.error('Email send error:', error);
    return null;
  }
}

export async function sendLeadConfirmation(lead: {
  name: string;
  email: string;
}) {
  if (!resend || !lead.email) {
    return null;
  }

  try {
    const data = await resend.emails.send({
      from: 'Balaji Entrepreneurs <noreply@balajientrepreneurs.com>',
      to: [lead.email],
      subject: 'Thank you for contacting Balaji Entrepreneurs',
      html: `
        <h2>Thank You, ${lead.name}!</h2>
        <p>We have received your inquiry and our team will contact you shortly.</p>
        <p>At Balaji Entrepreneurs, we are committed to providing you with the best solar energy solutions.</p>
        <br>
        <p>Best regards,<br>Balaji Entrepreneurs Team</p>
        <p><small>This is an automated message. Please do not reply to this email.</small></p>
      `,
    });

    return data;
  } catch (error) {
    console.error('Confirmation email error:', error);
    return null;
  }
}
