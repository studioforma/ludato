import type { ServiceContent } from '../sluzby/types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Hľadáte autoservis blízko centra Bratislavy? Ludato Family Autoservis a Pneuservis je na Odborárskej 52 v Novom Meste, zo Starého Mesta k nám autom prídete orientačne za 10 minút. V centre sa servis hľadá ťažko, my sme kúsok za ním.',
            'Ako rodinný servis sa staráme o autá všetkých značiek. Diagnostika, výmena oleja, batéria, brzdy, podvozok aj sezónne prezutie, všetko na jednom mieste.',
        ],
    },
    {
        type: 'cta',
        heading: 'Nechce sa vám s autom cez mesto?',
        text: 'Auto v Starom Meste vyzdvihneme a vy si môžete vybavovať, čo potrebujete. Nemusíte riešiť cestu do servisu ani späť.',
        points: [
            'Vyzdvihnutie auta v Bratislave a okolí za 50 €',
            'Diagnostika riadiacej jednotky za 40 €',
            'Výmena oleja a olejového filtra od 35 €',
        ],
        secondaryHref: '/nacenenie?sluzba=pickup',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'text',
        heading: 'Ako sa k nám dostanete zo Starého Mesta',
        paragraphs: [
            'Zo Starého Mesta k nám vedie cesta cez Trnavské mýto a Legionársku. Trvá orientačne 10 minút, v špičke môže byť dlhšia. Servis sa dá ľahko spojiť s pochôdzkami v meste: auto necháte u nás a vybavíte si, čo potrebujete.',
            'Ak nemáte čas alebo chuť jazdiť cez mesto, auto vám vyzdvihneme za 50 €. Nepojazdné auto odtiahneme za 170 €.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo autá v centre najviac zaťažuje',
        paragraphs: [
            'V centre sa jazdí na krátke vzdialenosti a často sa stojí. Motor sa na krátkej trase poriadne nezohreje, olej rýchlejšie starne a do výfuku a filtrov sa ukladá viac nečistôt. Pri prevažne mestskej jazde preto odporúčame meniť olej skôr v kratšom intervale.',
            'Kto v centre býva, auto často nechá stáť aj niekoľko dní. Batéria sa pri krátkych jazdách nestihne dobiť a pri dlhšom státí sa vybíja. Keď auto ráno ťažko štartuje, je to signál nechať batériu skontrolovať skôr, než vás nechá na ulici.',
            'Dláždené ulice, koľajnice a obrubníky zase zaťažujú podvozok a pneumatiky. Klepanie pri prejazde nerovností alebo nerovnomerne zjedená pneumatika sú dôvod pozrieť sa na auto zospodu.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo pre vodičov zo Starého Mesta robíme najčastejšie',
        items: [
            '[Počítačová diagnostika](/sluzby/pocitacova-diagnostika-bratislava), keď svieti kontrolka',
            '[Výmena oleja a filtrov](/sluzby/vymena-oleja-bratislava) pri krátkych mestských trasách',
            'Výmena batérie od 30 €',
            'Kontrola a oprava [podvozku](/sluzby/podvozok-bratislava)',
            'Sezónne [prezutie a vyváženie kolies](/sluzby/pneuservis-bratislava)',
            'Pickup auta priamo z centra',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Služby a ceny pre Staré Mesto',
        items: [
            {
                title: 'Diagnostika',
                text: 'Diagnostika riadiacej jednotky stojí 40 €, kontrola elektroniky a osvetlenia 30 €. Hľadáme skutočnú príčinu poruchy, nielen kód chyby.',
            },
            {
                title: 'Výmena oleja',
                text: 'Výmena oleja a olejového filtra od 35 €, kompletný servis vrátane palivového filtra 65 €. Olej a filtre pripravíme podľa EČV vášho auta.',
            },
            {
                title: 'Podvozok',
                text: 'Kontrola podvozku stojí 30 €. Auto zdvihneme, prejdeme tlmiče, ramená, silentbloky aj ložiská a cenu opravy vám povieme vopred.',
            },
            {
                title: 'Prezutie',
                text: 'Kompletné prezutie s vyvážením od 45 €. Ak doma nemáte miesto na druhú sadu, uskladníme ju za 40 € na sezónu.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo k nám chodia aj z centra',
        paragraphs: [
            'Sme rodinný servis, kde sa o vaše auto stará ten, s kým sa rozprávate. Od otvorenia sme opravili viac ako 1 200 áut a na Google máme hodnotenie 5.0 z viac ako 40 recenzií.',
            'Ceny sú zverejnené v [cenníku](/cennik) a pred opravou vám vždy povieme, čo treba urobiť a koľko to bude stáť. Pri dlhšej oprave vám požičiame [náhradné vozidlo](/sluzby/nahradne-vozidlo-bratislava), aby ste neostali bez auta.',
        ],
    },
    {
        type: 'text',
        heading: 'Batéria pri krátkych jazdách',
        paragraphs: [
            'Batéria sa dobíja počas jazdy z alternátora. Pri štartovaní z nej motor odoberie veľa energie a krátka jazda po centre ju nestihne doplniť. Ak sa takto jazdí dlhodobo, batéria je stále čiastočne vybitá, rýchlejšie starne a v zime ju mráz vie úplne vyradiť.',
            'Ak auto stojí niekoľko dní na ulici, batéria sa navyše pomaly vybíja aj sama, pretože časť elektroniky v aute odoberá prúd aj pri vypnutom motore. Prvým signálom je pomalšie otáčanie štartéra pri štartovaní. Vtedy je čas batériu skontrolovať, skôr než vás nechá stáť. Výmena batérie u nás stojí od 30 €.',
            'Moderné autá so systémom štart a stop majú špeciálne batérie a pri ich výmene treba dodržať správny typ. Pri výmene vám povieme, aká batéria do vášho auta patrí, aby fungovala spoľahlivo aj pri častom štartovaní v mestskej premávke.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Objednanie',
                text: 'Zavolajte alebo vyplňte objednávku. Ak chcete, aby sme si po auto prišli, dohodneme čas a miesto vyzdvihnutia.',
            },
            {
                title: 'Auto u nás',
                text: 'Buď prídete z centra za 10 minút, alebo auto vyzdvihneme za 50 €. Vy si medzitým vybavíte, čo potrebujete.',
            },
            {
                title: 'Diagnostika a cena',
                text: 'Zistíme, čo autu chýba, a pred opravou vám povieme, čo sme našli a koľko to bude stáť.',
            },
            {
                title: 'Hotovo',
                text: 'Po oprave vám vysvetlíme, čo sme urobili. Na nič navyše bez vášho súhlasu nesiahame.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Sezónny servis',
        paragraphs: [
            'Pred zimou sa oplatí skontrolovať batériu, najmä ak auto často stojí. Mráz vybije slabú batériu rýchlo a auto potom ráno nenaštartuje. Spolu s tým je vhodné prezutie na zimné pneumatiky, kompletné prezutie stojí od 45 €.',
            'Na jar po zime odporúčame skontrolovať podvozok, ktorý cez zimu trpel na výtlkoch a dlažbe. A pred letom klimatizáciu, ktorá pri krátkych jazdách v rozpálenom meste pracuje naplno.',
            'Ak v centre nemáte vlastnú garáž ani pivnicu, druhá sada pneumatík býva problém. Uskladníme ju u nás za 40 € na sezónu a pri ďalšom prezutí ju budete mať pripravenú, bez prenášania po schodoch.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Ak auto jazdí len na krátke vzdialenosti, olej starne rýchlejšie, než ukazuje počítadlo kilometrov. Riaďte sa aj časom od poslednej výmeny, nielen najazdenými kilometrami.',
            'Svietiaca kontrolka v meste často súvisí s filtrami alebo snímačmi, ktoré pri krátkych jazdách trpia. Diagnostika za 40 € ukáže, či ide o drobnosť, alebo o niečo, čo treba riešiť hneď.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť pred návštevou',
        paragraphs: [
            'Ak auto ťažko štartuje, povedzte nám, ako dlho zvyčajne stojí a ako ďaleko s ním jazdíte. Ak svieti kontrolka, nemažte ju, záznam o chybe nám pri diagnostike pomôže.',
            'Pri vyzdvihnutí auta v centre dohodneme presné miesto a čas, aby ste nemuseli nikde čakať. Pri prezutí nezabudnite na kľúč od bezpečnostných skrutiek kolies.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky vodičov zo Starého Mesta',
        items: [
            {
                q: 'Ako ďaleko ste od centra?',
                a: 'Orientačne 10 minút autom cez Trnavské mýto a Legionársku. Sme na Odborárskej 52 v Novom Meste.',
            },
            {
                q: 'Prídete si po auto do Starého Mesta?',
                a: 'Áno, auto vyzdvihneme v rámci Bratislavy a okolia za 50 €.',
            },
            {
                q: 'Auto mi stojí celý týždeň a ťažko štartuje, čo s tým?',
                a: 'Pravdepodobne ide o batériu, ktorá sa pri státí a krátkych jazdách nestihne dobiť. Skontrolujeme ju a podľa potreby vymeníme, výmena batérie stojí od 30 €.',
            },
            {
                q: 'Koľko stojí diagnostika?',
                a: 'Diagnostika riadiacej jednotky stojí 40 €. Ceny sú uvedené bez DPH.',
            },
            {
                q: 'Máte náhradné auto?',
                a: 'Áno, za 35 € na deň, pri servise nad 1000 € zadarmo.',
            },
            {
                q: 'Servisujete všetky značky?',
                a: 'Áno, autá všetkých značiek a modelov.',
            },
            {
                q: 'Robíte aj brzdy?',
                a: 'Áno, kontrola bŕzd stojí 35 €, výmena platničiek na nápravu 45 € a kotúčov s platničkami 85 €.',
            },
            {
                q: 'Pripravíte auto na STK?',
                a: 'Áno, kontrola pred STK a EK stojí 50 € a celú kontrolu vieme vybaviť za vás za 150 €.',
            },
            {
                q: 'Môžem auto nechať u vás a vybaviť si veci v meste?',
                a: 'Áno, auto u nás necháte a vyzdvihnete si ho, keď bude hotové. Ozveme sa vám, keď je pripravené. Ak chcete, po auto si prídeme aj my.',
            },
            {
                q: 'Uskladníte mi pneumatiky?',
                a: 'Áno, sezónne uskladnenie stojí 40 € na sezónu. Pri ďalšom prezutí budete mať sadu pripravenú.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame to. Zavolajte na 0944 236 257 a dohodneme termín.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kde nás nájdete',
        paragraphs: [
            'Ludato Family Autoservis a Pneuservis, Odborárska 52, 831 02 Bratislava, Nové Mesto. Prehľad všetkých mestských častí, odkiaľ k nám zákazníci chodia, nájdete na stránke [Kde pôsobíme](/kde-posobime).',
        ],
    },
];

export default content;
