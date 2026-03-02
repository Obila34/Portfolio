import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // change once you verify a domain
      to: 'obilasam3@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="margin: 0 0 24px; font-size: 18px; color: #111;">New Portfolio Message</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #555; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-size: 13px; color: #111; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #555;">Email</td>
              <td style="padding: 8px 0; font-size: 13px; color: #111; font-weight: 600;">
                <a href="mailto:${email}" style="color: #111;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; font-size: 13px; color: #555;">Phone</td>
              <td style="padding: 8px 0; font-size: 13px; color: #111; font-weight: 600;">${phone}</td>
            </tr>` : ''}
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e0e0e0;">
          <p style="font-size: 13px; color: #555; margin: 0 0 8px;">Message</p>
          <p style="font-size: 14px; color: #111; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
}