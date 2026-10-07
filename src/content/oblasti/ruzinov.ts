import type { ServiceContent } from '../sluzby/types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Hľadáte autoservis pre Ružinov? Ludato Family Autoservis a Pneuservis je na Odborárskej 52 v Novom Meste, z Ružinova k nám autom prídete orientačne za 15 minút. Chodia k nám vodiči z Trnávky, Prievozu, Štrkovca aj z ďalších častí Ružinova.',
            'Ako rodinný servis sa staráme o autá všetkých značiek. Robíme geometriu, brzdy, podvozok, prezutie, výmenu oleja, diagnostiku aj prípravu na STK.',
        ],
    },
    {
        type: 'cta',
        heading: 'Ťahá vám auto po obrubníkoch do strany?',
        text: 'Parkovanie na sídlisku a výtlky nenápadne rozladia geometriu a zjedajú pneumatiky. Skontrolujeme to skôr, než budete meniť novú sadu.',
        points: [
            'Kontrola geometrie za 16 €',
            'Kontrola bŕzd za 35 €',
            'Kompletné prezutie od 45 € vrátane vyváženia',
        ],
        secondaryHref: '/nacenenie?sluzba=geometria',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'text',
        heading: 'Ako sa k nám dostanete z Ružinova',
        paragraphs: [
            'Z Ružinova k nám vedú dve bežné trasy, cez Prievozskú alebo po Trnavskej ceste. Cesta trvá orientačne 15 minút, v špičke na Trnavskej môže byť dlhšia. Ružinov je s Novým Mestom priamo prepojený, takže sa k nám dostanete bez prejazdu cez centrum.',
            'Ak nemáte čas prísť, auto vám vyzdvihneme za 50 €. Nepojazdné auto odtiahneme za 170 €.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo autá v Ružinove najviac zaťažuje',
        paragraphs: [
            'Ružinov je druhá najväčšia mestská časť Bratislavy a veľká časť jeho obyvateľov býva na sídliskách. Parkovanie tesne pri obrubníkoch, nájazdy na chodníky a manévrovanie na úzkych miestach sa podpisujú na diskoch, pneumatikách aj na geometrii. Krivý volant alebo nerovnomerne zjedená pneumatika sú typické príznaky.',
            'Hlavné ťahy ako Trnavská, Bajkalská či Prievozská znamenajú veľa semaforov a kolón. Neustále rozbiehanie a brzdenie opotrebúva brzdy rýchlejšie než jazda mimo mesta a pri krátkych trasách starne aj motorový olej.',
            'Prejazdy cez električkové koľajnice a výtlky po zime zase zaťažujú podvozok. Klepanie pri prejazde nerovností je signál, že sa oplatí auto zdvihnúť a pozrieť zospodu.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo pre vodičov z Ružinova robíme najčastejšie',
        items: [
            'Kontrola a nastavenie [geometrie](/sluzby/geometria-bratislava)',
            'Kontrola a výmena [bŕzd](/sluzby/brzdy-bratislava)',
            'Sezónne [prezutie a vyváženie kolies](/sluzby/pneuservis-bratislava)',
            'Kontrola a oprava podvozku',
            '[Príprava na STK a EK](/sluzby/stk-ek-bratislava) aj sprostredkovanie',
            'Výmena oleja a filtrov',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Služby a ceny pre Ružinov',
        items: [
            {
                title: 'Geometria',
                text: 'Kontrola nastavenia geometrie stojí 16 €, nastavenie prednej nápravy 40 € a oboch náprav 55 €. Pred nastavením vždy skontrolujeme aj podvozok, aby nastavenie vydržalo.',
            },
            {
                title: 'Brzdy',
                text: 'Kontrola bŕzd 35 €, výmena platničiek na nápravu 45 €, kotúče s platničkami 85 €. Brzdovú kvapalinu vymeníme za 45 €.',
            },
            {
                title: 'STK a EK',
                text: 'Kontrola pred STK a EK za 50 €, aby ste prešli na prvýkrát. Alebo kompletné sprostredkovanie za 150 €, keď celú kontrolu vybavíme za vás.',
            },
            {
                title: 'Prezutie',
                text: 'Kompletné prezutie s vyvážením od 45 € podľa veľkosti diskov. Druhú sadu vám uskladníme za 40 € na sezónu.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo si nás vyberajú vodiči z Ružinova',
        paragraphs: [
            'Nie sme anonymná pobočka veľkej siete, ale rodinný servis. O auto sa stará ten, s kým sa rozprávate. Od otvorenia sme opravili viac ako 1 200 áut a na Google máme hodnotenie 5.0 z viac ako 40 recenzií.',
            'Ceny sú zverejnené v [cenníku](/cennik) a pred každou opravou vám povieme, čo sme našli a koľko to bude stáť. Ak sa oprava predĺži, požičiame vám [náhradné vozidlo](/sluzby/nahradne-vozidlo-bratislava) za 35 € na deň.',
        ],
    },
    {
        type: 'text',
        heading: 'Geometria a pneumatiky na sídlisku',
        paragraphs: [
            'Geometria určuje, ako kolesá smerujú voči ceste. Stačí, aby sa zbiehavosť posunula o malý kúsok, a pneumatika sa začne pri každom metri jemne šmýkať do strany. Navonok to nevidno, no vnútorná alebo vonkajšia hrana dezénu sa zjedá podstatne rýchlejšie ako zvyšok. V Ružinove, kde sa parkuje tesne pri obrubníkoch a jazdí cez koľajnice, sa nastavenie rozlaďuje častejšie.',
            'Kontrola geometrie stojí 16 € a ukáže, či treba nastavovať. Pred nastavením vždy skontrolujeme aj podvozok, pretože na opotrebovaných dieloch by nové nastavenie dlho nevydržalo. Ak sa hodnoty nedajú nastaviť, zvyčajne to znamená ohnutý diel po náraze, a ten vám ukážeme.',
            'Zlá geometria sa neprejaví hneď ako porucha, ale postupne ako výdavok. Pneumatika, ktorá by pri správnom nastavení vydržala niekoľko sezón, sa zje na jednej hrane podstatne skôr. Pri cenách dnešných pneumatík je kontrola geometrie jedna z najvýhodnejších investícií do auta.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Objednanie',
                text: 'Zavolajte alebo vyplňte objednávku. Ak auto ťahá do strany alebo pískajú brzdy, povedzte nám to rovno, pripravíme sa na to.',
            },
            {
                title: 'Príchod do servisu',
                text: 'Z Ružinova ste u nás orientačne za 15 minút. Ak nemáte čas, auto vyzdvihneme za 50 €.',
            },
            {
                title: 'Kontrola na zdviháku',
                text: 'Auto zdvihneme, prejdeme podvozok, brzdy aj pneumatiky a povieme vám, čo sme našli a koľko bude oprava stáť.',
            },
            {
                title: 'Oprava a nastavenie',
                text: 'Po výmene dielov podvozku nastavíme aj geometriu, aby sa nové pneumatiky zbytočne nezjedali.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Sezónny servis',
        paragraphs: [
            'Na jeseň je čas na prezutie. Na sídliskách, kde sa parkuje tesne pri obrubníkoch, sa oplatí pri prezutí skontrolovať aj stav diskov a pneumatík, či nemajú poškodené bočnice.',
            'Na jar po zime odporúčame kontrolu geometrie a podvozku. Výtlky a koľajnice cez zimu nastavenie rozladia a pri prezutí na letné pneumatiky je to ideálna chvíľa ho skontrolovať.',
            'Pred letom odporúčame skontrolovať klimatizáciu. Auto, ktoré celý deň stojí na slnku na sídlisku, sa rozpáli a klíma musí pracovať naplno. Ak chladí slabšie, servis klimatizácie stojí od 40 €.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Nerovnomerne zjedená pneumatika, najmä na vnútornej alebo vonkajšej hrane, takmer vždy znamená zlú geometriu. Nová sada sa takto vie zničiť za jednu sezónu, preto sa kontrola za 16 € oplatí ešte pred výmenou pneumatík.',
            'Pozor aj na náraz do obrubníka pri parkovaní. Aj keď navonok nevidno nič, môže sa ohnúť rameno alebo posunúť nastavenie. Ak auto po náraze ťahá do strany, dajte ho skontrolovať.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť pred návštevou',
        paragraphs: [
            'Ak auto ťahá do strany alebo má krivý volant, povedzte nám, odkedy to trvá a či ste nedávno narazili do obrubníka alebo výtlku. Pomôže nám to zúžiť možné príčiny.',
            'Pri prezutí prineste kľúč od bezpečnostných skrutiek kolies, ak ich auto má. Ak máte servisnú knižku alebo doklady z predchádzajúcich opráv, prineste aj tie.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky vodičov z Ružinova',
        items: [
            {
                q: 'Ako ďaleko ste od Ružinova?',
                a: 'Orientačne 15 minút autom cez Prievozskú alebo Trnavskú cestu. Sme na Odborárskej 52 v Novom Meste.',
            },
            {
                q: 'Auto mi ťahá do strany, je to geometria?',
                a: 'Často áno, no rovnaký príznak môže spôsobiť aj rozdielny tlak v pneumatikách alebo opotrebovaný diel podvozku. Kontrola geometrie stojí 16 € a pri nej to preveríme.',
            },
            {
                q: 'Prídete si po auto do Ružinova?',
                a: 'Áno, auto vyzdvihneme v rámci Bratislavy a okolia za 50 €.',
            },
            {
                q: 'Vybavíte mi STK?',
                a: 'Áno, kompletné sprostredkovanie STK a EK stojí 150 €. Auto pred tým skontrolujeme a nedostatky opravíme.',
            },
            {
                q: 'Koľko stojí prezutie?',
                a: 'Od 45 € za kompletné prezutie s vyvážením. Ceny sú uvedené bez DPH.',
            },
            {
                q: 'Servisujete všetky značky?',
                a: 'Áno, autá všetkých značiek a modelov.',
            },
            {
                q: 'Opravíte aj podvozok?',
                a: 'Áno, kontrola podvozku stojí 30 €. Tlmiče, ramená, silentbloky aj ložiská meníme priamo u nás a cenu povieme vopred.',
            },
            {
                q: 'Máte náhradné auto?',
                a: 'Áno, za 35 € na deň, pri servise nad 1000 € zadarmo a pri poistnej udalosti ho hradí poisťovňa.',
            },
            {
                q: 'Ako často treba kontrolovať geometriu?',
                a: 'Odporúčame raz ročne, ideálne pri prezutí, a vždy po výraznom náraze do obrubníka alebo výtlku. Po výmene dielov podvozku ju treba skontrolovať vždy.',
            },
            {
                q: 'Vymeníte mi aj olej?',
                a: 'Áno, výmena oleja a olejového filtra stojí od 35 €. Olej a filtre pripravíme podľa EČV vášho auta.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame to, najrýchlejšie je zavolať na 0944 236 257.',
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
