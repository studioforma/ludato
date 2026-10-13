// Shared JSON-LD pieces, so the business node, served areas and breadcrumbs
// stay the same on every page. Areas come from the area registry, a new
// /kde-posobime page shows up in the schema without another edit.

import { areas } from '@/lib/areas';

export const SITE = 'https://www.ludato.sk';
export const BUSINESS_ID = `${SITE}/#autoservis`;

const bratislava = { '@type': 'City', name: 'Bratislava' };

/** Bratislava, its surroundings (pickup covers them) and every district with its own page. */
export function areaServedSchema() {
    return [
        bratislava,
        { '@type': 'AdministrativeArea', name: 'Bratislavský kraj' },
        { '@type': 'Place', name: 'Bratislava - Nové Mesto', containedInPlace: bratislava },
        ...areas.map((a) => ({
            '@type': 'Place',
            name: `Bratislava - ${a.name}`,
            url: `${SITE}/kde-posobime/${a.slug}`,
            containedInPlace: bratislava,
        })),
    ];
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: `${SITE}${item.path}`,
        })),
    };
}
