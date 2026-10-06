import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Kontrolka svieti znova, hoci ste už boli v servise dvakrát. Vymenil sa diel, ktorý označila diagnostika, chyba sa vymazala a po pár dňoch je späť. Takto k nám prichádza veľa zákazníkov a skoro vždy platí to isté: chybový kód ukázal, kde sa problém prejavuje, no nie to, čo ho spôsobuje.',
            'V Bratislave, Novom Meste, sa špecializujeme práve na takéto poruchy. Keď iný servis chybu nenašiel alebo sa oprava nevydržala, hľadáme skutočnú príčinu, aj keď to znamená prejsť celý systém krok za krokom, od riadiacej jednotky cez snímače až po jednotlivé vodiče.',
        ],
    },
    {
        type: 'cta',
        heading: 'Vracia sa vám tá istá porucha?',
        text: 'Každé ďalšie skúšanie dielov stojí peniaze a porucha medzitým môže poškodiť turbo či katalyzátor. Nájdeme skutočnú príčinu.',
        points: [
            'Diagnostika riadiacej jednotky za 40 €',
            'Meranie snímačov a kabeláže priamo na aute',
            'Vlastný tester vstrekovačov',
        ],
        secondaryHref: '/nacenenie?sluzba=zlozita-diagnostika',
        secondaryLabel: 'Objednať diagnostiku',
    },
    {
        type: 'list',
        heading: 'Čo pri zložitej diagnostike robíme',
        items: [
            'Načítanie chýb a živých hodnôt zo všetkých riadiacich jednotiek',
            'Porovnanie nameraných hodnôt s tým, čo auto reálne robí',
            'Meranie snímačov, akčných členov a kabeláže priamo na aute',
            'Hľadanie skratov, prerušení a zlých kontaktov v kabeláži',
            'Testovanie vstrekovačov na vlastnom testeri',
            'Skúšobná jazda za podmienok, pri ktorých sa porucha objavuje',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo chybový kód nie je diagnóza',
        paragraphs: [
            'Riadiaca jednotka vidí svet len cez snímače. Keď hodnota z nejakého snímača nesedí, uloží chybu k tomu systému, kde nezrovnalosť zistila. Príčina však môže byť úplne inde: v snímači, ktorý posiela zlé údaje, v kabeláži, ktorá signál skresľuje, alebo v inej časti motora, ktorá hodnotu ovplyvňuje.',
            'Preto je chybový kód pre nás začiatok hľadania, nie jeho koniec. Bežná [počítačová diagnostika](/sluzby/pocitacova-diagnostika-bratislava) stačí na väčšinu porúch. Pri tých, ktoré sa vracajú, však treba ísť ďalej a overiť, či to, čo hlási auto, zodpovedá skutočnosti.',
        ],
    },
    {
        type: 'caseStudy',
        heading: 'Prípad z našej dielne',
        vehicle: 'Škoda Rapid, porucha, ktorá sa stále vracala',
        paragraphs: [
            'Toto auto bolo u nás v servise viac ako mesiac. Diagnostika pôvodne hlásila problém s regulátorom turbodúchadla, preto sme [turbodúchadlo](/sluzby/turboduchadlo-bratislava) aj s regulátorom zrepasovali. Kontrolka žhavenia po oprave zhasla, no po čase sa rozsvietila znova.',
            'Hľadali sme ďalej. Skontrolovali sme vstrekovače, ktoré boli menené a správne nakódované, a testovanie potvrdilo, že naftu rozprašujú do motora v poriadku. Až potom sme sa zamerali na elektrickú časť. Detailnou kontrolou sme našli poškodenú kabeláž vedúcu k turbodúchadlu, v ktorej dochádzalo ku skratu v oblasti snímača chladenia turba.',
            'Kabeláž sme opravili, skrat odstránili a auto kompletne otestovali. Škoda Rapid je po oprave opäť v poriadku. Keby sme sa zastavili pri prvom kóde, zákazník by mal zrepasované turbo a o pár týždňov rovnakú kontrolku.',
        ],
        outcomes: [
            'Repas turbodúchadla a regulátora',
            'Kontrola a kódovanie vstrekovačov',
            'Diagnostika elektrickej sústavy',
            'Oprava poškodenej kabeláže a odstránenie skratu',
            'Záverečná kontrola vozidla',
        ],
    },
    {
        type: 'image',
        src: '/sluzby/zlozita-diagnostika-turbo-detail-ludato-bratislava.webp',
        alt: 'Detail oblasti turbodúchadla Škody Rapid počas hľadania skratu v kabeláži v autoservise Ludato Family, Bratislava Nové Mesto',
        caption: 'Oblasť turbodúchadla, kde sme hľadali príčinu opakovanej chyby.',
    },
    {
        type: 'breakdown',
        heading: 'Najčastejšie skryté príčiny',
        items: [
            {
                title: 'Kabeláž a konektory',
                text: 'Vodiče v motorovom priestore trpia teplom, vibráciami a vlhkosťou. Prasknutá izolácia, zoxidovaný konektor alebo vodič odretý o hranu dielu vytvoria skrat alebo prerušenie, ktoré sa prejaví len niekedy, napríklad za tepla alebo pri otrasoch.',
            },
            {
                title: 'Snímače, ktoré klamú',
                text: 'Snímač, ktorý úplne zlyhá, sa nájde ľahko. Horší je ten, ktorý posiela hodnoty mierne mimo skutočnosti. Riadiaca jednotka mu verí a upravuje chod motora podľa zlých údajov, pričom chybu uloží k úplne inému systému.',
            },
            {
                title: 'Vstrekovače',
                text: 'Opotrebovaný vstrekovač zhorší spaľovanie a ovplyvní hodnoty, ktoré riadiaca jednotka vyhodnocuje pri turbe, emisiách aj chode motora. Máme vlastný tester vstrekovačov, takže ich stav vieme overiť priamo u nás.',
            },
            {
                title: 'Netesnosti v sání a výfuku',
                text: 'Malá netesnosť v sacom potrubí alebo v prívode vzduchu k turbu mení tlaky a prietoky, s ktorými riadiaca jednotka počíta. Výsledkom sú chyby turba, zmesi alebo výkonu, hoci samotné diely sú v poriadku.',
            },
            {
                title: 'Uzemnenie a napájanie',
                text: 'Slabé uzemnenie alebo nestabilné napätie spôsobí chyby vo viacerých systémoch naraz. Na prvý pohľad to vyzerá ako niekoľko rôznych porúch, v skutočnosti ide o jednu spoločnú príčinu.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako postupujeme',
        steps: [
            {
                title: 'Rozhovor a história',
                text: 'Zistíme, kedy a za akých podmienok sa porucha objavuje, čo už bolo menené a čo ukázali predchádzajúce diagnostiky.',
            },
            {
                title: 'Načítanie a živé dáta',
                text: 'Prečítame chyby zo všetkých jednotiek a sledujeme živé hodnoty, ideálne vo chvíli, keď sa porucha prejavuje.',
            },
            {
                title: 'Overenie merania na aute',
                text: 'Hodnoty, ktoré hlási auto, overíme priamym meraním snímačov, akčných členov a kabeláže.',
            },
            {
                title: 'Oprava a skúška',
                text: 'Opravíme skutočnú príčinu a auto otestujeme za rovnakých podmienok, pri ktorých sa porucha objavovala.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Poruchy, ktoré sa neprejavia vždy',
        paragraphs: [
            'Najťažšie sú poruchy, ktoré prídu a odídu. Auto v servise ide bez problémov, doma sa kontrolka rozsvieti znova. Pri takých poruchách je kľúčové zachytiť podmienky, pri ktorých vznikajú: teplotu motora, rýchlosť, zaťaženie, počasie, dokonca aj to, či auto stálo cez noc vonku.',
            'Preto sa pri preberaní auta pýtame na veci, ktoré sa môžu zdať nepodstatné. Každý detail zužuje okruh možných príčin a skracuje hľadanie. Niekedy pomôže aj dlhšia skúšobná jazda, počas ktorej sledujeme živé hodnoty priamo za jazdy.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo neodporúčame skúšať diely',
        paragraphs: [
            'Vymeniť diel, ktorý označila diagnostika, a počkať, či to pomôže, je lákavé, lebo to vyzerá ako rýchle riešenie. Pri zložitých poruchách však takto vznikajú účty za diely, ktoré boli v poriadku, a problém ostáva.',
            'My radšej strávime čas meraním a overovaním, než aby sme menili diely naslepo. Pred každou väčšou opravou vám povieme, čo sme našli, prečo si myslíme, že je to príčina, a koľko bude oprava stáť.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo od vás potrebujeme vedieť',
        paragraphs: [
            'Pomôže nám, keď si zapíšete, kedy sa porucha objavila, či za studena alebo za tepla, pri akej rýchlosti a či sa opakuje. Ak máte doklady z predchádzajúcich servisov alebo výpisy chýb, prineste ich. Ušetríte tak čas aj peniaze, pretože nebudeme opakovať to, čo už bolo overené.',
            'Užitočné je aj to, čo ste si na aute všimli okrem kontrolky: zmena zvuku motora, zápach, dym, trhanie pri zrýchľovaní alebo to, že porucha zmizne po reštarte. Aj drobnosť, ktorá sa vám zdá nesúvisiaca, môže byť stopa, ktorá nás dovedie k príčine.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Nemažte chyby opakovane bez opravy. S vymazaním zmizne aj záznam, ktorý by nám pomohol zistiť, kedy a za akých podmienok chyba vznikla. A ak svieti kontrolka motora alebo auto prejde do núdzového režimu, obmedzte jazdu, pretože niektoré poruchy dokážu pri ďalšej jazde poškodiť drahšie diely, napríklad turbo alebo katalyzátor.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'K nám na Odborársku chodia zákazníci z celej Bratislavy, často práve po tom, čo im inde nevedeli pomôcť. Mestská prevádzka s krátkymi trasami, častými studenými štartmi a zaťažením turba v kolónach je pre elektroniku aj pre naftové motory náročná a veľa skrytých porúch vzniká práve takto. Ak máte za sebou niekoľko návštev servisu s rovnakým problémom, zavolajte nám a prejdeme to spolu.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['KONTROLY VOZIDLA', 'NORMOHODINY'],
        only: [
            'Diagnostika riadiacej jednotky',
            'Kontrola elektroniky a osvetlenia',
            'Ťažká práca – náročné zásahy (rozvody, spojka, turbo, EGR, DPF, opravy motora, elektro, demontáž agregátov)',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Môžem prísť, keď mi chybu nenašli v inom servise?',
                a: 'Áno, práve takéto prípady riešime najčastejšie. Prineste doklady z predchádzajúcich opráv, aby sme nemuseli opakovať to, čo už bolo overené.',
            },
            {
                q: 'Koľko trvá zložitá diagnostika?',
                a: 'Závisí od poruchy. Niektoré príčiny nájdeme za pár hodín, pri poruchách, ktoré sa objavujú len občas, to môže trvať dlhšie. Pri dlhšom pobyte auta v servise sa dá dohodnúť náhradné vozidlo.',
            },
            {
                q: 'Koľko ma to bude stáť?',
                a: 'Diagnostika riadiacej jednotky stojí 40 €, ďalšia práca pri hľadaní poruchy sa účtuje podľa normohodín. Pred väčšou opravou vám vždy povieme cenu vopred.',
            },
            {
                q: 'Čo ak sa porucha v servise neprejaví?',
                a: 'Vtedy sa snažíme navodiť podmienky, pri ktorých vzniká, a sledujeme živé hodnoty za jazdy. Veľmi pomôže, keď nám presne opíšete, kedy sa porucha objavuje.',
            },
            {
                q: 'Riešite aj elektrické poruchy a skraty?',
                a: 'Áno, hľadanie skratov a porúch v kabeláži patrí k tomu, čo robíme najčastejšie. Merame priamo na aute, vodič po vodiči.',
            },
            {
                q: 'Robíte zložitú diagnostiku na všetkých značkách?',
                a: 'Áno, pracujeme s autami všetkých značiek, benzínovými aj naftovými.',
            },
            {
                q: 'Môžem si chybu vymazať sám?',
                a: 'Neodporúčame to bez opravy. Vymazaním zmizne aj záznam o podmienkach, pri ktorých chyba vznikla, a ten nám pri hľadaní príčiny veľmi pomáha.',
            },
            {
                q: 'Otestujete aj vstrekovače?',
                a: 'Áno, máme vlastný tester vstrekovačov, takže ich stav overíme priamo u nás bez posielania k partnerovi.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na +421 944 236 257 a v krátkosti opíšte problém. Dohodneme termín a povieme vám, čo si pripraviť.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Sme na Odborárskej 52 v Bratislave, Novom Meste. Autom k nám chodia zákazníci aj z okolitých mestských častí, prehľad aj s orientačným časom dojazdu nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
];

export default content;
