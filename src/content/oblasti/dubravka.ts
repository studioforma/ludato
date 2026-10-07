import type { ServiceContent } from '../sluzby/types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Hľadáte autoservis a bývate v Dúbravke? Ludato Family Autoservis a Pneuservis je na Odborárskej 52 v Novom Meste, z Dúbravky k nám autom prídete orientačne za 20 až 25 minút. Aj z Dúbravky k nám chodia stáli zákazníci, ktorí si cenia osobný prístup a jasné ceny.',
            'Staráme sa o autá všetkých značiek. A keďže sme na druhom konci mesta, ponúkame vyzdvihnutie auta aj náhradné vozidlo, aby vás servis neobral o čas.',
        ],
    },
    {
        type: 'cta',
        heading: 'Je to pre vás do servisu ďaleko?',
        text: 'Po auto si do Dúbravky prídeme sami a počas dlhšej opravy vám požičiame náhradné. Vy nemusíte nikam cestovať.',
        points: [
            'Vyzdvihnutie auta v Bratislave a okolí za 50 €',
            'Náhradné vozidlo za 35 € na deň, nad 1000 € zadarmo',
            'Kompletné prezutie od 45 € vrátane vyváženia',
        ],
        secondaryHref: '/nacenenie?sluzba=pickup',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'text',
        heading: 'Ako sa k nám dostanete z Dúbravky',
        paragraphs: [
            'Z Dúbravky k nám vedie cesta cez Saratovskú a Botanickú. Trvá orientačne 20 až 25 minút, v špičke dlhšie. Je to z celej Bratislavy jedna z dlhších trás, preto veľa zákazníkov z Dúbravky využíva vyzdvihnutie auta za 50 €.',
            'Ak auto nie je pojazdné, odtiahneme ho za 170 €. Pri dlhšej oprave vám požičiame [náhradné vozidlo](/sluzby/nahradne-vozidlo-bratislava) za 35 € na deň, pri servise nad 1000 € zadarmo.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo autá v Dúbravke najviac zaťažuje',
        paragraphs: [
            'Dúbravka leží pod Devínskou Kobylou a veľa ulíc je kopcovitých. Brzdy pri jazde z kopca pracujú intenzívnejšie a opotrebúvajú sa rýchlejšie. Ak brzdy pískajú, vibrujú alebo auto brzdí horšie ako zvyčajne, nečakajte do najbližšieho servisu.',
            'Kto z Dúbravky dochádza do práce cez mesto, najazdí viac kilometrov a väčšinu z nich v kolónach. To znamená častejšiu výmenu oleja, viac práce pre brzdy a rýchlejšie opotrebenie pneumatík.',
            'Vyššie položené časti bývajú v zime skôr zasnežené a namrznuté. Zimné pneumatiky s dostatočným dezénom a funkčná batéria sú tu základ, aby ste ráno bez problémov vyrazili.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo pre vodičov z Dúbravky robíme najčastejšie',
        items: [
            'Kontrola a výmena [bŕzd](/sluzby/brzdy-bratislava)',
            'Sezónne [prezutie a vyváženie kolies](/sluzby/pneuservis-bratislava)',
            '[Diagnostika](/sluzby/pocitacova-diagnostika-bratislava), keď sa rozsvieti kontrolka',
            'Výmena oleja a filtrov',
            'Výmena batérie od 30 €',
            'Pickup auta a náhradné vozidlo',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Služby a ceny pre Dúbravku',
        items: [
            {
                title: 'Brzdy',
                text: 'Kontrola bŕzd 35 €, výmena platničiek na nápravu 45 €, kotúče s platničkami 85 €. Skontrolujeme obe nápravy a povieme vám, čo treba meniť hneď.',
            },
            {
                title: 'Prezutie',
                text: 'Kompletné prezutie s vyvážením od 45 € podľa veľkosti diskov. Ak doma nemáte kam s druhou sadou, uskladníme ju za 40 € na sezónu.',
            },
            {
                title: 'Diagnostika',
                text: 'Diagnostika riadiacej jednotky stojí 40 €. Zistíme, čo sa s autom deje, skôr než sa z malej chyby stane drahá oprava.',
            },
            {
                title: 'Výmena oleja',
                text: 'Výmena oleja a olejového filtra od 35 €, kompletný servis vrátane palivového filtra 65 €.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo k nám chodia aj z Dúbravky',
        paragraphs: [
            'Sme rodinný servis, kde sa rozprávate priamo s tým, kto robí na vašom aute. Od otvorenia sme opravili viac ako 1 200 áut a na Google máme hodnotenie 5.0 z viac ako 40 recenzií.',
            'Ceny sú zverejnené v [cenníku](/cennik) a pred každou väčšou opravou vám povieme, čo treba urobiť a koľko to bude stáť. Vďaka vyzdvihnutiu auta a náhradnému vozidlu vás vzdialenosť nemusí trápiť.',
            'Mnohí zákazníci z Dúbravky si u nás nechávajú robiť pravidelný servis aj sezónne prezutie naraz. Jedna návšteva tak vyrieši viac vecí a nemusíte cez mesto jazdiť zbytočne často. Stačí pri objednaní povedať, čo všetko chcete urobiť.',
        ],
    },
    {
        type: 'text',
        heading: 'Pneumatiky a brzdy pri dochádzaní',
        paragraphs: [
            'Kto z Dúbravky denne dochádza cez mesto, najazdí za rok veľa kilometrov a pneumatiky sa opotrebúvajú rýchlejšie. Zákonom predpísaná minimálna hĺbka dezénu je 1,6 mm, no z bezpečnostného hľadiska odporúčame pneumatiky meniť už okolo 3 mm. S plytkým dezénom sa výrazne predlžuje brzdná dráha na mokrej ceste.',
            'Pri prezutí preto vždy skontrolujeme dezén aj tlak a povieme vám, koľko sezón ešte sada vydrží. Brzdy sú pri zložených kolesách dobre vidieť, takže je to ideálna chvíľa pozrieť sa aj na ne. Ak doma nemáte kam s druhou sadou, uskladníme ju za 40 € na sezónu.',
            'Na nerovnomerne zjedenom dezéne často vidno aj iný problém, napríklad zlú geometriu alebo nesprávny tlak. Ak pri prezutí také niečo nájdeme, povieme vám to hneď. Kontrola geometrie stojí 16 € a vie zachrániť novú sadu pneumatík pred predčasným opotrebením.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Objednanie',
                text: 'Zavolajte alebo vyplňte objednávku. Rovno si dohodnite vyzdvihnutie auta v Dúbravke a náhradné vozidlo, ak bude oprava dlhšia.',
            },
            {
                title: 'Vyzdvihnutie alebo príchod',
                text: 'Auto vyzdvihneme za 50 €, alebo k nám prídete cez Saratovskú a Botanickú orientačne za 20 až 25 minút.',
            },
            {
                title: 'Kontrola a cena',
                text: 'Auto prezrieme, povieme vám, čo je potrebné riešiť, a cenu odsúhlasíme pred začatím prác.',
            },
            {
                title: 'Oprava a vrátenie',
                text: 'Po oprave vám vysvetlíme, čo sme urobili, a auto je pripravené na cestu domov.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Sezónny servis',
        paragraphs: [
            'Na jeseň odporúčame prezutie na zimné pneumatiky ešte pred prvým snehom, vyššie položené ulice pod Devínskou Kobylou bývajú zasnežené skôr. Kompletné prezutie s vyvážením stojí od 45 €.',
            'Pred zimou sa oplatí skontrolovať aj batériu a brzdy. Na jar po zime zase podvozok a pred letom klimatizáciu, aby vás pri dlhšom dochádzaní v horúčavách nezradila.',
            'Ak auto cez zimu používate menej, nechajte ho z času na čas prejsť dlhší úsek, aby sa batéria dobila. A ak ráno štartuje ťažšie ako zvyčajne, nečakajte, kým nenaštartuje vôbec. Výmena batérie stojí od 30 €.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Ak denne dochádzate cez mesto, najazdíte viac kilometrov, než sa zdá. Sledujte servisný interval podľa kilometrov aj času a nenechávajte výmenu oleja na neskôr.',
            'Kopce v Dúbravke zaťažujú brzdy. Pískanie, vibrácie alebo mäkší pedál sú signál nechať si brzdy skontrolovať čo najskôr, kontrola stojí 35 €.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť pred návštevou',
        paragraphs: [
            'Ak máte servisnú knižku alebo doklady z posledných opráv, prineste ich. Pri poruche nám povedzte, kedy sa objavuje a čo jej predchádzalo.',
            'Ak chcete, aby sme si po auto prišli, dohodneme presný čas a miesto vyzdvihnutia. Pri prezutí nezabudnite na kľúč od bezpečnostných skrutiek kolies, ak ich auto má.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky vodičov z Dúbravky',
        items: [
            {
                q: 'Ako ďaleko ste od Dúbravky?',
                a: 'Orientačne 20 až 25 minút autom cez Saratovskú a Botanickú. Sme na Odborárskej 52 v Novom Meste.',
            },
            {
                q: 'Prídete si po auto do Dúbravky?',
                a: 'Áno, auto vyzdvihneme v rámci Bratislavy a okolia za 50 €. Nepojazdné auto odtiahneme za 170 €.',
            },
            {
                q: 'Dostanem náhradné auto?',
                a: 'Áno, za 35 € na deň, pri servise nad 1000 € zadarmo a pri poistnej udalosti ho hradí poisťovňa.',
            },
            {
                q: 'Koľko stojí prezutie?',
                a: 'Od 45 € za kompletné prezutie s vyvážením. Ceny sú uvedené bez DPH.',
            },
            {
                q: 'Robíte aj diagnostiku?',
                a: 'Áno, diagnostika riadiacej jednotky stojí 40 €.',
            },
            {
                q: 'Servisujete všetky značky?',
                a: 'Áno, autá všetkých značiek a modelov.',
            },
            {
                q: 'Robíte aj výmenu oleja?',
                a: 'Áno, výmena oleja a olejového filtra stojí od 35 €, kompletný servis vrátane palivového filtra 65 €.',
            },
            {
                q: 'Vymeníte aj batériu?',
                a: 'Áno, výmena batérie stojí od 30 €.',
            },
            {
                q: 'Ako často meniť pneumatiky?',
                a: 'Závisí od nájazdu a dezénu. Zákonné minimum je 1,6 mm, no z bezpečnostného hľadiska odporúčame meniť pneumatiky už okolo 3 mm. Pri prezutí vám povieme, ako na tom vaša sada je.',
            },
            {
                q: 'Skontrolujete mi aj geometriu?',
                a: 'Áno, kontrola geometrie stojí 16 €, nastavenie prednej nápravy 40 € a oboch náprav 55 €.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame to, najmä ak chcete pickup alebo náhradné auto. Zavolajte na 0944 236 257.',
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
