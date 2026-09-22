// Registry of service pages. Single source of truth for the /sluzby hub,
// the sitemap, related-service blocks and page metadata.

export type ServiceCategoryId = 'motor' | 'podvozok' | 'pneumatiky' | 'komfort' | 'specialne';

export type ServiceMeta = {
    slug: string;
    /** Short label for links, hub cards and related-service blocks. */
    name: string;
    /** Full H1 text. */
    h1: string;
    /** Substring of h1 rendered in the brand red. */
    h1Accent: string;
    title: string;
    description: string;
    /** One-line summary for the hub card. */
    teaser: string;
    category: ServiceCategoryId;
    /** Slugs of related services rendered at the bottom of the page. */
    related: string[];
    cta: {
        question: string;
        subtext: string;
        secondaryHref: string;
        secondaryLabel: string;
    };
};

export const serviceCategories: { id: ServiceCategoryId; label: string }[] = [
    { id: 'motor', label: 'Motor a pohon' },
    { id: 'podvozok', label: 'Podvozok a brzdy' },
    { id: 'pneumatiky', label: 'Pneumatiky a kolesá' },
    { id: 'komfort', label: 'Komfort a interiér' },
    { id: 'specialne', label: 'Špeciálne zamerania' },
];

export const services: ServiceMeta[] = [
    {
        slug: 'pneuservis-bratislava',
        name: 'Pneuservis',
        h1: 'PNEUSERVIS BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Pneuservis Bratislava – Nové Mesto | Prezutie od 45 € | Ludato Family Autoservis',
        description:
            'Pneuservis Ludato Family Autoservis v Bratislave, Novom Meste: kompletné prezutie, vyváženie, oprava defektu a uskladnenie pneumatík. Rýchlo, presne, bez zbytočného čakania.',
        teaser: 'Sezónne prezutie, vyváženie, oprava defektu aj uskladnenie pneumatík na jednom mieste.',
        category: 'pneumatiky',
        related: [],
        cta: {
            question: 'Čas na sezónne prezutie?',
            subtext: 'Objednajte sa ešte dnes, kým nie je plný kalendár.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
];

export function getService(slug: string): ServiceMeta | undefined {
    return services.find((s) => s.slug === slug);
}

export function getRelated(meta: ServiceMeta): ServiceMeta[] {
    return meta.related
        .map((slug) => getService(slug))
        .filter((s): s is ServiceMeta => s !== undefined);
}
