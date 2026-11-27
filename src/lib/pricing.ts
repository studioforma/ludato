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
    /**
     * Price with VAT as agreed with the client, when it is the round number and
     * the price without VAT is derived from it (75 € s DPH -> 60,98 € bez DPH).
     */
    vatPrice?: string;
};

export type PricingCategory = {
    category: string;
    items: PriceItem[];
    footnote?: string;
};

/** Slovak standard VAT. Prices in this file are without VAT. */
export const VAT_RATE = 0.23;

/**
 * One row of a complete tyre change (4 wheels). The total price decides; the
 * per-wheel line is computed from it so the two never disagree. When the client
 * agreed a round price with VAT (vatPrice), the per-wheel price comes from that
 * total: 75 € s DPH / 4 = 18,75 € s DPH = 15,24 € bez DPH.
 */
function tyreSet(service: string, price: string, vatPrice?: string): PriceItem {
    const perWheel = vatPrice
        ? Number(vatPrice.replace(',', '.')) / 4 / (1 + VAT_RATE)
        : Number(price.replace(',', '.')) / 4;
    const sub = `1 ks pneumatika a disk: ${perWheel.toFixed(2).replace('.', ',')} €`;
    return { service, price, ...(vatPrice ? { vatPrice } : {}), sub };
}

export const pricingCategories: PricingCategory[] = [
    {
        category: 'Normohodiny',
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
        category: 'Kontroly vozidla',
        items: [
            { service: 'Všeobecná kontrola vozidla', price: '50' },
            { service: 'Kontrola podvozku a náprav', price: '40' },
            { service: 'Kontrola pred STK + EK', price: '50' },
            { service: 'Diagnostika riadiacej jednotky', price: '40' },
            { service: 'Kontrola elektroniky a osvetlenia', price: '30' },
        ],
    },
    {
        category: 'Geometria',
        items: [
            { service: 'Kontrola nastavenia geometrie', price: '16', oldPrice: '20', highlight: true },
            { service: 'Geometria prednej nápravy', price: '40' },
            { service: 'Geometria prednej a zadnej nápravy', price: '55' },
        ],
    },
    {
        category: 'Olejový servis',
        items: [
            { service: 'Výmena oleja + olejový filter', price: '35' },
            { service: 'Výmena oleja + olejový filter + vzduchový filter', price: '45' },
            { service: 'Výmena oleja + olejový filter + vzduchový filter + kabínový filter', price: '55' },
            { service: 'Kompletný servis (vrátane palivového filtra)', price: '65' },
        ],
        footnote: '* Materiál naceňujeme individuálne podľa ŠPZ',
    },
    {
        category: 'Brzdy',
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
        category: 'Prevodovky',
        items: [
            { service: 'Automatická prevodovka – výmena náplne', price: '85', prefix: 'od' },
            { service: 'Manuálna prevodovka – výmena náplne', price: '75', prefix: 'od' },
        ],
        footnote: '* Materiál naceňujeme individuálne',
    },
    {
        category: 'Podvozok',
        items: [
            { service: 'Kontrola podvozku', price: '30' },
            { service: 'Opravy (tlmiče, ramená, ložiská…)', price: null },
        ],
        footnote: '* Opravy – individuálne nacenenie',
    },
    {
        category: 'Kompletné prezutie',
        items: [
            tyreSet('12" – 14"', '45'),
            tyreSet('15" – 16"', '55'),
            tyreSet('17" – 18"', '60,98', '75,00'),
            tyreSet('19" – 20"', '73,17', '90,00'),
        ],
        footnote: '* Pneumatiky Run Flat neprezúvame. Disky 21" už neprezúvame.',
    },
    {
        category: 'Preváženie a prehodenie kolies na disku',
        items: [
            { service: '12" – 14"', price: '40', sub: '1 ks pneumatika a disk: 10,00 €' },
            { service: '15" – 17"', price: '45', sub: '1 ks pneumatika a disk: 11,25 €' },
            { service: '18" – 21"', price: '50', sub: '1 ks pneumatika a disk: 12,50 €' },
        ],
    },
    {
        category: 'Uskladnenie a oprava pneumatík',
        items: [
            { service: 'Sezónne uskladnenie pneumatík', price: '40', unit: '/sezónu' },
            { service: 'Oprava defektu', price: null },
        ],
        footnote: '* Oprava defektu – individuálne nacenenie podľa stavu pneumatiky',
    },
    {
        category: 'STK a EK',
        items: [
            { service: 'Sprostredkovanie kontroly STK + EK', price: '150', highlight: true },
        ],
    },
    {
        category: 'Klimatizácia',
        items: [
            { service: 'Kontrola, tlakovanie a preplnenie klimatizácie – staré chladivo R134a', price: '40' },
            { service: 'Kontrola, tlakovanie a preplnenie klimatizácie – nové chladivo R1234yf', price: '48' },
        ],
        footnote: '* Uvedené ceny sú bez materiálu. Chladivo R134a – 0,17 € bez DPH / 1 g, chladivo R1234yf – 0,28 € bez DPH / 1 g',
    },
    {
        category: 'Dezinfekcia',
        items: [
            { service: 'Ozónová dezinfekcia interiéru', price: '30' },
        ],
    },
    {
        category: 'Prevádzkové kvapaliny',
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
        category: 'Ďalšie služby',
        items: [
            { service: 'Tepovanie cez deň', price: '50', prefix: 'od' },
            { service: 'Tepovanie v noci', price: '80', prefix: 'od' },
            { service: 'Čistenie interiéru + vysávanie', price: '45' },
            { service: 'Pickup vozidla', price: '50' },
            { service: 'Odťah vozidla', price: '170' },
            { service: 'Výmena batérie (práca)', price: '30', prefix: 'od' },
        ],
        footnote: '* Pickup v rámci Bratislavy a okolia. Odťah zabezpečíme aj mimo Slovenska, cena podľa vzdialenosti.',
    },
    {
        category: 'Náhradné vozidlo',
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

/** '35' -> '43,05' (price including VAT, Slovak decimal comma). */
export function withVat(price: string): string {
    return (Number(price.replace(',', '.')) * (1 + VAT_RATE)).toFixed(2).replace('.', ',');
}

/** "s DPH 43,05 €" line under a price, or null when there is no number to show. */
export function formatPriceWithVat(item: PriceItem): string | null {
    if (item.priceLabel || item.price === null) return null;
    const prefix = item.prefix ? item.prefix + ' ' : '';
    return `s DPH ${prefix}${item.vatPrice ?? withVat(item.price)} €${item.unit ?? ''}`;
}

/** '60,98' -> 60.98 for JSON-LD (prices are written with a decimal comma). */
export function priceNumber(price: string | null): number {
    // Same as the old Number(item.price) for null rows (0), which callers filter out.
    return price === null ? 0 : Number(price.replace(',', '.'));
}

export function getCategory(name: string): PricingCategory | undefined {
    return pricingCategories.find((c) => c.category === name);
}
