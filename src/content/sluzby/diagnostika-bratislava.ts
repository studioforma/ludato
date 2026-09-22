import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Počítačová diagnostika je prvý krok pri väčšine modernejších opráv. Vozidlá dnes majú desiatky riadiacich jednotiek, ktoré si medzi sebou vymieňajú informácie, a diagnostika nám povie, kde presne systém hlási problém.',
            'V Bratislave, Novom Meste, vieme diagnostiku spustiť na vozidlách všetkých značiek. Dôležité je ale povedať si na rovinu, čo diagnostika vie a čo nie, chybový kód je začiatok hľadania príčiny, nie samotná diagnóza.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo diagnostika u nás zahŕňa',
        items: [
            'Načítanie chybových kódov z riadiacej jednotky motora (OBD II)',
            'Kontrola systémov ESP a ABS',
            'Kontrola airbagov a bezpečnostných systémov',
            'Diagnostika riadiacej jednotky vozidla',
            'Kontrola elektroniky a osvetlenia',
            'Vyhodnotenie namerených hodnôt v reálnom čase (živé dáta)',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Čo konkrétne kontrolujeme',
        items: [
            {
                title: 'OBD II a riadiaca jednotka motora',
                text: 'Načítame chybové kódy z riadiacej jednotky motora a doplňujúce údaje, ako sú otáčky, teploty a hodnoty snímačov v reálnom čase, aby sme videli, čo sa deje aj mimo uloženej chyby.',
            },
            {
                title: 'ESP a ABS',
                text: 'Systémy ESP a ABS majú vlastné riadiace jednotky a senzory. Chyba v týchto systémoch sa prejaví rozsvietenou kontrolkou a obmedzením ich funkcie, čo priamo ovplyvňuje bezpečnosť pri jazde.',
            },
            {
                title: 'Airbagy',
                text: 'Riadiaca jednotka airbagov si pamätá aj staré poruchy, napríklad po náraze alebo pri poškodenom konektore pod sedadlom. Kontrolujeme, či je celý systém pripravený zasiahnuť, keby bolo treba.',
            },
            {
                title: 'Elektronika a osvetlenie',
                text: 'Kontrolujeme funkčnosť svetiel, senzorov a ďalších elektronických modulov. Časté sú problémy so žiarovkami, poistkami alebo konektorami, ktoré sa navonok prejavia ako "záhadná" chyba.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Čo diagnostika vie a čo nie',
        paragraphs: [
            'Diagnostika vie povedať, ktorý systém a ktorý senzor nahlásil odchýlku od bežných hodnôt, a v akých podmienkach sa to stalo. Nevie ale vždy povedať presnú príčinu, tá istá chyba môže mať viacero rôznych príčin.',
            'Chybový kód "porucha snímača" napríklad nemusí znamenať, že je snímač pokazený, môže ísť aj o poškodenú kabeláž k nemu, uvoľnený konektor alebo problém v úplne inej časti systému, ktorá snímač len ovplyvňuje. Presne preto k diagnostike vždy pristupujeme ako k prvému kroku, nie k finálnej odpovedi.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Načítanie chýb',
                text: 'Pripojíme diagnostiku a načítame aktuálne aj uložené chybové kódy zo všetkých dostupných riadiacich jednotiek.',
            },
            {
                title: 'Vyhodnotenie',
                text: 'Chyby vyhodnotíme v kontexte toho, čo ste nám opísali, a podľa toho navrhneme, čo je potrebné skontrolovať ďalej.',
            },
            {
                title: 'Overenie príčiny',
                text: 'Podľa potreby overíme príčinu meraním, vizuálnou kontrolou alebo testovacou jazdou, nie len vymazaním chyby.',
            },
            {
                title: 'Odporúčanie ďalšieho postupu',
                text: 'Povieme vám, čo presne odporúčame opraviť a prečo, aby ste sa mohli rozhodnúť, ako ďalej.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kedy je čas na diagnostiku',
        paragraphs: [
            'Najčastejší dôvod je rozsvietená kontrolka na palubnej doske, "check engine" alebo iná. Rovnako sa oplatí diagnostiku spustiť pri nepravidelnom chode motora, strate výkonu, zvýšenej spotrebe alebo keď vozidlo robí niečo, čo predtým nerobilo.',
            'Diagnostiku odporúčame aj pri kúpe jazdeného vozidla, ukáže vám, či niekto pred predajom nevymazal chyby, ktoré by sa mohli po čase objaviť znova.',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Najčastejšie kontrolky a čo znamenajú',
        items: [
            {
                title: 'Kontrolka motora (check engine)',
                text: 'Oranžová kontrolka motora hlási, že riadiaca jednotka zaznamenala odchýlku v systéme motora alebo emisií. Ak svieti trvalo a auto ide normálne, nie je to dôvod na paniku, no diagnostiku odporúčame nechať spraviť v najbližších dňoch.',
            },
            {
                title: 'Tlak oleja',
                text: 'Červená kontrolka tlaku oleja je najvážnejšia zo všetkých. Znamená, že motor nemusí byť dostatočne mazaný, a v takom prípade odporúčame bezpečne zastaviť a motor vypnúť, nie pokračovať do servisu vlastnou silou.',
            },
            {
                title: 'Teplota chladiacej kvapaliny',
                text: 'Červená kontrolka teploty signalizuje prehrievanie motora. Aj tu platí, že je lepšie zastaviť a nechať motor vychladnúť, prehriaty motor sa vie poškodiť v priebehu pár minút jazdy.',
            },
            {
                title: 'ABS a ESP',
                text: 'Kontrolka ABS alebo ESP znamená, že tieto asistenčné systémy sú vyradené z činnosti. Auto zostáva pojazdné a brzdy fungujú, ale pri prudkom brzdení alebo na klzkom povrchu nemáte k dispozícii pomoc, na ktorú ste zvyknutí.',
            },
            {
                title: 'Airbag',
                text: 'Svietiaca kontrolka airbagu znamená, že systém zaznamenal poruchu a airbagy sa v prípade nehody nemusia aktivovať. Navonok sa na jazde neprejaví nič, o to dôležitejšie je nechať to skontrolovať.',
            },
            {
                title: 'Dobíjanie batérie',
                text: 'Kontrolka batérie zvyčajne neznamená chybu samotnej batérie, ale problém s dobíjaním, najčastejšie alternátor alebo jeho remeň. Vozidlo vtedy ide na zvyšok energie v batérii a po čase sa jednoducho zastaví.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Blikajúca kontrolka motora je vážnejší signál než trvalo svietiaca, zvyčajne znamená aktívnu poruchu, napríklad vynechávanie zapaľovania. V takom prípade odporúčame prestať jazdiť vyššími otáčkami a nechať vozidlo skontrolovať čo najskôr.',
            'Vymazanie chyby bez zistenia príčiny je len dočasné riešenie, kontrolka sa po čase rozsvieti znova a niekedy sa medzitým problém ešte zhorší. Rovnako platí, že jedna chyba môže spôsobiť "reťaz" ďalších chybových hlášok v iných systémoch, preto pri diagnostike vždy hľadáme pôvodnú príčinu, nie len najnovšiu hlášku.',
        ],
    },
    {
        type: 'text',
        heading: 'Diagnostika ako súčasť väčšej opravy',
        paragraphs: [
            'Diagnostiku často robíme ako prvý krok pred väčšou opravou, napríklad pred zásahom do turbodúchadla, vstrekovačov alebo prevodovky. Presné vyhodnotenie chýb nám povie, ktorým smerom sa má oprava uberať, a šetrí čas aj peniaze, keďže sa vyhneme skúšaniu dielov "na slepo".',
            'Rovnako diagnostiku využívame aj pri sťažnostiach, ktoré sa navonok javia ako drobnosť, napríklad nepravidelný chod motora pri studenom starte. Aj takéto príznaky totiž vedia mať pôvod v elektronike, nie len v mechanike.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť pred návštevou',
        paragraphs: [
            'Pri diagnostike nám najviac pomôže, keď viete popísať okolnosti. Kedy sa problém objavuje, či za studena alebo až po zahriatí motora, pri akej rýchlosti, či pri zrýchľovaní alebo brzdení, a či sa deje zakaždým alebo len občas. Prerušované poruchy sú najťažšie na odhalenie a práve tieto detaily vedia hľadanie výrazne skrátiť.',
            'Ak už na vozidle niekto nedávno niečo menil alebo opravoval, povedzte nám to rovno. Nie preto, aby sme hľadali vinníka, ale preto, že nová porucha často súvisí s posledným zásahom, napríklad s nesprávne zapojeným konektorom alebo dielom, ktorý nesedí do špecifikácie.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['KONTROLY VOZIDLA'],
        only: ['Diagnostika riadiacej jednotky', 'Kontrola elektroniky a osvetlenia'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Koľko trvá diagnostika?',
                a: 'Samotné načítanie chýb trvá krátko, presný čas závisí od toho, koľko chýb treba vyhodnotiť a overiť.',
            },
            {
                q: 'Účtujete diagnostiku, aj keď sa nič nenájde?',
                a: 'Diagnostika je samostatný úkon s vlastnou prácou, účtujeme ju bez ohľadu na výsledok, keďže aj výsledok bez nálezu si vyžaduje rovnakú prácu.',
            },
            {
                q: 'Vymažete mi kontrolku?',
                a: 'Chybu vymažeme až po tom, čo zistíme a vyriešime jej príčinu. Vymazanie chyby bez opravy problém nevyriešuje, len skryje kontrolku.',
            },
            {
                q: 'Robíte diagnostiku všetkých značiek?',
                a: 'Áno, diagnostiku vieme spustiť na vozidlách všetkých značiek a modelov.',
            },
            {
                q: 'Môžem prísť po diagnostike z iného servisu?',
                a: 'Áno, radi sa pozrieme aj na vozidlo, ktoré už bolo diagnostikované inde, a poskytneme druhý názor.',
            },
            {
                q: 'Nájdete vždy príčinu problému?',
                a: 'Vo väčšine prípadov áno, pri zložitejších alebo prerušovaných poruchách môže byť potrebné viac času a opakované meranie.',
            },
            {
                q: 'Robíte diagnostiku aj pri kúpe jazdeného auta?',
                a: 'Áno, diagnostika je bežnou súčasťou kontroly vozidla pred kúpou.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame objednať sa vopred, aby ste nečakali na uvoľnenie termínu. Najistejšie je zavolať na +421 944 236 257.',
            },
            {
                q: 'Je rozdiel medzi blikajúcou a trvalo svietiacou kontrolkou motora?',
                a: 'Áno, blikajúca kontrolka zvyčajne znamená aktívnu, vážnejšiu poruchu a odporúčame prísť čo najskôr, trvalo svietiaca je menej urgentná, ale rovnako by sa nemala ignorovať.',
            },
            {
                q: 'Dostanem výpis z diagnostiky?',
                a: 'Áno, po diagnostike vám povieme presne, aké chyby sme našli a čo odporúčame ďalej, aby ste mali jasnú predstavu o stave vozidla.',
            },
            {
                q: 'Ovplyvňuje diagnostika prípravu na STK?',
                a: 'Áno, diagnostika riadiacej jednotky je bežnou súčasťou kontroly pred STK a EK, hlavne pri novších vozidlách s väčším podielom elektroniky.',
            },
            {
                q: 'Viete diagnostikovať aj staršie vozidlá bez OBD II?',
                a: 'Pri starších vozidlách bez OBD II vieme použiť iné diagnostické metódy, napríklad meranie priamo na komponentoch.',
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
