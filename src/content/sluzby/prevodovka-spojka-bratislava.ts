import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Spojka a prevodovka prenášajú výkon motora na kolesá a pri každom rozbehu, preradení a zastavení dostávajú zabrať. V mestskej premávke, kde sa neustále rozbieha a brzdí, sa opotrebúvajú rýchlejšie, než si väčšina vodičov myslí. Keď začnú zlyhávať, ohlásia sa prekĺzavaním, vibráciami, hlukom alebo ťažkým radením.',
            'V Bratislave, Novom Meste, robíme výmenu spojky, dvojhmotového zotrvačníka, opravy prevodoviek a výmenu oleja v manuálnych aj automatických prevodovkách. Pred každou opravou zistíme, kde je chyba, a cenu vám povieme vopred.',
        ],
    },
    {
        type: 'cta',
        heading: 'Prekĺzava vám spojka?',
        text: 'Spojka, ktorá prekĺzava, sa sama nezlepší a jedného dňa auto jednoducho nepohne. Pozrieme sa na to skôr, než budete potrebovať odťah.',
        points: [
            'Výmena spojky aj dvojhmotového zotrvačníka',
            'Olej v manuálnej prevodovke od 75 €, v automate od 85 €',
            'Cenu opravy poznáte vopred',
        ],
        secondaryHref: '/nacenenie?sluzba=spojka',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'list',
        heading: 'Čo pri spojke a prevodovke robíme',
        items: [
            'Výmena spojky (lamela, prítlačný tanier, vysúvacie ložisko)',
            'Výmena dvojhmotového zotrvačníka',
            'Opravy manuálnych prevodoviek',
            'Výmena oleja v manuálnej prevodovke',
            'Výmena náplne automatickej prevodovky',
            'Diagnostika automatickej prevodovky a načítanie chýb',
            'Kontrola úniku oleja a tesnení prevodovky',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Jednotlivé časti a čo sa na nich kazí',
        items: [
            {
                title: 'Spojka',
                text: 'Spojka sa skladá z lamely, prítlačného taniera a vysúvacieho ložiska. Lamela má trecie obloženie, ktoré sa pri každom rozbehu opotrebúva podobne ako brzdové platničky. Keď je obloženie tenké, spojka začne prekĺzavať, otáčky motora rastú, ale auto nezrýchľuje. Pri výmene meníme celú sadu, aby nové diely nepracovali so starými.',
            },
            {
                title: 'Dvojhmotový zotrvačník',
                text: 'Dvojhmotový zotrvačník tlmí vibrácie motora, aby sa neprenášali do prevodovky a karosérie. Väčšina moderných naftových a mnoho benzínových áut ho má. Keď dosluhuje, ozýva sa klepaním pri štarte a vypínaní motora, vibráciami pri rozbehu alebo drnčaním na voľnobehu. Či ho treba meniť spolu so spojkou, posúdime pri demontáži.',
            },
            {
                title: 'Manuálna prevodovka',
                text: 'V manuálnej prevodovke sa opotrebúvajú synchróny, ložiská a ozubené kolesá. Prejaví sa to ťažkým radením, škrípaním pri zaraďovaní alebo vytím, ktoré sa mení s rýchlosťou. Olej v manuálnej prevodovke výrazne ovplyvňuje, ako hladko sa radí a ako dlho prevodovka vydrží.',
            },
            {
                title: 'Automatická prevodovka',
                text: 'Automatická prevodovka je citlivá na stav a množstvo oleja. Starý olej stráca vlastnosti, prevodovka potom radí tvrdšie, s oneskorením alebo cukaním. Výmenou náplne sa dá mnohým problémom predísť. Pri automate začíname diagnostikou, lebo riadiaca jednotka prevodovky si ukladá chyby, ktoré nám povedia, kam sa pozrieť.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Príznaky opotrebovanej spojky',
        paragraphs: [
            'Najznámejším príznakom je prekĺzavanie. Pri zrýchľovaní, hlavne na vyšší prevodový stupeň alebo do kopca, otáčky motora vyskočia, ale auto sa nepohne rýchlejšie. Často je cítiť aj zápach spáleného obloženia. Ďalším signálom je spojka, ktorá zaberá vysoko, až na konci pedálu.',
            'Spojka sa ohlasuje aj inak: pedál ide ťažšie alebo sa nevracia, pri rozbehu auto trhá, ozýva sa pískanie alebo hrkotanie pri stlačení pedálu, alebo sa nedá plynule zaradiť. Niektoré z týchto príznakov môže spôsobiť aj hydraulika spojky, preto auto najprv skontrolujeme a až potom navrhneme opravu.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako postupujeme',
        steps: [
            {
                title: 'Opíšete príznaky',
                text: 'Kedy sa problém prejavuje, pri studenom či teplom motore, pri rozbehu alebo počas jazdy. Pri skúšobnej jazde si to overíme sami.',
            },
            {
                title: 'Kontrola a diagnostika',
                text: 'Overíme spojku, hydrauliku a prevodovku, pri automate načítame chyby z riadiacej jednotky.',
            },
            {
                title: 'Cena vopred',
                text: 'Povieme vám, čo treba meniť, a cenu za prácu aj diely odsúhlasíte ešte predtým, ako auto rozoberieme.',
            },
            {
                title: 'Oprava',
                text: 'Výmena spojky a zotrvačníka vyžaduje demontáž prevodovky. Pri montáži meníme diely, ktoré sa pri tejto práci menia spolu, aby ste sa k tomu nemuseli vracať.',
            },
            {
                title: 'Skúšobná jazda',
                text: 'Po oprave auto otestujeme v premávke a overíme, že spojka zaberá a prevodovka radí, ako má.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo sa oplatí meniť olej v prevodovke',
        paragraphs: [
            'Pri mnohých autách sa olej v prevodovke označuje ako náplň na celú životnosť. V praxi však olej starne, mení svoje vlastnosti a obsahuje drobné častice z opotrebenia. Životnosť v zmysle výrobcu navyše nemusí znamenať toľko kilometrov, koľko chcete s autom najazdiť.',
            'Pri automatických prevodovkách sa výmena oleja odporúča obzvlášť, lebo automat je na kvalitu oleja citlivejší. Výmena oleja v manuálnej prevodovke stojí od 75 €, náplň automatickej prevodovky od 85 €. Materiál naceňujeme individuálne podľa auta a predpísaného oleja.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako predĺžiť životnosť spojky',
        paragraphs: [
            'Nedržte nohu na pedáli spojky, keď ho nepotrebujete, a nečakajte na semafore so stlačenou spojkou a zaradenou jednotkou. Aj ľahký tlak na pedál opotrebúva vysúvacie ložisko. Pri rozbehu nepridávajte zbytočne veľa plynu a nedržte auto v kopci na spojke, na to slúži brzda.',
            'Pri radení zošliapnite spojku celú a nepreskakujte prevodové stupne s veľkými otáčkami. Pri autách s dvojhmotovým zotrvačníkom sa vyhnite jazde v príliš nízkych otáčkach na vysoký prevodový stupeň, kde motor "dusí". Takáto jazda zotrvačník zaťažuje viac než čokoľvek iné.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'S prekĺzavajúcou spojkou nejazdite dlho. Prekĺzavanie znamená teplo a teplo ničí prítlačný tanier aj zotrvačník. Čím dlhšie sa oprava odkladá, tým viac dielov je potom treba vymeniť. A keď spojka dosluhuje úplne, auto sa nepohne a zostáva len [odťah](/sluzby/odtah-vozidla-bratislava).',
            'Pozor aj na lacné sady spojky neznámeho pôvodu. Výmena spojky je náročná práca s demontážou prevodovky a nikto nechce robiť tú istú prácu dvakrát. Pri automatickej prevodovke nikdy nemiešajte rôzne druhy oleja a nedolievajte nič, čo nezodpovedá predpisu výrobcu.',
        ],
    },
    {
        type: 'text',
        heading: 'Mestská jazda a spojka',
        paragraphs: [
            'Bratislavská premávka je pre spojku skúškou. Kolóny na Račianskej, Vajnorskej či Trnavskej ceste znamenajú stovky rozbehov denne a parkovanie v kopcoch na Kramároch či Kolibe pridáva ďalšiu záťaž. Auto, ktoré jazdí prevažne po meste, potrebuje novú spojku skôr než auto, ktoré jazdí po diaľnici.',
            'Ak sa na spojke objavia prvé príznaky, nečakajte. Spojku často meníme spolu s inými náročnejšími opravami, ako sú [rozvody](/sluzby/rozvody-bratislava), a ak chyba nie je jasná na prvý pohľad, začneme [počítačovou diagnostikou](/sluzby/pocitacova-diagnostika-bratislava).',
        ],
    },
    {
        type: 'text',
        heading: 'Keď je auto v servise dlhšie',
        paragraphs: [
            'Výmena spojky alebo oprava prevodovky nie je práca na hodinu. Prevodovka sa musí z auta vybrať a znova namontovať, a ak treba čakať na diely, môže auto zostať v dielni niekoľko dní. Ak bez auta neviete fungovať, dohodnite si [náhradné vozidlo](/nahradne-vozidlo-bratislava) za 35 € na deň. Pri servise nad 1000 € je zadarmo. Dostupnosť si overte pri objednaní.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['PREVODOVKY', 'NORMOHODINY'],
        only: [
            'Automatická prevodovka – výmena náplne',
            'Manuálna prevodovka – výmena náplne',
            'Ťažká práca – náročné zásahy (rozvody, spojka, turbo, EGR, DPF, opravy motora, elektro, demontáž agregátov)',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Koľko stojí výmena spojky?',
                a: 'Závisí od auta, typu spojky a od toho, či treba meniť aj dvojhmotový zotrvačník. Prácu účtujeme podľa normohodín za náročné zásahy, 45 € za hodinu, a celkovú cenu vám povieme vopred.',
            },
            {
                q: 'Ako dlho vydrží spojka?',
                a: 'Veľmi závisí od štýlu jazdy a od toho, či auto jazdí viac po meste, alebo po diaľnici. Mestská jazda a jazda v kopcoch spojku opotrebúvajú rýchlejšie.',
            },
            {
                q: 'Treba meniť aj dvojhmotový zotrvačník?',
                a: 'Nie vždy. Stav zotrvačníka posúdime pri demontáži. Ak je opotrebovaný, odporučíme ho vymeniť naraz so spojkou, lebo k nemu sa dá dostať len s vybratou prevodovkou.',
            },
            {
                q: 'Čo je dvojhmotový zotrvačník?',
                a: 'Je to diel medzi motorom a spojkou, ktorý tlmí vibrácie motora. Keď dosluhuje, ozýva sa klepaním pri štarte a vypínaní motora alebo vibráciami pri rozbehu.',
            },
            {
                q: 'Ako často meniť olej v automatickej prevodovke?',
                a: 'Odporúčame držať sa predpisu výrobcu a pri autách s vyšším nájazdom výmenu nepodceňovať, aj keď výrobca uvádza náplň na celú životnosť. Výmena náplne automatu stojí od 85 €.',
            },
            {
                q: 'Robíte aj automatické prevodovky?',
                a: 'Áno, robíme diagnostiku automatických prevodoviek a výmenu ich náplne. O ďalšom postupe rozhodneme podľa toho, čo diagnostika ukáže.',
            },
            {
                q: 'Môžem jazdiť s prekĺzavajúcou spojkou?',
                a: 'Krátko áno, ale neodporúčame to odkladať. Prekĺzavanie zahrieva prítlačný tanier aj zotrvačník a oprava sa tým predražuje.',
            },
            {
                q: 'Koľko dní bude auto v servise?',
                a: 'Závisí od auta a dostupnosti dielov. Odhad vám povieme pri objednaní a ak treba, dohodneme náhradné vozidlo.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na 0944 236 257 a opíšte príznaky. Dohodneme termín na kontrolu a podľa výsledku ďalší postup.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Sme na Odborárskej 52 v Bratislave, Novom Meste. Ak auto nepohne, zabezpečíme odťah priamo k nám. Prehľad mestských častí, odkiaľ k nám zákazníci chodia, nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
];

export default content;
