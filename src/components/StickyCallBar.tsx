'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { OPEN_COOKIE_SETTINGS } from '@/components/CookieSettingsButton';

// Fired by CookieBanner after the visitor accepts or declines.
export const COOKIE_DECIDED = 'ludato:cookie-decided';

// Fixed call bar at the bottom of the screen on mobile and tablet. Desktop has
// the phone in the NAP strip and the navbar. It stays hidden while the cookie
// bar is up, so the two never cover each other. The number is written exactly
// as +421 944 236 257 so Google Ads call tracking swaps it (see README).
export default function StickyCallBar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            if (localStorage.getItem('ludato_cookie_consent')) setVisible(true);
        } catch {
            setVisible(true);
        }
        const show = () => setVisible(true);
        const hide = () => setVisible(false);
        window.addEventListener(COOKIE_DECIDED, show);
        window.addEventListener(OPEN_COOKIE_SETTINGS, hide);
        return () => {
            window.removeEventListener(COOKIE_DECIDED, show);
            window.removeEventListener(OPEN_COOKIE_SETTINGS, hide);
        };
    }, []);

    if (!visible) return null;

    return (
        <>
            {/* Keeps the end of the page (footer) from hiding under the bar */}
            <div className="lg:hidden h-[72px]" aria-hidden="true" />
            <div
                className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] bg-[#E31C25] shadow-[0_-8px_30px_rgba(0,0,0,0.35)]"
                style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
                <div className="flex items-stretch h-[72px]">
                    <a
                        href="tel:+421944236257"
                        className="flex-1 flex items-center justify-center gap-3 text-white active:bg-[#c0151d] transition-colors"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="flex flex-col leading-tight text-left">
                            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/80">Zavolať</span>
                            <span className="text-base font-black tracking-wide">+421 944 236 257</span>
                        </span>
                    </a>
                    <Link
                        href="/nacenenie"
                        className="flex items-center justify-center px-5 bg-[#1D1D1B] text-white text-xs font-bold tracking-widest uppercase active:bg-black transition-colors"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        Objednať
                    </Link>
                </div>
            </div>
        </>
    );
}
