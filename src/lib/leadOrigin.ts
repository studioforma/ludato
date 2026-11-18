// Where a visitor came from on their first page view in this tab: UTM tags,
// whether an ad click id was present, the referring site and the landing
// path. No personal data. Kept in sessionStorage by LeadOriginCapture, only
// with cookie consent, and sent along with a form so /api/contact can write
// one statistics row.
export const LEAD_ORIGIN_KEY = 'ludato_zdroj';

export interface LeadOrigin {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    gclid: boolean;
    referrer: string;
    vstup: string;
}

const MAX = 150;

function clip(value: unknown): string {
    return typeof value === 'string' ? value.trim().slice(0, MAX) : '';
}

/** Only scheme, host and path of a URL; query and hash can carry personal data. */
export function stripUrl(value: unknown): string {
    if (typeof value !== 'string' || !value) return '';
    try {
        const u = new URL(value);
        if (u.protocol !== 'http:' && u.protocol !== 'https:') return '';
        return clip(u.origin + u.pathname);
    } catch {
        return '';
    }
}

/** A site path without query or hash, e.g. "/kontakt". */
export function cleanPath(value: unknown): string {
    if (typeof value !== 'string' || !value.startsWith('/')) return '';
    return clip(value.split(/[?#]/)[0]);
}

/** Validates an origin object received from the browser. */
export function cleanLeadOrigin(value: unknown): LeadOrigin {
    const v = (value && typeof value === 'object' ? value : {}) as Record<string, unknown>;
    return {
        utm_source: clip(v.utm_source),
        utm_medium: clip(v.utm_medium),
        utm_campaign: clip(v.utm_campaign),
        gclid: v.gclid === true,
        referrer: stripUrl(v.referrer),
        vstup: cleanPath(v.vstup),
    };
}

/** Browser only: true when the visitor accepted cookies in the cookie bar. */
export function hasCookieConsent(): boolean {
    try {
        return window.localStorage.getItem('ludato_cookie_consent') === 'accepted';
    } catch {
        return false;
    }
}

/** Browser only: the stored origin, only while cookie consent is given. */
export function readLeadOrigin(): LeadOrigin | undefined {
    try {
        if (!hasCookieConsent()) return undefined;
        const raw = window.sessionStorage.getItem(LEAD_ORIGIN_KEY);
        return raw ? cleanLeadOrigin(JSON.parse(raw)) : undefined;
    } catch {
        return undefined;
    }
}
