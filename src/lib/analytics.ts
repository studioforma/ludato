// GA4 events sent through the gtag set up in layout.tsx (G-7VKRXW04MX).
// Consent is handled by consent mode there; nothing here checks it.

type Gtag = (...args: unknown[]) => void;

// Sent to GA4 only; without send_to gtag would also pass them to the Ads tag.
const GA4_ID = 'G-7VKRXW04MX';

function getGtag(): Gtag | undefined {
    return typeof window === 'undefined' ? undefined : (window as Window & { gtag?: Gtag }).gtag;
}

/**
 * GA4 generate_lead after the server confirmed a form submission, then runs
 * `next` (the redirect to /dakujeme). The redirect waits for gtag's callback,
 * at most 1 s, so a blocked or slow GA never holds the visitor up.
 */
export function trackLeadThen(formName: string, next: () => void) {
    const gtag = getGtag();
    if (!gtag) {
        next();
        return;
    }
    let done = false;
    const go = () => {
        if (done) return;
        done = true;
        next();
    };
    gtag('event', 'generate_lead', {
        send_to: GA4_ID,
        form_name: formName,
        transport_type: 'beacon',
        event_callback: go,
        event_timeout: 1000,
    });
    window.setTimeout(go, 1000);
}

/** GA4 phone_click for a tap on a tel: link; link_location says where it sits. */
export function trackPhoneClick(linkLocation: string) {
    getGtag()?.('event', 'phone_click', { send_to: GA4_ID, link_location: linkLocation, transport_type: 'beacon' });
}
