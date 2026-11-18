import { NextRequest, NextResponse, after } from 'next/server';
import { Resend } from 'resend';
import { buildContactEmailHtml, buildContactEmailText } from '@/lib/contact-email';
import { cleanLeadSource } from '@/lib/leadSource';
import { buildLeadStatsRow, sendLeadStats } from '@/lib/leadStats';

interface ContactPayload {
    name: string;
    email?: string;
    phone?: string;
    message: string;
    subject: string;
    source?: string;
    formType?: 'contact' | 'quote';
    /** Quote forms: ŠPZ or VIN. Only for the email, never for the statistics sheet. */
    plate?: string;
}

const FORM_COPY = {
    contact: { eyebrow: 'Kontaktný formulár', title: 'Nová správa z webu' },
    quote: { eyebrow: 'Objednávkový formulár', title: 'Nová žiadosť o cenovú ponuku' },
};

function stripWrappingQuotes(value: string) {
    return value.replace(/^['"]|['"]$/g, '');
}

export async function POST(request: NextRequest) {
    let payload: ContactPayload;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
    }

    const { name, phone, message, subject, formType } = payload;
    const email = typeof payload.email === 'string' ? payload.email.trim() : '';
    const plate = typeof payload.plate === 'string' ? payload.plate.trim().slice(0, 25) : '';
    const source = cleanLeadSource(payload.source);

    // Quote forms (/nacenenie, LP Autoservis) need phone and ŠPZ/VIN, email is
    // optional. The contact form (homepage, /kontakt) keeps email required.
    const isQuote = formType === 'quote';
    const missing = isQuote ? !name || !phone?.trim() || !plate || !message || !subject : !name || !email || !message || !subject;
    if (missing) {
        return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const copy = FORM_COPY[formType ?? 'contact'];
    const fields = { ...copy, name, email, phone, message, source, plate };

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: stripWrappingQuotes(process.env.CONTACT_FROM!),
            to: stripWrappingQuotes(process.env.CONTACT_TO!),
            replyTo: email || undefined,
            subject,
            html: buildContactEmailHtml(fields),
            text: buildContactEmailText(fields),
        });

        if (error) {
            return NextResponse.json({ success: false, error: error.message }, { status: 502 });
        }

        // One statistics row for the Google Sheet, written after the response
        // is sent so it can never delay or break the email above.
        const statsRow = buildLeadStatsRow(payload as unknown as Record<string, unknown>);
        after(() => sendLeadStats(statsRow));

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}
