import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Najväčšia starosť pri oprave auta často nie je cena, ale to, ako sa bez neho dostanete do práce, po deti do školy alebo na nákup. Pri rýchlom servise to nevadí, pri oprave, ktorá trvá niekoľko dní, však bez auta zostane celá rodina.',
            'Preto v Ludato Family Autoservis v Bratislave, Novom Meste, ponúkame náhradné vozidlo. Stojí 35 € na deň, pri servise nad 1000 € ho dostanete zadarmo a pri poistnej udalosti ho hradí poisťovňa.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo ponúkame',
        items: [
            'Náhradné vozidlo počas opravy za 35 € na deň',
            'Náhradné vozidlo zadarmo pri servise nad 1000 €',
            'Náhradné vozidlo pri poistnej udalosti, hradené poisťovňou',
            'Vozidlá Škoda Fabia II. generácie a VW Passat',
            'Možnosť kombinácie s vyzdvihnutím vášho auta (pickup)',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Tri spôsoby, ako náhradné vozidlo získať',
        items: [
            {
                title: 'Za 35 € na deň',
                text: 'Pri bežnej oprave, ktorá trvá dlhšie, než chcete byť bez auta, vám náhradné vozidlo požičiame za 35 € na deň. Platíte len za dni, keď je vaše auto u nás.',
            },
            {
                title: 'Zadarmo pri servise nad 1000 €',
                text: 'Ak cena opravy presiahne 1000 €, náhradné vozidlo počas opravy dostanete bez poplatku. Väčšie opravy trvajú dlhšie a nechceme, aby ste za to platili dvakrát.',
            },
            {
                title: 'Pri poistnej udalosti',
                text: 'Ak ide o opravu v rámci poistnej udalosti, náhradné vozidlo hradí poisťovňa. Rozsah krytia sa riadi podmienkami vašej poistky, pri objednaní vám pomôžeme zistiť, na čo máte nárok.',
            },
            {
                title: 'Aké autá požičiavame',
                text: 'Požičiavame Škody Fabia II. generácie s benzínovým motorom, malé a úsporné autá, s ktorými sa v Bratislave ľahko zaparkuje, a spoznáte ich podľa červenej farby a nášho loga na zadnom skle. Ak potrebujete viac miesta, máme aj priestranné VW Passat z rokov 2019 a 2022, vhodné na dlhšie cesty alebo pre rodinu.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to prebieha',
        steps: [
            {
                title: 'Dohodnite sa pri objednaní',
                text: 'O náhradné vozidlo požiadajte už pri objednávaní servisu, aby sme ho mali na váš termín pripravené.',
            },
            {
                title: 'Prevzatie pri odovzdaní auta',
                text: 'Keď k nám prídete s autom na opravu, náhradné vozidlo si rovno prevezmete a môžete pokračovať v bežnom dni.',
            },
            {
                title: 'Oprava vášho auta',
                text: 'Kým jazdíte náhradným autom, opravíme to vaše. Ak sa pri oprave objaví niečo navyše, ozveme sa vám skôr, než budeme pokračovať.',
            },
            {
                title: 'Výmena späť',
                text: 'Po dokončení opravy vrátite náhradné vozidlo a odchádzate vo vlastnom aute.',
            },
        ],
    },
    {
        type: 'image',
        src: '/sluzby/nahradne-vozidlo-skoda-fabia-prevadzka-ludato-bratislava.webp',
        alt: 'Dve červené náhradné vozidlá Škoda Fabia pred autoservisom Ludato Family na Odborárskej 52, Bratislava Nové Mesto',
        caption: 'Náhradné vozidlá Škoda Fabia pred našou prevádzkou na Odborárskej.',
    },
    {
        type: 'text',
        heading: 'Pri akých opravách má náhradné vozidlo zmysel',
        paragraphs: [
            'Pri [výmene oleja](/sluzby/vymena-oleja-bratislava) alebo prezutí počkáte a odídete, náhradné auto netreba. Zmysel má pri opravách, ktoré trvajú celý deň alebo viac dní. Typicky ide o [výmenu rozvodov](/sluzby/rozvody-bratislava), rozsiahlejšiu opravu [podvozku](/sluzby/podvozok-bratislava), opravy motora, spojky či prevodovky, karosárske práce a lakovanie alebo zložitejšie hľadanie poruchy.',
            'Náhradné vozidlo pomôže aj vtedy, keď čakáme na diel. Niektoré diely treba objednať a ich dodanie trvá, takže auto zostane v servise dlhšie, než samotná práca vyžaduje.',
        ],
    },
    {
        type: 'text',
        heading: 'Náhradné vozidlo pri poistnej udalosti',
        paragraphs: [
            'Po nehode alebo inej poistnej udalosti býva auto v servise dlhšie, pretože okrem opravy je potrebná aj komunikácia s poisťovňou a obhliadka škody. Práve vtedy je náhradné vozidlo najcennejšie, a keď ho hradí poisťovňa, nemusíte ho platiť z vlastného.',
            'Pri objednaní nám povedzte, že ide o poistnú udalosť, a ideálne majte po ruke číslo škodovej udalosti. Ak si nie ste istí, na čo máte podľa poistky nárok, pomôžeme vám to zistiť.',
        ],
    },
    {
        type: 'text',
        heading: 'Kombinácia s vyzdvihnutím auta',
        paragraphs: [
            'Ak nemáte čas priviezť auto k nám, vyzdvihneme ho v rámci Bratislavy a okolia za 50 €. Keď je auto nepojazdné, zabezpečíme odťah, v Bratislave a okolí za 170 € a do zahraničia za 1,50 € za kilometer.',
            'Náhradné vozidlo a vyzdvihnutie sa dajú dohodnúť spolu, takže celú opravu vybavíte bez toho, aby ste museli do servisu chodiť osobne viac, než je nutné. Podrobnosti dohodneme pri objednaní.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako naplánovať dlhšiu opravu',
        paragraphs: [
            'Ak viete, že vaše auto čaká väčší zásah, oplatí sa servis naplánovať s predstihom. Zavolajte nám, opíšte problém a dohodneme termín, na ktorý budeme mať pripravené diely aj náhradné vozidlo. Pri opravách, kde najprv treba zistiť príčinu, začíname [počítačovou diagnostikou](/sluzby/pocitacova-diagnostika-bratislava) a rozsah opravy vám povieme skôr, než sa do nej pustíme.',
            'Vďaka tomu viete dopredu, ako dlho bude auto u nás, koľko bude oprava stáť a či sa dostanete nad hranicu 1000 €, pri ktorej je náhradné vozidlo zadarmo. Žiadne prekvapenia pri preberaní auta.',
        ],
    },
    {
        type: 'text',
        heading: 'Náhradné vozidlo alebo taxík',
        paragraphs: [
            'Pri oprave na jeden deň si niektorí zákazníci vystačia s hromadnou dopravou alebo taxíkom. Pri niekoľkodňovej oprave však jazdy tam a späť, nákupy a vozenie detí rýchlo narastú a náhradné vozidlo za 35 € na deň často vyjde lacnejšie a hlavne pohodlnejšie.',
            'Náhradné auto máte k dispozícii celý deň, bez čakania na odvoz a bez plánovania trás podľa cestovných poriadkov. Keď sa k tomu pridá vyzdvihnutie vášho auta priamo z domu alebo z práce, opravu vybavíte takmer bez toho, aby ste ju pocítili.',
        ],
    },
    {
        type: 'text',
        heading: 'Pre koho je náhradné vozidlo najväčšou pomocou',
        paragraphs: [
            'Najviac ho oceňujú rodiny, ktoré majú jedno auto a každý deň s ním vozia deti do školy či na krúžky. Rovnako ľudia, ktorí dochádzajú do práce na miesta, kam sa hromadnou dopravou dostanú len ťažko, alebo pracujú na zmeny, keď autobusy a električky nechodia.',
            'Náhradné vozidlo pomôže aj živnostníkom a malým firmám, pre ktoré je auto pracovný nástroj. Každý deň bez auta pre nich znamená stratu zákaziek, preto je pre nich dôležité, aby oprava nezastavila ich prácu.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo náhradné vozidlo ponúkame',
        paragraphs: [
            'Sme rodinný servis a vieme, že auto nie je luxus, ale nástroj na každý deň. Keď je oprava dlhšia, nechceme, aby ste kvôli nej museli presúvať prácu, riešiť taxík alebo prosiť známych o odvoz.',
            'Náhradné vozidlo nám zároveň umožňuje robiť opravy poriadne. Keď zákazník nie je pod tlakom, že auto potrebuje hneď zajtra ráno, môžeme si dať čas na presnú diagnostiku a opravu bez skratiek.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Náhradné vozidlo odporúčame rezervovať vopred, ideálne už pri objednávaní servisu. Ak ho potrebujete v konkrétny deň, povedzte nám to čo najskôr, aby sme vám ho vedeli rezervovať.',
            'S náhradným vozidlom zaobchádzajte rovnako ako s vlastným. Podmienky prevzatia a vrátenia vám vysvetlíme pri odovzdaní, aby bolo všetko jasné ešte predtým, než vyrazíte.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'Veľa našich zákazníkov z Nového Mesta, Rače či Vajnor dochádza autom do práce naprieč Bratislavou, kde je hromadná doprava pomalá alebo nepohodlná. Náhradné vozidlo im umožní fungovať normálne aj počas niekoľkodňovej opravy. Sme na Odborárskej, blízko Račianskej aj Vajnorskej, takže náhradné auto si vyzdvihnete a vrátite bez zbytočného zdržania.',
        ],
    },
    {
        type: 'prices',
        heading: 'Ceny',
        categories: ['NÁHRADNÉ VOZIDLO', 'ĎALŠIE SLUŽBY'],
        only: [
            'Náhradné vozidlo počas opravy',
            'Náhradné vozidlo pri servise nad 1000 €',
            'Pickup vozidla',
            'Odťah vozidla',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Koľko stojí náhradné vozidlo?',
                a: 'Náhradné vozidlo stojí 35 € na deň. Pri servise nad 1000 € je zadarmo a pri poistnej udalosti ho hradí poisťovňa.',
            },
            {
                q: 'Kedy dostanem náhradné vozidlo zadarmo?',
                a: 'Keď cena servisu alebo opravy presiahne 1000 €. Vtedy náhradné vozidlo počas opravy nič nestojí.',
            },
            {
                q: 'Dostanem náhradné vozidlo aj pri poistnej udalosti?',
                a: 'Áno, pri poistnej udalosti náhradné vozidlo poskytujeme a hradí ho poisťovňa. Rozsah krytia závisí od podmienok vašej poistky.',
            },
            {
                q: 'Aké auto dostanem?',
                a: 'Požičiavame Škody Fabia II. generácie s benzínovým motorom a VW Passat z rokov 2019 a 2022.',
            },
            {
                q: 'Ako si náhradné vozidlo rezervujem?',
                a: 'Povedzte nám o ňom pri objednávaní servisu, najlepšie telefonicky na +421 944 236 257. Čím skôr nám dáte vedieť, tým istejšie ho pre vás budeme mať pripravené.',
            },
            {
                q: 'Na ako dlho si ho môžem požičať?',
                a: 'Náhradné vozidlo máte k dispozícii počas opravy vášho auta. Po jej dokončení ho vrátite pri preberaní vlastného auta.',
            },
            {
                q: 'Môžete moje auto aj vyzdvihnúť?',
                a: 'Áno, v rámci Bratislavy a okolia za 50 €. Nepojazdné auto odtiahneme za 170 €, do zahraničia za 1,50 € za kilometer.',
            },
            {
                q: 'Pri akej oprave sa náhradné vozidlo oplatí?',
                a: 'Pri opravách, ktoré trvajú celý deň alebo viac dní, napríklad pri výmene rozvodov, oprave podvozku alebo motora, karosárskych prácach, alebo keď čakáme na diel.',
            },
            {
                q: 'Je náhradné vozidlo dostupné vždy?',
                a: 'Dostupnosť si overte pri objednaní servisu. Hlavne v sezóne, keď je v servise viac áut naraz, sa oplatí rezervovať ho s predstihom.',
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
