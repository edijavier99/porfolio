'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  const name    = formData.get('name');
  const email   = formData.get('email');
  const budget  = formData.get('budget');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  try {
    await resend.emails.send({
      from: 'Kova Contact <onboarding@resend.dev>',
      to:   ['hello@kova.co.uk'],           // ← change to your real email
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#4ade80;">New project enquiry — Kova</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;width:100px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Budget</td><td style="padding:8px 0;">${budget || 'Not specified'}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
          <p style="color:#888;margin-bottom:8px;">Project description</p>
          <p style="line-height:1.7;">${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error('Resend error:', err);
    return { success: false, error: 'Failed to send. Please email us directly at hello@kova.co.uk' };
  }
}
