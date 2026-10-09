import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Chladiaci systém udržiava motor v teplote, v ktorej pracuje správne, a zároveň ohrieva vzduch pre kúrenie v kabíne. Kým funguje, nikto si ho nevšíma. Keď začne unikať kvapalina, zasekne sa termostat alebo dosluhuje vodné čerpadlo, motor sa prehrieva alebo v zime nekúri, a z lacnej opravy sa pri prehriatí ľahko stane oprava motora.',
            'V Bratislave, Novom Meste, riešime chladiaci systém a kúrenie: výmenu chladiacej kvapaliny, hľadanie úniku, termostat, vodné čerpadlo, chladič aj hadice. Najprv zistíme, kde je chyba, a cenu opravy vám povieme vopred.',
        ],
    },
    {
        type: 'cta',
        heading: 'Ide vám ručička teploty hore?',
        text: 'Prehriatie motora vie poškodiť tesnenie hlavy aj samotný motor. Ak teplota stúpa, zastavte, nechajte motor vychladnúť a zavolajte nám.',
        points: [
            'Chladiaca kvapalina G12 22 € za 6 l, G13 20 € za 6 l',
            'Diagnostika riadiacej jednotky za 40 €',
            'Odťah nepojazdného auta za 170 €',
        ],
        secondaryHref: '/nacenenie?sluzba=chladenie',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'list',
        heading: 'Čo pri chladení a kúrení riešime',
        items: [
            'Výmena a doplnenie chladiacej kvapaliny',
            'Hľadanie úniku chladiacej kvapaliny',
            'Výmena termostatu',
            'Výmena vodného čerpadla',
            'Výmena chladiča a hadíc chladenia',
            'Slabé alebo žiadne kúrenie v kabíne',
            'Kontrola ventilátora chladiča',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Časti chladiaceho systému a čo sa na nich kazí',
        items: [
            {
                title: 'Chladiaca kvapalina',
                text: 'Okrem chladenia chráni systém pred zamrznutím a koróziou. Časom tieto vlastnosti stráca, preto sa mení podľa intervalu výrobcu. Používame typ, ktorý predpisuje výrobca vášho auta, napríklad G12 alebo G13.',
            },
            {
                title: 'Termostat',
                text: 'Reguluje, kedy kvapalina prúdi do chladiča. Ak sa zasekne zatvorený, motor sa prehrieva. Ak zostane otvorený, motor sa dlho zohrieva, v zime slabo kúri a zvyšuje sa spotreba.',
            },
            {
                title: 'Vodné čerpadlo',
                text: 'Poháňa kvapalinu systémom. Keď dosluhuje, môže z neho kvapkať, hučať alebo prestane dobre čerpať. Pri mnohých motoroch ho poháňa rozvodový remeň, preto sa často mení spolu s [rozvodmi](/sluzby/rozvody-bratislava).',
            },
            {
                title: 'Chladič a hadice',
                text: 'Chladič odvádza teplo do vzduchu, hadice spájajú systém. Starnutím pukajú, spoje povoľujú a začnú presakovať. Malý únik sa časom zväčší.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Ako spoznáte problém s chladením',
        paragraphs: [
            'Najjasnejším signálom je ručička alebo kontrolka teploty, ktorá ide vyššie ako zvyčajne, hlavne v kolóne alebo do kopca. Ďalej sladkastý zápach z motorového priestoru alebo z ventilácie, kaluž pod autom, para spod kapoty a klesajúca hladina kvapaliny v nádržke.',
            'Na problém v chladení upozorní aj kúrenie. Ak v zime fúka len vlažný vzduch, motor sa dlho zohrieva alebo sa teplota počas jazdy mení, chyba môže byť v termostate, vo vzduchu v systéme alebo v nedostatku kvapaliny.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo robiť, keď sa motor prehrieva',
        paragraphs: [
            'Keď teplota stúpa, zapnite naplno kúrenie, odvedie časť tepla z motora. Ak to nepomáha, bezpečne zastavte a vypnite motor. Neotvárajte uzáver chladiacej sústavy na horúcom motore, kvapalina je pod tlakom a môže vás opariť.',
            'S prehriatym motorom ďalej nejazdite. Pár kilometrov navyše vie poškodiť tesnenie hlavy valcov alebo samotný motor. Ak auto nemôže pokračovať, zabezpečíme [odťah](/sluzby/odtah-vozidla-bratislava) priamo k nám.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako postupujeme',
        steps: [
            {
                title: 'Opíšete príznaky',
                text: 'Kedy sa auto prehrieva, či kúri, či ubúda kvapalina a či ste niečo dolievali.',
            },
            {
                title: 'Hľadanie príčiny',
                text: 'Skontrolujeme hladinu a stav kvapaliny, hľadáme únik a overíme termostat, ventilátor a čerpadlo. Ak treba, načítame chyby z riadiacej jednotky.',
            },
            {
                title: 'Cena vopred',
                text: 'Povieme vám, čo treba opraviť a koľko to bude stáť, ešte pred začatím práce.',
            },
            {
                title: 'Oprava a odvzdušnenie',
                text: 'Po oprave systém naplníme správnou kvapalinou a odvzdušníme. Vzduch v systéme je častou príčinou slabého kúrenia.',
            },
            {
                title: 'Test',
                text: 'Motor necháme zohriať a overíme, že teplota drží a kúrenie hreje.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Chladiaca kvapalina: dolievať, alebo meniť',
        paragraphs: [
            'Ak kvapalina ubúda, nestačí ju len dolievať. Niekde uniká a príčinu treba nájsť. Na krátky čas sa v núdzi dá doliať aj voda, no vodou sa kvapalina riedi a stráca ochranu pred zamrznutím aj koróziou. Pri prvej príležitosti treba systém dať do poriadku.',
            'Rôzne typy chladiacich kvapalín sa nemajú miešať bez overenia, že sú kompatibilné. Preto vždy používame typ, ktorý predpisuje výrobca auta. Chladiaca kvapalina G12 stojí 22 € za 6 litrov, G13 20 € za 6 litrov, prácu účtujeme podľa normohodín.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Biely dym z výfuku, ubúdajúca kvapalina bez viditeľného úniku alebo olej s mliečnym povlakom pod uzáverom môžu znamenať poškodené tesnenie hlavy valcov. S takým autom nejazdite a nechajte ho skontrolovať čo najskôr.',
            'Pozor aj na kvapalinu pred zimou. Zriedená kvapalina môže v mraze zamrznúť a poškodiť chladič alebo blok motora. Pred zimou sa oplatí skontrolovať, či kvapalina chráni pred mrazom dostatočne.',
        ],
    },
    {
        type: 'text',
        heading: 'Chladenie v mestskej premávke',
        paragraphs: [
            'Kolóny na Račianskej, Vajnorskej či Trnavskej ceste v letných horúčavách sú pre chladiaci systém skúškou. Auto stojí, vzduch cez chladič neprúdi a všetko závisí od ventilátora. Ak sa auto prehrieva práve v kolóne, podozrenie padá na ventilátor alebo na zanesený chladič.',
            'Klimatizácia a chladenie motora spolu súvisia, obe odvádzajú teplo cez prednú časť auta. Ak klimatizácia nechladí, pozrite si [servis klimatizácie](/sluzby/servis-klimatizacie-bratislava).',
        ],
    },
    {
        type: 'text',
        heading: 'Zahmlené okná a sladký zápach v kabíne',
        paragraphs: [
            'Ak sa vám v aute neustále zahmlievajú okná a cítite sladkastý zápach, môže unikať chladiaca kvapalina z výmenníka kúrenia, teda z malého radiátora pod prístrojovou doskou. Kvapalina sa potom odparuje do kabíny alebo vlhne koberec pred spolujazdcom.',
            'Tento problém neodkladajte. Pary chladiacej kvapaliny nepatria do kabíny a zahmlené okná zhoršujú výhľad. Pri hľadaní príčiny skontrolujeme aj to, či nevlhne koberec.',
        ],
    },
    {
        type: 'text',
        heading: 'Ventilátor chladiča',
        paragraphs: [
            'Keď auto stojí alebo ide pomaly, vzduch cez chladič neprúdi sám a chladenie zabezpečuje ventilátor. Ak sa nezapína, motor sa prehrieva hlavne v kolóne, kým pri rýchlej jazde je teplota v poriadku. Príčinou môže byť samotný ventilátor, jeho ovládanie alebo snímač teploty.',
        ],
    },
    {
        type: 'text',
        heading: 'Pred zimou a pred letom',
        paragraphs: [
            'Pred zimou overte, či chladiaca kvapalina chráni pred mrazom dostatočne a či kúrenie hreje, ako má. Pred letom sa oplatí skontrolovať hladinu kvapaliny, stav hadíc a funkciu ventilátora, keďže v horúčavách a kolónach je chladiaci systém zaťažený najviac.',
            'Kontrolu chladenia môžete spojiť napríklad so [sezónnym prezutím](/sluzby/pneuservis-bratislava) alebo s [kontrolou pred dovolenkou](/sluzby/kontrola-pred-dovolenkou-bratislava). Malý únik zachytený včas je lacná oprava.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['PREVÁDZKOVÉ KVAPALINY', 'KONTROLY VOZIDLA', 'NORMOHODINY'],
        only: [
            'Chladiaca kvapalina G12',
            'Chladiaca kvapalina G13',
            'Diagnostika riadiacej jednotky',
            'Stredná práca – vyžadujúca viac času alebo čiastočnú demontáž',
            'Ťažká práca – náročné zásahy (rozvody, spojka, turbo, EGR, DPF, opravy motora, elektro, demontáž agregátov)',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Koľko stojí výmena chladiacej kvapaliny?',
                a: 'Kvapalina G12 stojí 22 € za 6 litrov, G13 20 € za 6 litrov. Prácu účtujeme podľa normohodín a celkovú cenu vám povieme vopred.',
            },
            {
                q: 'Prečo mi v aute nekúri?',
                a: 'Najčastejšie kvôli zaseknutému termostatu, vzduchu v systéme alebo nedostatku kvapaliny. Príčinu nájdeme kontrolou.',
            },
            {
                q: 'Môžem doliať vodu namiesto kvapaliny?',
                a: 'V núdzi áno, no voda riedi kvapalinu a znižuje ochranu pred mrazom a koróziou. Systém treba potom dať do poriadku.',
            },
            {
                q: 'Čo robiť, keď sa motor prehreje?',
                a: 'Bezpečne zastavte, vypnite motor a neotvárajte uzáver na horúcom motore. S prehriatym autom nejazdite a zavolajte nám.',
            },
            {
                q: 'Ako často meniť chladiacu kvapalinu?',
                a: 'Podľa intervalu výrobcu vášho auta. Pri servise vám povieme, či je kvapalina ešte v poriadku.',
            },
            {
                q: 'Mením vodné čerpadlo spolu s rozvodmi?',
                a: 'Pri motoroch, kde čerpadlo poháňa rozvodový remeň, sa to oplatí. Práca sa prekrýva a ušetríte.',
            },
            {
                q: 'Odtiahnete auto, ktoré sa prehrialo?',
                a: 'Áno, odťah nepojazdného auta stojí 170 €.',
            },
            {
                q: 'Prečo sa mi zahmlievajú okná a cítim sladký zápach?',
                a: 'Môže unikať chladiaca kvapalina z výmenníka kúrenia pod prístrojovou doskou. Nechajte to skontrolovať čo najskôr.',
            },
            {
                q: 'Prečo sa auto prehrieva len v kolóne?',
                a: 'Najčastejšie nefunguje ventilátor chladiča alebo je chladič zanesený. Pri jazde to nevidno, lebo vzduch chladí sám.',
            },
            {
                q: 'Skontrolujete aj ochranu pred mrazom?',
                a: 'Áno, overíme, či chladiaca kvapalina chráni pred mrazom dostatočne, a podľa potreby ju vymeníme.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na 0944 236 257 a opíšte príznaky. Dohodneme termín na kontrolu.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Sme na Odborárskej 52 v Bratislave, Novom Meste. Autom k nám chodia zákazníci z celej Bratislavy aj okolia, prehľad mestských častí s časom dojazdu nájdete na stránke [Kde pôsobíme](/kde-posobime). Ak nemáte čas prísť, auto si vyzdvihneme v rámci Bratislavy a okolia za 50 €.',
        ],
    },
];

export default content;
