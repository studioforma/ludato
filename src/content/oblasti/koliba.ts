import type { ServiceContent } from '../sluzby/types';

// Rewritten 11. 11. 2026 (CoS review 24. 10.: 5/10, template text, made-up
// routes). Only verifiable facts: our address, that Koliba is part of the
// Nové Mesto district like the shop, and services and prices from the cenník.
// No routes, streets, landmarks or drive times.
const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Koliba patrí do mestskej časti Bratislava-Nové Mesto, rovnako ako náš servis na Odborárskej 52. Autoservis a pneuservis pre Kolibu tak máte v tej istej mestskej časti.',
            'Ludato Family Autoservis a Pneuservis je rodinný servis pre autá všetkých značiek. Pre Kolibu najčastejšie riešime spojku a dvojhmotový zotrvačník, brzdy s brzdovou kvapalinou, zimné pneumatiky a podvozok. Cenu opravy poznáte ešte pred začatím práce.',
        ],
    },
    {
        type: 'cta',
        heading: 'Spojka, brzdy alebo prezutie?',
        text: 'Zavolajte a dohodneme termín. Po auto si na Kolibu vieme aj prísť.',
        points: [
            'Vyzdvihnutie auta v Bratislave a okolí za 50 €',
            'Výmena brzdovej kvapaliny za 45 €',
            'Kompletné prezutie od 45 € vrátane vyváženia',
        ],
        secondaryHref: '/nacenenie?sluzba=pickup',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'text',
        heading: 'Spojka a dvojhmotový zotrvačník',
        paragraphs: [
            'Koliba leží na svahu nad mestom a rozjazd do kopca je pre spojku najväčšia záťaž. Opotrebovanú spojku spoznáte podľa toho, že motor zvyšuje otáčky, no auto nezrýchľuje primerane, pedál zaberá až vysoko alebo pri rozjazde cítiť zápach spáleného obloženia.',
            'Pri mnohých autách sa spolu so spojkou kontroluje aj dvojhmotový zotrvačník. Výmenu spojky účtujeme ako náročný zásah podľa normohodín, 45 € za hodinu, a celkovú cenu vrátane dielov vám povieme vopred podľa vášho auta. Viac v časti [prevodovka a spojka](/sluzby/prevodovka-spojka-bratislava).',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Brzdy, pneumatiky a podvozok pre Kolibu',
        items: [
            {
                title: 'Brzdová kvapalina',
                text: 'Kvapalina časom nasáva vlhkosť a jej bod varu klesá. Pri dlhšom brzdení v klesaní sa preto stará kvapalina prehreje skôr. Výmena brzdovej kvapaliny stojí 45 €.',
            },
            {
                title: 'Kotúče a platničky',
                text: 'Kontrola bŕzd stojí 35 €, výmena predných platničiek 45 € a predných kotúčov s platničkami 85 €. Pri kontrole prejdeme obe nápravy. Viac v časti [brzdy](/sluzby/brzdy-bratislava).',
            },
            {
                title: 'Zimné pneumatiky',
                text: 'Kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov. Nové pneumatiky vieme dodať a rovno namontovať, druhú sadu [uskladníme za 40 € na sezónu](/sluzby/uskladnenie-pneumatik-bratislava). Viac v časti [pneuservis](/sluzby/pneuservis-bratislava).',
            },
            {
                title: 'Podvozok',
                text: 'Klepanie pri prejazde nerovností alebo hojdanie auta sú signály opotrebovaných tlmičov či ramien. Kontrola podvozku stojí 30 €. Viac v časti [podvozok](/sluzby/podvozok-bratislava).',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Ako šetriť brzdy a spojku v kopci',
        paragraphs: [
            'Pri dlhom zjazde nebrzdite neustále, ale využite brzdenie motorom na nižšom prevodovom stupni, brzdy sa tak menej prehrievajú. Pri rozjazde do kopca nedržte auto na spojke, použite ručnú brzdu. Pri parkovaní v kopci zabrzdite, zaraďte prevodový stupeň, pri automate polohu P, a natočte kolesá k obrubníku.',
        ],
    },
    {
        type: 'text',
        heading: 'Náhradné auto a odťah',
        paragraphs: [
            'Pri spojke je auto v servise dlhšie ako pri bežnej údržbe. Aby ste neboli bez auta, požičiame vám náhradné za 35 € na deň (dostupnosť si overte pri objednaní). Ak oprava presiahne 1000 €, náhradné auto máte zadarmo, a pri poistnej udalosti ho platí poisťovňa.',
            'Ak auto s dosluhujúcou spojkou už nejde, odťah k nám stojí 170 €. Pred opravou vám povieme, čo sme našli a koľko to bude stáť, bez vášho súhlasu nič nemeníme.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky: autoservis pre Kolibu',
        items: [
            {
                q: 'Ste v tej istej mestskej časti ako Koliba?',
                a: 'Áno. Koliba aj Odborárska 52 sú v Novom Meste.',
            },
            {
                q: 'Robíte aj výmenu spojky a dvojhmotového zotrvačníka?',
                a: 'Áno. Účtujeme ich podľa normohodín za náročné zásahy, 45 € za hodinu, a celkovú cenu vám povieme vopred.',
            },
            {
                q: 'Ako často meniť brzdovú kvapalinu?',
                a: 'Podľa predpisu výrobcu, zvyčajne každé dva roky. Výmena stojí 45 €.',
            },
            {
                q: 'Musím auto priviezť sám?',
                a: 'Nemusíte. Po auto si na Kolibu prídeme, vyzdvihnutie stojí 50 €.',
            },
            {
                q: 'Odtiahnete auto, ktoré nenaštartuje?',
                a: 'Áno, odťah nepojazdného auta stojí 170 €.',
            },
            {
                q: 'Koľko bude stáť výmena spojky na mojom aute?',
                a: 'Závisí od auta a dielov. Napíšte nám typ auta cez formulár na nacenenie alebo zavolajte na 0944 236 257 a cenu vám povieme vopred.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Sme na Odborárskej 52 v Bratislave, Novom Meste. Prehľad všetkých mestských častí nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
];

export default content;
