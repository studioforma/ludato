'use client';

import { useEffect } from 'react';
import { LEAD_ORIGIN_KEY, cleanLeadOrigin, stripUrl } from '@/lib/leadOrigin';

// Remembers, once per tab, where the visitor arrived from (see leadOrigin.ts).
// Renders nothing and does not touch tracking, consent or the phone number.
export default function LeadOriginCapture() {
    useEffect(() => {
        try {
            if (window.sessionStorage.getItem(LEAD_ORIGIN_KEY)) return;
            const params = new URLSearchParams(window.location.search);
            // A referrer from our own site is not a source.
            const referrer = stripUrl(document.referrer);
            const external = referrer && !referrer.startsWith(window.location.origin) ? referrer : '';
            const origin = cleanLeadOrigin({
                utm_source: params.get('utm_source') ?? '',
                utm_medium: params.get('utm_medium') ?? '',
                utm_campaign: params.get('utm_campaign') ?? '',
                gclid: params.has('gclid'),
                referrer: external,
                vstup: window.location.pathname,
            });
            window.sessionStorage.setItem(LEAD_ORIGIN_KEY, JSON.stringify(origin));
        } catch {
            // Storage blocked: the statistics row is simply sent without a source.
        }
    }, []);
    return null;
}
