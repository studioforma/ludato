import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Vstrekovače dávkujú palivo do motora v presnom množstve a v presnom okamihu, tisíckrát za minútu. Keď jeden z nich začne dávkovať priveľa, primálo alebo nepresne, motor to spozná hneď: horšie štartuje, trasie sa na voľnobehu, stráca výkon, dymí a viac míňa. Pri naftových motoroch môže chybný vstrekovač časom poškodiť aj ďalšie časti motora.',
            'V Bratislave, Novom Meste, riešime vstrekovače na naftových aj benzínových motoroch. Máme vlastný tester vstrekovačov, takže ich stav overíme priamo u nás a nemusíme ich posielať partnerovi. Vstrekovače vymeníme a nakódujeme do riadiacej jednotky, aby motor fungoval tak, ako má.',
        ],
    },
    {
        type: 'cta',
        heading: 'Motor trhá, dymí alebo ťažko štartuje?',
        text: 'Chybný vstrekovač zvyšuje spotrebu a pri naftovom motore môže poškodiť ďalšie diely. Nečakajte, kým sa z jedného vstrekovača stane oprava motora.',
        points: [
            'Test vstrekovačov na vlastnom testeri',
            'Výmena a kódovanie do riadiacej jednotky',
            'Diagnostika riadiacej jednotky za 40 €',
        ],
        secondaryHref: '/nacenenie?sluzba=vstrekovace',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'list',
        heading: 'Čo pri vstrekovačoch robíme',
        items: [
            'Diagnostika a načítanie chýb z riadiacej jednotky motora',
            'Testovanie vstrekovačov na vlastnom testeri',
            'Výmena vstrekovačov',
            'Kódovanie nových vstrekovačov do riadiacej jednotky',
            'Kontrola tesnení a netesností v okolí vstrekovačov',
            'Kontrola súvisiacich častí palivovej sústavy',
            'Naftové aj benzínové motory',
        ],
    },
    {
        type: 'text',
        heading: 'Ako spoznáte problém so vstrekovačmi',
        paragraphs: [
            'Typickým príznakom je zhoršené štartovanie, hlavne za studena, keď motor potrebuje viac pokusov alebo sa po naštartovaní chvíľu trasie. Ďalej nepravidelný chod na voľnobehu, cukanie pri rozbehu, strata výkonu a vyššia spotreba paliva bez zjavného dôvodu.',
            'Pri naftových motoroch je častým signálom dym z výfuku, najmä čierny pri zrýchľovaní, a hlučnejší, tvrdší chod motora. Často sa rozsvieti kontrolka motora a riadiaca jednotka uloží chybu súvisiacu s dávkovaním paliva alebo s konkrétnym valcom. Pri benzínových motoroch sa chybný vstrekovač prejaví najmä vynechávaním a nepravidelným chodom.',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Čo všetko pri vstrekovačoch overujeme',
        items: [
            {
                title: 'Načítanie chýb',
                text: 'Začíname [počítačovou diagnostikou](/sluzby/pocitacova-diagnostika-bratislava). Riadiaca jednotka motora sleduje, ako jednotlivé valce pracujú, a ak niektorý vybočuje, uloží chybu. Tá nám povie, kam sa pozrieť, ale sama osebe ešte nie je diagnóza. Rovnakú chybu môže spôsobiť vstrekovač aj niečo úplne iné.',
            },
            {
                title: 'Test na vlastnom testeri',
                text: 'Na testeri overíme, ako vstrekovač pracuje: či dávkuje správne a či rozprašuje palivo tak, ako má. Vďaka tomu nemeníme vstrekovače naslepo a vieme, ktorý konkrétny kus je v poriadku a ktorý nie. Keďže tester máme vlastný, nečakáme na výsledky od partnera.',
            },
            {
                title: 'Výmena vstrekovača',
                text: 'Ak je vstrekovač chybný, vymeníme ho. Pri výmene meníme aj tesnenia, ktoré sa pri demontáži menia vždy, a dbáme na čistotu, lebo do palivovej sústavy sa nesmie dostať ani drobná nečistota.',
            },
            {
                title: 'Kódovanie do riadiacej jednotky',
                text: 'Pri mnohých moderných motoroch nestačí vstrekovač len namontovať. Každý kus má svoje výrobné hodnoty a riadiaca jednotka ich musí poznať, aby ho vedela presne ovládať. Preto nové vstrekovače kódujeme do riadiacej jednotky. Bez toho môže motor ísť horšie než pred výmenou.',
            },
        ],
    },
    {
        type: 'caseStudy',
        heading: 'Prípad z našej dielne',
        vehicle: 'Škoda Rapid, vstrekovače ako súčasť hľadania poruchy',
        paragraphs: [
            'Na Škode Rapid, ktorá k nám prišla s poruchou, ktorú sa dlho nedarilo vyriešiť, boli vstrekovače jedným z prvých podozrivých. Mali za sebou výmenu a my sme potrebovali vedieť, či sú v poriadku, skôr než sa pohneme ďalej.',
            'Skontrolovali sme, že vstrekovače sú správne nakódované, a otestovali sme ich. Testovanie potvrdilo, že palivo do motora rozprašujú v poriadku. Vďaka tomu sme ich mohli s istotou vylúčiť a zamerať sa inam. Skutočnou príčinou bol nakoniec skrat v kabeláži, celý prípad opisujeme na stránke [zložitá diagnostika](/sluzby/zlozita-diagnostika-bratislava).',
        ],
        outcomes: [
            'Kontrola kódovania vstrekovačov',
            'Testovanie vstrekovačov na vlastnom testeri',
            'Vylúčenie vstrekovačov ako príčiny poruchy',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako postupujeme',
        steps: [
            {
                title: 'Diagnostika',
                text: 'Načítame chyby a pozrieme sa na hodnoty, ktoré riadiaca jednotka zaznamenáva pri jednotlivých valcoch.',
            },
            {
                title: 'Test vstrekovačov',
                text: 'Podozrivé vstrekovače otestujeme na vlastnom testeri a zistíme, ktoré sú v poriadku a ktoré nie.',
            },
            {
                title: 'Cena vopred',
                text: 'Povieme vám, ktoré vstrekovače treba meniť a koľko to bude stáť, ešte predtým, ako niečo objednáme.',
            },
            {
                title: 'Výmena a kódovanie',
                text: 'Vstrekovače vymeníme s novými tesneniami a nakódujeme ich do riadiacej jednotky.',
            },
            {
                title: 'Kontrola po oprave',
                text: 'Po oprave vymažeme chyby, auto otestujeme a overíme, že motor beží plynulo a nehlási nič nové.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo nemeníme vstrekovače naslepo',
        paragraphs: [
            'Vstrekovače nie sú lacný diel a na niektorých motoroch sú štyri alebo viac. Meniť všetky len preto, že motor ide zle, je drahé a často zbytočné. Príznaky, ktoré vyzerajú ako chybný vstrekovač, môže spôsobiť aj zanesený palivový filter, netesnosť v saní, problém so zapaľovaním pri benzínovom motore alebo chyba v elektroinštalácii.',
            'Preto najprv testujeme. Až keď vieme, ktorý vstrekovač je naozaj chybný, navrhneme výmenu. A ak test ukáže, že vstrekovače sú v poriadku, pokračujeme v hľadaní skutočnej príčiny namiesto toho, aby sme vám vymenili drahý diel, ktorý nič nevyrieši.',
        ],
    },
    {
        type: 'text',
        heading: 'Nafta a benzín: v čom je rozdiel',
        paragraphs: [
            'Naftové motory pracujú s veľmi vysokým tlakom paliva a vstrekovače musia dávkovať aj niekoľko malých dávok počas jedného cyklu. Sú preto citlivé na kvalitu nafty a na opotrebenie, a ich porucha sa často prejaví dymom, tvrdým chodom alebo stratou výkonu. Benzínové motory s priamym vstrekovaním majú tiež vysoké tlaky, staršie benzínové motory vstrekujú palivo do sania pri nižšom tlaku.',
            'Postup je však v oboch prípadoch rovnaký: najprv zistiť, či je chyba naozaj vo vstrekovači, potom ho otestovať a až potom meniť. Pri benzínových motoroch overujeme aj zapaľovanie, lebo vynechávanie valca môže spôsobiť sviečka alebo cievka rovnako ako vstrekovač.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako vstrekovače chrániť',
        paragraphs: [
            'Najväčším nepriateľom vstrekovačov je nekvalitné alebo znečistené palivo. Tankujte na overených čerpacích staniciach a nejazdite dlhodobo na rezervu, keď sa môžu z nádrže nasať usadeniny. Pravidelne meňte palivový filter, ktorý je súčasťou nášho [kompletného servisu pri výmene oleja](/sluzby/vymena-oleja-bratislava).',
            'Pri naftových motoroch sa vstrekovačom darí lepšie, keď motor pravidelne dostane poriadne zabrať, napríklad pri dlhšej jazde po diaľnici. Prevažne krátke trasy po meste, kde motor nedosiahne prevádzkovú teplotu, prispievajú k usadzovaniu karbónu.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'S chybným vstrekovačom nejazdite dlho. Pri naftových motoroch môže vstrekovač, ktorý dávkuje priveľa alebo rozprašuje zle, zaťažovať valec, piest a [turbodúchadlo](/sluzby/turboduchadlo-bratislava) a zanášať filter pevných častíc. Pri benzínových motoroch môže nespálené palivo poškodiť katalyzátor.',
            'Ak niekto navrhne vymeniť všetky vstrekovače bez testu, opýtajte sa, ako vie, že sú chybné. A po výmene sa uistite, že boli nové vstrekovače nakódované. Bez kódovania nemusí motor ísť lepšie, aj keď sú diely nové.',
        ],
    },
    {
        type: 'text',
        heading: 'Vstrekovače a jazda po Bratislave',
        paragraphs: [
            'Väčšina našich zákazníkov jazdí prevažne po meste, cez Račiansku, Vajnorskú alebo Trnavskú cestu, v kolónach a na krátke vzdialenosti. Pre vstrekovače, hlavne pri naftových motoroch, to nie je ideálne. Ak vaše auto začalo horšie štartovať alebo viac míňať, nečakajte na rozsvietenú kontrolku a príďte na kontrolu skôr.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['KONTROLY VOZIDLA', 'NORMOHODINY'],
        only: [
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
                q: 'Robíte vstrekovače na benzínových aj naftových autách?',
                a: 'Áno, vstrekovače riešime na naftových aj benzínových motoroch.',
            },
            {
                q: 'Viete zistiť, ktorý vstrekovač je chybný?',
                a: 'Áno. Máme vlastný tester vstrekovačov, takže ich otestujeme priamo u nás a zistíme, ktorý pracuje správne a ktorý nie.',
            },
            {
                q: 'Treba meniť všetky vstrekovače naraz?',
                a: 'Nie vždy. Najprv ich otestujeme a odporučíme výmenu len tých, ktoré sú naozaj chybné. Ak by výmena všetkých dávala zmysel, vysvetlíme prečo.',
            },
            {
                q: 'Čo je kódovanie vstrekovačov?',
                a: 'Každý vstrekovač má výrobné hodnoty, ktoré musí poznať riadiaca jednotka motora, aby ho presne ovládala. Kódovaním ich do jednotky zapíšeme. Pri mnohých moderných motoroch je to nevyhnutná súčasť výmeny.',
            },
            {
                q: 'Môžem jazdiť s chybným vstrekovačom?',
                a: 'Neodporúčame to odkladať. Chybný vstrekovač zvyšuje spotrebu a pri naftovom motore môže zaťažovať ďalšie diely motora aj filter pevných častíc.',
            },
            {
                q: 'Koľko stojí výmena vstrekovača?',
                a: 'Závisí od motora a typu vstrekovača. Diagnostika riadiacej jednotky stojí 40 €, prácu účtujeme podľa normohodín a celkovú cenu vám povieme vopred.',
            },
            {
                q: 'Posielate vstrekovače na test niekam inam?',
                a: 'Nie, tester máme vlastný a vstrekovače testujeme priamo v našej dielni.',
            },
            {
                q: 'Prečo auto ide zle aj po výmene vstrekovačov?',
                a: 'Buď nové vstrekovače neboli nakódované, alebo chyba nebola vo vstrekovačoch. V takom prípade hľadáme skutočnú príčinu, napríklad v rámci zložitej diagnostiky.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na 0944 236 257 a opíšte, ako sa auto správa. Dohodneme termín na diagnostiku a test vstrekovačov.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Sme na Odborárskej 52 v Bratislave, Novom Meste. Prehľad mestských častí, odkiaľ k nám zákazníci chodia, aj s orientačným časom dojazdu, nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
];

export default content;
