import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface ContactFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  urgency: string;
  city: string;
  county: string;
  contactMethod: string;
  description: string;
  consent: boolean;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)\+\.]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateFormData(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.fullName?.trim()) errors.push('Full name is required');
  if (!data.phone?.trim()) errors.push('Phone number is required');
  if (!data.email?.trim()) errors.push('Email is required');
  if (!data.consent) errors.push('Consent is required');

  if (data.email && !validateEmail(data.email)) {
    errors.push('Invalid email format');
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.push('Invalid phone number format');
  }

  return { isValid: errors.length === 0, errors };
}

function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #DC2626; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; }
          .urgent { background-color: #fef2f2; border-left: 4px solid #DC2626; padding: 10px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Lead — CKS Commercial Kitchen Solutions</h1>
          </div>
          <div class="content">
            ${data.urgency === 'Emergency—today' ? '<div class="urgent"><strong>🚨 EMERGENCY REQUEST - TODAY</strong></div>' : ''}
            
            <div class="field">
              <div class="label">Full Name:</div>
              <div class="value">${data.fullName}</div>
            </div>
            
            ${data.companyName ? `
            <div class="field">
              <div class="label">Company/Facility:</div>
              <div class="value">${data.companyName}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            
            ${data.serviceNeeded ? `
            <div class="field">
              <div class="label">Service Needed:</div>
              <div class="value">${data.serviceNeeded}</div>
            </div>
            ` : ''}
            
            ${data.urgency ? `
            <div class="field">
              <div class="label">Urgency:</div>
              <div class="value">${data.urgency}</div>
            </div>
            ` : ''}
            
            ${data.city || data.county ? `
            <div class="field">
              <div class="label">Location:</div>
              <div class="value">${[data.city, data.county].filter(Boolean).join(', ')}</div>
            </div>
            ` : ''}
            
            ${data.contactMethod ? `
            <div class="field">
              <div class="label">Preferred Contact Method:</div>
              <div class="value">${data.contactMethod}</div>
            </div>
            ` : ''}
            
            ${data.description ? `
            <div class="field">
              <div class="label">Description:</div>
              <div class="value">${data.description.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Submitted:</div>
              <div class="value">${new Date().toLocaleString('en-US', { 
                timeZone: 'America/Los_Angeles',
                dateStyle: 'full',
                timeStyle: 'short'
              })}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate form data
    const validation = validateFormData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY || !resend) {
      console.warn('RESEND_API_KEY not found. Email would be sent with:', body);
      console.warn('To enable email functionality, add RESEND_API_KEY to your environment variables.');
      console.warn('Get your API key from: https://resend.com/api-keys');
      
      // Return success for development
      return NextResponse.json({ success: true });
    }

    // Send email via Resend
    const emailData = {
      from: 'CKS Leads <onboarding@resend.dev>',
      to: ['CksolutionsLA@gmail.com'],
      subject: `New Lead — CKS${body.urgency === 'Emergency—today' ? ' 🚨 EMERGENCY' : ''}`,
      html: generateEmailHTML(body),
    };

    const result = await resend.emails.send(emailData);
    console.log('Email sent successfully:', result);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Check if it's a Resend API error
    if (error && typeof error === 'object' && 'message' in error) {
      console.error('Resend API error details:', error);
    }
    
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
} 