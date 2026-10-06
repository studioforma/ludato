import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Veterán nie je len staršie auto. Má svoju históriu, charakter a často aj majiteľa, ktorý do neho vložil roky práce. Takéto auto potrebuje servis, ktorý rozumie starej technike, nemá problém zohnať diel, ktorý sa desaťročia nevyrába, a neponáhľa sa tam, kde treba trpezlivosť.',
            'V Ludato Family Autoservis v Bratislave, Novom Meste, sa o veterány staráme radi a dlhodobo. Zháňame k nim nové aj repasované diely a pristupujeme k nim s rovnakou starostlivosťou, s akou by sme sa starali o vlastné auto.',
        ],
    },
    {
        type: 'cta',
        heading: 'Hľadáte servis pre svojho veterána?',
        text: 'Čím dlhšie veterán stojí bez kontroly, tým viac vysychajú tesnenia a zasekávajú sa brzdy. Zavolajte a dohodneme prehliadku.',
        points: [
            'Diely nové aj repasované',
            'Údržba, opravy aj príprava na sezónu',
            'Nepojazdné auto k nám vieme dopraviť',
        ],
        secondaryHref: '/nacenenie?sluzba=veteran',
        secondaryLabel: 'Napísať nám',
    },
    {
        type: 'list',
        heading: 'Čo pri veteránoch riešime',
        items: [
            'Pravidelný servis a údržba veteránov',
            'Kontrola a opravy podvozku, náprav a pruženia',
            'Opravy motora, prevodovky a pohonu',
            'Brzdy a ich prispôsobenie bezpečnej jazde',
            'Zháňanie nových aj repasovaných dielov',
            'Príprava na sezónu a na zimné odstavenie',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo veterán potrebuje iný prístup',
        paragraphs: [
            'Moderné auto sa opravuje s počítačom po ruke. Veterán nemá riadiacu jednotku, ktorá by povedala, čo mu chýba, a veľa závisí od skúseností mechanika, sluchu a citu. Karburátor, mechanické zapaľovanie, listové pružiny či bubnové brzdy potrebujú iné znalosti než dnešné autá.',
            'Stará technika je navyše citlivá na nesprávne zaobchádzanie. Skorodovaná skrutka, ktorá sa pri netrpezlivej demontáži odtrhne, môže z jednoduchej opravy spraviť niekoľkodňovú prácu. Preto pri veteránoch postupujeme pomaly a premyslene, s úctou k tomu, že niektoré diely sa už nahradiť nedajú.',
        ],
    },
    {
        type: 'caseStudy',
        heading: 'Prípad z našej dielne',
        vehicle: 'Land Rover z roku 1974',
        paragraphs: [
            'Jedným z krásnych kúskov, ktoré k nám zavítali, je tento Land Rover z roku 1974. Terénne auto s rámovou konštrukciou, listovými pružinami a pevnými nápravami je ukážkou techniky, ktorá bola stavaná na desaťročia, no bez pravidelnej starostlivosti starne rovnako ako každé iné auto.',
            'Pri takomto aute je podstatné prejsť spodok dôkladne: pruženie, nápravy, prevodovku aj rám. Práve tieto časti nesú celé auto a na veteráne sa na ich stav často zabúda, pretože nie sú na prvý pohľad vidieť.',
        ],
    },
    {
        type: 'image',
        src: '/sluzby/veteran-land-rover-naprava-ludato-bratislava.webp',
        alt: 'Listová pružina a náprava veterána Land Rover z roku 1974 na zdviháku v autoservise Ludato Family, Bratislava Nové Mesto',
        caption: 'Pruženie a náprava Land Rovera z roku 1974 zospodu.',
        orientation: 'portrait',
    },
    {
        type: 'breakdown',
        heading: 'Na čo sa pri veteránoch zameriavame',
        items: [
            {
                title: 'Podvozok a rám',
                text: 'Korózia rámu, listových pružín a uloženia náprav je pri starších autách najčastejším skrytým problémom. Spodok preto prechádzame dôkladne a zisťujeme, čo je len povrchová hrdza a čo už ohrozuje pevnosť.',
            },
            {
                title: 'Brzdy',
                text: 'Staršie brzdové systémy nemajú posilňovače a asistenty, na aké sme dnes zvyknutí. O to dôležitejšie je, aby boli v perfektnom stave, od valčekov a hadíc až po [brzdovú kvapalinu](/sluzby/brzdy-bratislava), ktorá pri aute, čo veľa stojí, starne aj bez jazdenia.',
            },
            {
                title: 'Motor a palivový systém',
                text: 'Karburátory, mechanické palivové čerpadlá a zapaľovanie vyžadujú nastavenie citom, nie podľa diagnostického prístroja. Pri motoroch, ktoré dlho stáli, kontrolujeme aj tesnenia, hadice a stav oleja.',
            },
            {
                title: 'Prevodovka a pohon',
                text: 'Staré prevodovky, rozvodovky a kĺby majú svoje náplne a svoje vôle. Kontrolujeme úniky, stav náplní a opotrebenie, aby auto bezpečne zvládlo jazdu aj po dlhom státí.',
            },
            {
                title: 'Elektrika',
                text: 'Kabeláž starých áut je často krehká a v minulosti viackrát opravovaná. Hľadáme zlé kontakty a poškodené vodiče skôr, než spôsobia poruchu na ceste alebo, v horšom prípade, požiar.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Zháňanie dielov',
        paragraphs: [
            'Najväčšou výzvou pri veteránoch býva dostupnosť dielov. Na niektoré autá sa diely stále vyrábajú ako repliky, na iné treba hľadať pôvodné kusy alebo diely repasovať. Zháňame nové aj repasované diely, podľa toho, čo je pre konkrétne auto dostupné a zmysluplné.',
            'Pri každom dieli vám povieme, aké máte možnosti. Niekedy dáva zmysel zachovať a repasovať pôvodný diel kvôli originalite auta, inokedy je rozumnejšia kvalitná replika, ktorá vydrží dlhšie a stojí menej.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Rozhovor o aute',
                text: 'Zistíme históriu auta, čo sa na ňom robilo a čo od servisu očakávate, či bežnú údržbu, alebo opravu konkrétneho problému.',
            },
            {
                title: 'Dôkladná prehliadka',
                text: 'Auto prejdeme od spodku po motor a povieme vám, čo je v poriadku, čo treba riešiť hneď a čo môže počkať.',
            },
            {
                title: 'Diely a cena',
                text: 'Zistíme dostupnosť dielov, navrhneme nové alebo repasované riešenie a dohodneme sa na cene a postupe.',
            },
            {
                title: 'Oprava bez skratiek',
                text: 'Opravu robíme trpezlivo, s ohľadom na pôvodnosť auta, a po jej dokončení auto otestujeme.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Príprava na sezónu a zimné odstavenie',
        paragraphs: [
            'Väčšina veteránov jazdí len v sezóne a zimu prestojí v garáži. Pred odstavením je dobré vymeniť olej, aby v motore cez zimu nestál starý olej s kyselinami, doplniť nádrž, aby v nej nekondenzovala vlhkosť, a postarať sa o batériu, ktorá sa inak cez zimu vybije.',
            'Na jar pred prvou jazdou skontrolujeme brzdy, pneumatiky, kvapaliny a úniky. Pneumatiky na aute, ktoré mesiace stojí, starnú aj bez jazdenia a môžu mať ploché miesta. Kontrola pred sezónou je lacnejšia než porucha pri prvom výlete.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo sa pri starom aute neponáhľame',
        paragraphs: [
            'Pri veteráne je čas investícia, nie strata. Každý diel, ktorý rozoberieme opatrne, je diel, ktorý sa nemusí zháňať. Každá skrutka, ktorú pred povolením nahrejeme a ošetríme, je skrutka, ktorú nebudeme vŕtať. Dopredu vám preto povieme, že oprava veterána môže trvať dlhšie než pri bežnom aute, a radšej to spravíme poriadne.',
        ],
    },
    {
        type: 'text',
        heading: 'Veterán ako hodnota, ktorá sa dá stratiť',
        paragraphs: [
            'Dobre udržiavaný veterán si hodnotu drží a často ju aj zvyšuje. Zanedbaný veterán ju stráca rýchlejšie než bežné auto, pretože každá oprava je náročnejšia a každý stratený pôvodný diel znižuje originalitu. Pravidelná starostlivosť je preto pri veteráne najlepšia investícia.',
            'Odporúčame uchovávať doklady o všetkých opravách a použitých dieloch. História údržby zvyšuje dôveryhodnosť auta pri predaji aj pri posudzovaní jeho stavu a pomáha aj nám, keď vieme, čo sa na aute robilo v minulosti. Keď auto odovzdávate do servisu, prineste všetko, čo o ňom máte.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Nenechávajte veterán stáť roky bez pohybu a bez kontroly. Tesnenia vysychajú, brzdy sa zasekávajú a palivo v nádrži starne. Aj keď auto nejazdí, oplatí sa ho raz za čas naštartovať, prejsť sa s ním a nechať ho aspoň raz ročne skontrolovať.',
            'Pozor aj na „modernizácie“ bez rozmyslu. Nie každá úprava prospeje hodnote auta. Ak zvažujete výmenu pôvodných dielov za moderné, poradíme vám, čo zlepší bezpečnosť a čo by zbytočne znížilo originalitu.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'Z garáží v Novom Meste, na Kolibe či v Rači sa k nám veterány dostanú rýchlo, bez dlhej jazdy cez mesto. Krátka cesta je pri starom aute výhodou, najmä keď ide o prvú jazdu po zime alebo po dlhom státí. Ak auto nie je pojazdné, dohodneme sa na jeho prevoze. Pri dlhšej oprave vám vieme ponúknuť aj [náhradné vozidlo](/sluzby/nahradne-vozidlo-bratislava) na každodennú jazdu.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['NORMOHODINY'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Robíte aj oldtimery a youngtimery?',
                a: 'Áno. Všetkým starším a zberateľským autám hovoríme jednoducho veterány, či ide o auto zo 70. rokov, alebo o mladší kúsok z 90. rokov.',
            },
            {
                q: 'Zoženiete diely na staré auto?',
                a: 'Zháňame nové aj repasované diely. Pri každom dieli vám povieme, aké máte možnosti a ktoré riešenie odporúčame.',
            },
            {
                q: 'Robíte aj bežnú údržbu veteránov?',
                a: 'Áno, okrem opráv robíme aj pravidelný servis, výmenu kvapalín, kontrolu bŕzd a prípravu na sezónu či zimné odstavenie.',
            },
            {
                q: 'Beriete aj nepojazdné auto?',
                a: 'Áno. Ak auto nie je pojazdné, dohodneme sa na jeho prevoze k nám.',
            },
            {
                q: 'Koľko trvá oprava veterána?',
                a: 'Závisí od rozsahu opravy a hlavne od dostupnosti dielov. Pri veteránoch rátajte s tým, že oprava môže trvať dlhšie než pri bežnom aute.',
            },
            {
                q: 'Koľko stojí servis veterána?',
                a: 'Prácu účtujeme podľa normohodín, cena dielov závisí od auta a od toho, či ide o nový alebo repasovaný diel. Pred opravou vám povieme odhad.',
            },
            {
                q: 'Aké veterány u vás servisujete?',
                a: 'Staráme sa o veterány rôznych značiek a vekov. Jedným z áut, ktoré k nám zavítali, bol napríklad Land Rover z roku 1974.',
            },
            {
                q: 'Pripravíte auto na zimné odstavenie?',
                a: 'Áno, vymeníme olej, skontrolujeme kvapaliny a poradíme, ako sa postarať o batériu a pneumatiky, kým auto stojí.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na +421 944 236 257 a povedzte nám o svojom aute. Dohodneme termín a postup.',
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
