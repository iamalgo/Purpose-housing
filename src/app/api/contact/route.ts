import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          created_at: new Date().toISOString(),
        },
      ])

    if (dbError) {
      console.error('Database error:', dbError)
      throw dbError
    }

    // Send email notification
    try {
      await resend.emails.send({
        from: 'Purpose Housing <noreply@purposehousing.com>',
        to: process.env.CONTACT_EMAIL || 'adriennew@limyefoundation.org',
        subject: `Contact Form: ${data.subject}`,
        html: `
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
