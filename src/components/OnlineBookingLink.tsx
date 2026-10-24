'use client';

import { TERMINO_URL } from '@/lib/booking';

// Link to the Termino booking calendar. Opens in a new tab (Termino cannot be
// embedded) and records the click as a GA4 event, since the booking itself
// happens on Termino's domain where our tags do not run.
export default function OnlineBookingLink({
    placement,
    className,
    style,
    children,
}: {
    /** Where on the site the link sits, sent with the event. */
    placement: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}) {
    const onClick = () => {
        const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
        gtag?.('event', 'online_booking_click', { placement, transport_type: 'beacon' });
    };

    return (
        <a href={TERMINO_URL} target="_blank" rel="noopener" onClick={onClick} className={className} style={style}>
            {children}
        </a>
    );
}
