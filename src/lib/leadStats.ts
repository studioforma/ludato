import { cleanLeadOrigin, cleanPath } from '@/lib/leadOrigin';
import { cleanLeadSource } from '@/lib/leadSource';
import { QUOTE_SERVICES } from '@/lib/quoteServices';

// Server only. After a form email is sent, one row of statistics goes to
// Samuel's Google Sheet (Apps Script web app). The URL stays in code on
// purpose (Samuel 18. 11. 2026): Vercel env vars are managed by Studio Forma.
// The row never contains name, phone, e-mail or message text.
export const LEAD_STATS_URL =
    'https://script.google.com/macros/s/AKfycbxHJJhUX1kcrCwIcXozgHxhZ0xDWucPiqsdr87wkuUFspgfJDygG0LiMlkuc7DyoKV_/exec';

const TIMEOUT_MS = 8000;

export interface LeadStatsRow {
    kde: string;
    sluzba: string;
    stranka: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    gclid: boolean;
    referrer: string;
    vstup: string;
}

/** Builds the row from the request body; only whitelisted or cleaned values. */
export function buildLeadStatsRow(body: Record<string, unknown>): LeadStatsRow {
    const services = Array.isArray(body.sluzby)
        ? body.sluzby.filter((s): s is string => typeof s === 'string' && (QUOTE_SERVICES as readonly string[]).includes(s))
        : [];
    return {
        kde: cleanLeadSource(body.source) ?? '',
        sluzba: services.join(', '),
        stranka: cleanPath(body.stranka),
        ...cleanLeadOrigin(body.zdroj),
    };
}

/** Never throws: a failed write is only logged. */
export async function sendLeadStats(row: LeadStatsRow): Promise<void> {
    try {
        // Apps Script answers a POST with a 302 to the result; fetch follows it.
        const res = await fetch(LEAD_STATS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(row),
            redirect: 'follow',
            signal: AbortSignal.timeout(TIMEOUT_MS),
        });
        const text = await res.text();
        if (!res.ok || !text.includes('"ok":true')) {
            console.warn('[lead-stats] unexpected response', res.status, text.slice(0, 200));
        }
    } catch (err) {
        console.warn('[lead-stats] write failed', err instanceof Error ? err.message : err);
    }
}
