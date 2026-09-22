// Single source of truth for pricing. Imported by the cennik page and by
// service pages so numbers never get copied by hand.

export type PriceItem = {
    service: string;
    price: string | null;
    prefix?: string;
    unit?: string;
    highlight?: boolean;
    note?: boolean;
    /** Struck-through original price, shown before the current one */
    oldPrice?: string;
    /** Secondary line under the service name, e.g. per-wheel pricing */
    sub?: string;
    /** Renders instead of a numeric price, e.g. "Zadarmo" */
    priceLabel?: string;
};

export type PricingCategory = {
    category: string;
    items: PriceItem[];
    footnote?: string;
};

export const pricingCategories: PricingCategory[] = [
    {
        category: 'NORMOHODINY',
        items: [
            {
                service: 'Ľahká práca – jednoduché, rýchle úkony bez väčšej demontáže',
                price: '32',
                unit: '/NH',
            },
            {
                service: 'Stredná práca – vyžadujúca viac času alebo čiastočnú demontáž',
                price: '35',
                unit: '/NH',
            },
            {
                service: 'Ťažká práca – náročné zásahy (rozvody, spojka, turbo, EGR, DPF, opravy motora, elektro, demontáž agregátov)',
                price: '45',
                unit: '/NH',
                highlight: true,
            },
        ],
    },
    {
        category: 'KONTROLY VOZIDLA',
        items: [
            { service: 'Všeobecná kontrola vozidla', price: '50' },
            { service: 'Kontrola podvozku a náprav', price: '40' },
            { service: 'Kontrola pred STK + EK', price: '50' },
            { service: 'Diagnostika riadiacej jednotky', price: '40' },
            { service: 'Kontrola elektroniky a osvetlenia', price: '30' },
        ],
    },
    {
        category: 'GEOMETRIA',
        items: [
            { service: 'Kontrola nastavenia geometrie', price: '16', oldPrice: '20', highlight: true },
            { service: 'Geometria prednej nápravy', price: '40' },
            { service: 'Geometria prednej a zadnej nápravy', price: '55' },
        ],
    },
    {
        category: 'OLEJOVÝ SERVIS',
        items: [
            { service: 'Výmena oleja + olejový filter', price: '35' },
            { service: 'Výmena oleja + olejový filter + vzduchový filter', price: '45' },
            { service: 'Výmena oleja + olejový filter + vzduchový filter + kabínový filter', price: '55' },
            { service: 'Kompletný servis (vrátane palivového filtra)', price: '65' },
        ],
        footnote: '* Materiál naceňujeme individuálne podľa EČV',
    },
    {
        category: 'BRZDY',
        items: [
            { service: 'Kontrola bŕzd', price: '35' },
            { service: 'Výmena brzdovej kvapaliny', price: '45' },
            { service: 'Výmena predných kotúčov a platničiek', price: '85' },
            { service: 'Výmena predných platničiek', price: '45' },
            { service: 'Výmena zadných kotúčov a platničiek', price: '85' },
            { service: 'Výmena zadných platničiek', price: '45' },
        ],
    },
    {
        category: 'PREVODOVKY',
        items: [
            { service: 'Automatická prevodovka – výmena náplne', price: '85', prefix: 'od' },
            { service: 'Manuálna prevodovka – výmena náplne', price: '75', prefix: 'od' },
        ],
        footnote: '* Materiál naceňujeme individuálne',
    },
    {
        category: 'PODVOZOK',
        items: [
            { service: 'Kontrola podvozku', price: '30' },
            { service: 'Opravy (tlmiče, ramená, ložiská…)', price: null },
        ],
        footnote: '* Opravy – individuálne nacenenie',
    },
    {
        category: 'KOMPLETNÉ PREZUTIE',
        items: [
            { service: '12" – 14"', price: '45', sub: '1 ks pneumatika a disk: 11,25 €' },
            { service: '15" – 16"', price: '55', sub: '1 ks pneumatika a disk: 13,55 €' },
            { service: '17" – 19"', price: '65', sub: '1 ks pneumatika a disk: 16,25 €' },
        ],
    },
    {
        category: 'PREVÁŽENIE A PREHODENIE KOLIES NA DISKU',
        items: [
            { service: '12" – 14"', price: '40', sub: '1 ks pneumatika a disk: 10,00 €' },
            { service: '15" – 16"', price: '45', sub: '1 ks pneumatika a disk: 11,25 €' },
            { service: '17" – 19"', price: '50', sub: '1 ks pneumatika a disk: 12,50 €' },
        ],
    },
    {
        category: 'USKLADNENIE A OPRAVA PNEUMATÍK',
        items: [
            { service: 'Sezónne uskladnenie pneumatík', price: '40', unit: '/sezóna' },
            { service: 'Oprava defektu', price: null },
        ],
        footnote: '* Oprava defektu – individuálne nacenenie podľa stavu pneumatiky',
    },
    {
        category: 'STK A EK',
        items: [
            { service: 'Sprostredkovanie kontroly STK + EK', price: '150', highlight: true },
        ],
    },
    {
        category: 'KLIMATIZÁCIA',
        items: [
            { service: 'Kontrola, tlakovanie a preplnenie klimatizácie – staré chladivo R134a', price: '40' },
            { service: 'Kontrola, tlakovanie a preplnenie klimatizácie – nové chladivo R1234yf', price: '48' },
        ],
        footnote: '* Uvedené ceny sú bez materiálu. Chladivo R134a – 0,17 € bez DPH / 1 g, chladivo R1234yf – 0,28 € bez DPH / 1 g',
    },
    {
        category: 'DEZINFEKCIA',
        items: [
            { service: 'Ozónová dezinfekcia interiéru', price: '30' },
        ],
    },
    {
        category: 'PREVÁDZKOVÉ KVAPALINY',
        items: [
            { service: 'Ostrekovač', price: '3', unit: '/l' },
            { service: 'Chladiaca kvapalina G12', price: '22', unit: '/6 l' },
            { service: 'Chladiaca kvapalina G13', price: '20', unit: '/6 l' },
            { service: 'AdBlue 10 l', price: '30' },
            { service: 'Brzdová kvapalina DOT4', price: '7', unit: '/l' },
            { service: 'Motorový olej 0W20', price: '25', unit: '/l' },
            { service: 'Motorový olej 5W30', price: '15', unit: '/l' },
        ],
    },
    {
        category: 'ĎALŠIE SLUŽBY',
        items: [
            { service: 'Tepovanie cez deň', price: '50', prefix: 'od' },
            { service: 'Tepovanie v noci', price: '80', prefix: 'od' },
            { service: 'Čistenie interiéru + vysávanie', price: '45' },
            { service: 'Pickup vozidla', price: '50' },
            { service: 'Odťah vozidla', price: '170' },
            { service: 'Výmena batérie', price: '30', prefix: 'od' },
        ],
        footnote: '* Pickup v rámci Bratislavy a okolia. Odťah zabezpečíme aj mimo Slovenska, cena podľa vzdialenosti.',
    },
    {
        category: 'NÁHRADNÉ VOZIDLO',
        items: [
            { service: 'Náhradné vozidlo počas opravy', price: '35', unit: '/deň' },
            { service: 'Náhradné vozidlo pri servise nad 1000 €', price: null, priceLabel: 'Zadarmo', highlight: true },
        ],
        footnote: '* Pri poistnej udalosti náhradné vozidlo hradí poisťovňa. Dostupnosť si overte pri objednaní servisu.',
    },
];

/** Renders a price item the same way the cennik does, for reuse on service pages. */
export function formatPrice(item: PriceItem): string {
    if (item.priceLabel) return item.priceLabel;
    if (item.price === null) return 'Na dopyt';
    const prefix = item.prefix ? item.prefix + ' ' : '';
    const unit = item.unit ?? '';
    return `${prefix}${item.price} €${unit}`;
}

export function getCategory(name: string): PricingCategory | undefined {
    return pricingCategories.find((c) => c.category === name);
}
