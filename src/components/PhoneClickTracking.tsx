'use client';

import { useEffect } from 'react';
import { trackPhoneClick } from '@/lib/analytics';

// Google Ads conversion "Klik na telefón (Web)", a secondary action.
//
// One delegated listener on document (capture phase), so it covers every tel:
// link on the site: header, hero, CTAs, footer, sticky bar, mobile menu, and
// links CallNumberSwap rewrites to the Google forwarding number. It never
// calls preventDefault and does not use Google's gtag_report_conversion with
// a redirect callback, so dialing starts right away. Consent is handled by
// consent mode in the gtag setup (layout.tsx).

const SEND_TO = 'AW-18425609803/auz4CMm45KYdEMv8gdJE';

// Where a tel: link sits, for the GA4 phone_click event. An explicit
// data-phone-location (sticky bar) wins over the surrounding landmark.
function phoneLinkLocation(link: Element): string {
    const marked = link.closest('[data-phone-location]')?.getAttribute('data-phone-location');
    if (marked) return marked;
    if (link.closest('header')) return 'hlavicka';
    if (link.closest('footer')) return 'paticka';
    if (link.closest('aside')) return 'cta';
    return 'stranka';
}

export default function PhoneClickTracking() {
    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            const target = event.target;
            if (!(target instanceof Element)) return;
            const link = target.closest('a[href^="tel:"]');
            if (!link) return;
            const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
            gtag?.('event', 'conversion', { send_to: SEND_TO, transport_type: 'beacon' });
            trackPhoneClick(phoneLinkLocation(link));
        };
        document.addEventListener('click', onClick, true);
        return () => document.removeEventListener('click', onClick, true);
    }, []);

    return null;
}
