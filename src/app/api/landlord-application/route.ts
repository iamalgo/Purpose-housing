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
      .from('landlord_applications')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          property_address: data.propertyAddress,
          unit_count: data.unitCount,
          property_type: data.propertyType,
          availability_date: data.availabilityDate,
          additional_info: data.additionalInfo,
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
        subject: 'New Landlord Partnership Application',
        html: `
          <h2>New Landlord Partnership Application</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Property Address:</strong> ${data.propertyAddress}</p>
          <p><strong>Unit Count:</strong> ${data.unitCount}</p>
          <p><strong>Property Type:</strong> ${data.propertyType}</p>
          <p><strong>Availability Date:</strong> ${data.availabilityDate}</p>
          <p><strong>Additional Info:</strong> ${data.additionalInfo || 'None'}</p>
        `,
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}
