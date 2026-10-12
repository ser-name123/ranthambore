import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured, SafariEnquiryPayload } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body: SafariEnquiryPayload = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: 'Name and Phone Number are required.' },
        { status: 400 }
      );
    }

    // Generate unique reference ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `RWL-${new Date().getFullYear()}-${randomSuffix}`;
    const payloadWithRef = {
      ...body,
      reference_id: referenceId,
      created_at: new Date().toISOString(),
      status: 'New Enquiry'
    };

    let savedToDatabase = false;

    if (isSupabaseConfigured && supabase) {
      const { error } = await supabase.from('safari_enquiries').insert([payloadWithRef]);
      if (!error) {
        savedToDatabase = true;
      } else {
        console.error('Supabase insert warning:', error);
      }
    }

    // Format WhatsApp message text
    const waText = encodeURIComponent(
      `Hello Ranthambore Wild Life Tour! 🐅\n\n` +
      `I would like to enquire about Safari Booking.\n` +
      `• Ref: ${referenceId}\n` +
      `• Name: ${body.name}\n` +
      `• Phone: ${body.phone}\n` +
      (body.safari_date ? `• Date: ${body.safari_date}\n` : '') +
      (body.safari_mode ? `• Vehicle: ${body.safari_mode}\n` : '') +
      (body.timing_preference ? `• Timing: ${body.timing_preference}\n` : '') +
      (body.zone_preference ? `• Zone Preference: ${body.zone_preference}\n` : '') +
      (body.adults ? `• Adults: ${body.adults}, Children: ${body.children || 0}\n` : '') +
      `\nPlease check real-time permit availability and provide a quote.`
    );

    const whatsappUrl = `https://wa.me/919971965629?text=${waText}`;

    return NextResponse.json({
      success: true,
      referenceId,
      savedToDatabase,
      message: 'Enquiry received successfully! Our wildlife tour specialist will contact you shortly.',
      whatsappUrl
    });
  } catch (err: unknown) {
    console.error('Enquiry API Error:', err);
    return NextResponse.json(
      { error: 'Failed to process enquiry. Please contact via WhatsApp or Phone.' },
      { status: 500 }
    );
  }
}
