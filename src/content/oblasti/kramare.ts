import type { ServiceContent } from '../sluzby/types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Hľadáte autoservis na Kramároch alebo v ich blízkosti? Ludato Family Autoservis a Pneuservis je na Odborárskej 52, v rovnakej mestskej časti Nové Mesto. Z Kramárov k nám autom prídete orientačne za 10 minút, takže auto môžete ráno nechať u nás a večer si ho vyzdvihnúť.',
            'Sme rodinný servis, ktorý sa stará o autá všetkých značiek. Robíme sezónne prezutie, výmenu oleja, brzdy, podvozok aj diagnostiku porúch, s ktorými si inde nevedeli rady. Pred každou opravou vám povieme, čo treba robiť a koľko to bude stáť.',
        ],
    },
    {
        type: 'cta',
        heading: 'Nemáte čas prísť do servisu?',
        text: 'Po auto si na Kramáre prídeme sami. Vy zostanete doma alebo v práci a my sa postaráme o zvyšok.',
        points: [
            'Vyzdvihnutie auta v Bratislave a okolí za 50 €',
            'Náhradné vozidlo za 35 € na deň',
            'Kompletné prezutie od 45 € vrátane vyváženia',
        ],
        secondaryHref: '/nacenenie?sluzba=pickup',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'text',
        heading: 'Ako sa k nám dostanete z Kramárov',
        paragraphs: [
            'Z Kramárov je to k nám najjednoduchšie dolu cez Pionierskú a Račiansku. Cesta trvá orientačne 10 minút, v rannej a poobednej špičke môže byť dlhšia. Keďže sme v tej istej mestskej časti, mnohí zákazníci nechajú auto u nás a domov sa vrátia pešo alebo mestskou dopravou. Od pondelka do štvrtka máme otvorené do 19:00.',
            'Ak sa vám do servisu nechce alebo auto nie je pojazdné, nemusíte nikam chodiť. Auto vyzdvihneme za 50 € a nepojazdné vozidlo odtiahneme za 170 €.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo autá na Kramároch najviac zaťažuje',
        paragraphs: [
            'Kramáre ležia na svahu nad mestom a väčšina ciest vedie hore alebo dolu kopcom. Pri každodennej jazde dolu do mesta sa brzdy zahrievajú viac než na rovine, platničky aj kotúče sa opotrebúvajú rýchlejšie a brzdová kvapalina je viac zaťažená. Ak jazdíte po Kramároch denne, oplatí sa kontrolovať brzdy častejšie, než je bežný interval.',
            'Rozjazdy do kopca zaťažujú spojku, hlavne keď auto stojí v kolóne alebo na križovatke v stúpaní. Úzke ulice s autami zaparkovanými po oboch stranách znamenajú veľa manévrovania a obrubníkov, ktoré vedia poškodiť disky aj pneumatiky a rozladiť geometriu.',
            'V zime bývajú kopcovité ulice na Kramároch zľadovatené skôr než ulice dolu v meste. Zimné pneumatiky s dostatočným dezénom sú tu nevyhnutné a prezutie sa oplatí naplánovať skôr, než napadne prvý sneh.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo pre vodičov z Kramárov robíme najčastejšie',
        items: [
            'Kontrola a [výmena bŕzd](/sluzby/brzdy-bratislava), kotúče aj platničky',
            'Sezónne [prezutie a vyváženie kolies](/sluzby/pneuservis-bratislava)',
            'Kontrola a oprava [podvozku](/sluzby/podvozok-bratislava) po výtlkoch a obrubníkoch',
            '[Výmena oleja a filtrov](/sluzby/vymena-oleja-bratislava) pri krátkych mestských trasách',
            'Kontrola geometrie, keď auto ťahá do strany',
            'Príprava na STK a emisnú kontrolu',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Služby, ktoré sa na Kramároch oplatí nepodceniť',
        items: [
            {
                title: 'Brzdy',
                text: 'Každodenné zjazdy z Kramárov dolu do mesta sú pre brzdy skúškou. Kontrola bŕzd stojí 35 €, výmena platničiek na nápravu 45 € a kotúčov s platničkami 85 €. Pri kontrole prejdeme obe nápravy a povieme vám, čo treba meniť hneď a čo ešte vydrží.',
            },
            {
                title: 'Pneumatiky',
                text: 'Na kopcovitých uliciach rozhoduje stav dezénu viac ako inde. Kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov. Ak potrebujete nové pneumatiky, vieme ich dodať a rovno namontovať.',
            },
            {
                title: 'Podvozok',
                text: 'Úzke ulice, obrubníky a výtlky sa podpíšu na tlmičoch, ramenách aj silentblokoch. Kontrola podvozku stojí 30 €. Klepanie pri prejazde nerovností alebo hojdanie auta sú signály, že je čas prísť.',
            },
            {
                title: 'Olej',
                text: 'Krátke trasy dolu do mesta a späť znamenajú, že motor sa často nestihne poriadne zohriať. Olej potom starne rýchlejšie, preto pri takejto jazde odporúčame kratší interval výmeny. Výmena oleja s filtrom stojí od 35 €.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo si nás vyberajú vodiči z Kramárov',
        paragraphs: [
            'Sme blízko a sme rodinný servis, nie anonymná sieť. O vašom aute sa rozprávate priamo s ľuďmi, ktorí na ňom robia, a cenu opravy poznáte ešte pred začatím práce. Na Google máme hodnotenie 5,0 od viac ako 40 zákazníkov a za sebou cez 1 200 opravených áut.',
        ],
    },
    {
        type: 'text',
        heading: 'Keď je oprava dlhšia',
        paragraphs: [
            'Ak oprava trvá dlhšie, nemusíte zostať bez auta. Náhradné vozidlo stojí 35 € na deň, pri servise nad 1000 € je zadarmo a pri poistnej udalosti ho hradí poisťovňa. Dostupnosť si overte pri objednaní.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Zavoláte alebo vyplníte formulár',
                text: 'Opíšete, čo s autom potrebujete, a dohodneme termín, ktorý vám vyhovuje.',
            },
            {
                title: 'Privezieme alebo vyzdvihneme auto',
                text: 'Auto k nám privezete sami, alebo si poň prídeme.',
            },
            {
                title: 'Kontrola a cena vopred',
                text: 'Auto skontrolujeme a povieme vám, čo treba urobiť a koľko to bude stáť. Bez vášho súhlasu nič nemeníme.',
            },
            {
                title: 'Oprava a odovzdanie',
                text: 'Po oprave vám dáme vedieť a vysvetlíme, čo sme robili.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Sezónny servis',
        paragraphs: [
            'Na jar po zime odporúčame skontrolovať podvozok a brzdy, ktoré dostali zabrať od soli, výtlkov a zľadovatených zjazdov. Na jeseň je čas na prezutie, kontrolu batérie a chladiacej kvapaliny. Pri prezutí sa dobre vidí aj na brzdy, takže prípadný problém zachytíme včas.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Pri parkovaní v kopci používajte ručnú brzdu a zaraďte prevodový stupeň, pri automate polohu P. Pri rozjazde do kopca nedržte auto na spojke, zbytočne ju opotrebúvate. Ak brzdy pískajú, pedál je mäkší alebo auto pri brzdení ťahá do strany, nečakajte a príďte ich skontrolovať.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť pred návštevou',
        paragraphs: [
            'Stačí technický preukaz a kľúče. Ak máte servisnú knižku alebo viete, kedy sa naposledy menil olej či brzdy, pomôže nám to. Pri sezónnom prezutí nezabudnite na druhú sadu kolies, alebo ju nechajte uskladnenú u nás.',
        ],
    },
    {
        type: 'text',
        heading: 'Krátke trasy a batéria',
        paragraphs: [
            'Z Kramárov sa do práce či do centra často jazdí len pár kilometrov. Pri takých krátkych trasách sa batéria po štarte nestihne poriadne dobiť, a ak auto navyše stojí na ulici v mraze, ráno môže štartovať ťažko. Ak cítite, že štartér sa točí pomalšie, nečakajte na prvé mrazivé ráno. [Výmena autobatérie](/sluzby/autobateria-bratislava) stojí od 30 €.',
            'Krátke trasy zaťažujú aj motor a olej. Motor sa nestihne zohriať na prevádzkovú teplotu a v oleji sa hromadí vlhkosť a nespálené palivo. Preto pri prevažne mestskej jazde odporúčame držať sa skôr kratšieho intervalu výmeny oleja.',
        ],
    },
    {
        type: 'text',
        heading: 'Parkovanie na úzkych uliciach',
        paragraphs: [
            'Parkovanie na Kramároch často znamená auto tesne pri obrubníku a stiesnené manévrovanie. Náraz kolesom do obrubníka vie poškodiť pneumatiku, disk aj rozladiť geometriu. Ak po takom náraze auto ťahá do strany alebo volant nestojí rovno, nechajte skontrolovať geometriu. Zlá geometria rýchlo ojazdí aj nové pneumatiky.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky vodičov z Kramárov',
        items: [
            {
                q: 'Ako dlho mi to k vám trvá z Kramárov?',
                a: 'Orientačne 10 minút autom cez Pionierskú a Račiansku, v špičke môže byť cesta dlhšia.',
            },
            {
                q: 'Prídete si po auto na Kramáre?',
                a: 'Áno, vyzdvihnutie auta v Bratislave a okolí stojí 50 €.',
            },
            {
                q: 'Ako často si mám dať skontrolovať brzdy?',
                a: 'Pri každodennej jazde v kopcoch odporúčame kontrolu aspoň raz ročne, ideálne pri prezutí. Kontrola bŕzd stojí 35 €.',
            },
            {
                q: 'Koľko stojí prezutie?',
                a: 'Kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov.',
            },
            {
                q: 'Opravíte aj auto, ktoré nenaštartuje?',
                a: 'Áno, nepojazdné auto odtiahneme za 170 € a zistíme, prečo neštartuje.',
            },
            {
                q: 'Dostanem počas opravy náhradné auto?',
                a: 'Áno, za 35 € na deň. Pri servise nad 1000 € je zadarmo, dostupnosť si overte pri objednaní.',
            },
            {
                q: 'Robíte aj geometriu?',
                a: 'Áno. Kontrola nastavenia geometrie stojí 16 €, nastavenie prednej nápravy 40 € a oboch náprav 55 €.',
            },
            {
                q: 'Opravujete všetky značky áut?',
                a: 'Áno, staráme sa o autá všetkých značiek.',
            },
            {
                q: 'Môžem nechať auto u vás ráno a vyzdvihnúť ho večer?',
                a: 'Áno, keďže sme blízko, mnohí zákazníci z Kramárov to robia práve takto. Od pondelka do štvrtka máme otvorené do 19:00.',
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
            'Sme na Odborárskej 52 v Bratislave, Novom Meste. Prehľad všetkých mestských častí, odkiaľ k nám zákazníci chodia, nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
];

export default content;
