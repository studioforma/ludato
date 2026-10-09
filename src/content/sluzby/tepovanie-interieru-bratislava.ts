import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Interiér auta trpí viac, než si myslíme. Blato na topánkach, rozliata káva, drobky od detí, srsť psa a pot z letných jázd sa postupne usadzujú v sedadlách a kobercoch. Vysávanie odstráni to, čo je na povrchu, no špina a pachy v hĺbke čalúnenia zostávajú. Na to slúži tepovanie.',
            'V Bratislave, Novom Meste, tepujeme interiér auta cez deň od 50 € a v noci od 80 €. Ak stačí základ, ponúkame aj čistenie interiéru s vysávaním za 45 €. Tepovanie sa hodí pred predajom auta, po zime, po prevoze zvierat alebo vtedy, keď sa v aute jednoducho chcete opäť cítiť dobre.',
        ],
    },
    {
        type: 'cta',
        heading: 'Potrebuje vaše auto vyčistiť zvnútra?',
        text: 'Škvrna, ktorá sa nechá zaschnúť, sa z čalúnenia dostáva čoraz ťažšie. Vytepujeme sedadlá aj koberce, cez deň alebo v noci.',
        points: [
            'Tepovanie cez deň od 50 €',
            'Tepovanie v noci od 80 €',
            'Čistenie interiéru s vysávaním za 45 €',
        ],
        secondaryHref: '/nacenenie?sluzba=tepovanie',
        secondaryLabel: 'Objednať tepovanie',
    },
    {
        type: 'list',
        heading: 'Čo tepovanie rieši',
        items: [
            'Škvrny na sedadlách a kobercoch',
            'Špinu a prach usadené hlboko v čalúnení',
            'Zápach, ktorý sa drží v textíliách',
            'Srsť a nečistoty po zvieratách',
            'Soľ a blato v kobercoch po zime',
            'Celkový vzhľad auta pred predajom',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Čo si môžete vybrať',
        items: [
            {
                title: 'Čistenie interiéru s vysávaním, 45 €',
                text: 'Základné vyčistenie auta zvnútra. Hodí sa, keď auto nie je výrazne znečistené a chcete ho dať do poriadku, napríklad pravidelne alebo pred dlhšou cestou.',
            },
            {
                title: 'Tepovanie cez deň, od 50 €',
                text: 'Hĺbkové čistenie textilných sedadiel a kobercov. Čistiaci roztok sa vstrekne do čalúnenia a spolu so špinou sa hneď odsaje. Cena závisí od veľkosti auta a miery znečistenia.',
            },
            {
                title: 'Tepovanie v noci, od 80 €',
                text: 'Tepovanie robíme aj v noci, takže auto môžete cez deň normálne používať. Podrobnosti o odovzdaní a prevzatí auta si dohodneme pri objednaní.',
            },
            {
                title: 'Kombinácia s ozónom',
                text: 'Ak v aute okrem špiny zostáva aj zápach, napríklad z cigariet, odporúčame po tepovaní aj [ozónovú dezinfekciu](/sluzby/ozonova-dezinfekcia-bratislava) za 30 €.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Vysávanie, čistenie a tepovanie: aký je rozdiel',
        paragraphs: [
            'Vysávanie odstráni voľnú špinu z povrchu, drobky, prach a piesok. Čistenie interiéru ide o krok ďalej a dá do poriadku aj plasty a povrchy, ktoré sa bežne prehliadnu. Obe sú vhodné na pravidelnú údržbu.',
            'Tepovanie je hĺbkové čistenie textílií. Čistiaci roztok prenikne do vlákien, uvoľní špinu a hneď sa aj so špinou odsaje. Vďaka tomu odstráni aj nečistoty a pachy, ktoré vysávač nedosiahne, a sedadlá často opäť získajú pôvodnú farbu.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to prebieha',
        steps: [
            {
                title: 'Vyprázdnite auto',
                text: 'Pred tepovaním vyberte z auta osobné veci, detské sedačky a všetko z priehradok. Ušetríte čas aj sebe aj nám.',
            },
            {
                title: 'Vysávanie',
                text: 'Najprv auto dôkladne vysajeme, aby sa voľná špina pri tepovaní nerozmazala.',
            },
            {
                title: 'Tepovanie',
                text: 'Sedadlá a koberce vytepujeme, pri silnejších škvrnách použijeme vhodný prípravok.',
            },
            {
                title: 'Sušenie',
                text: 'Čalúnenie po tepovaní potrebuje čas, aby uschlo. Ako dlho, závisí od materiálu, miery znečistenia a počasia.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kedy sa tepovanie oplatí',
        paragraphs: [
            'Najčastejšie na jar, keď je potrebné dostať z kobercov soľ a blato po zime. Soľ v kobercoch drží vlhkosť a v aute potom môže zapáchať. Ďalšou typickou príležitosťou je predaj auta: čistý interiér robí na kupujúceho dobrý dojem a auto pôsobí udržiavane.',
            'Tepovanie sa oplatí aj po prevoze zvierat, po rozliatí nápoja alebo jedla a v rodinách s malými deťmi, kde sa sedadlá znečistia rýchlo. A keď si kupujete auto z druhej ruky, je to dobrý spôsob, ako začať v čistom.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo nám auto na tepovanie zveriť',
        paragraphs: [
            'Ste u nás aj tak kvôli prezutiu alebo servisu? Tepovanie môžete spojiť so [sezónnym prezutím](/sluzby/pneuservis-bratislava) alebo s inou návštevou a vybaviť všetko naraz. Nemusíte hľadať ďalšiu prevádzku a auto preberiete čisté aj zvnútra.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Škvrny neriešte agresívnymi prípravkami z domácnosti. Niektoré čistiace prostriedky môžu čalúnenie odfarbiť alebo zanechať mapy, ktoré sa potom odstraňujú ťažšie. Rovnako nepoužívajte priveľa vody, mokré čalúnenie a koberec, ktoré poriadne nevyschnú, môžu začať zapáchať.',
            'Ak máte kožené sedadlá alebo citlivé materiály, povedzte nám to pri objednaní. Postup sa prispôsobí materiálu.',
        ],
    },
    {
        type: 'text',
        heading: 'Zápach z ventilácie',
        paragraphs: [
            'Ak aj po tepovaní cítiť zatuchnutý zápach, najmä po zapnutí ventilácie, zdroj býva v klimatizácii alebo v starom kabínovom filtri. V takom prípade pomôže [servis klimatizácie](/sluzby/servis-klimatizacie-bratislava) a výmena filtra.',
        ],
    },
    {
        type: 'text',
        heading: 'Autá s deťmi',
        paragraphs: [
            'V rodinnom aute sa sedadlá znečistia rýchlo: rozsypané sušienky, rozliaty džús, blato z ihriska. Najviac trpia zadné sedadlá a miesta pod detskými sedačkami, kam sa pri bežnom upratovaní nedostanete. Pri tepovaní vyčistíme aj miesta pod nimi.',
            'Pred tepovaním z auta vyberte detské sedačky. Poťahy sedačiek sa dajú často prať doma podľa návodu výrobcu.',
        ],
    },
    {
        type: 'text',
        heading: 'Soľ a vlhkosť po zime',
        paragraphs: [
            'Soľ z ciest sa na topánkach dostáva do auta a usadzuje sa v kobercoch. Na kobercoch vytvára biele mapy a viaže vlhkosť, takže koberec zostáva dlho vlhký. V teplejšom počasí potom začne v aute zapáchať a okná sa zahmlievajú.',
            'Tepovanie soľ z kobercov vytiahne. Na zimu sa oplatí používať gumené koberce, ktoré zachytia vodu aj soľ a dajú sa jednoducho vyliať a umyť.',
        ],
    },
    {
        type: 'list',
        heading: 'Ako udržať interiér čistý dlhšie',
        items: [
            'Používajte gumené koberce, hlavne v zime',
            'Škvrny riešte hneď, kým nezaschnú',
            'V aute nejedzte, alebo majte po ruke vrecko na odpadky',
            'Zvieratá voste na deke alebo v prepravke',
            'Auto pravidelne vysávajte, piesok sa zarýva do vlákien',
            'Raz za čas nechajte auto vyčistiť dôkladne',
        ],
    },
    {
        type: 'text',
        heading: 'Čo sa dá a čo sa nedá vyčistiť',
        paragraphs: [
            'Väčšinu bežných škvŕn od kávy, blata, jedla či nápojov tepovanie odstráni alebo výrazne zosvetlí. Niektoré škvrny, napríklad staré zaschnuté škvrny od farby, atramentu alebo oleja, sa môžu dostať len čiastočne, najmä ak sa ich niekto predtým pokúšal odstrániť nevhodným prípravkom. Pri objednaní nám povedzte, s čím bojujete, a poradíme vám, čo sa dá čakať.',
            'Opotrebované, vyblednuté alebo poškodené čalúnenie tepovanie neobnoví. Vyčistí ho, no diery či odreté miesta zostanú.',
        ],
    },
    {
        type: 'text',
        heading: 'Interiér ako súčasť starostlivosti o auto',
        paragraphs: [
            'Čistý interiér nie je len o vzhľade. Prach a nečistoty v aute dýchate pri každej jazde, vlhké koberce podporujú zápach a zahmlievanie okien. Pravidelné čistenie interiéru a výmena kabínového filtra, ktorú robíme v rámci [olejového servisu](/sluzby/vymena-oleja-bratislava), zlepšia vzduch, ktorý v aute dýchate.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['ĎALŠIE SLUŽBY', 'DEZINFEKCIA'],
        only: ['Tepovanie cez deň', 'Tepovanie v noci', 'Čistenie interiéru + vysávanie', 'Ozónová dezinfekcia interiéru'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Koľko stojí tepovanie auta?',
                a: 'Tepovanie cez deň stojí od 50 €, v noci od 80 €. Presná cena závisí od veľkosti auta a miery znečistenia. Čistenie interiéru s vysávaním stojí 45 €.',
            },
            {
                q: 'Prečo ponúkate tepovanie v noci?',
                a: 'Aby ste mohli auto cez deň normálne používať. Podrobnosti o odovzdaní a prevzatí dohodneme pri objednaní.',
            },
            {
                q: 'Ako dlho schnú sedadlá?',
                a: 'Závisí od materiálu, miery znečistenia a počasia. Pri objednaní vám povieme, s čím počítať.',
            },
            {
                q: 'Odstráni tepovanie zápach z cigariet?',
                a: 'Tepovanie zápach výrazne zmierni, pri silnom zafajčení odporúčame kombináciu s ozónovou dezinfekciou.',
            },
            {
                q: 'Tepujete aj kožené sedadlá?',
                a: 'Povedzte nám pri objednaní, aké máte čalúnenie. Postup sa prispôsobí materiálu.',
            },
            {
                q: 'Oplatí sa tepovanie pred predajom auta?',
                a: 'Áno, čistý interiér robí na kupujúceho dobrý dojem a auto pôsobí udržiavane.',
            },
            {
                q: 'Môžem tepovanie spojiť s prezutím?',
                a: 'Áno, môžete vybaviť prezutie aj tepovanie pri jednej návšteve.',
            },
            {
                q: 'Vyčistíte aj koberce v kufri?',
                a: 'Povedzte nám pri objednaní, čo všetko chcete vyčistiť, a dohodneme rozsah aj cenu.',
            },
            {
                q: 'Odstránite srsť po psovi?',
                a: 'Áno, pri tepovaní a vysávaní odstránime srsť zo sedadiel aj kobercov. Pri silnom znečistení to môže trvať dlhšie.',
            },
            {
                q: 'Pomôže tepovanie proti zahmlievaniu okien?',
                a: 'Ak sú príčinou vlhké koberce, napríklad po zime, tepovanie a vysušenie pomôže. Ak voda do auta zateká, treba nájsť a opraviť zdroj.',
            },
            {
                q: 'Môžem auto po tepovaní hneď používať?',
                a: 'Čalúnenie potrebuje čas uschnúť. Pri objednaní vám povieme, s čím počítať.',
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
