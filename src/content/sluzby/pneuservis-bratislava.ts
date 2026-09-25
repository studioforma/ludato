import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Pneuservis Ludato Family Autoservis v Bratislave, Novom Meste, sa stará o pneumatiky a kolesá vášho vozidla po celý rok. Sezónne prezutie, vyváženie, prehodenie kolies, oprava defektu aj uskladnenie pneumatík, všetko na jednom mieste, bez zbytočného čakania.',
            'Pneumatiky sú jediný kontakt vozidla s vozovkou, ich stav preto priamo ovplyvňuje brzdnú dráhu, správanie auta v zákrute aj na mokrej či zľadovatenej ceste. Práve preto sa pneuservisu venujeme ako plnohodnotnej službe, nie len ako doplnku k väčšej oprave.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo zahŕňa náš pneuservis',
        items: [
            'Kompletné prezutie vozidla (letné aj zimné pneumatiky) s vyvážením kolies',
            'Prehodenie kolies medzi nápravami',
            'Výmena ventilčekov v pneumatikách',
            'Kontrola tlaku a stavu pneumatík (dezén)',
            'Oprava defektu, ak to stav pneumatiky dovoľuje',
            'Sezónne uskladnenie pneumatík',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Naše pneuservisné služby podrobnejšie',
        items: [
            {
                title: 'Kompletné prezutie',
                text: 'Pri kompletnom prezutí vymeníme všetky štyri kolesá za sezónnu sadu, vždy s ohľadom na smer otáčania pneumatiky a so správnym dotiahnutím skrutiek na predpísaný uťahovací moment. Súčasťou je aj vizuálna kontrola stavu pneumatík, diskov a ventilčekov, aby sme prípadný problém zachytili skôr, než sa prejaví na ceste.',
            },
            {
                title: 'Vyváženie kolies',
                text: 'Nevyvážené koleso spôsobuje pri vyšších rýchlostiach vibrácie volantu alebo karosérie a zbytočne zaťažuje ložiská aj tlmiče. Preto každé koleso pri prezutí vyvažujeme na presnom stroji, aj keď si vyváženie zákazník výslovne nepýta, je to u nás prirodzená súčasť poctivého prezutia.',
            },
            {
                title: 'Prehodenie kolies medzi nápravami',
                text: 'Predné a zadné pneumatiky sa neopotrebúvajú rovnako, hlavne pri autách s pohonom prednej nápravy. Pravidelné prehodenie kolies medzi nápravami predlžuje životnosť celej sady a pomáha, aby sa opotrebovanie dezénu vyrovnávalo na všetkých štyroch kolesách.',
            },
            {
                title: 'Kontrola tlaku a dezénu',
                text: 'Pri každej návšteve skontrolujeme tlak vo všetkých pneumatikách aj hĺbku dezénu. Zákonom predpísaná minimálna hĺbka dezénu je 1,6 mm, z bezpečnostného hľadiska však odporúčame meniť pneumatiky už okolo 3 mm, keďže s klesajúcim dezénom výrazne rastie brzdná dráha na mokrej vozovke.',
            },
            {
                title: 'Oprava defektu',
                text: 'Defekt vieme opraviť, ak je poškodenie v bežnej dráhe pneumatiky a nie je príliš rozsiahle. Poškodenie bočnice alebo viacnásobný defekt na jednom mieste sa spravidla opraviť nedá a pneumatiku treba vymeniť. Presne vieme povedať až po obhliadke, cena opravy sa preto určuje individuálne.',
            },
            {
                title: 'Sezónne uskladnenie pneumatík',
                text: 'Ak nemáte doma vhodné miesto na uskladnenie druhej sady pneumatík, radi vám ju uskladníme priamo u nás. Pri ďalšom prezutí vám už len vymeníme aktuálnu sadu za tú uskladnenú, nemusíte nič vláčiť ani riešiť skladovanie doma.',
            },
            {
                title: 'Výmena ventilčekov',
                text: 'Ventilček je malá súčiastka, cez ktorú sa hustí vzduch do pneumatiky, no práve on časom stráca tesnosť a spôsobuje pomalý únik tlaku. Preto pri kompletnom prezutí ventilčeky rovno kontrolujeme a v prípade potreby vymeníme za nové, aby ste nemuseli riešiť dofukovanie kolies každý týždeň.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Rozdiel medzi letnými a zimnými pneumatikami',
        paragraphs: [
            'Zimné pneumatiky majú mäkšiu zmes gumy, ktorá si zachováva pružnosť aj pri nízkych teplotách, a hlbší dezén s väčším počtom lamiel, ktoré lepšie odvádzajú vodu, sneh aj rozbahnenú kašu. Letné pneumatiky sú naopak tvrdšie, majú kratšiu brzdnú dráhu na suchej aj mokrej vozovke pri vyšších teplotách a menší valivý odpor, čo sa prejaví aj na spotrebe paliva. Preto sa neoplatí jazdiť na zimných pneumatikách celoročne len z pohodlnosti.',
        ],
    },
    {
        type: 'text',
        heading: 'Kedy prezúvať pneumatiky',
        paragraphs: [
            'Slovenská legislatíva neurčuje pevný dátum prezutia, zimné pneumatiky sú však povinné vždy, keď je na vozovke sneh, ľad alebo námraza, prípadne keď teplota klesne pod 3 °C. V praxi to znamená, že najbezpečnejšie je prezuť sa ešte pred prvým mrazom, nie až keď napadne prvý sneh. Podobne to platí aj na jar, letné pneumatiky majú pri vyšších teplotách kratšiu brzdnú dráhu aj lepšiu priľnavosť než zimné.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako predĺžiť životnosť pneumatík',
        paragraphs: [
            'Životnosť pneumatiky výrazne ovplyvňuje aj to, ako sa o ňu staráte medzi jednotlivými prezutiami. Pravidelná kontrola tlaku, plynulá jazda bez zbytočne prudkého brzdenia a zrýchľovania a včasné riešenie nesprávnej geometrie po náraze do výtlku dokážu predĺžiť životnosť sady o desiatky percent. Rovnako dôležité je nenechávať auto dlhodobo stáť s podhustenými pneumatikami, čo zaťažuje bočnice a spôsobuje nerovnomerné opotrebovanie. Ak si nie ste istí, v akom stave vaše pneumatiky sú, radi vám ich pri návšteve skontrolujeme aj bez objednaného prezutia.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako to u nás prebieha',
        paragraphs: [
            'Pri prezutí najprv skontrolujeme stav, dezén a tlak všetkých štyroch pneumatík. Kolesá vymeníme, skrutky dotiahneme na predpísaný uťahovací moment a každé koleso vyvážime na presnom stroji, aby vám pri jazde nevibroval volant. Ak si u nás pneumatiky uskladňujete, sezónnu sadu vám len vyzdvihneme zo skladu a po prezutí uložíme tú predchádzajúcu na jej miesto. Na záver ešte skontrolujeme, či niektoré koleso nemá viditeľné poškodenie, ktoré by ste si sami nemuseli všimnúť.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Veľa vodičov odkladá prezutie na poslednú chvíľu. Keď príde prvý mráz alebo sneh, termíny bývajú narýchlo obsadené, odporúčame preto objednať sa ešte pred sezónou.',
            'Bežná chyba je aj nesprávne skladovanie pneumatík doma, napríklad naukladané na sebe alebo na priamom slnku, čo skracuje ich životnosť. Presne preto ponúkame aj sezónne uskladnenie priamo u nás.',
            'Po náraze do výtlku alebo obrubníka sa oplatí nechať skontrolovať vyváženie kolies aj geometriu, aj keď auto navonok vyzerá úplne v poriadku.',
            'Miešanie rôznych vzorov alebo značiek pneumatík na jednej náprave nie je vhodné, keďže to ovplyvňuje správanie auta pri prudkom brzdení alebo v zákrute. Ak potrebujete vymeniť len jednu alebo dve pneumatiky, poradíme vám, ako to najbezpečnejšie riešiť.',
            'Ak sa na palubnej doske rozsvieti kontrolka tlaku v pneumatikách, neignorujte ju. Môže signalizovať pomalý únik vzduchu, ktorý si na prvý pohľad nevšimnete, no postupne zvyšuje opotrebovanie aj riziko defektu.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo si vybrať náš pneuservis',
        paragraphs: [
            'Pneuservis u nás nie je len rýchla zástavka, ale súčasť komplexnej starostlivosti o vozidlo. Keďže sa venujeme aj mechanickým opravám, podvozku aj diagnostike, dokážeme pri prezutí odhaliť aj súvisiace problémy, napríklad opotrebované tlmiče, netesniace poloosové manžety alebo nesprávnu geometriu, ktoré by inak zostali nepovšimnuté až do ďalšej väčšej poruchy. Vďaka tomu je prezutie u nás zároveň krátkou preventívnou kontrolou podvozku. Snažíme sa, aby ste od nás odchádzali nielen s prezutými kolesami, ale aj s jasnou predstavou o tom, v akom stave je vaše vozidlo a čo prípadne bude treba riešiť pri najbližšej návšteve.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: [
            'KOMPLETNÉ PREZUTIE',
            'PREVÁŽENIE A PREHODENIE KOLIES NA DISKU',
            'USKLADNENIE A OPRAVA PNEUMATÍK',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Musím sa objednať vopred na prezutie?',
                a: 'Odporúčame objednať sa vopred, keďže v hlavnej sezóne (jar, jeseň) je o prezutie vysoký záujem a termíny sa rýchlo zapĺňajú. Najistejšie je zavolať vopred na +421 944 236 257.',
            },
            {
                q: 'Vyvažujete kolesá pri každom prezutí?',
                a: 'Áno, každé koleso vyvážime na presnom stroji priamo v rámci prezutia, aby pri jazde nevibroval volant.',
            },
            {
                q: 'Ponúkate aj uskladnenie pneumatík?',
                a: 'Áno, sezónne uskladnenie pneumatík stojí 40 € za sezónu.',
            },
            {
                q: 'Opravíte defekt na pneumatike?',
                a: 'Áno, ak to stav a poškodenie pneumatiky dovoľuje. Presnú cenu vieme povedať až po obhliadke.',
            },
            {
                q: 'Dá sa opraviť pneumatika s poškodenou bočnicou?',
                a: 'Poškodenie bočnice sa spravidla opraviť nedá, v takom prípade je potrebná výmena pneumatiky.',
            },
            {
                q: 'Aké veľkosti diskov zvládnete?',
                a: 'Bežné veľkosti od 12" do 19".',
            },
            {
                q: 'Ako dlho trvá kompletné prezutie?',
                a: 'Bežné prezutie zvládneme v rámci jednej návštevy, presný čas závisí od aktuálnej vyťaženosti servisu.',
            },
            {
                q: 'Ako často treba kontrolovať tlak v pneumatikách?',
                a: 'Odporúčame kontrolovať tlak aspoň raz mesačne a vždy pred dlhšou cestou, keďže správny tlak ovplyvňuje spotrebu paliva aj životnosť pneumatiky.',
            },
            {
                q: 'Robíte aj geometriu po prezutí?',
                a: 'Geometriu vieme skontrolovať a nastaviť samostatne, najmä ak auto po prezutí ťahá na jednu stranu alebo ste nedávno narazili do výtlku či obrubníka.',
            },
            {
                q: 'Treba po prezutí ešte raz dotiahnuť skrutky?',
                a: 'Áno, po približne 50 kilometroch odporúčame dotiahnutie skrutiek prekontrolovať, hlavne pri nových diskoch alebo po výmene celej sady kolies.',
            },
            {
                q: 'Musia byť na všetkých štyroch kolesách rovnaké pneumatiky?',
                a: 'Odporúčame mať na všetkých štyroch kolesách rovnaký typ, vzor aj rozmer pneumatiky. Ak riešite len čiastočnú výmenu jednej alebo dvoch pneumatík, poradíme vám, ako ich čo najbezpečnejšie skombinovať so zvyšnou sadou.',
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
