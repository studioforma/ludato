import type { ServiceContent } from '../sluzby/types';

// Rewritten 11. 11. 2026 (CoS review 24. 10.: 4/10, template text, made-up
// routes). Only verifiable facts: our address, that Kramáre are part of the
// Nové Mesto district like the shop, and services and prices from the cenník.
// No routes, streets, landmarks or drive times.
const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Kramáre patria do mestskej časti Bratislava-Nové Mesto, rovnako ako náš servis na Odborárskej 52. Ak hľadáte autoservis alebo pneuservis pre Kramáre, nemusíte s autom cez celé mesto.',
            'Ludato Family Autoservis a Pneuservis je rodinný servis pre autá všetkých značiek. Pre Kramáre najčastejšie riešime štyri veci: brzdy, podvozok, výmenu oleja a sezónne prezutie. Pred každou opravou vám povieme, čo treba urobiť a koľko to bude stáť.',
        ],
    },
    {
        type: 'cta',
        heading: 'Nechce sa vám do servisu?',
        text: 'Po auto si na Kramáre prídeme. Počas dlhšej opravy môžete jazdiť náhradným autom.',
        points: [
            'Vyzdvihnutie auta v Bratislave a okolí za 50 €',
            'Náhradné vozidlo za 35 € na deň',
            'Kontrola bŕzd za 35 €',
        ],
        secondaryHref: '/nacenenie?sluzba=pickup',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'breakdown',
        heading: 'Brzdy, podvozok, olej a prezutie pre Kramáre',
        items: [
            {
                title: 'Brzdy',
                text: 'Kramáre ležia na svahu nad mestom, takže časť jazdy je vždy z kopca. Pri brzdení v klesaní sa kotúče a platničky zahrievajú viac ako na rovine. Kontrola bŕzd stojí 35 €, výmena predných platničiek 45 € a predných kotúčov s platničkami 85 €. Viac v časti [brzdy](/sluzby/brzdy-bratislava).',
            },
            {
                title: 'Podvozok',
                text: 'Klepanie pri prejazde nerovností, hojdanie auta alebo volant, ktorý nestojí rovno, sú signály opotrebovaného podvozku. Kontrola podvozku stojí 30 € a po výmene dielov nastavíme aj geometriu. Viac v časti [podvozok](/sluzby/podvozok-bratislava).',
            },
            {
                title: 'Výmena oleja',
                text: 'Výmena oleja s olejovým filtrom stojí 35 €, so vzduchovým filtrom 45 € a s kabínovým filtrom 55 €. Olej vyberáme podľa špecifikácie výrobcu vášho motora. Viac v časti [výmena oleja](/sluzby/vymena-oleja-bratislava).',
            },
            {
                title: 'Prezutie',
                text: 'Kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov. Ak nemáte kam dať druhú sadu, [uskladníme ju za 40 € na sezónu](/sluzby/uskladnenie-pneumatik-bratislava). Viac v časti [pneuservis](/sluzby/pneuservis-bratislava).',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Brzdy na Kramároch: kedy prísť',
        paragraphs: [
            'Na jazdu z kopca sú najcitlivejšie brzdy. Prísť by ste mali, keď brzdy pískajú alebo škrípu, pedál je mäkší ako zvyčajne, auto pri brzdení ťahá do strany alebo cítite vibrácie vo volante. Vibrácie pri brzdení často znamenajú prehriate alebo nerovnomerne opotrebované kotúče.',
            'Brzdovú kvapalinu meníme podľa predpisu výrobcu, výmena stojí 45 €. Stará kvapalina nasáva vlhkosť a pri dlhšom brzdení v klesaní sa skôr prehreje.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Zavoláte alebo vyplníte formulár',
                text: 'Opíšete, čo s autom potrebujete, a dohodneme termín.',
            },
            {
                title: 'Privezieme alebo vyzdvihneme auto',
                text: 'Auto k nám na Odborársku privezete sami, alebo si poň na Kramáre prídeme za 50 €.',
            },
            {
                title: 'Kontrola a cena vopred',
                text: 'Auto skontrolujeme a povieme vám, čo treba urobiť a koľko to bude stáť. Bez vášho súhlasu nič nemeníme.',
            },
            {
                title: 'Oprava a odovzdanie',
                text: 'Po oprave vám dáme vedieť a vysvetlíme, čo sme robili.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Keď auto nejde alebo oprava trvá dlhšie',
        paragraphs: [
            'Nepojazdné auto odtiahneme za 170 €. Ak oprava trvá dlhšie, náhradné vozidlo stojí 35 € na deň, pri servise nad 1000 € je zadarmo a pri poistnej udalosti ho hradí poisťovňa. Dostupnosť si overte pri objednaní.',
            'Otvorené máme od pondelka do štvrtka 9:00 až 19:00 a v piatok 7:00 až 16:00.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky: autoservis pre Kramáre',
        items: [
            {
                q: 'Kde presne ste?',
                a: 'Na Odborárskej 52 v Bratislave, v mestskej časti Nové Mesto, do ktorej patria aj Kramáre.',
            },
            {
                q: 'Prídete si po auto na Kramáre?',
                a: 'Áno, vyzdvihnutie auta v Bratislave a okolí stojí 50 €.',
            },
            {
                q: 'Koľko stojí kontrola a výmena bŕzd?',
                a: 'Kontrola bŕzd stojí 35 €, výmena predných platničiek 45 € a predných kotúčov s platničkami 85 €.',
            },
            {
                q: 'Koľko stojí prezutie?',
                a: 'Kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov.',
            },
            {
                q: 'Môžem nechať auto u vás a vyzdvihnúť si ho, keď bude hotové?',
                a: 'Áno. Keď je auto pripravené, ozveme sa vám.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na 0944 236 257 alebo vyplňte formulár na nacenenie.',
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
