'use client';

import { useEffect } from 'react';
import { COOKIE_DECIDED } from '@/components/StickyCallBar';
import { LEAD_ORIGIN_KEY, cleanLeadOrigin, hasCookieConsent, stripUrl, type LeadOrigin } from '@/lib/leadOrigin';

// Remembers, once per tab, where the visitor arrived from (see leadOrigin.ts).
// Stored only with cookie consent (same consent as analytics). If consent comes
// later in the visit, the origin read on the first page view is stored then;
// if consent is declined or withdrawn, the stored origin is removed.
// Renders nothing and does not touch tracking, consent or the phone number.
export default function LeadOriginCapture() {
    useEffect(() => {
        let origin: LeadOrigin;
        try {
            const params = new URLSearchParams(window.location.search);
            // A referrer from our own site is not a source.
            const referrer = stripUrl(document.referrer);
            const external = referrer && !referrer.startsWith(window.location.origin) ? referrer : '';
            origin = cleanLeadOrigin({
                utm_source: params.get('utm_source') ?? '',
                utm_medium: params.get('utm_medium') ?? '',
                utm_campaign: params.get('utm_campaign') ?? '',
                gclid: params.has('gclid'),
                referrer: external,
                vstup: window.location.pathname,
            });
        } catch {
            return;
        }

        const sync = () => {
            try {
                if (!hasCookieConsent()) {
                    window.sessionStorage.removeItem(LEAD_ORIGIN_KEY);
                    return;
                }
                if (!window.sessionStorage.getItem(LEAD_ORIGIN_KEY)) {
                    window.sessionStorage.setItem(LEAD_ORIGIN_KEY, JSON.stringify(origin));
                }
            } catch {
                // Storage blocked: the statistics row is simply sent without a source.
            }
        };

        sync();
        window.addEventListener(COOKIE_DECIDED, sync);
        return () => window.removeEventListener(COOKIE_DECIDED, sync);
    }, []);
    return null;
}
