'use client';

import { useEffect } from 'react';
import { COOKIE_DECIDED } from '@/components/StickyCallBar';

// Microsoft Clarity (project "Ludato"). Loaded only after the visitor accepts
// cookies in the cookie bar (ludato_cookie_consent = accepted, the same consent
// as GA4), then told about the consent with clarity('consent'). Without consent
// the script is never requested. If consent is withdrawn later, Clarity gets
// clarity('consent', false). Does not touch gtag, Ads or call tracking.
const CLARITY_ID = 'zfovmrl3rt';

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };

function loadClarity() {
    const w = window as Window & { clarity?: ClarityFn };
    if (document.getElementById('ms-clarity')) {
        w.clarity?.('consent');
        return;
    }
    w.clarity =
        w.clarity ||
        (function (...args: unknown[]) {
            (w.clarity!.q = w.clarity!.q || []).push(args);
        } as ClarityFn);
    const tag = document.createElement('script');
    tag.id = 'ms-clarity';
    tag.async = true;
    tag.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    document.head.appendChild(tag);
    w.clarity('consent');
}

export default function ClarityLoader() {
    useEffect(() => {
        const sync = () => {
            let consent: string | null = null;
            try {
                consent = localStorage.getItem('ludato_cookie_consent');
            } catch {
                return;
            }
            if (consent === 'accepted') {
                loadClarity();
            } else if (document.getElementById('ms-clarity')) {
                (window as Window & { clarity?: ClarityFn }).clarity?.('consent', false);
            }
        };
        sync();
        window.addEventListener(COOKIE_DECIDED, sync);
        return () => window.removeEventListener(COOKIE_DECIDED, sync);
    }, []);

    return null;
}
