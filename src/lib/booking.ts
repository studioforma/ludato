// Online booking in Termino (Zľavomat's booking system). Termino sends
// X-Frame-Options: SAMEORIGIN, so the page cannot be embedded in an iframe on
// ludato.sk; it always opens in a new tab.

export const TERMINO_URL = 'https://local.termino.eu/embed/ludato-family-autoservis-pneuservis';

/**
 * ?sluzba= keys of services that can be booked in Termino. Termino offers
 * pneuservis, olejový servis, diagnostika a kontroly and klimatizácia.
 */
const ONLINE_BOOKING_KEYS = ['prezutie', 'olej', 'diagnostika', 'klimatizacia'];

/** True when an order link (/nacenenie?sluzba=...) points to a service bookable online. */
export function hasOnlineBooking(orderHref: string): boolean {
    const key = new URL(orderHref, 'https://www.ludato.sk').searchParams.get('sluzba');
    return key !== null && ONLINE_BOOKING_KEYS.includes(key);
}
