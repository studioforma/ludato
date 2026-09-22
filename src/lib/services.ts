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
        related: ['brzdy-bratislava', 'geometria-bratislava', 'uskladnenie-pneumatik-bratislava'],
        cta: {
            question: 'Čas na sezónne prezutie?',
            subtext: 'Objednajte sa ešte dnes, kým nie je plný kalendár.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'vymena-oleja-bratislava',
        name: 'Výmena oleja a filtrov',
        h1: 'VÝMENA OLEJA A FILTROV BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Výmena oleja Bratislava – Nové Mesto | Servis od 35 € | Ludato Family Autoservis',
        description:
            'Výmena oleja a filtrov v Bratislave, Novom Meste. Motorový olej podľa špecifikácie výrobcu, olejový, vzduchový, kabínový aj palivový filter. Ceny od 35 €.',
        teaser: 'Motorový olej a filtre presne podľa špecifikácie výrobcu, s vizuálnou kontrolou motora.',
        category: 'motor',
        related: ['diagnostika-bratislava', 'stk-ek-bratislava'],
        cta: {
            question: 'Blíži sa vám servisná výmena oleja?',
            subtext: 'Objednajte sa a dajte motoru čerstvý olej ešte dnes.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'brzdy-bratislava',
        name: 'Brzdy',
        h1: 'BRZDY BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Brzdy Bratislava – Nové Mesto | Kotúče a platničky od 45 € | Ludato Family Autoservis',
        description:
            'Servis bŕzd v Bratislave, Novom Meste: kontrola, výmena kotúčov a platničiek na oboch nápravách, výmena brzdovej kvapaliny. Ceny od 45 €.',
        teaser: 'Kontrola aj výmena kotúčov, platničiek a brzdovej kvapaliny na oboch nápravách.',
        category: 'podvozok',
        related: ['podvozok-bratislava', 'geometria-bratislava', 'stk-ek-bratislava', 'pneuservis-bratislava'],
        cta: {
            question: 'Ozývajú sa vám brzdy?',
            subtext: 'Nečakajte, kým sa z pískania stane väčší problém. Skontrolujeme to.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'diagnostika-bratislava',
        name: 'Počítačová diagnostika',
        h1: 'POČÍTAČOVÁ DIAGNOSTIKA BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Diagnostika vozidla Bratislava – Nové Mesto | od 40 € | Ludato Family Autoservis',
        description:
            'Počítačová diagnostika vozidiel v Bratislave, Novom Meste. OBD II, ESP, ABS, airbag, riadiaca jednotka, elektronika a osvetlenie. Cena od 30 €.',
        teaser: 'Načítanie chýb, ESP, ABS, airbag aj elektronika, so skutočným vyhodnotením príčiny.',
        category: 'motor',
        related: ['zlozita-diagnostika-bratislava', 'autoelektrika-bratislava', 'vstrekovace-bratislava', 'stk-ek-bratislava'],
        cta: {
            question: 'Svieti vám kontrolka na palubovke?',
            subtext: 'Zistíme presne, čo sa deje, ešte pred väčšou opravou.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'klimatizacia-bratislava',
        name: 'Servis klimatizácie',
        h1: 'SERVIS KLIMATIZÁCIE BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Servis klimatizácie Bratislava – Nové Mesto | od 40 € | Ludato Family Autoservis',
        description:
            'Servis klimatizácie v Bratislave, Novom Meste: kontrola, tlakovanie a preplnenie chladivom R134a aj R1234yf, riešenie zápachu z ventilácie.',
        teaser: 'Kontrola tesnosti, doplnenie chladiva R134a aj R1234yf, riešenie zápachu z ventilácie.',
        category: 'komfort',
        related: ['ozonova-dezinfekcia-bratislava', 'vymena-oleja-bratislava', 'servis-elektromobilov-bratislava', 'kontrola-pred-dovolenkou-bratislava'],
        cta: {
            question: 'Nechladí vám klimatizácia, ako by mala?',
            subtext: 'Skontrolujeme tesnosť okruhu a doplníme chladivo ešte dnes.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'stk-ek-bratislava',
        name: 'STK a EK',
        h1: 'STK A EK BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'STK a EK Bratislava – Nové Mesto | Sprostredkovanie od 50 € | Ludato Family Autoservis',
        description:
            'Príprava a sprostredkovanie STK a EK v Bratislave, Novom Meste. Kontrola pred STK od 50 €, kompletné sprostredkovanie za 150 €.',
        teaser: 'Kontrola pred STK aj kompletné sprostredkovanie, aby ste na kontrolu prešli na prvýkrát.',
        category: 'specialne',
        related: ['kontrola-pred-kupou-bratislava', 'brzdy-bratislava', 'podvozok-bratislava', 'diagnostika-bratislava'],
        cta: {
            question: 'Blíži sa vám STK?',
            subtext: 'Pripravíme vaše auto tak, aby prešlo na prvýkrát, bez zbytočného stresu.',
            secondaryHref: '/cennik',
            secondaryLabel: 'Pozrieť cenník',
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
