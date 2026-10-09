import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Zápach v aute sa len tak nevyvetrá. Cigaretový dym, pes na zadnom sedadle, rozliate mlieko alebo vlhkosť po daždi sa usadia v čalúnení, v stropnici aj vo ventilácii a vonné stromčeky ich len na chvíľu prekryjú. Ozón funguje inak: dostane sa všade, kam prúdi vzduch, a pachy rozkladá namiesto toho, aby ich zakrýval.',
            'V Bratislave, Novom Meste, robíme ozónovú dezinfekciu interiéru auta za 30 €. Je to rýchly spôsob, ako osviežiť auto po kúpe z druhej ruky, po prevoze zvierat alebo vtedy, keď z ventilácie ide nepríjemný zápach.',
        ],
    },
    {
        type: 'cta',
        heading: 'Smrdí vám v aute?',
        text: 'Zápach, ktorý sa usadí v čalúnení a vo ventilácii, sa s každým dňom drží pevnejšie. Ozón sa dostane aj tam, kam sa s handrou nedostanete.',
        points: [
            'Ozónová dezinfekcia interiéru za 30 €',
            'Tepovanie interiéru cez deň od 50 €',
            'Servis klimatizácie od 40 €',
        ],
        secondaryHref: '/nacenenie?sluzba=ozon',
        secondaryLabel: 'Objednať dezinfekciu',
    },
    {
        type: 'list',
        heading: 'Kedy ozónová dezinfekcia pomôže',
        items: [
            'Zápach z cigariet v čalúnení a stropnici',
            'Pach po zvieratách',
            'Zatuchnutý zápach po vlhkosti alebo zatečení',
            'Nepríjemný zápach z ventilácie a klimatizácie',
            'Osvieženie auta kúpeného z druhej ruky',
            'Pachy po rozliatych potravinách',
        ],
    },
    {
        type: 'text',
        heading: 'Čo je ozón a prečo funguje',
        paragraphs: [
            'Ozón je forma kyslíka s tromi atómami namiesto dvoch. Je nestály a ľahko reaguje s inými látkami, vrátane molekúl, ktoré spôsobujú zápach. Preto pachy nezakrýva vôňou, ale ich rozkladá. Používa sa aj pri úprave vody či dezinfekcii priestorov.',
            'V aute je výhoda ozónu v tom, že je to plyn. Prenikne do čalúnenia, pod sedadlá, do stropnice aj do ventilačných kanálov, teda na miesta, kam sa pri bežnom čistení nedostanete. Po zákroku sa ozón v priebehu času sám rozpadne späť na kyslík.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to prebieha',
        steps: [
            {
                title: 'Príprava auta',
                text: 'Ideálne je, keď je auto vyprázdnené a bez odpadkov. Zdroj zápachu, napríklad rozliatu tekutinu, treba najprv odstrániť, ozón nenahradí čistenie.',
            },
            {
                title: 'Ozonizácia',
                text: 'Generátor ozónu necháme pracovať v uzavretom aute. Počas zákroku v aute nikto nie je.',
            },
            {
                title: 'Prečistenie ventilácie',
                text: 'Ozón prejde aj cez ventilačný systém, kde sa často drží zatuchnutý zápach.',
            },
            {
                title: 'Vyvetranie',
                text: 'Po zákroku auto dôkladne vyvetráme, kým vám ho odovzdáme.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Ozón a klimatizácia',
        paragraphs: [
            'Zatuchnutý zápach, ktorý ide z ventilácie hlavne po zapnutí klimatizácie, má často pôvod vo výparníku. Je to diel, na ktorom sa kondenzuje vlhkosť, a keď sa nevysuší, môže zapáchať. Ozón zápach z ventilácie zmierni, no ak je príčinou zanedbaná klimatizácia, oplatí sa ju dať do poriadku.',
            'Ozónovú dezinfekciu preto môžete spojiť so [servisom klimatizácie](/sluzby/servis-klimatizacie-bratislava). Pri zápachu z ventilácie sa oplatí skontrolovať aj kabínový filter, ktorý meníme v rámci [olejového servisu](/sluzby/vymena-oleja-bratislava).',
        ],
    },
    {
        type: 'text',
        heading: 'Ozón alebo tepovanie',
        paragraphs: [
            'Ozón a tepovanie riešia rôzne veci. Tepovanie vyčistí sedadlá a koberce od špiny a škvŕn, ozón rieši zápach a pôsobí aj tam, kam sa pri tepovaní nedostanete. Pri silno znečistenom aute má najlepší výsledok kombinácia: najprv [tepovanie interiéru](/sluzby/tepovanie-interieru-bratislava), potom ozón.',
            'Ak zdrojom zápachu je škvrna alebo zvyšky v čalúnení, samotný ozón pomôže len čiastočne, pretože zdroj zostáva. Preto vám pri objednaní poradíme, čo dáva zmysel pre vaše auto.',
        ],
    },
    {
        type: 'text',
        heading: 'Po kúpe auta z druhej ruky',
        paragraphs: [
            'Auto po predchádzajúcom majiteľovi nesie jeho stopy: fajčenie, zvieratá, parfumy. Ozónová dezinfekcia je jednoduchý spôsob, ako začať s autom nanovo. Ak ste auto práve kúpili, je to aj dobrá chvíľa na [výmenu oleja a filtrov](/sluzby/vymena-oleja-bratislava), nech viete, na čom ste.',
        ],
    },
    {
        type: 'text',
        heading: 'Bezpečnosť',
        paragraphs: [
            'Ozón vo vyššej koncentrácii nie je vhodný na dýchanie, preto počas zákroku v aute nikto nie je a po zákroku auto dôkladne vyvetráme. Keď si auto preberáte, ozón už v ňom nepôsobí. Po zákroku môžete chvíľu cítiť typickú "čerstvú" vôňu, ktorá rýchlo vyprchá.',
            'Ozónovú dezinfekciu nerobte doma sami s lacnými generátormi bez skúseností. Pri nesprávnom použití môže vysoká koncentrácia ozónu dráždiť dýchacie cesty.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Ozón nie je zázrak. Ak je v aute zdroj zápachu, napríklad mokrý koberec po zatečení alebo zvyšky jedla pod sedadlom, zápach sa po čase vráti. Najprv treba odstrániť príčinu, až potom má ozón zmysel.',
            'Pri zatuchnutom zápachu sa oplatí zistiť, odkiaľ do auta ide voda. Upchaté odtoky, poškodené tesnenia dverí alebo kufra vedia vlhkosť do auta púšťať opakovane.',
        ],
    },
    {
        type: 'text',
        heading: 'Zápach po zvieratách',
        paragraphs: [
            'Psy a mačky zanechávajú v aute srsť, sliny aj pach, ktorý sa drží v textíliách a v kobercoch. Ak vozíte zvieratá pravidelne, pach sa postupne kumuluje a po čase ho cítiť aj vtedy, keď zviera v aute nie je. Ozón tento pach rozloží aj v miestach, kam sa pri bežnom vysávaní nedostanete.',
            'Pri silnom znečistení srsťou a nečistotami odporúčame najprv tepovanie a až potom ozón. Srsť zachytená v kobercoch by inak zápach udržiavala ďalej.',
        ],
    },
    {
        type: 'text',
        heading: 'Vlhkosť a zatuchnutý zápach',
        paragraphs: [
            'Zatuchnutý zápach je častým znakom vlhkosti v aute. Voda sa môže dostať dnu cez upchaté odtoky pod čelným sklom, cez poškodené tesnenia dverí, kufra alebo strešného okna, prípadne po rozliatí väčšieho množstva tekutiny. Vlhké koberce schnú pomaly a v teplom počasí začnú rýchlo zapáchať.',
            'Ozón zápach zmierni, no ak voda do auta naďalej zateká, zápach sa vráti. Preto je dôležité najprv nájsť a odstrániť zdroj vlhkosti, auto vysušiť a až potom použiť ozón.',
        ],
    },
    {
        type: 'text',
        heading: 'Ozón pred predajom auta',
        paragraphs: [
            'Ak auto predávate, neutrálny zápach v interiéri pôsobí na kupujúceho lepšie než zápach cigariet alebo zvierat. V kombinácii s tepovaním je ozónová dezinfekcia lacný spôsob, ako dať autu pred predajom čo najlepší dojem.',
            'Rovnako pri kúpe: ak si kupujete auto, ktoré niekto fajčil, ozón pomôže zbaviť sa zápachu, ktorý by vás inak sprevádzal každý deň.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako dlho to trvá',
        paragraphs: [
            'Samotný zákrok aj následné vyvetranie si vyžadujú určitý čas, ktorý závisí od veľkosti auta a intenzity zápachu. Pri objednaní vám povieme, kedy si môžete auto vyzdvihnúť. Dezinfekciu tiež môžete spojiť s inou návštevou, napríklad so servisom alebo prezutím.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo nestačí osviežovač',
        paragraphs: [
            'Vonné stromčeky a spreje zápach nerozkladajú, len ho prekrývajú inou vôňou. Keď vyprchajú, pôvodný zápach je späť, často ešte zmiešaný s parfumom. Niektorým ľuďom navyše silné osviežovače spôsobujú bolesť hlavy. Ozón pôsobí na samotné molekuly, ktoré zápach spôsobujú, a po zákroku v aute nezostáva žiadna umelá vôňa.',
            'Ak chcete mať v aute príjemnú vôňu, dajte ju tam až po dezinfekcii, keď už v aute nie je čo prekrývať.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['DEZINFEKCIA', 'ĎALŠIE SLUŽBY'],
        only: ['Ozónová dezinfekcia interiéru', 'Tepovanie cez deň', 'Tepovanie v noci', 'Čistenie interiéru + vysávanie'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Koľko stojí ozónová dezinfekcia?',
                a: 'Ozónová dezinfekcia interiéru stojí 30 €.',
            },
            {
                q: 'Odstráni ozón zápach z cigariet?',
                a: 'Ozón zápach z cigariet výrazne zmierni, pretože prenikne aj do čalúnenia a stropnice. Pri silnom zafajčení odporúčame kombináciu s tepovaním.',
            },
            {
                q: 'Je to bezpečné?',
                a: 'Áno. Počas zákroku v aute nikto nie je a po ňom auto dôkladne vyvetráme, kým vám ho odovzdáme.',
            },
            {
                q: 'Pomôže ozón proti zápachu z klimatizácie?',
                a: 'Zápach z ventilácie zmierni. Ak je príčinou zanedbaná klimatizácia, oplatí sa urobiť aj jej servis.',
            },
            {
                q: 'Treba auto pred ozónom vyčistiť?',
                a: 'Odporúčame auto vyprázdniť a odstrániť zdroj zápachu. Ozón nenahradí čistenie, je jeho doplnkom.',
            },
            {
                q: 'Ako často robiť ozónovú dezinfekciu?',
                a: 'Podľa potreby, napríklad po kúpe auta, po prevoze zvierat alebo keď sa objaví zápach. Pravidelne ju netreba.',
            },
            {
                q: 'Poškodí ozón interiér?',
                a: 'Pri správnom použití a krátkom pôsobení nie. Preto ozón používame len po dobu potrebnú na zákrok.',
            },
            {
                q: 'Odstráni ozón pach po psovi?',
                a: 'Pach po zvieratách ozón výrazne zmierni. Pri veľkom množstve srsti odporúčame najprv tepovanie.',
            },
            {
                q: 'Môžem ozón spojiť so servisom?',
                a: 'Áno, dezinfekciu môžete spojiť napríklad so servisom klimatizácie alebo s prezutím a vybaviť všetko naraz.',
            },
            {
                q: 'Zostane v aute nejaká vôňa?',
                a: 'Nie, ozón nepridáva žiadnu umelú vôňu. Po zákroku môžete chvíľu cítiť typickú čerstvú vôňu, ktorá rýchlo vyprchá.',
            },
            {
                q: 'Ako sa objednám?',
                a: 'Zavolajte na 0944 236 257 alebo vyplňte formulár na nacenenie.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Sme na Odborárskej 52 v Bratislave, Novom Meste. Autom k nám chodia zákazníci z celej Bratislavy aj okolia, prehľad mestských častí s časom dojazdu nájdete na stránke [Kde pôsobíme](/kde-posobime). Ak nemáte čas prísť, auto si vyzdvihneme v rámci Bratislavy a okolia za 50 €.',
        ],
    },
];

export default content;
