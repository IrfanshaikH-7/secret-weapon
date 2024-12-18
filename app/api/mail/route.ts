import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
console.log(process.env.EMAIL_USER)
console.log(process.env.COMPANY_EMAIL)
console.log({ name, email, subject, message })
    // Validate the data (basic example, adjust as needed)
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields',message: "Missing required fields"}, { status: 400 });
    }

    // Send email
    await transporter.sendMail({
      from: email, // Email from the user
      to: process.env.COMPANY_EMAIL, // Your company's email address
      subject: `Secret: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="color: #007BFF;">Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f8f9fa; padding: 10px; border-radius: 4px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
