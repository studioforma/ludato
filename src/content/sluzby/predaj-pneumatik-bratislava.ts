import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Pneumatiky sú jediná časť auta, ktorá sa dotýka cesty. Od ich stavu závisí, ako auto brzdí, ako drží v zákrute a ako sa správa na mokrej alebo zasneženej vozovke. Keď je dezén ojazdený alebo pneumatika starne, auto to cítiť skôr, než by ste čakali, a najviac vtedy, keď treba prudko zabrzdiť.',
            'V Bratislave, Novom Meste, vám nové pneumatiky dodáme na objednávku. Nemáme vlastný sklad pneumatík, preto ich objednávame cez overených partnerov podľa rozmeru a sezóny, ktoré potrebujete. Vieme dodať značky Pirelli, Michelin, Nexen a Matador. Pomôžeme vám s výberom a v našom pneuservise ich rovno namontujeme.',
        ],
    },
    {
        type: 'cta',
        heading: 'Potrebujete nové pneumatiky?',
        text: 'Ojazdený dezén predlžuje brzdnú dráhu, najmä na mokrej ceste. Nečakajte do poslednej chvíle pred sezónou, povedzte nám rozmer a pneumatiky vám zoženieme.',
        points: [
            'Pirelli, Michelin, Nexen a Matador na objednávku',
            'Montáž s vyvážením od 45 € za sadu',
            'Cenu pneumatík a montáže poznáte vopred',
        ],
        secondaryHref: '/nacenenie?sluzba=pneumatiky',
        secondaryLabel: 'Objednať pneumatiky',
    },
    {
        type: 'list',
        heading: 'Ako vám s pneumatikami pomôžeme',
        items: [
            'Poradíme s výberom rozmeru, sezóny a značky',
            'Pneumatiky objednáme cez našich partnerov',
            'Nové pneumatiky namontujeme a kolesá vyvážime',
            'Skontrolujeme ventily a stav diskov',
            'Staré pneumatiky vám môžeme uskladniť, ak sú ešte použiteľné',
            'Po montáži odporučíme, či treba skontrolovať geometriu',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Značky, ktoré vám dodáme',
        items: [
            {
                title: 'Pirelli',
                text: 'Taliansky výrobca pneumatík s dlhou tradíciou. Ponuka zahŕňa letné, zimné aj celoročné pneumatiky pre bežné osobné autá, SUV aj výkonnejšie vozidlá.',
            },
            {
                title: 'Michelin',
                text: 'Francúzsky výrobca, jedna z najznámejších značiek pneumatík na svete. Vyrába pneumatiky do všetkých sezón a pre široké spektrum áut, od malých mestských po SUV.',
            },
            {
                title: 'Nexen',
                text: 'Juhokórejský výrobca, ktorý ponúka letné, zimné aj celoročné pneumatiky. Často ho volia vodiči, ktorí hľadajú rozumný pomer ceny a úžitku pre bežné jazdenie.',
            },
            {
                title: 'Matador',
                text: 'Značka s koreňmi na Slovensku, dnes súčasť skupiny Continental. Ponúka pneumatiky pre osobné autá, SUV aj dodávky, letné, zimné aj celoročné.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Ako funguje objednávka',
        paragraphs: [
            'Pneumatiky nemáme na sklade, takže ich objednávame až pre vás. Výhoda je, že nie ste obmedzení tým, čo práve leží v regáli. Vyberiete si rozmer, sezónu a značku a my overíme dostupnosť u partnerov. Cenu pneumatík aj montáže vám povieme vopred, ešte pred objednaním.',
            'Keď pneumatiky prídu, dohodneme termín montáže. Ak máte záujem o inú značku, než uvádzame, opýtajte sa, overíme, či ju vieme dodať.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo nám povedať pri objednávke',
        items: [
            'Rozmer pneumatiky z boku pneumatiky alebo z technického preukazu',
            'Sezónu: letné, zimné alebo celoročné',
            'Preferovanú značku, ak nejakú máte',
            'Počet kusov, dve alebo štyri pneumatiky',
            'Či ich chcete rovno namontovať a či máte disky',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to prebieha',
        steps: [
            {
                title: 'Zistíme, čo potrebujete',
                text: 'Povedzte nám rozmer pneumatiky, ktorý nájdete na boku pneumatiky, alebo nám pošlite fotku. Doplníme sezónu, značku a to, ako s autom jazdíte.',
            },
            {
                title: 'Overíme dostupnosť a cenu',
                text: 'Pozrieme ponuku u partnerov a povieme vám cenu pneumatík aj montáže. Objednávame až po vašom súhlase.',
            },
            {
                title: 'Objednáme pneumatiky',
                text: 'Pneumatiky objednáme a dáme vám vedieť, keď sú pripravené na montáž.',
            },
            {
                title: 'Montáž a vyváženie',
                text: 'Nové pneumatiky namontujeme na disky, kolesá vyvážime a nasadíme na auto. Pri montáži skontrolujeme aj ventily a stav diskov.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Ako vybrať správny rozmer',
        paragraphs: [
            'Rozmer nájdete na boku pneumatiky v tvare napríklad 205/55 R16 91V. Prvé číslo je šírka v milimetroch, druhé je výška bočnice v percentách šírky, R16 je priemer disku v palcoch. Číslo a písmeno na konci sú index nosnosti a rýchlostný index, ktoré musia zodpovedať tomu, čo predpisuje výrobca auta.',
            'Povolené rozmery nájdete aj v technickom preukaze alebo na štítku vo dverách vodiča či na veku nádrže. Ak si nie ste istí, odfoťte bok pneumatiky a pošlite nám ho, rozmer prečítame za vás.',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Letné, zimné alebo celoročné',
        items: [
            {
                title: 'Letné pneumatiky',
                text: 'Majú tvrdšiu zmes, ktorá pri vyšších teplotách drží tvar a dobre brzdí na suchej aj mokrej ceste. V chlade však tvrdnú a strácajú priľnavosť.',
            },
            {
                title: 'Zimné pneumatiky',
                text: 'Mäkšia zmes a hustejšie lamely v dezéne im pomáhajú držať na studenej, mokrej aj zasneženej ceste. Na Slovensku musí mať zimná pneumatika v zimných podmienkach hĺbku dezénu aspoň 3 mm.',
            },
            {
                title: 'Celoročné pneumatiky',
                text: 'Kompromis pre vodičov, ktorí jazdia hlavne po meste a nechcú dvakrát ročne prezúvať. V extrémnych podmienkach nedosahujú vlastnosti čisto letných ani zimných pneumatík.',
            },
            {
                title: 'Ako sa rozhodnúť',
                text: 'Rozhoduje, koľko najazdíte, kde jazdíte a či chodíte aj na hory. Pri objednávke vám poradíme, čo dáva zmysel pre vaše auto a váš spôsob jazdy.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kedy je čas na nové pneumatiky',
        paragraphs: [
            'Zákonné minimum hĺbky dezénu je 1,6 mm, pri zimných pneumatikách v zimných podmienkach 3 mm. Brzdné vlastnosti sa však zhoršujú už skôr, preto sa oplatí pneumatiky meniť s rezervou. V drážkach dezénu sú indikátory opotrebenia, malé výstupky, a keď sa dezén zarovná s nimi, pneumatika je na konci.',
            'Okrem dezénu sledujte aj vek pneumatiky. Dátum výroby je na boku v štvorčíslí DOT, napríklad 2321 znamená 23. týždeň roku 2021. Guma časom tvrdne a praská, aj keď dezénu je ešte dosť. Ďalšími dôvodmi na výmenu sú praskliny na bočnici, výdute, nerovnomerné opotrebenie alebo poškodenie po náraze do obrubníka.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Na jednej náprave by mali byť vždy rovnaké pneumatiky, rovnakého rozmeru, značky, dezénu a s podobným opotrebením. Ak meníte len dve, nové patria podľa odporúčania výrobcov spravidla na zadnú nápravu, kde pomáhajú stabilite auta.',
            'Nerovnomerne ojazdené staré pneumatiky často prezrádzajú zlú geometriu. Ak ju neopravíte, zničí aj nové pneumatiky. Preto po montáži odporúčame skontrolovať [geometriu](/sluzby/geometria-bratislava), kontrola nastavenia stojí 16 €.',
        ],
    },
    {
        type: 'text',
        heading: 'Montáž, prezutie a uskladnenie na jednom mieste',
        paragraphs: [
            'Nové pneumatiky vám rovno namontujeme v našom [pneuservise](/sluzby/pneuservis-bratislava). Kompletné prezutie zahŕňa aj vyváženie každého kolesa a cena závisí od veľkosti disku. Ak vám po výmene zostane druhá sada, môžete ju nechať u nás, [sezónne uskladnenie pneumatík](/sluzby/uskladnenie-pneumatik-bratislava) stojí 40 € na sezónu.',
            'Pri prezutí sa dobre vidí aj na brzdy, takže ak si všimneme niečo podozrivé, povieme vám to. Výmenu pneumatík tak môžete spojiť s kontrolou auta pred sezónou.',
        ],
    },
    {
        type: 'text',
        heading: 'Pneumatiky a bratislavské cesty',
        paragraphs: [
            'Výtlky, obrubníky a koľaje od električiek dávajú pneumatikám v Bratislave zabrať. Náraz do jamy vie poškodiť bočnicu aj disk, aj keď to na prvý pohľad nie je vidieť. Ak po náraze auto ťahá do strany alebo volant vibruje, nechajte pneumatiky a geometriu skontrolovať.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny montáže',
        categories: ['KOMPLETNÉ PREZUTIE', 'USKLADNENIE A OPRAVA PNEUMATÍK'],
        only: ['12" – 14"', '15" – 17"', '18" – 21"', 'Sezónne uskladnenie pneumatík'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Máte pneumatiky na sklade?',
                a: 'Nie, pneumatiky objednávame pre vás cez našich partnerov podľa rozmeru, sezóny a značky, ktoré potrebujete. Dostupnosť a cenu vám povieme vopred.',
            },
            {
                q: 'Aké značky viete dodať?',
                a: 'Vieme dodať Pirelli, Michelin, Nexen a Matador. Ak máte záujem o inú značku, opýtajte sa, overíme, či ju vieme zohnať.',
            },
            {
                q: 'Koľko stoja pneumatiky?',
                a: 'Cena závisí od rozmeru, značky a sezóny. Presnú cenu vám povieme po overení u partnerov, ešte pred objednaním.',
            },
            {
                q: 'Namontujete pneumatiky rovno u vás?',
                a: 'Áno. Montáž s vyvážením robíme v našom pneuservise, kompletné prezutie stojí od 45 € za sadu podľa veľkosti disku.',
            },
            {
                q: 'Ako zistím rozmer pneumatiky?',
                a: 'Rozmer je na boku pneumatiky, napríklad 205/55 R16 91V. Nájdete ho aj v technickom preukaze. Môžete nám poslať fotku boku pneumatiky a rozmer prečítame za vás.',
            },
            {
                q: 'Môžem si doniesť vlastné pneumatiky na montáž?',
                a: 'Áno, prezutie robíme aj s pneumatikami, ktoré ste kúpili inde. Cena montáže je rovnaká podľa veľkosti disku.',
            },
            {
                q: 'Treba meniť všetky štyri pneumatiky naraz?',
                a: 'Nie vždy. Na jednej náprave by však mali byť rovnaké pneumatiky. Pri štvorkolke výrobcovia často odporúčajú meniť všetky štyri naraz, poradíme podľa auta.',
            },
            {
                q: 'Čo so starými pneumatikami?',
                a: 'Ak sú ešte použiteľné, môžete si ich nechať u nás uskladniť za 40 € na sezónu. O ďalšom postupe sa dohodneme pri montáži.',
            },
            {
                q: 'Ako si objednám pneumatiky?',
                a: 'Zavolajte na 0944 236 257 alebo vyplňte formulár na nacenenie a napíšte rozmer, sezónu a preferovanú značku.',
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
