import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Dovolenka autom znamená stovky kilometrov za sebou, plne naložené auto, letné horúčavy alebo horské priechody. Presne v takých podmienkach sa ukážu slabé miesta, ktoré pri bežnej jazde po meste nevidno: opotrebované brzdy, staré pneumatiky, slabá batéria alebo klimatizácia, ktorá prestane chladiť uprostred diaľnice.',
            'V Bratislave, Novom Meste, vám auto pred cestou skontrolujeme za 50 €. Prejdeme ho tak, aby ste vyrážali s pokojom, a ak niečo nájdeme, povieme vám, čo treba opraviť hneď a čo počká. Porucha doma pred odchodom je vždy lacnejšia a jednoduchšia ako porucha v cudzine.',
        ],
    },
    {
        type: 'cta',
        heading: 'Chystáte sa na dlhú cestu?',
        text: 'Porucha na diaľnici v cudzine znamená odťah, čakanie a drahú opravu v neznámom servise. Príďte na kontrolu týždeň či dva pred odchodom, nech je čas aj na opravu.',
        points: [
            'Všeobecná kontrola vozidla za 50 €',
            'Servis klimatizácie od 40 €',
            'Kontrola bŕzd za 35 €',
        ],
        secondaryHref: '/nacenenie?sluzba=dovolenka',
        secondaryLabel: 'Objednať kontrolu',
    },
    {
        type: 'list',
        heading: 'Na čo sa pri kontrole pred cestou zameriame',
        items: [
            'Brzdy: platničky, kotúče a brzdová kvapalina',
            'Pneumatiky: dezén, vek, poškodenie a tlak',
            'Prevádzkové kvapaliny: olej, chladiaca kvapalina, ostrekovač',
            'Osvetlenie a elektronika',
            'Podvozok a riadenie',
            'Batéria a štartovanie',
            'Chyby v riadiacej jednotke, ak svieti kontrolka',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Prečo práve tieto veci',
        items: [
            {
                title: 'Brzdy',
                text: 'Naložené auto je ťažšie a pri zjazde z hôr alebo pri brzdení z diaľničnej rýchlosti sa brzdy zahrievajú oveľa viac než v meste. Opotrebované platničky alebo stará brzdová kvapalina sa ukážu práve vtedy. Podrobne o nich píšeme na stránke [brzdy](/sluzby/brzdy-bratislava).',
            },
            {
                title: 'Pneumatiky',
                text: 'Dlhá jazda v horúčave a plná záťaž sú pre pneumatiky skúškou. Stará alebo poškodená pneumatika s prasklinami na bočnici môže pri vysokej rýchlosti zlyhať. Ak je čas na nové, [pneumatiky vám dodáme](/sluzby/predaj-pneumatik-bratislava) aj namontujeme.',
            },
            {
                title: 'Chladenie a klimatizácia',
                text: 'Kolóny v lete a stúpania do hôr preveria chladiaci systém motora. Klimatizácia, ktorá chladí slabo, na dlhej ceste unavuje vodiča aj posádku. Ak nechladí, [servis klimatizácie](/sluzby/servis-klimatizacie-bratislava) stojí od 40 €.',
            },
            {
                title: 'Batéria',
                text: 'Slabá batéria v lete síce častejšie vydrží, ale stačí pár dní státia na parkovisku pri mori a auto nenaštartuje. Ak štartuje ťažko už doma, je lepšie riešiť to pred cestou.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to prebieha',
        steps: [
            {
                title: 'Objednáte sa včas',
                text: 'Ideálne týždeň či dva pred odchodom. Ak niečo nájdeme, ostane čas objednať diely a auto opraviť bez stresu.',
            },
            {
                title: 'Povedzte nám, kam idete',
                text: 'Dĺžka cesty, hory, ťažné zariadenie alebo strešný box, to všetko mení, na čo sa oplatí pozrieť dôkladnejšie.',
            },
            {
                title: 'Kontrola',
                text: 'Auto prejdeme a zameriame sa na veci, ktoré na dlhej ceste rozhodujú.',
            },
            {
                title: 'Výsledok a odporúčanie',
                text: 'Povieme vám, čo je v poriadku, čo treba riešiť pred cestou a čo môže počkať. Bez vášho súhlasu nič neopravujeme.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kedy prísť',
        paragraphs: [
            'Najlepšie týždeň až dva pred odchodom. Kontrola sama netrvá dlho, no ak sa ukáže, že treba vymeniť brzdy, pneumatiky alebo opraviť klimatizáciu, potrebujeme čas na diely a termín.',
            'Rovnako dôležitá je kontrola pred zimou. Ak chystáte cestu na hory, spojte ju so [sezónnym prezutím](/sluzby/pneuservis-bratislava), pri ktorom vidno aj stav bŕzd.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si skontrolovať sami pred cestou',
        paragraphs: [
            'Aj po kontrole u nás sa oplatí pred odchodom pozrieť na pár vecí. Skontrolujte tlak v pneumatikách podľa záťaže, hodnoty pre plne naložené auto nájdete na štítku vo dverách alebo na veku nádrže. Doplňte kvapalinu do ostrekovačov a overte, či svietia všetky svetlá.',
            'Pripravte si doklady, technický preukaz, zelenú kartu poistenia a skontrolujte platnosť STK a emisnej kontroly. Ak by sa blížil termín, [prípravu na STK](/sluzby/stk-ek-bratislava) vybavíme aj s kontrolou pred cestou.',
        ],
    },
    {
        type: 'text',
        heading: 'Cesta do zahraničia',
        paragraphs: [
            'Každá krajina má vlastné pravidlá o povinnej výbave, diaľničných poplatkoch a jazde so svetlami. Pred cestou si ich overte pre všetky krajiny, cez ktoré budete prechádzať, aj tranzitné. Myslite aj na elektronické diaľničné známky, ktoré sa kupujú vopred online.',
            'Ak by vás porucha napriek tomu zastihla v zahraničí, vieme zabezpečiť [odťah auta](/sluzby/odtah-vozidla-bratislava) aj zo zahraničia za 1,50 € za kilometer a auto opraviť u nás.',
        ],
    },
    {
        type: 'text',
        heading: 'Ťažné zariadenie, nosič a strešný box',
        paragraphs: [
            'Príves, karavan, nosič bicyklov alebo strešný box menia správanie auta. Auto je ťažšie, brzdí dlhšie a viac sa nakláňa v zákrutách. Ak budete ťahať príves, dajte nám vedieť pri objednaní, pozrieme sa dôkladnejšie na brzdy, podvozok a osvetlenie zadnej časti.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Neodkladajte kontrolu na posledný deň pred odchodom. Ak sa niečo nájde, nebude čas na opravu a buď pôjdete s problémom, alebo budete odchod presúvať. Rovnako nepodceňujte kontrolku, ktorá svieti už týždne. Na dlhej ceste sa malý problém ľahko zväčší.',
            'Pozor aj na preťaženie. Každé auto má povolenú celkovú hmotnosť, nájdete ju v technickom preukaze. Preťažené auto dlhšie brzdí a rýchlejšie opotrebúva pneumatiky aj podvozok.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo by nemalo chýbať v aute',
        items: [
            'Platné doklady: vodičský preukaz, technický preukaz, zelená karta poistenia',
            'Lekárnička s platnou expiráciou',
            'Reflexné vesty pre posádku, nie v kufri, ale na dosah',
            'Výstražný trojuholník',
            'Rezervné koleso s nahustenou pneumatikou alebo sada na opravu defektu',
            'Kľúč na kolesá a zdvihák, ak má auto rezervu',
            'Nabíjačka do auta a číslo na asistenčnú službu poisťovne',
        ],
    },
    {
        type: 'text',
        heading: 'Ako správne naložiť auto',
        paragraphs: [
            'Ťažké veci patria do kufra čo najnižšie a čo najbližšie k zadným sedadlám. Voľne ležiace predmety v kabíne sa pri prudkom brzdení menia na projektily, preto ich uložte do kufra alebo zaistite. Strešný box zvyšuje ťažisko auta a odpor vzduchu, auto sa viac nakláňa a míňa viac paliva.',
            'Pri plnom naložení upravte tlak v pneumatikách podľa hodnôt pre plnú záťaž a ak to auto umožňuje, nastavte sklon svetlometov, aby ste neoslňovali protiidúcich vodičov.',
        ],
    },
    {
        type: 'text',
        heading: 'Keď vás porucha zastihne na ceste',
        paragraphs: [
            'Ak auto začne vydávať nezvyčajné zvuky, rozsvieti sa červená kontrolka alebo stúpa teplota motora, zastavte na bezpečnom mieste. Zapnite výstražné svetlá, oblečte si reflexnú vestu ešte v aute a postavte trojuholník. Na diaľnici počkajte mimo auta za zvodidlami.',
            'Nepokračujte v jazde s červenou kontrolkou oleja alebo teploty, môžete vážne poškodiť motor. Zavolajte asistenčnú službu poisťovne alebo nám, poradíme, ako postupovať.',
        ],
    },
    {
        type: 'text',
        heading: 'Po návrate z dovolenky',
        paragraphs: [
            'Aj po návrate sa oplatí auto skontrolovať, najmä ak ste najazdili veľa kilometrov, jazdili s prívesom alebo po horských cestách. Ak počas cesty niečo pískalo, ťahalo do strany alebo sa rozsvietila kontrolka, nečakajte, kým sa to zhorší, a príďte to riešiť hneď.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['KONTROLY VOZIDLA', 'BRZDY', 'KLIMATIZÁCIA'],
        only: [
            'Všeobecná kontrola vozidla',
            'Kontrola bŕzd',
            'Kontrola, tlakovanie a preplnenie klimatizácie – staré chladivo R134a',
            'Kontrola, tlakovanie a preplnenie klimatizácie – nové chladivo R1234yf',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Koľko stojí kontrola pred dovolenkou?',
                a: 'Všeobecná kontrola vozidla stojí 50 €. Ak sa nájde niečo na opravu, cenu vám povieme vopred.',
            },
            {
                q: 'Kedy mám prísť?',
                a: 'Ideálne týždeň až dva pred odchodom, aby bol čas aj na prípadnú opravu.',
            },
            {
                q: 'Čo ak nájdete problém?',
                a: 'Povieme vám, čo treba opraviť pred cestou a čo môže počkať. Opravujeme len po vašom súhlase.',
            },
            {
                q: 'Skontrolujete aj klimatizáciu?',
                a: 'Ak klimatizácia nechladí ako má, odporúčame jej servis, ktorý stojí od 40 € podľa typu chladiva.',
            },
            {
                q: 'Idem s prívesom, je to problém?',
                a: 'Nie, len nám to povedzte pri objednaní. Pozrieme sa dôkladnejšie na brzdy, podvozok a osvetlenie.',
            },
            {
                q: 'Čo ak sa mi auto pokazí v zahraničí?',
                a: 'Vieme zabezpečiť odťah aj zo zahraničia za 1,50 € za kilometer a auto opraviť u nás.',
            },
            {
                q: 'Môžem kontrolu spojiť s výmenou oleja?',
                a: 'Áno, pred dlhou cestou je to dobrá chvíľa aj na výmenu oleja, ak sa blíži interval.',
            },
            {
                q: 'Koľko trvá kontrola?',
                a: 'Závisí od auta a od toho, čo pri kontrole nájdeme. Čas vám povieme pri objednaní, kontrolu môžete spojiť aj s inou návštevou.',
            },
            {
                q: 'Skontrolujete aj pneumatiky na dlhú cestu?',
                a: 'Áno, pozrieme sa na dezén, vek aj poškodenie. Ak je čas na nové, vieme ich dodať a namontovať.',
            },
            {
                q: 'Oplatí sa kontrola aj pred cestou na hory v zime?',
                a: 'Áno. V zime sa zamerajte hlavne na pneumatiky, batériu, brzdy a chladiacu kvapalinu, ktorá musí chrániť pred mrazom.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na 0944 236 257 alebo vyplňte formulár na nacenenie a napíšte, kedy odchádzate.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Sme na Odborárskej 52 v Bratislave, Novom Meste. Autom k nám chodia zákazníci z celej Bratislavy aj okolia, prehľad mestských častí s časom dojazdu nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
];

export default content;
