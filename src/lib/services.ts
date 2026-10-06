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
    /** Real Ludato photo shown beside the H1. Stock photos do not belong here. */
    heroImage?: { src: string; alt: string };
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
        heroImage: {
            src: '/sluzby/pneuservis-prezutie-ludato-bratislava.webp',
            alt: 'Mechanik prezúva pneumatiku na prezúvačke v autoservise a pneuservise Ludato Family na Odborárskej, Bratislava Nové Mesto',
        },
        related: ['brzdy-bratislava', 'geometria-bratislava', 'uskladnenie-pneumatik-bratislava'],
        cta: {
            question: 'Chcete mať prezutie vybavené v pokoji?',
            subtext: 'Objednajte sa ešte dnes, kým nie je plný kalendár.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'vymena-oleja-bratislava',
        name: 'Výmena oleja',
        h1: 'VÝMENA OLEJA A FILTROV BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Výmena oleja Bratislava – Nové Mesto | Servis od 35 € | Ludato Family Autoservis',
        description:
            'Výmena oleja a filtrov v Bratislave, Novom Meste. Motorový olej podľa špecifikácie výrobcu, olejový, vzduchový, kabínový aj palivový filter. Ceny od 35 €.',
        teaser: 'Motorový olej a filtre presne podľa špecifikácie výrobcu, s vizuálnou kontrolou motora.',
        category: 'motor',
        heroImage: {
            src: '/sluzby/vymena-oleja-ludato-bratislava.webp',
            alt: 'Výmena motorového oleja na zdvihnutom vozidle v autoservise Ludato Family na Odborárskej v Bratislave, Novom Meste',
        },
        related: ['pocitacova-diagnostika-bratislava', 'stk-ek-bratislava'],
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
        heroImage: {
            src: '/sluzby/brzdy-kotuc-strmen-ludato-bratislava.webp',
            alt: 'Nový brzdový kotúč a strmeň na prednej náprave Suzuki Swift v autoservise Ludato Family, Bratislava Nové Mesto',
        },
        related: ['podvozok-bratislava', 'geometria-bratislava', 'stk-ek-bratislava', 'pneuservis-bratislava'],
        cta: {
            question: 'Ozývajú sa vám brzdy?',
            subtext: 'Nečakajte, kým sa z pískania stane väčší problém. Skontrolujeme to.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'pocitacova-diagnostika-bratislava',
        name: 'Počítačová diagnostika',
        h1: 'POČÍTAČOVÁ DIAGNOSTIKA BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Diagnostika vozidla Bratislava – Nové Mesto | od 40 € | Ludato Family Autoservis',
        description:
            'Počítačová diagnostika vozidiel v Bratislave, Novom Meste. OBD II, ESP, ABS, airbag, riadiaca jednotka, elektronika a osvetlenie. Cena od 30 €.',
        teaser: 'Načítanie chýb, ESP, ABS, airbag aj elektronika, so skutočným vyhodnotením príčiny.',
        category: 'motor',
        heroImage: {
            src: '/sluzby/diagnostika-ludato-bratislava.webp',
            alt: 'Vozidlo s otvorenou kapotou pripravené na počítačovú diagnostiku v autoservise Ludato Family, Bratislava Nové Mesto',
        },
        related: ['zlozita-diagnostika-bratislava', 'autoelektrika-bratislava', 'vstrekovace-bratislava', 'stk-ek-bratislava'],
        cta: {
            question: 'Svieti vám kontrolka na palubovke?',
            subtext: 'Zistíme presne, čo sa deje, ešte pred väčšou opravou.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'servis-klimatizacie-bratislava',
        name: 'Servis klimatizácie',
        h1: 'SERVIS KLIMATIZÁCIE BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Servis klimatizácie Bratislava – Nové Mesto | od 40 € | Ludato Family Autoservis',
        description:
            'Servis klimatizácie v Bratislave, Novom Meste: kontrola, tlakovanie a preplnenie chladivom R134a aj R1234yf, riešenie zápachu z ventilácie.',
        teaser: 'Kontrola tesnosti, doplnenie chladiva R134a aj R1234yf, riešenie zápachu z ventilácie.',
        category: 'komfort',
        heroImage: {
            src: '/sluzby/servis-klimatizacie-ludato-bratislava.webp',
            alt: 'Plnička klimatizácie s výberom chladiva R134a a R1234yf v autoservise Ludato Family, Bratislava Nové Mesto',
        },
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
        related: ['kontrola-pred-kupou-bratislava', 'brzdy-bratislava', 'podvozok-bratislava', 'pocitacova-diagnostika-bratislava'],
        cta: {
            question: 'Nechcete riešiť STK sami?',
            subtext: 'Pripravíme vaše auto tak, aby prešlo na prvýkrát, bez zbytočného stresu.',
            secondaryHref: '/cennik',
            secondaryLabel: 'Pozrieť cenník',
        },
    },
    {
        slug: 'geometria-bratislava',
        name: 'Geometria',
        h1: 'GEOMETRIA BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Geometria Bratislava – Nové Mesto | Kontrola od 16 € | Ludato Family Autoservis',
        description:
            'Geometria kolies v Bratislave, Novom Meste: kontrola a nastavenie zbiehavosti a odklonu na prednej aj zadnej náprave podľa výrobcu. Kontrola od 16 €.',
        teaser: 'Kontrola a nastavenie zbiehavosti a odklonu, aby auto išlo rovno a pneumatiky vydržali.',
        category: 'podvozok',
        related: ['podvozok-bratislava', 'pneuservis-bratislava', 'brzdy-bratislava'],
        cta: {
            question: 'Ťahá vám auto do strany?',
            subtext: 'Skontrolujeme geometriu skôr, než vám zje nové pneumatiky.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'podvozok-bratislava',
        name: 'Podvozok',
        h1: 'OPRAVA PODVOZKU BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Oprava podvozku Bratislava – Nové Mesto | Kontrola od 30 € | Ludato Family Autoservis',
        description:
            'Kontrola a oprava podvozku v Bratislave, Novom Meste: tlmiče, horné uloženie, ramená, silentbloky, stabilizátory, ložiská kolies a čapy. Kontrola od 30 €.',
        teaser: 'Tlmiče, ramená, silentbloky, stabilizátory aj ložiská kolies, menené podľa skutočného stavu.',
        category: 'podvozok',
        heroImage: {
            src: '/sluzby/podvozok-naprava-ludato-bratislava.webp',
            alt: 'Suzuki Swift na zdviháku s demontovaným kolesom počas opravy prednej nápravy v autoservise Ludato Family, Bratislava Nové Mesto',
        },
        related: ['geometria-bratislava', 'brzdy-bratislava', 'stk-ek-bratislava', 'pneuservis-bratislava'],
        cta: {
            question: 'Klepe vám niečo na nerovnostiach?',
            subtext: 'Auto zdvihneme, nájdeme príčinu a povieme vám cenu vopred.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'rozvody-bratislava',
        name: 'Rozvody',
        h1: 'VÝMENA ROZVODOV BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Výmena rozvodov Bratislava – Nové Mesto | Remeň aj reťaz | Ludato Family Autoservis',
        description:
            'Výmena rozvodov v Bratislave, Novom Meste: rozvodový remeň aj reťaz, napínač, vodiace lišty, kladky a vodné čerpadlo. Postup podľa výrobcu, cena vopred.',
        teaser: 'Rozvodový remeň aj reťaz s kompletnou sadou, skôr než zlyhanie poškodí motor.',
        category: 'motor',
        related: ['pocitacova-diagnostika-bratislava', 'vymena-oleja-bratislava', 'turboduchadlo-bratislava', 'opravy-motora-bratislava'],
        cta: {
            question: 'Neviete, kedy sa vám naposledy menil rozvod?',
            subtext: 'Preveríme to a vymeníme skôr, než sa z výmeny stane oprava motora.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'uskladnenie-pneumatik-bratislava',
        name: 'Uskladnenie pneumatík',
        h1: 'USKLADNENIE PNEUMATÍK BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Uskladnenie pneumatík Bratislava – Nové Mesto | 40 € na sezónu | Ludato Family Autoservis',
        description:
            'Sezónne uskladnenie pneumatík v Bratislave, Novom Meste za 40 € na sezónu. Kontrola dezénu pri uskladnení a sada pripravená priamo pri ďalšom prezutí.',
        teaser: 'Sezónna sada uložená u nás za 40 €, pripravená pri ďalšom prezutí. Bez vláčenia z pivnice.',
        category: 'pneumatiky',
        related: ['pneuservis-bratislava', 'geometria-bratislava', 'brzdy-bratislava'],
        cta: {
            question: 'Nemáte kam dať druhú sadu pneumatík?',
            subtext: 'Uskladníme ju u nás a pri ďalšom prezutí ju budete mať pripravenú.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'nahradne-vozidlo-bratislava',
        name: 'Náhradné vozidlo',
        h1: 'NÁHRADNÉ VOZIDLO POČAS OPRAVY BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Náhradné vozidlo Bratislava – Nové Mesto | 35 € na deň, nad 1000 € zadarmo | Ludato Family Autoservis',
        description:
            'Náhradné vozidlo počas opravy v Bratislave, Novom Meste: 35 € na deň, pri servise nad 1000 € zadarmo, pri poistnej udalosti ho hradí poisťovňa.',
        teaser: '35 € na deň, pri servise nad 1000 € zadarmo a pri poistnej udalosti ho hradí poisťovňa.',
        category: 'specialne',
        heroImage: {
            src: '/sluzby/nahradne-vozidlo-skoda-fabia-ludato-bratislava.webp',
            alt: 'Náhradné vozidlá Škoda Fabia pre zákazníkov autoservisu Ludato Family, Bratislava Nové Mesto',
        },
        related: ['rozvody-bratislava', 'podvozok-bratislava', 'pocitacova-diagnostika-bratislava'],
        cta: {
            question: 'Čaká vás dlhšia oprava?',
            subtext: 'Rezervujte si náhradné vozidlo už pri objednaní servisu.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'zlozita-diagnostika-bratislava',
        name: 'Zložitá diagnostika',
        h1: 'ZLOŽITÁ DIAGNOSTIKA BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Zložitá diagnostika Bratislava – Nové Mesto | Keď iný servis chybu nenašiel | Ludato Family Autoservis',
        description:
            'Zložitá diagnostika v Bratislave, Novom Meste: poruchy, ktoré sa vracajú, skraty v kabeláži, klamúce snímače. Hľadáme skutočnú príčinu, nie prvý diel z kódu.',
        teaser: 'Keď sa kontrolka stále vracia alebo chybu inde nenašli. Hľadáme skutočnú príčinu, nie prvý diel.',
        category: 'motor',
        heroImage: {
            src: '/sluzby/zlozita-diagnostika-motor-ludato-bratislava.webp',
            alt: 'Motorový priestor Škody Rapid pri zložitej diagnostike v autoservise Ludato Family, Bratislava Nové Mesto',
        },
        related: ['pocitacova-diagnostika-bratislava', 'turboduchadlo-bratislava', 'nahradne-vozidlo-bratislava'],
        cta: {
            question: 'Vracia sa vám tá istá porucha?',
            subtext: 'Prineste auto aj doklady z predchádzajúcich opráv, nájdeme skutočnú príčinu.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'turboduchadlo-bratislava',
        name: 'Turbodúchadlo',
        h1: 'OPRAVA TURBODÚCHADLA BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Oprava a výmena turba Bratislava – Nové Mesto | Repas aj nové turbo | Ludato Family Autoservis',
        description:
            'Repas a výmena turbodúchadla v Bratislave, Novom Meste. Diagnostika tlaku plnenia, kontrola olejových vedení, DPF a EGR. Hľadáme aj príčinu, prečo turbo odišlo.',
        teaser: 'Repas aj výmena turba, s kontrolou olejových vedení a príčiny, prečo turbo odišlo.',
        category: 'motor',
        heroImage: {
            src: '/sluzby/turbo-demontaz-napravnice-ludato-bratislava.webp',
            alt: 'Demontáž prednej nápravnice Škody Rapid 1.4 TDI pri výmene turbodúchadla v autoservise Ludato Family, Bratislava Nové Mesto',
        },
        related: ['zlozita-diagnostika-bratislava', 'vymena-oleja-bratislava', 'rozvody-bratislava', 'pocitacova-diagnostika-bratislava'],
        cta: {
            question: 'Stratilo auto výkon alebo dymí?',
            subtext: 'Skontrolujeme turbo skôr, než sa poškodenie prenesie na motor.',
            secondaryHref: '/nacenenie',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'servis-veteranov-bratislava',
        name: 'Servis veteránov',
        h1: 'SERVIS VETERÁNOV BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Servis veteránov Bratislava – Nové Mesto | Diely nové aj repasované | Ludato Family Autoservis',
        description:
            'Servis a opravy veteránov v Bratislave, Novom Meste. Podvozok, motor, brzdy aj elektrika, zháňanie nových aj repasovaných dielov a príprava na sezónu.',
        teaser: 'Údržba aj opravy veteránov, so zháňaním nových aj repasovaných dielov.',
        category: 'specialne',
        heroImage: {
            src: '/sluzby/veteran-land-rover-ludato-bratislava.webp',
            alt: 'Veterán Land Rover z roku 1974 na zdviháku v autoservise Ludato Family na Odborárskej, Bratislava Nové Mesto',
        },
        related: ['nahradne-vozidlo-bratislava', 'brzdy-bratislava', 'podvozok-bratislava'],
        cta: {
            question: 'Máte veterána, ktorý si zaslúži poriadnu starostlivosť?',
            subtext: 'Zavolajte nám, porozprávame sa o aute a dohodneme postup.',
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
