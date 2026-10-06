import type { ServiceContent } from '../sluzby/types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Hľadáte poctivý autoservis a bývate v Karlovej Vsi? Ludato Family Autoservis a Pneuservis je na Odborárskej 52 v Novom Meste, z Karlovej Vsi k nám autom prídete orientačne za 20 minút. Je to kúsok ďalej, no veľa zákazníkov k nám chodí práve kvôli prístupu a férovým cenám.',
            'Staráme sa o autá všetkých značiek. Brzdy, podvozok, prezutie, výmena oleja, diagnostika aj väčšie opravy. A keď sa vám nechce cez celé mesto, po auto si prídeme.',
        ],
    },
    {
        type: 'cta',
        heading: 'Nechce sa vám jazdiť cez celé mesto?',
        text: 'Auto v Karlovej Vsi vyzdvihneme, opravíme a vy medzitým jazdíte náhradným autom. Bez straty času.',
        points: [
            'Vyzdvihnutie auta v Bratislave a okolí za 50 €',
            'Náhradné vozidlo za 35 € na deň, nad 1000 € zadarmo',
            'Kontrola bŕzd za 35 €',
        ],
        secondaryHref: '/nacenenie?sluzba=pickup',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'text',
        heading: 'Ako sa k nám dostanete z Karlovej Vsi',
        paragraphs: [
            'Z Karlovej Vsi k nám vedie cesta cez Most SNP alebo po Botanickej. Trvá orientačne 20 minút, v špičke dlhšie. Keďže sme na druhej strane mesta, mnohí zákazníci z Karlovej Vsi využívajú vyzdvihnutie auta za 50 €, aby nemuseli prechádzať cez centrum dvakrát.',
            'Pri dlhšej oprave vám požičiame [náhradné vozidlo](/sluzby/nahradne-vozidlo-bratislava), takže môžete fungovať ako zvyčajne. Nepojazdné auto odtiahneme za 170 €.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo autá v Karlovej Vsi najviac zaťažuje',
        paragraphs: [
            'Karlová Ves je kopcovitá, najmä okolie sídliska Dlhé diely. Stúpania a klesania zaťažujú brzdy viac než jazda po rovine a pri častom brzdení dolu kopcom sa platničky aj kotúče opotrebúvajú rýchlejšie. Ak bývate vyššie, kontrolu bŕzd odporúčame robiť častejšie.',
            'Rozbiehanie do kopca zase namáha spojku a pri manuálnej prevodovke sa jej opotrebenie prejaví skôr. Rovnako dôležitý je podvozok: na kopcovitých a nerovných uliciach sa tlmiče a silentbloky opotrebúvajú rýchlejšie.',
            'V zime sú vyššie položené ulice skôr namrznuté. Zimné pneumatiky s dobrým dezénom sú tu nevyhnutnosť, nie formalita.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo pre vodičov z Karlovej Vsi robíme najčastejšie',
        items: [
            'Kontrola a výmena [bŕzd](/sluzby/brzdy-bratislava)',
            'Kontrola a oprava [podvozku](/sluzby/podvozok-bratislava), tlmiče aj silentbloky',
            'Sezónne [prezutie a vyváženie kolies](/sluzby/pneuservis-bratislava)',
            'Výmena oleja a filtrov',
            'Pickup auta a náhradné vozidlo počas opravy',
            'Príprava na STK a EK',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Služby a ceny pre Karlovu Ves',
        items: [
            {
                title: 'Brzdy',
                text: 'Kontrola bŕzd 35 €, výmena platničiek na nápravu 45 €, kotúče s platničkami 85 € a výmena brzdovej kvapaliny 45 €. Prejdeme obe nápravy, nielen tú, ktorá sa ozýva.',
            },
            {
                title: 'Podvozok',
                text: 'Kontrola podvozku 30 €, kontrola podvozku a náprav 40 €. Po výmene dielov podvozku odporúčame skontrolovať aj geometriu, kontrola stojí 16 €.',
            },
            {
                title: 'Prezutie',
                text: 'Kompletné prezutie s vyvážením od 45 € podľa veľkosti diskov. Druhú sadu vám uskladníme za 40 € na sezónu.',
            },
            {
                title: 'Pickup a náhradné auto',
                text: 'Vyzdvihnutie auta za 50 €, náhradné vozidlo za 35 € na deň. Pri servise nad 1000 € je náhradné vozidlo zadarmo a pri poistnej udalosti ho hradí poisťovňa.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo sa oplatí prejsť cez mesto',
        paragraphs: [
            'Sme rodinný servis. O auto sa stará ten, s kým sa rozprávate, a vždy vám vysvetlíme, čo sme našli. Od otvorenia sme opravili viac ako 1 200 áut a na Google máme hodnotenie 5.0 z viac ako 40 recenzií.',
            'Ceny sú zverejnené v [cenníku](/cennik) a pred opravou vám povieme, koľko bude stáť. Žiadne prekvapenia na faktúre.',
            'Ak sa vám cesta cez mesto nehodí, nemusíte ju absolvovať vôbec. Auto vyzdvihneme, opravíme a vy medzitým jazdíte náhradným vozidlom, takže vzdialenosť prestane hrať rolu.',
        ],
    },
    {
        type: 'text',
        heading: 'Spojka a podvozok v kopcovitom teréne',
        paragraphs: [
            'Pri rozbiehaní do kopca spojka prenáša väčšiu silu a pri častom státí v stúpaní sa trecí materiál opotrebúva rýchlejšie. Opotrebovanú spojku spoznáte podľa toho, že motor zvyšuje otáčky, no auto nezrýchľuje primerane, alebo že pedál zaberá až vysoko. Čím skôr sa na to pozrieme, tým menšie riziko, že vás spojka nechá stáť v najmenej vhodnej chvíli.',
            'Kopce a nerovné ulice zaťažujú aj podvozok. Tlmiče, ktoré stratili účinnosť, predlžujú brzdnú dráhu a zhoršujú stabilitu v zákrute. Kontrola podvozku stojí 30 €, auto pri nej zdvihneme a prejdeme tlmiče, ramená, silentbloky aj ložiská kolies.',
            'Po výmene dielov podvozku, ako sú ramená alebo tlmiče, sa takmer vždy posunie geometria. Preto po takejto oprave odporúčame jej kontrolu, ktorá stojí 16 €. Ušetríte tak nové pneumatiky, ktoré by sa inak nerovnomerne zjedali.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Objednanie',
                text: 'Zavolajte alebo vyplňte objednávku a rovno si dohodnite vyzdvihnutie auta, aby ste nemuseli cez mesto.',
            },
            {
                title: 'Vyzdvihnutie alebo príchod',
                text: 'Auto vyzdvihneme za 50 €, alebo k nám prídete cez Most SNP či po Botanickej orientačne za 20 minút.',
            },
            {
                title: 'Kontrola a cena vopred',
                text: 'Pri brzdách a podvozku auto zdvihneme a ukážeme vám, čo je opotrebované. Cenu odsúhlasíme pred opravou.',
            },
            {
                title: 'Oprava a náhradné auto',
                text: 'Kým je auto u nás, môžete jazdiť náhradným vozidlom. Po oprave vám vysvetlíme, čo sme urobili.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Sezónny servis',
        paragraphs: [
            'Na jeseň odporúčame prezutie ešte pred prvým mrazom, kopcovité ulice v Karlovej Vsi bývajú namrznuté skôr než rovinaté časti mesta. Pri prezutí rovno skontrolujeme aj brzdy, ktoré sú pri zložených kolesách dobre vidieť.',
            'Na jar po zime je vhodný čas na kontrolu podvozku a bŕzd. Posyp a výtlky im cez zimu dajú zabrať a v kopcoch sa opotrebenie prejaví skôr.',
            'Pred letom sa oplatí skontrolovať klimatizáciu a pred dlhšou cestou aj kvapaliny a brzdy. Kontrola vozidla pred cestou vás môže ušetriť od poruchy ďaleko od domova.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Ak pri rozbiehaní do kopca cítite, že spojka prekĺzava, motor zvyšuje otáčky, no auto nezrýchľuje, je to signál opotrebovanej spojky. Čím skôr sa na to pozrieme, tým menšie riziko, že vás nechá stáť.',
            'Brzdy v kopcoch nepodceňujte. Pískanie, vibrácie pri brzdení alebo dlhšia brzdná dráha sú dôvod prísť skôr, nie až pri ďalšom servise.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť pred návštevou',
        paragraphs: [
            'Ak si všimnete nový zvuk alebo zmenu správania auta, zapamätajte si, kedy sa objavuje, či do kopca, z kopca alebo na nerovnostiach. Pri podvozku a spojke nám to výrazne skráti hľadanie príčiny.',
            'Ak chcete vyzdvihnutie a náhradné auto, povedzte nám o tom pri objednaní, aby sme mali všetko pripravené. Pri prezutí nezabudnite na kľúč od bezpečnostných skrutiek kolies.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky vodičov z Karlovej Vsi',
        items: [
            {
                q: 'Ako dlho mi to k vám trvá z Karlovej Vsi?',
                a: 'Orientačne 20 minút autom cez Most SNP alebo Botanickú. V špičke môže byť cesta dlhšia.',
            },
            {
                q: 'Prídete si po auto do Karlovej Vsi?',
                a: 'Áno, auto vyzdvihneme v rámci Bratislavy a okolia za 50 €.',
            },
            {
                q: 'Dostanem náhradné auto?',
                a: 'Áno, za 35 € na deň, pri servise nad 1000 € zadarmo. Rezervujte si ho pri objednaní servisu.',
            },
            {
                q: 'Pískajú mi brzdy, čo s tým?',
                a: 'Pískanie býva prvý signál opotrebovaných platničiek. Kontrola bŕzd stojí 35 € a povieme vám, čo treba vymeniť.',
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
                q: 'Robíte aj geometriu?',
                a: 'Áno, kontrola geometrie stojí 16 €. Po výmene dielov podvozku ju odporúčame vždy skontrolovať.',
            },
            {
                q: 'Uskladníte mi pneumatiky?',
                a: 'Áno, za 40 € na sezónu. Pri ďalšom prezutí budete mať sadu pripravenú.',
            },
            {
                q: 'Robíte aj výmenu spojky?',
                a: 'Áno, náročnejšie zásahy, ako je spojka, účtujeme podľa normohodín. Presnú cenu vrátane dielov vám povieme vopred podľa vášho auta.',
            },
            {
                q: 'Koľko stojí kontrola podvozku?',
                a: 'Kontrola podvozku stojí 30 €, kontrola podvozku a náprav 40 €. Ceny sú uvedené bez DPH.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame to, najmä ak chcete pickup alebo náhradné auto. Zavolajte na +421 944 236 257.',
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
