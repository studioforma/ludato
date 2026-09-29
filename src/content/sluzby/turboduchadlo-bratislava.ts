import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Turbodúchadlo vtláča do motora viac vzduchu, vďaka čomu aj menší motor podá výkon väčšieho. Točí sa rýchlosťou desiatok tisíc otáčok za minútu a pracuje pri teplotách, pri ktorých výfukové plyny žiaria. Keď začne zlyhávať, prejaví sa to stratou výkonu, dymom alebo pískaním, a ak sa to nerieši, poškodenie sa môže preniesť aj na motor.',
            'V Bratislave, Novom Meste, robíme repas aj výmenu turbodúchadla vrátane náročných prípadov, kde je turbo ukryté hlboko v motorovom priestore. Pri každej oprave hľadáme aj dôvod, prečo turbo odišlo, aby nové alebo zrepasované turbo nečakal rovnaký osud.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo pri turbodúchadle robíme',
        items: [
            'Diagnostika tlaku plnenia, regulácie a súvisiacich chýb',
            'Repas turbodúchadla vrátane regulátora',
            'Výmena turbodúchadla za nové',
            'Kontrola a výmena olejových vedení turba',
            'Kontrola sania, medzichladiča a netesností',
            'Naplnenie turba olejom pred prvým štartom a skúšobná jazda',
        ],
    },
    {
        type: 'text',
        heading: 'Ako spoznáte problém s turbom',
        paragraphs: [
            'Najčastejším signálom je citeľná strata výkonu, auto sa ťažko rozbieha a pri zrýchľovaní nemá obvyklý ťah. Často sa k tomu rozsvieti kontrolka motora alebo auto prejde do núdzového režimu, ktorý obmedzí výkon, aby chránil motor.',
            'Ďalšie príznaky sú pískanie alebo vytie, ktoré sa mení s plynom, modrý dym z výfuku a úbytok oleja medzi servismi. Modrý dym a spotreba oleja znamenajú, že olej preniká cez tesnenia turba do sania alebo výfuku, a s takým turbom by sa už jazdiť nemalo.',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Repas alebo výmena',
        items: [
            {
                title: 'Repas turbodúchadla',
                text: 'Pri repase sa turbo rozoberie, vymenia sa opotrebované diely ako ložiská a tesnenia a rotor sa vyváži. Je to vhodná cesta, keď je teleso turba v poriadku a poškodenie nie je rozsiahle. Repas sme napríklad robili na Škode Rapid, kde bolo potrebné zrepasovať turbo aj s regulátorom.',
            },
            {
                title: 'Výmena za nové turbo',
                text: 'Keď je turbo poškodené vážnejšie, napríklad je prasknuté teleso alebo zničený rotor, alebo keď repas nedáva ekonomický zmysel, meníme ho za nové. Nové turbo prichádza kompletné a pri montáži vždy meníme aj tesnenia a kontrolujeme olejové vedenia.',
            },
            {
                title: 'Regulátor turba',
                text: 'Regulátor riadi, ako veľmi turbo tlačí. Keď sa zasekne alebo zlyhá jeho elektronika, turbo netlačí dosť alebo tlačí priveľa a riadiaca jednotka to vyhodnotí ako chybu. Niekedy stačí riešiť regulátor, inokedy je jeho porucha len príznakom iného problému.',
            },
            {
                title: 'Olejové vedenia',
                text: 'Turbo je mazané motorovým olejom cez tenké vedenia. Ak sú zanesené karbónom alebo nečistotami, nové turbo nedostane dosť oleja a jeho ložiská sa zničia v krátkom čase. Preto ich pri výmene turba vždy kontrolujeme a podľa potreby meníme.',
            },
        ],
    },
    {
        type: 'caseStudy',
        heading: 'Prípad z našej dielne',
        vehicle: 'Škoda Rapid 1.4 TDI, náročná výmena turba',
        paragraphs: [
            'Na tejto Škode Rapid 1.4 TDI nás čakala výmena turbodúchadla, ktoré je umiestnené v zadnej časti motora a prístup k nemu je veľmi komplikovaný. Aby sme sa k turbu dostali bezpečne a bez poškodenia ďalších častí, museli sme demontovať množstvo komponentov.',
            'Z časového hľadiska sme sa rozhodli pre demontáž celej prednej nápravnice. Následne bolo potrebné demontovať DPF filter, katalyzátor a ďalšie časti výfukového systému, aby sme získali dostatok priestoru. Turbo sme vymenili, skontrolovali olejové vedenia a všetko poskladali späť. Pred prvým štartom sme turbo naplnili olejom, aby sa jeho ložiská nerozbehli nasucho.',
        ],
        outcomes: [
            'Demontáž prednej nápravnice',
            'Demontáž DPF filtra, katalyzátora a časti výfuku',
            'Výmena turbodúchadla',
            'Kontrola olejových vedení',
            'Naplnenie turba olejom pred prvým štartom',
        ],
    },
    {
        type: 'image',
        src: '/sluzby/turbo-nove-turboduchadlo-ludato-bratislava.webp',
        alt: 'Nové turbodúchadlo s výfukovým zberným potrubím pripravené na montáž do Škody Rapid 1.4 TDI v autoservise Ludato Family, Bratislava Nové Mesto',
        caption: 'Nové turbodúchadlo pripravené na montáž do Škody Rapid 1.4 TDI.',
    },
    {
        type: 'steps',
        heading: 'Ako postupujeme',
        steps: [
            {
                title: 'Diagnostika',
                text: 'Načítame chyby, zmeriame tlak plnenia a overíme, či je naozaj chybné turbo, alebo iný diel, ktorý jeho prácu ovplyvňuje.',
            },
            {
                title: 'Hľadanie príčiny',
                text: 'Zistíme, prečo turbo odišlo: stav oleja, olejové vedenia, sanie, výfuk a prípadné netesnosti.',
            },
            {
                title: 'Repas alebo výmena',
                text: 'Podľa rozsahu poškodenia odporučíme repas alebo nové turbo a cenu vám povieme vopred.',
            },
            {
                title: 'Montáž a prvý štart',
                text: 'Turbo namontujeme s novými tesneniami, pred štartom ho naplníme olejom a po oprave auto otestujeme.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo turbo odišlo, býva inde',
        paragraphs: [
            'Turbo väčšinou nezlyhá samo od seba. Najčastejšou príčinou je olej: starý, nesprávny alebo ho je málo. Zanesené olejové vedenie, predĺžené intervaly výmeny oleja alebo olej, ktorý nespĺňa normu výrobcu, skracujú životnosť ložísk turba. Pravidelná [výmena oleja](/sluzby/vymena-oleja-bratislava) je preto najlepšia prevencia.',
            'Ďalšou príčinou býva zanesený DPF filter alebo EGR ventil, ktoré zvyšujú protitlak vo výfuku a zaťažujú turbo. Turbo vedia poškodiť aj nečistoty nasaté cez netesné sanie. A niekedy nie je chyba v turbe vôbec, ako pri prípade, keď za opakovanou chybou turba stál skrat v kabeláži, ktorý sme riešili v rámci [zložitej diagnostiky](/sluzby/zlozita-diagnostika-bratislava).',
        ],
    },
    {
        type: 'text',
        heading: 'Ako predĺžiť životnosť turba',
        paragraphs: [
            'Po naštartovaní studeného motora nejazdite hneď naplno. Olej potrebuje chvíľu, kým sa zohreje a dostane ku všetkým ložiskám. Rovnako po prudkej jazde, napríklad z diaľnice, nechajte motor pred vypnutím krátko bežať na voľnobeh, aby sa turbo ochladilo a olej v ňom nezhorel.',
            'Dodržiavajte intervaly výmeny oleja a používajte olej podľa normy výrobcu. Pri naftových motoroch sa oplatí z času na čas prejsť dlhší úsek po diaľnici, aby sa DPF filter mohol vyčistiť regeneráciou. Pri prevažne mestskej jazde sa totiž zanáša rýchlejšie.',
        ],
    },
    {
        type: 'text',
        heading: 'Prvé kilometre po výmene turba',
        paragraphs: [
            'Po výmene alebo repase turba odporúčame prvé kilometre jazdiť s citom. Nechajte motor zohriať, vyhnite sa jazde na plný plyn a prudkému zrýchľovaniu, kým sa všetko usadí. Počas prvých dní sledujte, či sa neobjavuje dym, pískanie alebo úbytok oleja.',
            'Ak si všimnete čokoľvek nezvyčajné, ozvite sa nám hneď. Včas zachytený problém, napríklad povolený spoj alebo netesnosť v saní, sa rieši rýchlo a bez rizika pre nové turbo.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'S turbom, ktoré dymí na modro alebo žerie olej, nejazdite. Pri vážnom poškodení sa môže olej z turba dostať do sania a motor ho začne spaľovať nekontrolovane, čo môže motor zničiť. Rovnako hrozí, že úlomky poškodeného rotora sa dostanú do motora.',
            'Pozor aj na lacné turbá neznámeho pôvodu. Turbo pracuje pri extrémnych otáčkach a teplotách a nekvalitný kus môže odísť skôr, než sa vráti úspora. A nikdy nemontujte nové turbo bez kontroly olejových vedení a príčiny poruchy predchádzajúceho.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'Mestská jazda v Bratislave je pre turbo náročná. Krátke trasy, studené štarty a státie v kolónach na Račianskej či Vajnorskej znamenajú, že motor často nestihne dosiahnuť prevádzkovú teplotu a DPF filter sa nemá kedy vyčistiť. Ak jazdíte prevažne po meste, oplatí sa sledovať výkon auta a nečakať, kým sa rozsvieti kontrolka.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['KONTROLY VOZIDLA', 'NORMOHODINY'],
        only: [
            'Diagnostika riadiacej jednotky',
            'Ťažká práca – náročné zásahy (rozvody, spojka, turbo, EGR, DPF, opravy motora, elektro, demontáž agregátov)',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Repas alebo nové turbo?',
                a: 'Závisí od rozsahu poškodenia. Ak je teleso v poriadku a poškodenie nie je rozsiahle, repas je rozumná voľba. Pri vážnejšom poškodení odporučíme nové turbo.',
            },
            {
                q: 'Koľko trvá výmena turba?',
                a: 'Závisí od auta. Pri niektorých motoroch je turbo dobre prístupné, pri iných treba demontovať nápravnicu či výfuk a oprava trvá dlhšie. Pri dlhšej oprave sa dá dohodnúť náhradné vozidlo.',
            },
            {
                q: 'Môžem jazdiť s pokazeným turbom?',
                a: 'Neodporúčame to. Pri úniku oleja alebo poškodenom rotore hrozí poškodenie motora. Ak auto dymí na modro alebo stratilo výkon, obmedzte jazdu a dajte ho skontrolovať.',
            },
            {
                q: 'Prečo mi turbo odišlo znova?',
                a: 'Takmer vždy preto, že sa neodstránila príčina: zanesené olejové vedenie, zlý olej, zanesený DPF alebo netesnosť v saní. Preto pri každej výmene hľadáme aj príčinu.',
            },
            {
                q: 'Čo znamená naplnenie turba olejom pred štartom?',
                a: 'Nové turbo je suché. Keby sa motor naštartoval hneď, ložiská by sa prvé sekundy točili bez mazania. Preto ho pred prvým štartom naplníme olejom.',
            },
            {
                q: 'Riešite aj DPF a EGR?',
                a: 'Áno, v súvislosti s turbom ich kontrolujeme, pretože zanesený DPF alebo EGR ventil turbo zaťažuje a často stojí za jeho poruchou.',
            },
            {
                q: 'Koľko stojí výmena turba?',
                a: 'Cena závisí od auta, prístupu k turbu a toho, či ide o repas alebo nový kus. Prácu účtujeme podľa normohodín za náročné zásahy a presnú cenu vám povieme vopred.',
            },
            {
                q: 'Robíte turbá na benzínových aj naftových autách?',
                a: 'Áno, turbodúchadlá riešime na benzínových aj naftových motoroch všetkých značiek.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na +421 944 236 257 a opíšte príznaky. Dohodneme termín na diagnostiku a podľa výsledku ďalší postup.',
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
