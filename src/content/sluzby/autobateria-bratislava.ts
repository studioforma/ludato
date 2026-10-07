import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Batéria je diel, na ktorý si spomenieme až vtedy, keď ráno otočíme kľúčom a namiesto motora sa ozve len cvaknutie. Väčšinou sa to stane v najhoršej chvíli: v prvý mrazivý deň, pred dôležitou cestou alebo na parkovisku ďaleko od domu. Pritom sa slabnúca batéria zvyčajne ohlasuje vopred, len jej signály ľahko prehliadneme.',
            'V Bratislave, Novom Meste, vám batériu vymeníme od 30 € za prácu. Ak sa auto vybíja opakovane, nezostaneme len pri výmene. Zistíme, či je chyba naozaj v batérii, alebo ju vybíja niečo iné, aby vás nová batéria nenechala stáť rovnako ako tá stará.',
        ],
    },
    {
        type: 'cta',
        heading: 'Auto ráno ťažko štartuje?',
        text: 'Batéria, ktorá štartuje čoraz ťažšie, vás najbližším mrazivým ránom nechá stáť. Príďte skôr, než budete volať odťah.',
        points: [
            'Výmena batérie od 30 €',
            'Kontrola elektroniky a osvetlenia za 30 €',
            'Diagnostika riadiacej jednotky za 40 €',
        ],
        secondaryHref: '/nacenenie?sluzba=bateria',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'list',
        heading: 'Čo pri batérii riešime',
        items: [
            'Výmena autobatérie',
            'Kontrola, či auto štartuje ťažko kvôli batérii, alebo inej príčine',
            'Hľadanie dôvodu, prečo sa auto opakovane vybíja',
            'Kontrola elektroniky a osvetlenia',
            'Načítanie chýb z riadiacich jednotiek po výmene batérie',
            'Kontrola kontaktov a svoriek batérie',
        ],
    },
    {
        type: 'text',
        heading: 'Ako spoznáte, že batéria dosluhuje',
        paragraphs: [
            'Najčastejším príznakom je pomalšie štartovanie. Štartér sa točí ťažkopádne, dlhšie trvá, kým motor chytí, a v chladnejšie ráno je to citeľne horšie. Ďalším signálom je slabšie svetlo pri štarte, blikajúce kontrolky na prístrojovej doske alebo rádio, ktoré sa pri štartovaní reštartuje.',
            'Pri autách so systémom štart-stop si môžete všimnúť, že motor na semafore prestane zhasínať. Auto tým šetrí batériu, ktorá už nemá dosť kapacity. Rovnako podozrivé sú náhodné chyby elektroniky, ktoré po čase samé zmiznú. Moderné auto je na stabilné napätie citlivé a slabá batéria sa často prejaví práve takto.',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Prečo sa batéria vybíja',
        items: [
            {
                title: 'Vek batérie',
                text: 'Batéria starne aj vtedy, keď sa o ňu staráte. S každým rokom jej klesá kapacita a raz príde chvíľa, keď na štart v mraze jednoducho nestačí. Ak je batéria v aute už niekoľko rokov a štartuje čoraz ťažšie, výmena je zvyčajne najrozumnejšie riešenie.',
            },
            {
                title: 'Krátke trasy po meste',
                text: 'Štart motora odoberie z batérie veľa energie a alternátor ju potrebuje nejaký čas dobíjať. Pri krátkych jazdách po meste, napríklad pár kilometrov do práce a späť, sa batéria nestihne dobiť a postupne sa vybíja. V zime, keď beží kúrenie, vyhrievanie okien a svetlá, je to ešte výraznejšie.',
            },
            {
                title: 'Odber, keď auto stojí',
                text: 'Aj zaparkované auto berie z batérie malý prúd na pamäte riadiacich jednotiek či alarm. Keď sa niektorá jednotka neuspí, zostane svietiť osvetlenie v kufri alebo je chyba v elektroinštalácii, odber je vyšší a batéria sa vybije za pár dní státia.',
            },
            {
                title: 'Nabíjanie z alternátora',
                text: 'Ak alternátor nenabíja tak, ako má, batéria sa vybíja aj počas jazdy. Nová batéria potom vydrží len krátko a problém sa vráti. Preto pri opakovanom vybíjaní nemeníme batériu naslepo, ale najprv overíme, či je nabíjanie v poriadku.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako postupujeme',
        steps: [
            {
                title: 'Opíšete, čo sa deje',
                text: 'Povedzte nám, kedy auto štartuje ťažko, či sa vybíja po dlhšom státí alebo aj po jazde a či svietia nejaké kontrolky. Každý detail pomôže.',
            },
            {
                title: 'Kontrola',
                text: 'Overíme stav batérie, kontakty a svorky, a ak je podozrenie na inú príčinu, skontrolujeme aj elektroniku a nabíjanie.',
            },
            {
                title: 'Výmena batérie',
                text: 'Ak je chyba v batérii, vymeníme ju. Postupujeme tak, aby auto po výmene fungovalo bez nečakaných chýb.',
            },
            {
                title: 'Kontrola po výmene',
                text: 'Po výmene načítame chyby z riadiacich jednotiek a overíme, že všetko funguje, ako má.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Batéria v modernom aute nie je len o štartovaní',
        paragraphs: [
            'Kedysi sa batéria v aute vymenila za pár minút a nikto to neriešil. Dnešné autá majú desiatky riadiacich jednotiek, štart-stop, elektronickú parkovaciu brzdu a množstvo komfortných funkcií. Keď batéria slabne alebo sa odpojí nesprávne, môžu sa objaviť chybové hlásenia, ktoré s batériou na prvý pohľad nesúvisia.',
            'Preto pri výmene batérie nekončíme odskrutkovaním svoriek. Po výmene skontrolujeme chyby v riadiacich jednotkách a overíme, že auto nehlási nič nezvyčajné. Ak by sa niečo objavilo, vieme to vyriešiť rovno na mieste počítačovou [diagnostikou](/sluzby/pocitacova-diagnostika-bratislava).',
        ],
    },
    {
        type: 'text',
        heading: 'Keď auto vybíja niečo iné ako batéria',
        paragraphs: [
            'Ak ste batériu menili nedávno a auto sa aj tak vybíja, chyba je takmer určite inde. Hľadanie zvýšeného odberu je trpezlivá práca: treba postupne overovať jednotlivé okruhy, kým sa nenájde ten, ktorý berie prúd aj vtedy, keď by auto malo spať.',
            'Takéto poruchy sa niekedy prejavujú len občas, napríklad len po daždi alebo len keď auto stojí dlhšie. Ak už s autom chodíte po servisoch a príčinu nikto nenašiel, pomôže [zložitá diagnostika](/sluzby/zlozita-diagnostika-bratislava), kde sa venujeme presne takým prípadom.',
        ],
    },
    {
        type: 'text',
        heading: 'Batéria v autách so štart-stop systémom',
        paragraphs: [
            'Autá so štart-stop systémom vypínajú motor na každom semafore a v každej kolóne, takže batéria musí zvládnuť oveľa viac štartov než v aute bez tohto systému. Preto sa do nich montujú batérie určené práve na takú záťaž. Pri výmene je dôležité, aby nová batéria zodpovedala tomu, s čím auto počíta, inak štart-stop nefunguje správne a batéria sa opotrebuje rýchlejšie.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako predĺžiť život batérie',
        paragraphs: [
            'Keď auto jazdí väčšinou krátke trasy, z času na čas sa oplatí prejsť dlhší úsek, aby sa batéria poriadne dobila. Pri štartovaní vypnite ventilátor, vyhrievanie a ďalšie spotrebiče, ktoré na štart nepotrebujete. Po zaparkovaní skontrolujte, či nesvieti osvetlenie interiéru alebo kufra.',
            'Ak auto dlhšie stojí, napríklad cez zimu alebo počas dovolenky, počítajte s tým, že batéria sa môže vybiť. Pri sezónnych autách a [veteránoch](/sluzby/servis-veteranov-bratislava) je dobré na to myslieť ešte pred odstavením.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Pri štartovaní z inej batérie dbajte na správne poradie pripájania káblov. Nesprávne pripojenie alebo napäťová špička vie poškodiť elektroniku auta a z lacného problému sa stane drahý. Ak si nie ste istí, radšej to nechajte na nás.',
            'Opakované štartovanie z kábla nie je riešenie. Ak auto potrebuje pomoc pri štarte častejšie, batéria je na konci alebo ju niečo vybíja. Každé hlboké vybitie batériu ďalej poškodzuje a odkladanie sa skôr či neskôr skončí [odťahom](/sluzby/odtah-vozidla-bratislava).',
        ],
    },
    {
        type: 'text',
        heading: 'Batéria a zima v Bratislave',
        paragraphs: [
            'Prvé mrazivé rána sú pre batérie najťažšie a práve vtedy máme najviac telefonátov typu "auto ráno nenaštartovalo". V chlade má batéria nižšiu kapacitu a motor s hustejším olejom sa točí ťažšie, takže slabá batéria to už nezvládne.',
            'Ak auto už na jeseň štartuje ťažšie, nečakajte na prvý mráz. Výmenu batérie si môžete spojiť napríklad so [sezónnym prezutím](/sluzby/pneuservis-bratislava) alebo [výmenou oleja](/sluzby/vymena-oleja-bratislava) a vybaviť všetko na jednu návštevu.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['ĎALŠIE SLUŽBY', 'KONTROLY VOZIDLA'],
        only: ['Výmena batérie', 'Kontrola elektroniky a osvetlenia', 'Diagnostika riadiacej jednotky'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Koľko stojí výmena batérie?',
                a: 'Práca na výmene batérie stojí od 30 €. Konečná suma závisí od auta, pri niektorých modeloch je batéria ťažšie prístupná.',
            },
            {
                q: 'Ako dlho vydrží autobatéria?',
                a: 'Závisí od toho, ako auto jazdí. Krátke trasy, časté štartovanie a veľa elektroniky ju opotrebúvajú rýchlejšie. Keď auto štartuje čoraz ťažšie, je čas ju skontrolovať.',
            },
            {
                q: 'Prečo sa mi auto vybíja cez noc?',
                a: 'Najčastejšie je to dosluhujúca batéria alebo zvýšený odber, keď auto stojí, napríklad jednotka, ktorá sa neuspí, alebo chyba v elektroinštalácii. Príčinu nájdeme kontrolou.',
            },
            {
                q: 'Je to batéria, alebo alternátor?',
                a: 'Ak sa auto vybíja aj počas jazdy a nová batéria vydrží len krátko, podozrenie padá na nabíjanie. Overíme to skôr, než sa niečo vymení.',
            },
            {
                q: 'Môžem si doniesť vlastnú batériu?',
                a: 'Zavolajte nám a dohodneme sa. Dôležité je, aby batéria zodpovedala tomu, čo vaše auto potrebuje.',
            },
            {
                q: 'Svieti mi po výmene batérie kontrolka, čo s tým?',
                a: 'Po odpojení batérie sa v niektorých autách objavia chybové hlásenia. Načítame ich diagnostikou a overíme, či ide len o hlásenie po odpojení, alebo o skutočnú chybu.',
            },
            {
                q: 'Auto mi nenaštartovalo, čo mám robiť?',
                a: 'Zavolajte nám na 0944 236 257. Ak auto nenaštartuje, zabezpečíme odťah do dielne, kde zistíme príčinu.',
            },
            {
                q: 'Koľko trvá výmena batérie?',
                a: 'Pri bežne prístupnej batérii je to rýchla práca. Ak treba hľadať, prečo sa auto vybíja, potrebujeme viac času, ktorý vám vopred povieme.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na 0944 236 257 alebo vyplňte formulár na nacenenie. Dohodneme termín, ktorý vám vyhovuje.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Sme na Odborárskej 52 v Bratislave, Novom Meste, kúsok od Račianskej a Vajnorskej. Ak auto nenaštartuje a neviete k nám prísť, pozrite si [odťah a vyzdvihnutie auta](/sluzby/odtah-vozidla-bratislava). Prehľad mestských častí, odkiaľ k nám zákazníci chodia, nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
];

export default content;
