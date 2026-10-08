import type { ServiceContent } from '../sluzby/types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Hľadáte autoservis pre Vajnory? Ludato Family Autoservis a Pneuservis nájdete na Odborárskej 52 v Novom Meste. Z Vajnor k nám autom prídete orientačne za 15 až 20 minút, väčšinou cez Vajnorskú.',
            'Staráme sa o autá všetkých značiek, od bežnej údržby, ako je výmena oleja a prezutie, až po opravy motora, rozvodov či podvozku. A keď sa vám do servisu nechce, po auto si prídeme sami.',
        ],
    },
    {
        type: 'cta',
        heading: 'Nechce sa vám cestovať do servisu?',
        text: 'Auto vo Vajnoroch vyzdvihneme a vy sa nemusíte nikam presúvať. Keď je oprava dlhšia, dostanete náhradné vozidlo.',
        points: [
            'Vyzdvihnutie auta v Bratislave a okolí za 50 €',
            'Náhradné vozidlo za 35 € na deň, nad 1000 € zadarmo',
            'Výmena oleja a olejového filtra od 35 €',
        ],
        secondaryHref: '/nacenenie?sluzba=pickup',
        secondaryLabel: 'Objednať sa',
    },
    {
        type: 'text',
        heading: 'Ako sa k nám dostanete z Vajnor',
        paragraphs: [
            'Najčastejšia trasa vedie po Vajnorskej a Račianskej. Cesta trvá orientačne 15 až 20 minút, v špičke, keď sa Vajnorská plní autami smerujúcimi do mesta, môže byť dlhšia. Ak cestujete do práce smerom do centra, máme vás zhruba po ceste.',
            'Vajnory sú okrajová mestská časť, kde je auto pre veľa ľudí hlavným dopravným prostriedkom. Preto vieme, aké nepríjemné je zostať bez neho. Auto vám vyzdvihneme za 50 € a počas dlhšej opravy vám požičiame [náhradné vozidlo](/sluzby/nahradne-vozidlo-bratislava).',
        ],
    },
    {
        type: 'text',
        heading: 'Čo autá z Vajnor najviac zaťažuje',
        paragraphs: [
            'Kto z Vajnor denne dochádza do mesta, najazdí za rok viac kilometrov než vodič, ktorý jazdí len po štvrti. Väčší nájazd znamená častejšiu výmenu oleja, rýchlejšie opotrebenie pneumatík aj bŕzd. Dodržať servisný interval sa tu oplatí dvojnásobne.',
            'Ranné kolóny na Vajnorskej znamenajú veľa státia, rozbiehania a brzdenia. Motor beží často na voľnobeh, olej sa nestihne poriadne zohriať a brzdy pracujú viac než pri plynulej jazde. To sú presne veci, ktoré skontrolujeme pri bežnej servisnej návšteve.',
            'Na okraji mesta je cez zimu chladnejšie a ráno častejšie namŕza. Batéria a zimné pneumatiky to cítia ako prvé. Ak auto ráno ťažšie štartuje alebo pneumatiky majú dezén na hranici, nečakajte na prvý mráz.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo pre vodičov z Vajnor robíme najčastejšie',
        items: [
            '[Výmena oleja a filtrov](/sluzby/vymena-oleja-bratislava) pri vyššom nájazde',
            'Sezónne [prezutie a vyváženie kolies](/sluzby/pneuservis-bratislava)',
            '[Diagnostika](/sluzby/pocitacova-diagnostika-bratislava), keď sa rozsvieti kontrolka',
            'Kontrola a výmena bŕzd',
            'Výmena batérie od 30 €',
            'Pickup auta priamo z Vajnor',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Ceny služieb, ktoré Vajnorčania riešia najčastejšie',
        items: [
            {
                title: 'Výmena oleja',
                text: 'Výmena oleja a olejového filtra od 35 €, so vzduchovým filtrom 45 €, s kabínovým 55 € a kompletný servis vrátane palivového filtra 65 €. Olej vyberáme podľa EČV vášho auta.',
            },
            {
                title: 'Prezutie',
                text: 'Kompletné prezutie s vyvážením od 45 €. Ak máte kolesá na diskoch, preváženie a prehodenie stojí od 40 €. Druhú sadu vám uskladníme za 40 € na sezónu.',
            },
            {
                title: 'Diagnostika',
                text: 'Diagnostika riadiacej jednotky za 40 €. Zistíme, prečo kontrolka svieti, a povieme vám, či treba konať hneď, alebo to počká do najbližšieho servisu.',
            },
            {
                title: 'Pickup a náhradné auto',
                text: 'Vyzdvihnutie auta za 50 €, náhradné vozidlo za 35 € na deň, pri servise nad 1000 € zadarmo a pri poistnej udalosti ho hradí poisťovňa.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo k nám chodia aj z Vajnor',
        paragraphs: [
            'Sme rodinný servis, kde sa rozprávate priamo s tým, kto robí na vašom aute. Od otvorenia sme opravili viac ako 1 200 áut a na Google máme hodnotenie 5.0 z viac ako 40 recenzií.',
            'Ceny máme zverejnené v [cenníku](/cennik) a pred každou väčšou opravou vám povieme, čo treba urobiť a koľko to bude stáť. Nemusíte sa báť, že na faktúre nájdete niečo, o čom ste nevedeli.',
        ],
    },
    {
        type: 'text',
        heading: 'Vyšší nájazd a servisné intervaly',
        paragraphs: [
            'Výrobcovia predpisujú výmenu oleja podľa kilometrov aj času, a platí to, čo nastane skôr. Kto z Vajnor denne dochádza do mesta a späť, najazdí ročne výrazne viac než vodič, ktorý jazdí len po okolí. Interval podľa kilometrov tak príde skôr, než by človek čakal, a často skôr ako ročná prehliadka.',
            'Zároveň je veľká časť týchto kilometrov v kolónach na Vajnorskej, kde motor beží pri nízkych otáčkach a často na voľnobeh. Takáto prevádzka je pre olej náročnejšia, než naznačuje samotný počet kilometrov. Preto pri dochádzaní odporúčame držať sa skôr kratšieho intervalu a pri každej výmene oleja nechať skontrolovať aj brzdy a pneumatiky.',
            'Pri vyššom nájazde sa rýchlejšie opotrebúvajú aj pneumatiky a brzdy. Preto pri výmene oleja vždy pozrieme aj na dezén, platničky a úniky pod autom, aby ste vedeli, čo bude na rade pri ďalšej návšteve.',
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Objednanie',
                text: 'Zavolajte alebo vyplňte objednávku a povedzte nám, čo auto potrebuje. Rovno si môžeme dohodnúť aj vyzdvihnutie auta vo Vajnoroch.',
            },
            {
                title: 'Cesta do servisu',
                text: 'Buď prídete po Vajnorskej za 15 až 20 minút, alebo si po auto prídeme my. Ak oprava potrvá dlhšie, pripravíme vám náhradné vozidlo.',
            },
            {
                title: 'Kontrola a cena',
                text: 'Auto prezrieme, povieme vám, čo je potrebné riešiť hneď a čo môže počkať, a cenu odsúhlasíme pred opravou.',
            },
            {
                title: 'Oprava a vrátenie',
                text: 'Po oprave vám vysvetlíme, čo sme urobili, a auto je pripravené na ďalšie kilometre.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Sezónny servis',
        paragraphs: [
            'Pred zimou odporúčame prezutie a kontrolu batérie. Na okraji mesta sú rána chladnejšie a slabá batéria sa prejaví ako prvá. Kompletné prezutie s vyvážením stojí od 45 € a výmena batérie od 30 €.',
            'Na jar je čas prezuť späť na letné pneumatiky a pri vyššom nájazde rovno vymeniť aj olej. Pred letom sa oplatí skontrolovať klimatizáciu, aby pri dochádzaní do mesta v horúčavách chladila, ako má.',
            'Ak pneumatiky na zimu uskladňujete doma, v pivnici alebo v garáži, skontrolujte, či nie sú na slnku alebo vo vlhku. U nás ich uskladníte za 40 € na sezónu a pri ďalšom prezutí budú pripravené.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Pri vyššom nájazde sa servisný interval minie rýchlejšie, než by človek čakal. Sledujte nielen dátum, ale aj kilometre od poslednej výmeny oleja. Starý olej prestáva motor chrániť a opotrebenie potom pribúda nenápadne.',
            'Ak auto používate každý deň na dochádzanie, nenechávajte drobné príznaky na neskôr. Pískanie bŕzd, nový zvuk pri jazde alebo kontrolka sa časom zvyčajne nezlepšia a oprava sa predraží.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť pred návštevou',
        paragraphs: [
            'Pri objednaní nám povedzte, kedy a pri akom stave tachometra sa naposledy menil olej. Ak máte servisnú knižku, prineste ju, podľa nej vieme, čo je na rade.',
            'Ak si želáte vyzdvihnutie auta, dohodneme miesto a čas a dohodneme sa aj na odovzdaní kľúčov. Pri prezutí nezabudnite na kľúč od bezpečnostných skrutiek kolies, ak ich auto má.',
        ],
    },
    {
        type: 'faq',
        heading: 'Časté otázky vodičov z Vajnor',
        items: [
            {
                q: 'Ako dlho mi to k vám trvá z Vajnor?',
                a: 'Orientačne 15 až 20 minút autom cez Vajnorskú a Račiansku. V rannej špičke môže byť cesta dlhšia.',
            },
            {
                q: 'Prídete si po auto do Vajnor?',
                a: 'Áno, auto vyzdvihneme v rámci Bratislavy a okolia za 50 €. Nepojazdné auto odtiahneme za 170 €.',
            },
            {
                q: 'Dostanem náhradné auto, kým bude moje v servise?',
                a: 'Áno, náhradné vozidlo stojí 35 € na deň, pri servise nad 1000 € je zadarmo. Povedzte nám o ňom pri objednaní.',
            },
            {
                q: 'Koľko stojí výmena oleja?',
                a: 'Od 35 € za výmenu oleja a olejového filtra. Ceny sú uvedené bez DPH, kompletný prehľad nájdete v cenníku.',
            },
            {
                q: 'Robíte aj prezutie?',
                a: 'Áno, kompletné prezutie s vyvážením stojí od 45 € podľa veľkosti diskov. Pneumatiky vám vieme aj uskladniť.',
            },
            {
                q: 'Vymeníte aj batériu?',
                a: 'Áno, výmena batérie stojí od 30 €.',
            },
            {
                q: 'Robíte aj geometriu?',
                a: 'Áno, kontrola geometrie stojí 16 €, nastavenie prednej nápravy 40 € a oboch náprav 55 €.',
            },
            {
                q: 'Uskladníte mi pneumatiky?',
                a: 'Áno, sezónne uskladnenie stojí 40 € na sezónu a pri ďalšom prezutí budete mať sadu pripravenú.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame to, hlavne v sezóne prezúvania. Zavolajte na 0944 236 257.',
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
