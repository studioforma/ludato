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
            src: '/sluzby/pneuservis-subaru-zdvihak-ludato-bratislava.webp',
            alt: 'Auto na zdviháku pri prezúvaní kolies v pneuservise Ludato Family na Odborárskej, Bratislava Nové Mesto',
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
        related: ['pocitacova-diagnostika-bratislava', 'stk-ek-bratislava', 'autobateria-bratislava'],
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
        heroImage: {
            src: '/sluzby/rozvody-aretacia-ludato-bratislava.webp',
            alt: 'Aretačný prípravok nasadený na rozvode motora pri výmene rozvodov v autoservise Ludato Family, Bratislava Nové Mesto',
        },
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
        slug: 'predaj-pneumatik-bratislava',
        name: 'Predaj pneumatík',
        h1: 'PREDAJ PNEUMATÍK BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Predaj pneumatík Bratislava – Nové Mesto | Pirelli, Michelin, Nexen, Matador s montážou | Ludato Family Autoservis',
        description:
            'Nové pneumatiky Pirelli, Michelin, Nexen a Matador na objednávku v Bratislave, Novom Meste. Pomôžeme s výberom, dodáme cez overených partnerov a rovno namontujeme.',
        teaser: 'Nové pneumatiky Pirelli, Michelin, Nexen a Matador na objednávku, s výberom aj montážou.',
        category: 'pneumatiky',
        related: ['pneuservis-bratislava', 'uskladnenie-pneumatik-bratislava', 'geometria-bratislava', 'brzdy-bratislava'],
        cta: {
            question: 'Potrebujete nové pneumatiky?',
            subtext: 'Povedzte nám rozmer a sezónu, pneumatiky dodáme a rovno namontujeme.',
            secondaryHref: '/nacenenie?sluzba=pneumatiky',
            secondaryLabel: 'Objednať pneumatiky',
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
        related: ['odtah-vozidla-bratislava', 'rozvody-bratislava', 'prevodovka-spojka-bratislava', 'pocitacova-diagnostika-bratislava'],
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
    {
        slug: 'odtah-vozidla-bratislava',
        name: 'Odťah a vyzdvihnutie auta',
        h1: 'ODŤAH A VYZDVIHNUTIE AUTA BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Odťah a vyzdvihnutie auta Bratislava | Pickup od 50 €, odťah 170 € | Ludato Family Autoservis',
        description:
            'Vyzdvihnutie auta do servisu v Bratislave a okolí za 50 €, odťah nepojazdného auta za 170 €, odťah zo zahraničia 1,50 € za km. Ludato Family Autoservis, Nové Mesto.',
        teaser: 'Vyzdvihnutie auta za 50 €, odťah nepojazdného auta za 170 €, aj zo zahraničia.',
        category: 'specialne',
        related: ['nahradne-vozidlo-bratislava', 'pocitacova-diagnostika-bratislava', 'autobateria-bratislava', 'servis-veteranov-bratislava'],
        cta: {
            question: 'Auto nenaštartuje alebo nemáte čas prísť?',
            subtext: 'Zavolajte a dohodneme vyzdvihnutie alebo odťah do nášho servisu.',
            secondaryHref: '/nacenenie?sluzba=pickup',
            secondaryLabel: 'Objednať vyzdvihnutie',
        },
    },
    {
        slug: 'autobateria-bratislava',
        name: 'Autobatéria',
        h1: 'VÝMENA AUTOBATÉRIE BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Výmena autobatérie Bratislava – Nové Mesto | od 30 € | Ludato Family Autoservis',
        description:
            'Výmena autobatérie v Bratislave, Novom Meste od 30 €. Auto ťažko štartuje, batéria sa vybíja alebo vás nechala stáť? Zistíme príčinu a batériu vymeníme.',
        teaser: 'Výmena batérie od 30 € a hľadanie príčiny, keď sa auto opakovane vybíja.',
        category: 'motor',
        heroImage: {
            src: '/sluzby/autobateria-motorovy-priestor-ludato-bratislava.webp',
            alt: 'Motorový priestor auta s autobatériou počas servisu v autoservise Ludato Family na Odborárskej, Bratislava Nové Mesto',
        },
        related: ['pocitacova-diagnostika-bratislava', 'odtah-vozidla-bratislava', 'zlozita-diagnostika-bratislava', 'vymena-oleja-bratislava'],
        cta: {
            question: 'Auto ráno ťažko štartuje?',
            subtext: 'Nečakajte, kým vás batéria nechá stáť. Skontrolujeme ju a vymeníme.',
            secondaryHref: '/nacenenie?sluzba=bateria',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'prevodovka-spojka-bratislava',
        name: 'Prevodovka a spojka',
        h1: 'PREVODOVKA A SPOJKA BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Spojka a prevodovka Bratislava – Nové Mesto | Výmena spojky, zotrvačník, olej | Ludato Family Autoservis',
        description:
            'Výmena spojky, dvojhmotového zotrvačníka a oleja v prevodovke v Bratislave, Novom Meste. Manuálne aj automatické prevodovky, olej od 75 €, cena opravy vopred.',
        teaser: 'Spojka, dvojhmotový zotrvačník, opravy prevodoviek a výmena oleja v manuáli aj automate.',
        category: 'motor',
        related: ['pocitacova-diagnostika-bratislava', 'nahradne-vozidlo-bratislava', 'rozvody-bratislava', 'odtah-vozidla-bratislava'],
        cta: {
            question: 'Prekĺzava vám spojka?',
            subtext: 'Pozrieme sa na to skôr, než vás nechá stáť. Cenu opravy povieme vopred.',
            secondaryHref: '/nacenenie?sluzba=spojka',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'vstrekovace-bratislava',
        name: 'Vstrekovače',
        h1: 'VSTREKOVAČE BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Vstrekovače Bratislava – Nové Mesto | Test na vlastnom testeri, benzín aj nafta | Ludato Family Autoservis',
        description:
            'Test vstrekovačov na vlastnom testeri, výmena a kódovanie do riadiacej jednotky v Bratislave, Novom Meste. Naftové aj benzínové motory, všetky bežné úkony okolo vstrekovania.',
        teaser: 'Test vstrekovačov na vlastnom testeri, výmena a kódovanie, nafta aj benzín.',
        category: 'motor',
        heroImage: {
            src: '/sluzby/vstrekovace-naftovy-motor-ludato-bratislava.webp',
            alt: 'Motorový priestor naftového motora počas servisu v autoservise Ludato Family na Odborárskej, Bratislava Nové Mesto',
        },
        related: ['pocitacova-diagnostika-bratislava', 'zlozita-diagnostika-bratislava', 'turboduchadlo-bratislava', 'vymena-oleja-bratislava'],
        cta: {
            question: 'Motor trhá, dymí alebo ťažko štartuje?',
            subtext: 'Vstrekovače otestujeme na vlastnom testeri a povieme vám, čo treba riešiť.',
            secondaryHref: '/nacenenie?sluzba=vstrekovace',
            secondaryLabel: 'Objednať sa',
        },
    },
    {
        slug: 'kontrola-pred-dovolenkou-bratislava',
        name: 'Kontrola pred dovolenkou',
        h1: 'KONTROLA AUTA PRED DOVOLENKOU BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Kontrola auta pred dovolenkou Bratislava – Nové Mesto | 50 € | Ludato Family Autoservis',
        description:
            'Všeobecná kontrola auta pred dovolenkou alebo dlhou cestou v Bratislave, Novom Meste za 50 €. Brzdy, pneumatiky, kvapaliny, svetlá aj podvozok, aby vás auto nenechalo na ceste.',
        teaser: 'Všeobecná kontrola auta za 50 € pred dovolenkou alebo dlhou cestou do zahraničia.',
        category: 'specialne',
        related: ['servis-klimatizacie-bratislava', 'pneuservis-bratislava', 'brzdy-bratislava', 'vymena-oleja-bratislava'],
        cta: {
            question: 'Chystáte sa na dlhú cestu?',
            subtext: 'Príďte na kontrolu týždeň či dva pred odchodom, nech je čas aj na prípadnú opravu.',
            secondaryHref: '/nacenenie?sluzba=dovolenka',
            secondaryLabel: 'Objednať kontrolu',
        },
    },
    {
        slug: 'ozonova-dezinfekcia-bratislava',
        name: 'Ozónová dezinfekcia',
        h1: 'OZÓNOVÁ DEZINFEKCIA AUTA BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Ozónová dezinfekcia auta Bratislava – Nové Mesto | 30 € | Ludato Family Autoservis',
        description:
            'Ozónová dezinfekcia interiéru auta v Bratislave, Novom Meste za 30 €. Pomáha proti zápachu z cigariet, zvierat, vlhkosti aj z klimatizácie.',
        teaser: 'Ozónová dezinfekcia interiéru za 30 € proti zápachu z cigariet, zvierat a vlhkosti.',
        category: 'komfort',
        related: ['tepovanie-interieru-bratislava', 'servis-klimatizacie-bratislava', 'vymena-oleja-bratislava'],
        cta: {
            question: 'Smrdí vám v aute?',
            subtext: 'Ozón sa dostane aj tam, kam sa s handrou nedostanete. Dezinfekcia stojí 30 €.',
            secondaryHref: '/nacenenie?sluzba=ozon',
            secondaryLabel: 'Objednať dezinfekciu',
        },
    },
    {
        slug: 'tepovanie-interieru-bratislava',
        name: 'Tepovanie interiéru',
        h1: 'TEPOVANIE INTERIÉRU AUTA BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Tepovanie auta Bratislava – Nové Mesto | Cez deň od 50 €, v noci od 80 € | Ludato Family Autoservis',
        description:
            'Tepovanie sedadiel a interiéru auta v Bratislave, Novom Meste. Cez deň od 50 €, v noci od 80 €, čistenie interiéru s vysávaním za 45 €.',
        teaser: 'Tepovanie cez deň od 50 €, v noci od 80 €, čistenie a vysávanie interiéru za 45 €.',
        category: 'komfort',
        related: ['ozonova-dezinfekcia-bratislava', 'servis-klimatizacie-bratislava', 'pneuservis-bratislava'],
        cta: {
            question: 'Potrebuje vaše auto vyčistiť zvnútra?',
            subtext: 'Vytepujeme sedadlá aj koberce, cez deň alebo v noci.',
            secondaryHref: '/nacenenie?sluzba=tepovanie',
            secondaryLabel: 'Objednať tepovanie',
        },
    },
    {
        slug: 'chladenie-kurenie-bratislava',
        name: 'Chladenie a kúrenie',
        h1: 'CHLADIACI SYSTÉM A KÚRENIE BRATISLAVA – NOVÉ MESTO',
        h1Accent: 'BRATISLAVA',
        title: 'Chladiaci systém a kúrenie Bratislava – Nové Mesto | Chladiaca kvapalina, termostat, únik | Ludato Family Autoservis',
        description:
            'Oprava chladiaceho systému a kúrenia v Bratislave, Novom Meste. Výmena chladiacej kvapaliny G12 a G13, hľadanie úniku, termostat, vodné čerpadlo a chladič.',
        teaser: 'Chladiaca kvapalina, hľadanie úniku, termostat, vodné čerpadlo a slabé kúrenie.',
        category: 'motor',
        related: ['rozvody-bratislava', 'pocitacova-diagnostika-bratislava', 'servis-klimatizacie-bratislava', 'odtah-vozidla-bratislava'],
        cta: {
            question: 'Ide vám ručička teploty hore?',
            subtext: 'Prehriatie vie zničiť motor. Zastavte, nechajte ho vychladnúť a zavolajte nám.',
            secondaryHref: '/nacenenie?sluzba=chladenie',
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
