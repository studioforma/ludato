'use client';

// Reopens the cookie bar so the visitor can change or withdraw consent,
// which GDPR requires to be as easy as giving it.
export const OPEN_COOKIE_SETTINGS = 'ludato:open-cookie-settings';

export default function CookieSettingsButton({
    className,
    label = 'Nastavenia cookies',
}: {
    className?: string;
    label?: string;
}) {
    return (
        <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
            className={className}
            style={{ fontFamily: 'var(--font-montserrat)' }}
        >
            {label}
        </button>
    );
}
