import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY); // ✅ moved inside
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Vangard Translations <info@vangardtranslations.com>',
      to: ['info@vangardtranslations.com', email],
      subject: 'Quote Request from Vangard Website',
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
