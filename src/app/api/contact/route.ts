import { NextRequest, NextResponse, after } from 'next/server';
import { Resend } from 'resend';
import { buildContactEmailHtml, buildContactEmailText } from '@/lib/contact-email';
import { cleanLeadSource } from '@/lib/leadSource';
import { buildLeadStatsRow, sendLeadStats } from '@/lib/leadStats';

interface ContactPayload {
    name: string;
    email: string;
    phone?: string;
    message: string;
    subject: string;
    source?: string;
    formType?: 'contact' | 'quote';
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

    const { name, email, phone, message, subject, formType } = payload;
    const source = cleanLeadSource(payload.source);

    if (!name || !email || !message || !subject) {
        return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const copy = FORM_COPY[formType ?? 'contact'];
    const fields = { ...copy, name, email, phone, message, source };

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: stripWrappingQuotes(process.env.CONTACT_FROM!),
            to: stripWrappingQuotes(process.env.CONTACT_TO!),
            replyTo: email,
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
