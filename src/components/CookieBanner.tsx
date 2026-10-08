'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { OPEN_COOKIE_SETTINGS } from '@/components/CookieSettingsButton';
import { COOKIE_DECIDED } from '@/components/StickyCallBar';

// The bar is part of the server HTML so it paints with the page instead of
// popping up after hydration (it used to be the page's LCP element, ~3 s late).
// Returning visitors get the 'cookie-decided' class from the inline script in
// layout.tsx, which hides it before the first paint.
export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('ludato_cookie_consent')) setIsVisible(false);
    }, []);

    // "Nastavenia cookies" in the footer and on the privacy page reopens the bar.
    useEffect(() => {
        const open = () => {
            document.documentElement.classList.remove('cookie-decided');
            setIsVisible(true);
        };
        window.addEventListener(OPEN_COOKIE_SETTINGS, open);
        return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
    }, []);

    // Google consent mode v2. The default (all denied) and the grant for
    // returning visitors are set in the inline gtag script in layout.tsx.
    const updateConsent = (state: 'granted' | 'denied') => {
        const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
        gtag?.('consent', 'update', {
            ad_storage: state,
            ad_user_data: state,
            ad_personalization: state,
            analytics_storage: state,
        });
    };

    const handleAccept = () => {
        localStorage.setItem('ludato_cookie_consent', 'accepted');
        updateConsent('granted');
        // Let Google Ads swap in the call tracking number now, without a reload.
        (window as Window & { ludatoConfigureCallTracking?: () => void }).ludatoConfigureCallTracking?.();
        setIsVisible(false);
        window.dispatchEvent(new Event(COOKIE_DECIDED));
    };

    const handleDecline = () => {
        localStorage.setItem('ludato_cookie_consent', 'declined');
        updateConsent('denied');
        setIsVisible(false);
        window.dispatchEvent(new Event(COOKIE_DECIDED));
    };

    return (
        <>
            {isVisible && (
                <div
                    id="cookie-banner"
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none"
                >
                    <div className="max-w-7xl mx-auto pointer-events-auto">
                        <div className="bg-[#1D1D1B] border border-white/10 shadow-2xl p-6 sm:p-8 rounded-sm relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12 backdrop-blur-md">

                            {/* Decorative side accent */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E31C25]" />

                            {/* Text content */}
                            <div className="flex-1">
                                <h3
                                    className="text-white font-bold text-lg mb-2 flex items-center gap-2"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    <span className="text-[#E31C25]">//</span> Súbory cookies
                                </h3>
                                <p
                                    className="text-white/60 text-sm leading-relaxed"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    Táto stránka používa súbory cookies pre zabezpečenie základných funkcií
                                    (ako je napríklad Google Mapa), analýzu návštevnosti a meranie reklamy.
                                    Rešpektujeme vaše súkromie, môžete nastavenia prijať alebo odmietnuť.
                                    Viac v{' '}
                                    <Link
                                        href="/ochrana-osobnych-udajov"
                                        className="text-white/80 underline hover:text-[#E31C25] transition-colors"
                                    >
                                        zásadách ochrany osobných údajov
                                    </Link>
                                    .
                                </p>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 shrink-0">
                                <button
                                    onClick={handleDecline}
                                    className="px-6 py-3 border border-white/10 hover:bg-white/5 text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm text-center"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    Odmietnuť
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-6 py-3 bg-[#E31C25] hover:bg-[#c0151d] text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#E31C25]/40 rounded-sm text-center relative overflow-hidden group"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    <span className="relative z-10">Súhlasím</span>
                                    <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
