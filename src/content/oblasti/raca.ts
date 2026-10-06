import type { ServiceContent } from '../sluzby/types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Hľadáte autoservis blízko Rače? Ludato Family Autoservis a Pneuservis je na Odborárskej 52 v susednom Novom Meste, z Rače k nám autom prídete orientačne za 10 až 15 minút. Chodia k nám vodiči z centra Rače, z Krasnian aj z Východného.',
            'Sme rodinný servis, ktorý sa stará o autá všetkých značiek. Od sezónneho prezutia a výmeny oleja cez brzdy a podvozok až po diagnostiku porúch, s ktorými si inde nevedeli rady.',
        ],
    },
    {
        type: 'cta',
        heading: 'Nemáte čas prísť do servisu?',
        text: 'Po auto si do Rače prídeme sami. Vy zostanete doma alebo v práci a my sa postaráme o zvyšok.',
        points: [
            'Vyzdvihnutie auta v Bratislave a okolí za 50 €',
            'Náhradné vozidlo za 35 € na deň',
            'Kompletné prezutie od 45 € vrátane vyváženia',
        ],
        secondaryHref: '/nacenenie?sluzba=pickup',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'text',
        heading: 'Ako sa k nám dostanete z Rače',
        paragraphs: [
            'Z Rače je to k nám najjednoduchšie cez Púchovskú a Račiansku. Cesta trvá orientačne 10 až 15 minút, v rannej a poobednej špičke na Račianskej môže byť dlhšia. Ak cestujete do práce cez Nové Mesto, auto môžete nechať u nás a vyzdvihnúť si ho, keď pôjdete späť. Od pondelka do štvrtka máme otvorené do 19:00.',
            'Ak sa vám do servisu nechce alebo auto nie je pojazdné, nemusíte nikam chodiť. Auto vyzdvihneme v rámci Bratislavy a okolia za 50 € a nepojazdné vozidlo odtiahneme za 170 €.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo autá v Rači najviac zaťažuje',
        paragraphs: [
            'Rača leží pod vinohradmi Malých Karpát a veľká časť ulíc je kopcovitá. Pri jazde dolu kopcom sa brzdy zahrievajú viac než na rovine a platničky aj kotúče sa opotrebúvajú rýchlejšie. Ak bývate vyššie pod vinohradmi, oplatí sa nechať si brzdy skontrolovať o niečo častejšie, než je bežný interval.',
            'Cesta do mesta po Račianskej znamená veľa rozbiehania a brzdenia v kolóne. Pre motor sú krátke trasy so studenými štartmi náročnejšie než rovnomerná jazda, olej sa nestihne poriadne zohriať a rýchlejšie starne. Preto pri prevažne mestskej jazde odporúčame držať sa skôr kratšieho intervalu výmeny oleja.',
            'V zime sú ulice pod vinohradmi skôr namrznuté a zasnežené ako dolu v meste. Zimné pneumatiky s dostatočným dezénom sú tu preto obzvlášť dôležité a prezutie sa oplatí naplánovať skôr, než napadne prvý sneh.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo pre vodičov z Rače robíme najčastejšie',
        items: [
            'Kontrola a [výmena bŕzd](/sluzby/brzdy-bratislava), kotúče aj platničky',
            'Sezónne [prezutie a vyváženie kolies](/sluzby/pneuservis-bratislava)',
            '[Výmena oleja a filtrov](/sluzby/vymena-oleja-bratislava) podľa špecifikácie výrobcu',
            '[Počítačová diagnostika](/sluzby/pocitacova-diagnostika-bratislava), keď svieti kontrolka',
            'Kontrola a oprava podvozku po zime',
            'Príprava na STK a emisnú kontrolu',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Služby, ktoré sa v Rači oplatí nepodceniť',
        items: [
            {
                title: 'Brzdy',
                text: 'Kopce pod vinohradmi dávajú bŕzdam zabrať. Kontrola bŕzd u nás stojí 35 €, výmena platničiek na nápravu 45 € a kotúčov s platničkami 85 €. Pri kontrole prejdeme obe nápravy a povieme vám, čo treba meniť hneď a čo ešte vydrží.',
            },
            {
                title: 'Prezutie a pneumatiky',
                text: 'Kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov. Ak nemáte kam dať druhú sadu, uskladníme vám ju za 40 € na sezónu a pri ďalšom prezutí ju budete mať pripravenú.',
            },
            {
                title: 'Výmena oleja',
                text: 'Výmena oleja a olejového filtra stojí od 35 €, kompletný servis vrátane palivového filtra 65 €. Olej a filtre vyberáme podľa EČV presne pre vaše auto.',
            },
            {
                title: 'Diagnostika',
                text: 'Diagnostika riadiacej jednotky stojí 40 €. Nezastavíme sa pri prvom kóde chyby, ale hľadáme skutočnú príčinu, aby ste neplatili za diely, ktoré boli v poriadku.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo si nás vyberajú vodiči z Rače',
        paragraphs: [
            'Sme rodinný servis, ktorý vedú Lucia, Damian a Tomáš. O vašom aute sa rozprávate priamo s tým, kto na ňom robí, nie s recepciou veľkej siete. Od otvorenia sme opravili viac ako 1 200 áut a na Google máme hodnotenie 5.0 z viac ako 40 recenzií.',
            'Ceny nájdete vopred v našom [cenníku](/cennik) a pred každou väčšou opravou vám povieme, čo sme našli a koľko to bude stáť. Bez súhlasu nič navyše nerobíme.',
        ],
    },
    {
        type: 'text',
        heading: 'Keď je oprava dlhšia',
        paragraphs: [
            'Ak vaše auto čaká väčšia oprava, napríklad rozvody, podvozok alebo motor, nemusíte zostať bez auta. Požičiame vám [náhradné vozidlo](/sluzby/nahradne-vozidlo-bratislava) za 35 € na deň, pri servise nad 1000 € zadarmo a pri poistnej udalosti ho hradí poisťovňa. Stačí o ňom povedať už pri objednaní.',
        ],
    },
    {
        type: 'text',
        heading: 'Brzdy v kopcoch pod vinohradmi',
        paragraphs: [
            'Pri jazde z kopca auto zrýchľuje samo a brzdy musia premieňať jeho pohyb na teplo. Čím dlhšie a strmšie klesanie, tým viac sa kotúče a platničky zahrievajú. Prehriate brzdy brzdia horšie a opotrebúvajú sa rýchlejšie, preto je v Rači dobré pri dlhšom klesaní brzdiť aj motorom, teda nižším prevodovým stupňom.',
            'Brzdová kvapalina časom nasáva vlhkosť a znižuje sa jej bod varu. Pri intenzívnom brzdení dolu kopcom sa potom môže stať, že pedál zmäkne práve vtedy, keď ho najviac potrebujete. Výmena brzdovej kvapaliny stojí 45 € a je to lacná poistka, ktorú v kopcovitej Rači odporúčame nepodceňovať.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Zavoláte alebo pošlete objednávku',
                text: 'Opíšete, čo auto robí, a dohodneme termín. Ak chcete, rovno si dohodneme aj vyzdvihnutie auta v Rači.',
            },
            {
                title: 'Auto privezieme alebo prídete vy',
                text: 'Cesta z Rače trvá orientačne 10 až 15 minút. Pri vyzdvihnutí si po auto prídeme v dohodnutom čase.',
            },
            {
                title: 'Kontrola a cena vopred',
                text: 'Auto skontrolujeme, povieme vám, čo sme našli, a cenu opravy odsúhlasíme ešte pred začiatkom práce.',
            },
            {
                title: 'Oprava a odovzdanie',
                text: 'Po oprave vám vysvetlíme, čo sme robili, a ukážeme vymenené diely, ak o to máte záujem.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Sezónny servis',
        paragraphs: [
            'Na jeseň je čas na prezutie na zimné pneumatiky. V Rači pod vinohradmi sa sneh a námraza objavujú skôr než dolu pri Račianskom mýte, preto sa oplatí prezuť sa ešte pred prvým mrazom.',
            'Na jar po zime odporúčame skontrolovať podvozok a brzdy. Posyp, výtlky a kopcovité ulice dajú autu za zimu zabrať. A pred letom je dobré pozrieť sa na klimatizáciu, aby vás neprekvapila v prvých horúčavách.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Ak vám brzdy pri jazde dolu kopcom začnú pískať, vibrovať alebo pedál zmäkne, nečakajte. Pri kopcovitých uliciach je spoľahlivé brzdenie dôležitejšie ako kdekoľvek inde a opotrebované platničky časom zničia aj kotúče.',
            'Rovnako nepodceňujte svietiacu kontrolku. Prvá diagnostika stojí 40 € a vie vám ušetriť oveľa drahšiu opravu, ak sa chyba zachytí včas.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť pred návštevou',
        paragraphs: [
            'Ak máte servisnú knižku alebo doklady z posledných opráv, prineste ich. Ušetríte čas aj peniaze, lebo nebudeme kontrolovať to, čo už bolo nedávno robené.',
            'Pri prezutí nezabudnite na kľúč od bezpečnostných skrutiek kolies, ak ich auto má. A pri poruche si skúste zapamätať, kedy sa objavuje, či za studena, pri brzdení alebo v zákrute. Každý detail nám pomôže nájsť príčinu rýchlejšie.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky vodičov z Rače',
        items: [
            {
                q: 'Ako ďaleko ste od Rače?',
                a: 'Sme na Odborárskej 52 v Novom Meste. Z Rače k nám autom prídete cez Púchovskú a Račiansku orientačne za 10 až 15 minút, v špičke môže cesta trvať dlhšie.',
            },
            {
                q: 'Prídete si po auto až do Rače?',
                a: 'Áno, auto vyzdvihneme v rámci Bratislavy a okolia za 50 €. Ak auto nie je pojazdné, odtiahneme ho za 170 €.',
            },
            {
                q: 'Koľko stojí prezutie?',
                a: 'Kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov. Ceny sú uvedené bez DPH, presný prehľad nájdete v cenníku.',
            },
            {
                q: 'Robíte aj brzdy a podvozok?',
                a: 'Áno, kontrola bŕzd stojí 35 € a kontrola podvozku 30 €. Opravy robíme priamo u nás a cenu vám povieme vopred.',
            },
            {
                q: 'Máte náhradné auto?',
                a: 'Áno, náhradné vozidlo stojí 35 € na deň, pri servise nad 1000 € je zadarmo. Rezervujte si ho pri objednaní servisu.',
            },
            {
                q: 'Servisujete všetky značky?',
                a: 'Áno, staráme sa o autá všetkých značiek a modelov.',
            },
            {
                q: 'Je u vás aj výmena oleja na počkanie?',
                a: 'Bežnú výmenu oleja zvyčajne zvládneme v rámci jednej návštevy. Aby ste nečakali, odporúčame sa vopred objednať.',
            },
            {
                q: 'Robíte aj STK?',
                a: 'Áno, kontrolu pred STK a EK robíme za 50 € a celú kontrolu vieme vybaviť za vás za 150 €.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame to, hlavne v sezóne prezúvania. Najrýchlejšie je zavolať na +421 944 236 257.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Ludato Family Autoservis a Pneuservis, Odborárska 52, 831 02 Bratislava, Nové Mesto. Prehľad všetkých mestských častí, odkiaľ k nám zákazníci chodia, nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
];

export default content;
