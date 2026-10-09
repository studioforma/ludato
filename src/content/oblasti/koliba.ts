import type { ServiceContent } from '../sluzby/types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Hľadáte autoservis blízko Koliby? Ludato Family Autoservis a Pneuservis je na Odborárskej 52 v Novom Meste, v rovnakej mestskej časti ako Koliba. Autom k nám prídete orientačne za 10 až 15 minút, dolu z kopca cez Jeséniovu a Pionierskú.',
            'Sme rodinný servis, ktorý sa stará o autá všetkých značiek, od bežnej údržby až po náročnejšie opravy. Jazda na Kolibe má svoje špecifiká, strmé ulice, zimné zjazdy a úzke cesty, a presne na tie sa pri servise zameriavame.',
        ],
    },
    {
        type: 'cta',
        heading: 'Nemáte čas prísť do servisu?',
        text: 'Po auto si na Kolibu prídeme sami. Vy zostanete doma alebo v práci a my sa postaráme o zvyšok.',
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
        heading: 'Ako sa k nám dostanete z Koliby',
        paragraphs: [
            'Z Koliby k nám vedie cesta dolu cez Jeséniovu a Pionierskú. Trvá orientačne 10 až 15 minút podľa toho, z ktorej časti Koliby idete a aká je doprava. Od pondelka do štvrtka máme otvorené do 19:00, takže auto môžete priviezť aj po práci.',
            'Ak sa vám do servisu nechce alebo auto nie je pojazdné, nemusíte nikam chodiť. Auto vyzdvihneme za 50 € a nepojazdné vozidlo odtiahneme za 170 €. V zime, keď sú ulice na Kolibe zľadovatené, to ocení nejeden vodič.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo autá na Kolibe najviac zaťažuje',
        paragraphs: [
            'Koliba patrí k najkopcovitejším častiam Bratislavy. Strmé zjazdy dolu do mesta zaťažujú brzdy oveľa viac ako jazda po rovine. Platničky a kotúče sa opotrebúvajú rýchlejšie a pri dlhom zjazde sa brzdy prehrievajú. Pri autách, ktoré jazdia po Kolibe denne, odporúčame kontrolovať brzdy aj brzdovú kvapalinu častejšie.',
            'Rozjazdy v strmom kopci sú náročné na spojku. Ak auto pri rozjazde do kopca prekĺzava alebo cítiť zápach spáleného obloženia, spojka dosluhuje. Pri autách s dvojhmotovým zotrvačníkom zaťažuje kopcovitý terén aj ten.',
            'V zime sú ulice na Kolibe často zasnežené a zľadovatené, kým dolu v meste je sucho. Kvalitné zimné pneumatiky s dostatočným dezénom sú tu základ bezpečnosti. Prezutie sa oplatí naplánovať ešte pred prvým snehom.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo pre vodičov z Koliby robíme najčastejšie',
        items: [
            'Kontrola a [výmena bŕzd](/sluzby/brzdy-bratislava) po zjazdoch z kopca',
            'Sezónne [prezutie na zimné pneumatiky](/sluzby/pneuservis-bratislava)',
            'Výmena [spojky a dvojhmotového zotrvačníka](/sluzby/prevodovka-spojka-bratislava)',
            'Kontrola a oprava [podvozku](/sluzby/podvozok-bratislava)',
            'Výmena brzdovej kvapaliny',
            'Výmena oleja a filtrov',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Služby, ktoré sa na Kolibe oplatí nepodceniť',
        items: [
            {
                title: 'Brzdy a brzdová kvapalina',
                text: 'Pri dlhých zjazdoch sa brzdová kvapalina zahrieva a stará kvapalina, ktorá nasala vlhkosť, má nižší bod varu. Výmena brzdovej kvapaliny stojí 45 €, kontrola bŕzd 35 € a výmena kotúčov s platničkami na nápravu 85 €.',
            },
            {
                title: 'Zimné pneumatiky',
                text: 'Na Kolibe sa zima prejaví skôr a drží sa dlhšie. Kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov. Ak potrebujete nové pneumatiky, vieme ich dodať a rovno namontovať.',
            },
            {
                title: 'Spojka',
                text: 'Rozjazdy v strmom kopci opotrebúvajú spojku rýchlejšie. Výmenu spojky účtujeme podľa normohodín za náročné zásahy, 45 € za hodinu, a celkovú cenu vám povieme vopred.',
            },
            {
                title: 'Podvozok',
                text: 'Úzke a miestami nerovné cesty sa podpíšu na tlmičoch a ramenách. Kontrola podvozku stojí 30 €.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo si nás vyberajú vodiči z Koliby',
        paragraphs: [
            'Sme blízko, v rovnakej mestskej časti, a sme rodinný servis. O vašom aute sa rozprávate priamo s ľuďmi, ktorí na ňom robia, a cenu opravy poznáte vopred. Na Google máme hodnotenie 5,0 od viac ako 40 zákazníkov a za sebou cez 1 200 opravených áut.',
        ],
    },
    {
        type: 'text',
        heading: 'Keď je oprava dlhšia',
        paragraphs: [
            'Výmena spojky alebo väčšia oprava podvozku môže trvať dlhšie. Aby ste neostali na Kolibe bez auta, požičiame vám náhradné vozidlo za 35 € na deň. Pri servise nad 1000 € je zadarmo a pri poistnej udalosti ho hradí poisťovňa. Dostupnosť si overte pri objednaní.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Zavoláte alebo vyplníte formulár',
                text: 'Opíšete, čo s autom potrebujete, a dohodneme termín.',
            },
            {
                title: 'Privezieme alebo vyzdvihneme auto',
                text: 'Auto k nám privezete sami, alebo si poň na Kolibu prídeme.',
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
            'Na jeseň odporúčame prezutie ešte pred prvým snehom, kontrolu batérie a chladiacej kvapaliny. Na Kolibe sa mráz a sneh objavia skôr ako dolu v meste. Na jar po zime skontrolujte brzdy a podvozok, ktoré mali v zime najviac práce.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Pri dlhom zjazde nebrzdite neustále, ale využite brzdenie motorom na nižšom prevodovom stupni. Brzdy sa tak menej prehrievajú. Pri parkovaní v kopci zabrzdite ručnou brzdou a zaraďte prevodový stupeň, pri automate polohu P, a natočte kolesá k obrubníku.',
            'Ak pri brzdení cítite vibrácie vo volante alebo v pedáli, kotúče môžu byť prehriate alebo nerovnomerne opotrebované. Nečakajte a nechajte brzdy skontrolovať.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť pred návštevou',
        paragraphs: [
            'Stačí technický preukaz a kľúče. Ak viete, kedy sa naposledy menili brzdy, spojka alebo olej, povedzte nám to. Pri prezutí nezabudnite na druhú sadu kolies, alebo ju nechajte uskladnenú u nás.',
        ],
    },
    {
        type: 'text',
        heading: 'Batéria a zimné štarty',
        paragraphs: [
            'Na Kolibe býva v zime o niečo chladnejšie ako dolu v meste a auto parkované vonku ráno štartuje ťažšie. Slabá batéria to v mraze nezvládne. Ak auto už na jeseň štartuje pomalšie, nechajte batériu skontrolovať ešte pred zimou. [Výmena autobatérie](/sluzby/autobateria-bratislava) stojí od 30 € a ušetrí vám ranné prekvapenie.',
            'V zime myslite aj na chladiacu kvapalinu, ktorá musí chrániť pred mrazom, a na kvapalinu do ostrekovačov, ktorá nezamŕza. Obe vieme skontrolovať a doplniť pri prezutí.',
        ],
    },
    {
        type: 'text',
        heading: 'Geometria a pneumatiky v kopcoch',
        paragraphs: [
            'Ostré zákruty, stúpania a zjazdy opotrebúvajú pneumatiky inak ako jazda po rovine. Ak je navyše geometria rozladená, pneumatiky sa ojazdia nerovnomerne a rýchlo. Pri prezutí sa preto pozrieme aj na to, ako sú pneumatiky opotrebované, a ak to naznačuje problém s geometriou, povieme vám to. Kontrola nastavenia geometrie stojí 16 €.',
            'Pri autách s pohonom všetkých kolies, ktoré sú na Kolibe obľúbené kvôli zime, je dôležité mať na všetkých kolesách rovnaké a rovnomerne opotrebované pneumatiky.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky vodičov z Koliby',
        items: [
            {
                q: 'Ako dlho mi to k vám trvá z Koliby?',
                a: 'Orientačne 10 až 15 minút autom cez Jeséniovu a Pionierskú, podľa dopravy.',
            },
            {
                q: 'Prídete si po auto na Kolibu?',
                a: 'Áno, vyzdvihnutie auta v Bratislave a okolí stojí 50 €.',
            },
            {
                q: 'Ako často meniť brzdovú kvapalinu?',
                a: 'Podľa výrobcu, zvyčajne každé dva roky. Pri jazde v kopcoch sa nevyplatí interval predlžovať. Výmena stojí 45 €.',
            },
            {
                q: 'Koľko stojí prezutie?',
                a: 'Kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov.',
            },
            {
                q: 'Robíte aj výmenu spojky?',
                a: 'Áno, vymieňame spojky aj dvojhmotové zotrvačníky. Cenu vám povieme vopred.',
            },
            {
                q: 'Dostanem počas opravy náhradné auto?',
                a: 'Áno, za 35 € na deň. Pri servise nad 1000 € je zadarmo, dostupnosť si overte pri objednaní.',
            },
            {
                q: 'Odtiahnete auto, ktoré v zime nenaštartuje?',
                a: 'Áno, odťah nepojazdného auta stojí 170 €.',
            },
            {
                q: 'Opravujete všetky značky áut?',
                a: 'Áno, staráme sa o autá všetkých značiek.',
            },
            {
                q: 'Pomôžete aj s novými zimnými pneumatikami?',
                a: 'Áno, nové pneumatiky vieme dodať na objednávku cez našich partnerov a rovno ich namontovať s vyvážením.',
            },
            {
                q: 'Kontrolujete pri prezutí aj brzdy?',
                a: 'Pri prezutí sú brzdy dobre vidieť, takže ak si všimneme opotrebované platničky alebo kotúče, povieme vám to.',
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
