// Optional "Ako ste sa o nás dozvedeli?" field on /kontakt and /nacenenie.
// The answer goes into the email so Ludato can see which channel brings
// inquiries (AI assistants included), not only what GA4 attributes.
export const LEAD_SOURCE_LABEL = 'Ako ste sa o nás dozvedeli?';

export const LEAD_SOURCES = [
    'Google vyhľadávanie',
    'Google Mapy',
    'Odporúčanie',
    'Facebook/Instagram',
    'AI asistent (ChatGPT a pod.)',
    'Iné',
] as const;

/** Returns the answer only when it is one of the offered options. */
export function cleanLeadSource(value: unknown): string | undefined {
    return typeof value === 'string' && (LEAD_SOURCES as readonly string[]).includes(value) ? value : undefined;
}
