import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Klimatizácia potrebuje pravidelný servis, aj keď na prvý pohľad stále chladí. Chladivo časom mierne unikne aj z tesného okruhu, a s ním sa stráca aj olej, ktorý maže kompresor.',
            'V Bratislave, Novom Meste, servisujeme klimatizácie pre staré aj nové chladivo, kontrolujeme tesnosť okruhu a riešime aj nepríjemný zápach z ventilácie, ktorý s chladením priamo nesúvisí, ale trápi rovnako veľa vodičov.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo zahŕňa servis klimatizácie u nás',
        items: [
            'Kontrola tesnosti okruhu klimatizácie',
            'Tlakovanie a preplnenie chladivom (R134a aj R1234yf)',
            'Kontrola výkonu chladenia',
            'Ozónová dezinfekcia interiéru pri probléme so zápachom',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Rozbor jednotlivých úkonov',
        items: [
            {
                title: 'Kontrola tesnosti',
                text: 'Skontrolujeme okruh klimatizácie, či niekde neuniká chladivo. Pomalý únik sa navonok neprejaví hneď, ale postupne zhoršuje chladenie a zaťažuje kompresor.',
            },
            {
                title: 'Tlakovanie a preplnenie',
                text: 'Okruh vyprázdnime, natlakujeme a naplníme presným množstvom chladiva podľa predpisu výrobcu. Príliš málo aj príliš veľa chladiva chladenie zhoršuje rovnako.',
            },
            {
                title: 'Ozónová dezinfekcia',
                text: 'Pri probléme so zápachom z ventilácie ponúkame aj ozónovú dezinfekciu interiéru, ktorá odstráni baktérie a plesne priamo vo výparníku, nie len prekryje zápach.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Rozdiel medzi chladivom R134a a R1234yf',
        paragraphs: [
            'R134a je staršie chladivo, ktoré sa používalo vo väčšine vozidiel vyrobených do polovice minulého desaťročia. R1234yf je novšie chladivo, predpísané pre novšie modely, ktoré je ekologickejšie, ale zároveň výrazne drahšie na dopĺňanie. Presne preto sa cena servisu klimatizácie líši podľa toho, aké chladivo vaše vozidlo používa, nie podľa toho, aký servis si vyberiete.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako klimatizácia funguje',
        paragraphs: [
            'Klimatizácia vzduch nevyrába chladný, ale odoberá z neho teplo a odvádza ho von z vozidla. Kľúčovým prvkom je chladivo, ktoré v uzavretom okruhu neustále mení skupenstvo. Kompresor ho stlačí a zohriate ho pošle do kondenzátora vpredu pri chladiči, kde odovzdá teplo do okolia a skvapalní sa.',
            'Odtiaľ putuje k výparníku, ktorý je ukrytý v palubnej doske. Tam chladivo prudko expanduje, odoberie teplo vzduchu prúdiacemu do interiéru a vráti sa späť ku kompresoru. Práve pri výparníku zároveň kondenzuje vlhkosť zo vzduchu, čo je dôvod, prečo pod zaparkovaným autom s puštenou klímou býva mláčka vody, a zároveň prečo je výparník ideálnym miestom pre baktérie a zápach.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo klimatizácia potrebuje pravidelný servis',
        paragraphs: [
            'Aj úplne tesný okruh klimatizácie časom stráca malé množstvo chladiva prirodzenou difúziou cez hadice a tesnenia. Keď chladiva ubudne pod potrebné množstvo, kompresor sa namáha viac a klíma chladí slabšie, aj keď si to na prvý pohľad nemusíte všimnúť hneď.',
            'Odporúčame nechať klimatizáciu skontrolovať približne každé dva roky, aj keď zatiaľ chladí bez problémov. Je to podstatne lacnejšie než čakať, kým sa pokazí kompresor, ktorý pri nedostatku chladiva a oleja trpí najviac.',
        ],
    },
    {
        type: 'text',
        heading: 'Zápach z ventilácie',
        paragraphs: [
            'Nepríjemný zápach z ventilácie zvyčajne nesúvisí s chladivom, ale s vlhkosťou a baktériami, ktoré sa usídlia vo výparníku klimatizácie. Riešime to ozónovou dezinfekciou interiéru, ktorá zápach odstráni pri zdroji, nielen prekryje vôňou.',
            'Zanesený kabínový (peľový) filter zápach ešte zosilňuje, preto pri probléme s ventiláciou odporúčame skontrolovať aj jeho stav.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako spoznáte problém s klimatizáciou',
        paragraphs: [
            'Prvý signál je, že klíma chladí slabšie ako obvykle, hlavne pri vyšších vonkajších teplotách. Ďalším signálom je nezvyčajný zvuk pri zapnutí kompresora, napríklad škrípanie alebo klepanie, ktoré môže znamenať problém priamo s kompresorom, nielen s chladivom.',
            'Ak klíma chladí len chvíľu po zapnutí a potom výkon výrazne klesne, býva to znak nedostatku chladiva alebo problému s tlakom v okruhu. V takom prípade odporúčame nečakať a nechať okruh skontrolovať, kompresor pri nedostatku chladiva a oleja trpí s každou ďalšou jazdou.',
        ],
    },
    {
        type: 'text',
        heading: 'Klimatizácia v zime',
        paragraphs: [
            'Klimatizáciu odporúčame nechať bežať aj v zime, aj keď kúrite. Kompresor a tesnenia potrebujú pravidelný pohyb, dlhé odstavenie na niekoľko mesiacov im neprospieva. Zapnutá klíma navyše výrazne pomáha pri odmrazovaní okien, keďže odvádza vlhkosť z interiéru.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Pri dlhých cestách v lete odporúčame nastaviť klimatizáciu na recirkuláciu vzduchu z interiéru, chladí rýchlejšie a šetrí palivo, no na kratšie úseky je lepšie prepínať aj na privádzanie vzduchu zvonku, aby sa v interiéri nehromadila vlhkosť.',
            'Servis klimatizácie sa oplatí naplánovať ešte pred letnou špičkou, na jar. Vtedy je jednoduchšie získať termín a problém odhalíte skôr, než vás nechladenie prekvapí počas najhorúcejších dní.',
        ],
    },
    {
        type: 'text',
        heading: 'Klimatizácia a spotreba paliva',
        paragraphs: [
            'Zapnutá klimatizácia zaťažuje motor, keďže kompresor je poháňaný remeňom od neho, a podľa podmienok zvýši spotrebu rádovo o niekoľko percent. V meste, pri nízkych rýchlostiach a častom státí, je tento podiel najvyšší.',
            'Pri vyšších rýchlostiach však platí opak, než by človek čakal. Otvorené okná výrazne zhoršia aerodynamiku vozidla a odpor vzduchu vtedy stojí viac paliva než chod klimatizácie. Na diaľnici je teda ekonomickejšie zavrieť okná a nechať bežať klímu. A ak kompresor pracuje v systéme s nedostatkom chladiva, namáha sa zbytočne viac, takže zanedbaný servis vás v konečnom dôsledku stojí aj na palive.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'V lete, keď auto stojí celý deň na priamom slnku na sídlisku alebo pri práci, sa interiér vie zohriať na desiatky stupňov a klimatizácia musí vynaložiť podstatne viac energie, aby ho ochladila. Práve v tomto období sa najviac prejaví, ak chladiva postupne ubúdalo počas celého roka.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['KLIMATIZÁCIA'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Ako často treba dopĺňať chladivo?',
                a: 'Odporúčame kontrolu približne každé dva roky, aj keď klimatizácia stále chladí. Malý únik chladiva je pri autách bežný a zhoršuje sa postupne.',
            },
            {
                q: 'Prečo mi klíma nechladí, ako by mala?',
                a: 'Najčastejším dôvodom je nedostatok chladiva v okruhu. Skontrolujeme tesnosť, doplníme chladivo a overíme výkon chladenia.',
            },
            {
                q: 'Smrdí mi z ventilácie, čo s tým?',
                a: 'Zápach zvyčajne spôsobujú baktérie vo výparníku. Riešime to ozónovou dezinfekciou interiéru, ktorá zápach odstráni pri zdroji.',
            },
            {
                q: 'Súvisí servis klímy s výmenou peľového filtra?',
                a: 'Nie je to ten istý úkon, ale odporúčame ich riešiť spolu, zanesený filter ešte zhoršuje zápach aj výkon klimatizácie.',
            },
            {
                q: 'Aké chladivo má moje vozidlo?',
                a: 'Závisí od modelu a roku výroby, staršie vozidlá bežne používajú R134a, novšie R1234yf. Pri servise to vieme overiť.',
            },
            {
                q: 'Koľko trvá servis klimatizácie?',
                a: 'Bežnú kontrolu a doplnenie chladiva zvládneme v rámci jednej návštevy.',
            },
            {
                q: 'Musím klímu používať aj v zime?',
                a: 'Odporúčame to, pravidelný chod kompresora a tesnení predlžuje ich životnosť a pomáha aj pri odmrazovaní okien.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame objednať sa vopred, aby ste nečakali na uvoľnenie termínu. Najistejšie je zavolať na +421 944 236 257.',
            },
            {
                q: 'Prečo klíma zapácha najviac po zapnutí?',
                a: 'Baktérie a plesne sa najviac usadzujú vo výparníku, keď klíma nejaký čas nebeží. Hneď po zapnutí sa preto zápach prejaví najsilnejšie.',
            },
            {
                q: 'Ovplyvňuje servis klímy aj spotrebu paliva?',
                a: 'Áno, kompresor s nedostatkom chladiva sa musí namáhať viac, čo sa prejaví aj na spotrebe. Správne naplnený okruh pracuje efektívnejšie.',
            },
            {
                q: 'Skontrolujete klímu aj bez objednaného servisu?',
                a: 'Áno, základnú kontrolu funkčnosti a chladenia vieme urobiť aj samostatne, bez toho, aby ste si museli objednať celý servis.',
            },
            {
                q: 'Prečo mi pod autom tečie voda, keď mám zapnutú klímu?',
                a: 'To je úplne normálne. Na výparníku klimatizácie kondenzuje vlhkosť zo vzduchu a tá odteká hadičkou pod vozidlo. Čistá voda pod zaparkovaným autom v lete teda nie je porucha.',
            },
            {
                q: 'Môže klimatizácia bežať súčasne s kúrením?',
                a: 'Áno a v zime to dokonca odporúčame. Klimatizácia odoberá vzduchu vlhkosť, takže v kombinácii s kúrením rýchlejšie zbavíte okná zahmlievania.',
            },
            {
                q: 'Dá sa staršie vozidlo prerobiť na nové chladivo?',
                a: 'Okruhy pre R134a a R1234yf nie sú vzájomne zameniteľné a chladivá sa nesmú miešať. Vozidlo preto plníme vždy tým chladivom, ktoré preň predpísal výrobca.',
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
