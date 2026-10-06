import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Nie každé auto sa do servisu dostane po vlastnej osi. Raz vás nechá stáť na parkovisku, inokedy jazdí, ale vy na cestu do dielne jednoducho nemáte čas. Na oba prípady máme riešenie: vyzdvihnutie pojazdného auta za 50 € a odťah nepojazdného auta za 170 €.',
            'Sme rodinný autoservis na Odborárskej 52 v Bratislave, Novom Meste. Auto dopravíme priamo k nám do dielne, kde sa naň pozrieme, zistíme príčinu poruchy a cenu opravy vám povieme ešte predtým, ako začneme robiť. Odťah zabezpečíme aj zo zahraničia.',
        ],
    },
    {
        type: 'cta',
        heading: 'Auto nenaštartuje alebo nemáte čas prísť?',
        text: 'Auto, ktoré stojí na ulici s poruchou, sa samo neopraví. Zavolajte a dohodneme, ako ho dostaneme k nám do dielne.',
        points: [
            'Vyzdvihnutie auta v Bratislave a okolí za 50 €',
            'Odťah nepojazdného auta za 170 €',
            'Odťah zo zahraničia za 1,50 € za kilometer',
        ],
        secondaryHref: '/nacenenie?sluzba=pickup',
        secondaryLabel: 'Objednať vyzdvihnutie',
    },
    {
        type: 'list',
        heading: 'S čím vám pomôžeme',
        items: [
            'Vyzdvihnutie pojazdného auta, keď nemáte čas prísť do servisu',
            'Odťah auta, ktoré nenaštartuje alebo s ním nie je bezpečné jazdiť',
            'Odťah po poruche na ceste v Bratislave a okolí',
            'Odťah zo zahraničia, keď vás porucha zastihne mimo Slovenska',
            'Prevoz veterána alebo dlho stojaceho auta do dielne',
            'Náhradné vozidlo na čas opravy, ak sa dohodneme vopred',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Dve služby pre dve rôzne situácie',
        items: [
            {
                title: 'Vyzdvihnutie auta (pickup) za 50 €',
                text: 'Auto je pojazdné, len vy nemáte kedy prísť. Typicky ide o pravidelný servis, výmenu oleja, prezutie alebo opravu, ktorú ste dlho odkladali, lebo sa nedalo vyšetriť pol dňa. Po auto prídeme v rámci Bratislavy a okolia a dovezieme ho k nám do dielne. Vy medzitým ostanete v práci alebo doma.',
            },
            {
                title: 'Odťah nepojazdného auta za 170 €',
                text: 'Auto nenaštartuje, po náraze s ním nie je bezpečné jazdiť, svieti červená kontrolka oleja alebo teploty, alebo sa ozýva zvuk, pri ktorom by ďalšia jazda mohla spraviť väčšiu škodu. V takom prípade auto naložíme na odťahové vozidlo a privezieme ho priamo k nám.',
            },
            {
                title: 'Odťah zo zahraničia za 1,50 € za km',
                text: 'Porucha na dovolenke alebo na služobnej ceste je nepríjemná, o to viac v cudzej krajine, kde nepoznáte servisy ani ceny. Odťah zabezpečíme aj mimo Slovenska a účtujeme ho podľa vzdialenosti, 1,50 € za kilometer. Auto potom opravíme u nás, kde sa s vami vieme normálne dohodnúť.',
            },
            {
                title: 'Náhradné vozidlo počas opravy',
                text: 'Ak bez auta neviete fungovať, dohodnite si k vyzdvihnutiu alebo odťahu aj [náhradné vozidlo](/nahradne-vozidlo-bratislava). Stojí 35 € na deň, pri servise nad 1000 € je zadarmo a pri poistnej udalosti ho hradí poisťovňa. Dostupnosť si overte pri objednaní.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kedy stačí vyzdvihnutie a kedy treba odťah',
        paragraphs: [
            'Rozhoduje to, či je jazda s autom bezpečná. Ak auto normálne štartuje, brzdí a nesvieti žiadna červená kontrolka, stačí vyzdvihnutie. Na ceste nehrozí, že sa porucha zhorší, a vy ušetríte.',
            'Odťah je správna voľba vždy, keď auto nenaštartuje, keď svieti červená kontrolka oleja, teploty alebo bŕzd, keď z motora ide dym alebo para, keď auto stráca kvapaliny alebo keď sa ozýva kovový zvuk, ktorý predtým nebol. Rovnako po nehode, aj keď sa auto zdá pojazdné. Pár kilometrov s prehriatym motorom alebo bez oleja dokáže z bežnej opravy spraviť opravu motora.',
            'Ak si nie ste istí, zavolajte nám a opíšte, čo sa deje. Podľa príznakov vám povieme, či je bezpečné s autom jazdiť, alebo je lepšie ho naložiť.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to prebieha',
        steps: [
            {
                title: 'Zavoláte nám',
                text: 'Opíšete, čo sa s autom deje, kde stojí a kedy sa vám to hodí. Podľa toho navrhneme vyzdvihnutie alebo odťah.',
            },
            {
                title: 'Dohodneme čas a odovzdanie kľúčov',
                text: 'Dohodneme sa, kedy po auto prídeme a ako nám odovzdáte kľúče a technický preukaz. Pri vyzdvihnutí sa dá všetko vybaviť aj bez toho, aby ste museli čakať pri aute celý deň.',
            },
            {
                title: 'Auto dopravíme do dielne',
                text: 'Pojazdné auto prevezieme, nepojazdné naložíme na odťahové vozidlo a privezieme na Odborársku 52.',
            },
            {
                title: 'Diagnostika a cena vopred',
                text: 'Auto skontrolujeme, zistíme príčinu poruchy a ozveme sa vám s tým, čo treba urobiť a koľko to bude stáť. Bez vášho súhlasu nič nemeníme.',
            },
            {
                title: 'Oprava',
                text: 'Po odsúhlasení auto opravíme a dáme vám vedieť, keď je hotové. Ďalší postup si dohodneme podľa toho, čo vám vyhovuje.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Najčastejšie dôvody, prečo voláte odťah',
        paragraphs: [
            'Na prvom mieste je auto, ktoré ráno nenaštartuje. Za veľkou časťou takých prípadov stojí vybitá alebo dosluhujúca [autobatéria](/sluzby/autobateria-bratislava), hlavne v zime a pri autách, ktoré jazdia len krátke trasy po meste. Inokedy je príčinou štartér, alternátor alebo porucha v elektroinštalácii.',
            'Ďalej sú to poruchy, pri ktorých auto síce ide, ale jazdiť by sa už nemalo: prehriatie motora, únik oleja, prasknutá hadica chladenia, poškodená pneumatika s diskom alebo auto, ktoré prešlo do núdzového režimu a nedá sa s ním bezpečne zaradiť do premávky. Tretiu skupinu tvoria autá po nehode a autá, ktoré dlho stáli a treba ich oživiť.',
            'Ak auto prešlo do núdzového režimu alebo svieti kontrolka motora, po príchode do dielne začíname [počítačovou diagnostikou](/sluzby/pocitacova-diagnostika-bratislava). Keď sa porucha vracia a iný servis ju nenašiel, pokračujeme [zložitou diagnostikou](/sluzby/zlozita-diagnostika-bratislava).',
        ],
    },
    {
        type: 'text',
        heading: 'Čo robiť, kým čakáte na odťah',
        paragraphs: [
            'Ak auto zostalo stáť na ceste, zapnite výstražné svetlá, oblečte si reflexnú vestu a postavte výstražný trojuholník v dostatočnej vzdialenosti za autom. Na rýchlejších cestách a diaľniciach počkajte mimo auta, za zvodidlami, ak je to možné.',
            'Neskúšajte auto opakovane štartovať, keď sa motor neozýva alebo sa ozýva nezvyčajný zvuk. Opakované pokusy môžu vybiť batériu úplne alebo poškodiť štartér. Ak svieti červená kontrolka oleja alebo teploty, motor vypnite a už ho nenaštartujte. Do auta si nachystajte technický preukaz a kľúče, nech je odovzdanie rýchle.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo auto ťaháme rovno k nám',
        paragraphs: [
            'Pri odťahu cez náhodnú službu často skončí auto na odstavnej ploche a vy potom riešite, kto sa naň pozrie. U nás ide auto rovno do dielne, kde ho skontroluje ten istý tím, ktorý ho bude opravovať. Žiadne ďalšie prevážanie a žiadne čakanie, kým si auto niekto prevezme.',
            'Za sebou máme cez 1 200 opravených áut a väčšina z nich boli náročnejšie opravy, od rozvodov cez turbá až po podvozok. Preto vieme, že pri nepojazdnom aute je najdôležitejšie nájsť skutočnú príčinu, nie vymeniť prvý diel, ktorý sa ponúka.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Neťahajte auto lanom, ak nemá funkčný posilňovač bŕzd a riadenia. Bez bežiaceho motora je brzdenie aj zatáčanie výrazne ťažšie a v mestskej premávke je to riziko. Pri autách s automatickou prevodovkou a pri autách s pohonom všetkých kolies môže ťahanie po kolesách poškodiť prevodovku, preto ich vždy nakladáme.',
            'Pozor aj na štartovanie z cudzej batérie pri moderných autách. Nesprávne pripojenie káblov alebo prúdový náraz vie poškodiť riadiace jednotky. Ak si nie ste istí, radšej zavolajte.',
        ],
    },
    {
        type: 'text',
        heading: 'Odkiaľ k nám auto dovezieme',
        paragraphs: [
            'Vyzdvihnutie robíme v rámci Bratislavy a okolia. Najčastejšie chodíme do mestských častí v našom okolí, ako sú [Rača](/kde-posobime/raca), Vajnory, Ružinov či Staré Mesto, ale aj na druhú stranu mesta do Karlovej Vsi a Dúbravky. Odťah zabezpečíme aj z väčšej vzdialenosti, vrátane zahraničia.',
            'Z Odborárskej je to blízko na Račiansku, Vajnorskú aj Trnavskú cestu, takže sa k vám dostaneme rýchlo. Prehľad mestských častí a trás nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['ĎALŠIE SLUŽBY', 'NÁHRADNÉ VOZIDLO'],
        only: [
            'Pickup vozidla',
            'Odťah vozidla',
            'Náhradné vozidlo počas opravy',
            'Náhradné vozidlo pri servise nad 1000 €',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Aký je rozdiel medzi vyzdvihnutím a odťahom?',
                a: 'Vyzdvihnutie za 50 € je pre pojazdné auto, keď nemáte čas prísť do servisu. Odťah za 170 € je pre auto, ktoré nenaštartuje alebo s ním nie je bezpečné jazdiť.',
            },
            {
                q: 'Ako ďaleko po auto prídete?',
                a: 'Vyzdvihnutie robíme v rámci Bratislavy a okolia. Odťah zabezpečíme aj z väčšej vzdialenosti, vrátane zahraničia, kde účtujeme 1,50 € za kilometer.',
            },
            {
                q: 'Čo ak auto nenaštartuje?',
                a: 'Vtedy ide o odťah. Auto naložíme na odťahové vozidlo a dovezieme ho k nám, kde zistíme, prečo neštartuje.',
            },
            {
                q: 'Ako vám odovzdám kľúče?',
                a: 'Dohodneme sa pri objednaní. Podľa situácie nám ich odovzdáte osobne pri aute alebo spôsobom, ktorý vám vyhovuje.',
            },
            {
                q: 'Odtiahnete auto aj zo zahraničia?',
                a: 'Áno. Odťah zo zahraničia účtujeme podľa vzdialenosti, 1,50 € za kilometer.',
            },
            {
                q: 'Je cena odťahu zahrnutá v oprave?',
                a: 'Nie, odťah a vyzdvihnutie sa účtujú samostatne podľa cenníka. Cenu opravy vám povieme vopred, po diagnostike.',
            },
            {
                q: 'Dostanem počas opravy náhradné auto?',
                a: 'Áno, ak si ho dohodnete vopred. Stojí 35 € na deň, pri servise nad 1000 € je zadarmo a pri poistnej udalosti ho hradí poisťovňa. Dostupnosť si overte pri objednaní.',
            },
            {
                q: 'Odtiahnete aj auto po nehode?',
                a: 'Áno. Po nehode odporúčame odťah aj vtedy, keď sa auto zdá pojazdné, lebo poškodenie podvozku, bŕzd alebo chladenia nemusí byť na prvý pohľad vidieť.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na +421 944 236 257, povedzte nám, kde auto stojí a čo sa s ním deje. Dohodneme vyzdvihnutie alebo odťah.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Dielňu máme na Odborárskej 52 v Bratislave, Novom Meste. Ak k nám radšej prídete sami, zastavte sa počas otváracích hodín, ak nie, po auto prídeme my.',
        ],
    },
];

export default content;
