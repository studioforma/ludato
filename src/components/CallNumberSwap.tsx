'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Google Ads call tracking. For visitors from an ad, the gtag
// phone_conversion_callback in layout.tsx stores a forwarding number on
// window.ludatoCallNumber. This component puts that number into every visible
// phone number and tel: link, so a tap on mobile dials the tracked number and
// the call counts as a conversion.
//
// It runs only after hydration, so React never sees a DOM it did not render,
// and re-applies after client-side navigation and whenever React renders new
// markup (mobile menu, animated sections), because the site switches pages
// without a reload and would otherwise show the original number again.

const ORIGINAL_TEXT = '0944 236 257';
const ORIGINAL_HREF = 'tel:+421944236257';

type CallNumber = { formatted: string; mobile: string };

declare global {
    interface Window {
        ludatoCallNumber?: CallNumber;
        ludatoApplyCallNumber?: () => void;
    }
}

function applyCallNumber() {
    const number = window.ludatoCallNumber;
    if (!number) return;

    const href = `tel:${number.mobile}`;
    document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((a) => {
        if (a.getAttribute('href') === ORIGINAL_HREF) a.setAttribute('href', href);
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            // Leave JSON-LD and styles alone: the schema keeps the real number.
            if (!parent || parent.closest('script, style, noscript')) return NodeFilter.FILTER_REJECT;
            return node.nodeValue?.includes(ORIGINAL_TEXT) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        },
    });
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    nodes.forEach((node) => {
        node.nodeValue = node.nodeValue!.split(ORIGINAL_TEXT).join(number.formatted);
    });
}

export default function CallNumberSwap() {
    const pathname = usePathname();

    useEffect(() => {
        window.ludatoApplyCallNumber = applyCallNumber;
        applyCallNumber();

        // Changes are idempotent (only the original number is replaced), so
        // the mutations caused by our own edits find nothing left to change.
        // Applied synchronously: requestAnimationFrame does not run in a
        // background tab and would leave a freshly opened menu unswapped.
        const observer = new MutationObserver(() => {
            if (window.ludatoCallNumber) applyCallNumber();
        });
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        applyCallNumber();
    }, [pathname]);

    return null;
}
