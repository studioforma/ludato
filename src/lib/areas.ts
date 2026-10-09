// Registry of area pages (/kde-posobime/[slug]). Drive times and routes are
// the same ones shown on the /kde-posobime hub.

export type AreaMeta = {
    slug: string;
    /** "Rača" */
    name: string;
    /** Accusative for "pre ...": "Raču" */
    nameAcc: string;
    h1: string;
    /** Substring of h1 rendered in the brand red. */
    h1Accent: string;
    title: string;
    description: string;
    driveTime: string;
    route: string;
    /** Service slugs shown in "Služby, ktoré tu riešime najčastejšie". */
    services: string[];
    cta: {
        question: string;
        subtext: string;
    };
};

export const areas: AreaMeta[] = [
    {
        slug: 'raca',
        name: 'Rača',
        nameAcc: 'Raču',
        h1: 'AUTOSERVIS A PNEUSERVIS PRE RAČU',
        h1Accent: 'RAČU',
        title: 'Autoservis Rača | 10 až 15 minút od Rače, Odborárska 52 | Ludato Family Autoservis',
        description:
            'Autoservis a pneuservis pre Raču, Krasňany aj Východné. Na Odborárskej v Novom Meste sme orientačne 10 až 15 minút autom. Brzdy, prezutie, diagnostika, výmena oleja.',
        driveTime: 'orientačne 10 až 15 minút autom',
        route: 'Cez Púchovskú a Račiansku',
        services: ['brzdy-bratislava', 'pneuservis-bratislava', 'vymena-oleja-bratislava', 'pocitacova-diagnostika-bratislava'],
        cta: {
            question: 'Potrebujete servis a bývate v Rači?',
            subtext: 'Sme 10 až 15 minút od vás. Zavolajte a dohodneme termín, alebo si po auto prídeme.',
        },
    },
    {
        slug: 'vajnory',
        name: 'Vajnory',
        nameAcc: 'Vajnory',
        h1: 'AUTOSERVIS A PNEUSERVIS PRE VAJNORY',
        h1Accent: 'VAJNORY',
        title: 'Autoservis Vajnory | 15 až 20 minút od Vajnor, Odborárska 52 | Ludato Family Autoservis',
        description:
            'Autoservis a pneuservis pre Vajnory. Na Odborárskej v Novom Meste sme orientačne 15 až 20 minút autom cez Vajnorskú. Prezutie, výmena oleja, diagnostika, brzdy aj pickup auta.',
        driveTime: 'orientačne 15 až 20 minút autom',
        route: 'Cez Vajnorskú a Račiansku',
        services: ['vymena-oleja-bratislava', 'pneuservis-bratislava', 'pocitacova-diagnostika-bratislava', 'nahradne-vozidlo-bratislava'],
        cta: {
            question: 'Potrebujete servis a bývate vo Vajnoroch?',
            subtext: 'Cesta k nám trvá 15 až 20 minút. Alebo si po auto prídeme my.',
        },
    },
    {
        slug: 'ruzinov',
        name: 'Ružinov',
        nameAcc: 'Ružinov',
        h1: 'AUTOSERVIS A PNEUSERVIS PRE RUŽINOV',
        h1Accent: 'RUŽINOV',
        title: 'Autoservis Ružinov | 15 minút od Ružinova, Odborárska 52 | Ludato Family Autoservis',
        description:
            'Autoservis a pneuservis pre Ružinov, Trnávku, Prievoz aj Štrkovec. Na Odborárskej v Novom Meste sme orientačne 15 minút autom. Geometria, brzdy, prezutie, diagnostika.',
        driveTime: 'orientačne 15 minút autom',
        route: 'Cez Prievozskú alebo Trnavskú cestu',
        services: ['geometria-bratislava', 'brzdy-bratislava', 'pneuservis-bratislava', 'stk-ek-bratislava'],
        cta: {
            question: 'Potrebujete servis a bývate v Ružinove?',
            subtext: 'Sme 15 minút od vás. Zavolajte a dohodneme termín, ktorý vám sedí.',
        },
    },
    {
        slug: 'stare-mesto',
        name: 'Staré Mesto',
        nameAcc: 'Staré Mesto',
        h1: 'AUTOSERVIS A PNEUSERVIS PRE STARÉ MESTO',
        h1Accent: 'STARÉ MESTO',
        title: 'Autoservis Staré Mesto | 10 minút od centra, Odborárska 52 | Ludato Family Autoservis',
        description:
            'Autoservis a pneuservis pre Staré Mesto. Z centra Bratislavy sme na Odborárskej v Novom Meste orientačne 10 minút autom. Diagnostika, batéria, výmena oleja, prezutie, pickup auta.',
        driveTime: 'orientačne 10 minút autom',
        route: 'Cez Trnavské mýto a Legionársku',
        services: ['pocitacova-diagnostika-bratislava', 'vymena-oleja-bratislava', 'pneuservis-bratislava', 'podvozok-bratislava'],
        cta: {
            question: 'Potrebujete servis a bývate v Starom Meste?',
            subtext: 'Z centra ste u nás za 10 minút. Alebo auto vyzdvihneme my a vy sa nemusíte nikam presúvať.',
        },
    },
    {
        slug: 'karlova-ves',
        name: 'Karlova Ves',
        nameAcc: 'Karlovu Ves',
        h1: 'AUTOSERVIS A PNEUSERVIS PRE KARLOVU VES',
        h1Accent: 'KARLOVU VES',
        title: 'Autoservis Karlova Ves | 20 minút cez most, Odborárska 52 | Ludato Family Autoservis',
        description:
            'Autoservis a pneuservis pre Karlovu Ves a Dlhé diely. Na Odborárskej v Novom Meste sme orientačne 20 minút autom. Brzdy, podvozok, prezutie, výmena oleja aj pickup auta.',
        driveTime: 'orientačne 20 minút autom',
        route: 'Cez Most SNP alebo Botanickú',
        services: ['brzdy-bratislava', 'podvozok-bratislava', 'pneuservis-bratislava', 'nahradne-vozidlo-bratislava'],
        cta: {
            question: 'Potrebujete servis a bývate v Karlovej Vsi?',
            subtext: 'Sme 20 minút od vás, a keď nemáte čas, po auto si prídeme sami.',
        },
    },
    {
        slug: 'dubravka',
        name: 'Dúbravka',
        nameAcc: 'Dúbravku',
        h1: 'AUTOSERVIS A PNEUSERVIS PRE DÚBRAVKU',
        h1Accent: 'DÚBRAVKU',
        title: 'Autoservis Dúbravka | 20 až 25 minút, Odborárska 52 | Ludato Family Autoservis',
        description:
            'Autoservis a pneuservis pre Dúbravku. Na Odborárskej v Novom Meste sme orientačne 20 až 25 minút autom. Brzdy, prezutie, diagnostika, náhradné vozidlo aj pickup auta.',
        driveTime: 'orientačne 20 až 25 minút autom',
        route: 'Cez Saratovskú a Botanickú',
        services: ['brzdy-bratislava', 'pneuservis-bratislava', 'pocitacova-diagnostika-bratislava', 'nahradne-vozidlo-bratislava'],
        cta: {
            question: 'Potrebujete servis a bývate v Dúbravke?',
            subtext: 'Cesta k nám trvá 20 až 25 minút. Po auto si vieme prísť aj my.',
        },
    },
    {
        slug: 'kramare',
        name: 'Kramáre',
        nameAcc: 'Kramáre',
        h1: 'AUTOSERVIS A PNEUSERVIS PRE KRAMÁRE',
        h1Accent: 'KRAMÁRE',
        title: 'Autoservis Kramáre | Približne 10 minút, Odborárska 52 | Ludato Family Autoservis',
        description:
            'Autoservis a pneuservis pre Kramáre. Na Odborárskej v Novom Meste sme orientačne 10 minút autom. Brzdy, prezutie, podvozok, výmena oleja aj vyzdvihnutie auta.',
        driveTime: 'orientačne 10 minút autom',
        route: 'Cez Račiansku a Pionierskú',
        services: ['brzdy-bratislava', 'pneuservis-bratislava', 'podvozok-bratislava', 'vymena-oleja-bratislava'],
        cta: {
            question: 'Potrebujete servis a bývate na Kramároch?',
            subtext: 'Sme vo vašej mestskej časti, orientačne 10 minút autom. Zavolajte a dohodneme termín.',
        },
    },
    {
        slug: 'koliba',
        name: 'Koliba',
        nameAcc: 'Kolibu',
        h1: 'AUTOSERVIS A PNEUSERVIS PRE KOLIBU',
        h1Accent: 'KOLIBU',
        title: 'Autoservis Koliba | 10 až 15 minút, Odborárska 52 | Ludato Family Autoservis',
        description:
            'Autoservis a pneuservis pre Kolibu. Na Odborárskej v Novom Meste sme orientačne 10 až 15 minút autom. Brzdy, zimné pneumatiky, spojka, podvozok aj vyzdvihnutie auta.',
        driveTime: 'orientačne 10 až 15 minút autom',
        route: 'Cez Pionierskú a Jeséniovu',
        services: ['brzdy-bratislava', 'pneuservis-bratislava', 'prevodovka-spojka-bratislava', 'podvozok-bratislava'],
        cta: {
            question: 'Potrebujete servis a bývate na Kolibe?',
            subtext: 'Sme orientačne 10 až 15 minút od vás, a keď nemáte čas, po auto si prídeme sami.',
        },
    },
];

export function getArea(slug: string): AreaMeta | undefined {
    return areas.find((a) => a.slug === slug);
}
