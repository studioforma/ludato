import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Podvozok drží kolesá v kontakte s cestou, tlmí nárazy a rozhoduje o tom, ako auto zatáča, brzdí a reaguje na nerovnosti. Jeho opotrebenie prichádza pomaly, takže si naň väčšina vodičov zvykne a zbadá ho až vtedy, keď začne klepať alebo auto [na STK](/sluzby/stk-ek-bratislava) neprejde.',
            'V Bratislave, Novom Meste, riešime kontrolu aj opravy podvozku, od tlmičov a ich horného uloženia cez ramená, silentbloky a stabilizátory až po ložiská kolies a čapy riadenia. Diely meníme podľa skutočného stavu, nie naslepo podľa toho, čo sa zvykne meniť.',
        ],
    },
    {
        type: 'cta',
        heading: 'Klepe vám niečo pod autom?',
        text: 'Opotrebovaný podvozok predlžuje brzdnú dráhu a s vôľou v riadení STK neprejdete. Auto zdvihneme a nájdeme príčinu.',
        points: [
            'Kontrola podvozku za 30 €',
            'Tlmiče, ramená, silentbloky, ložiská aj čapy',
            'Cena opravy vopred, bez prekvapení',
        ],
        secondaryHref: '/nacenenie?sluzba=podvozok',
        secondaryLabel: 'Objednať kontrolu podvozku',
    },
    {
        type: 'list',
        heading: 'Čo zahŕňa servis podvozku u nás',
        items: [
            'Kontrola podvozku a náprav na zdviháku',
            'Výmena tlmičov a ich horného uloženia',
            'Výmena ramien a silentblokov',
            'Výmena tyčiek stabilizátora a jeho uloženia',
            'Výmena ložísk kolies',
            'Výmena čapov a koncoviek riadenia',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Rozbor jednotlivých dielov',
        items: [
            {
                title: 'Tlmiče',
                text: 'Tlmiče zabraňujú tomu, aby sa auto po každej nerovnosti hojdalo. Opotrebovaný tlmič predlžuje brzdnú dráhu, zhoršuje stabilitu v zákrute a koleso na hrboľatej ceste stráca kontakt s vozovkou. Keďže sa opotrebúvajú postupne, rozdiel si väčšina vodičov všimne až po výmene.',
            },
            {
                title: 'Horné uloženie tlmičov',
                text: 'Horné uloženie spája tlmič s karosériou a pri prednej náprave sa v ňom tlmič otáča pri zatáčaní. Opotrebované uloženie sa ozýva klepaním pri prejazde nerovností alebo vŕzganím pri točení volantom na mieste.',
            },
            {
                title: 'Ramená a silentbloky',
                text: 'Ramená držia koleso v správnej polohe a silentbloky sú gumové puzdrá, ktorými sú uchytené k podvozku. Gumu časom rozožerie počasie aj zaťaženie a rameno potom dostane vôľu. Prejaví sa to klepaním, nepresným riadením a nerovnomerným opotrebením pneumatík.',
            },
            {
                title: 'Tyčky a stabilizátor',
                text: 'Stabilizátor obmedzuje náklon karosérie v zákrute a tyčky ho spájajú s nápravou. Opotrebované tyčky stabilizátora sú jedným z najčastejších zdrojov klepania na nerovnostiach a ich výmena patrí k rýchlejším opravám podvozku.',
            },
            {
                title: 'Ložiská kolies',
                text: 'Opotrebované ložisko kolesa sa prejaví hučaním, ktoré zosilnie s rýchlosťou a mení sa pri zatáčaní na jednu či druhú stranu. Ložisko netreba odkladať, pri úplnom zlyhaní sa koleso môže začať zadierať.',
            },
            {
                title: 'Čapy a koncovky riadenia',
                text: 'Čapy a koncovky prenášajú pohyb volantu na kolesá. Vôľa v nich znamená nepresné riadenie, klepanie a pri STK je to jeden z najčastejších dôvodov neúspechu. Po ich výmene treba vždy nastaviť geometriu.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Kontrola na zdviháku',
                text: 'Auto zdvihneme a prejdeme vôle v čapoch, ramenách, koncovkách a ložiskách, stav tlmičov, silentblokov aj manžiet.',
            },
            {
                title: 'Vysvetlenie nálezu',
                text: 'Povieme vám, ktoré diely sú opotrebované, ktoré treba meniť hneď a ktoré ešte vydržia, aby ste sa mohli rozhodnúť.',
            },
            {
                title: 'Výmena dielov',
                text: 'Vymeníme dohodnuté diely a všetky spoje dotiahneme na moment predpísaný výrobcom.',
            },
            {
                title: 'Geometria a kontrola',
                text: 'Po zásahu do podvozku odporúčame nastaviť geometriu, aby sa nové diely a pneumatiky zbytočne neopotrebúvali.',
            },
        ],
    },
    {
        type: 'image',
        src: '/sluzby/podvozok-auto-na-zdvihaku-ludato-bratislava.webp',
        alt: 'Auto na zdviháku so zloženým kolesom počas práce na podvozku v autoservise Ludato Family na Odborárskej, Bratislava Nové Mesto',
        caption: 'Auto na zdviháku počas práce na prednej náprave.',
    },
    {
        type: 'caseStudy',
        heading: 'Prípad z našej dielne',
        vehicle: 'Suzuki Swift, kompletná predná náprava',
        paragraphs: [
            'Aj na novšom aute sa časom opotrebujú diely podvozku. Na Suzuki Swift sme riešili kompletnú prednú nápravu. Pri kontrole sa ukázalo, že opotrebované sú tlmiče aj ich horné uloženie a tyčky stabilizátora, a keďže sme mali nápravu rozobratú, vymenili sme v rovnakom kroku aj [predné brzdové kotúče a platničky](/sluzby/brzdy-bratislava).',
            'Takýto postup šetrí prácu aj peniaze. Diely, ktoré ležia na tej istej náprave vedľa seba, sa pri spoločnej demontáži menia výrazne jednoduchšie, než keby sa na ne muselo siahať pri dvoch samostatných návštevách.',
        ],
        outcomes: [
            'Výmena horného uloženia tlmičov',
            'Výmena predných tlmičov',
            'Výmena tyčiek stabilizátora',
            'Výmena predných brzdových kotúčov a platničiek',
            'Záverečná kontrola vozidla',
        ],
    },
    {
        type: 'image',
        src: '/sluzby/podvozok-stary-tlmic-ludato-bratislava.webp',
        alt: 'Vymontovaný opotrebovaný tlmič s pružinou zo Suzuki Swift v autoservise Ludato Family, Bratislava Nové Mesto',
        caption: 'Pôvodný tlmič s pružinou po vymontovaní zo Suzuki Swift.',
        orientation: 'portrait',
    },
    {
        type: 'text',
        heading: 'Ako spoznáte opotrebovaný podvozok',
        paragraphs: [
            'Klepanie pri prejazde nerovností, spomaľovačov alebo koľajníc je najčastejší signál. Zvyčajne ide o tyčky stabilizátora, silentbloky alebo horné uloženie tlmičov. Hučanie, ktoré rastie s rýchlosťou, poukazuje skôr na ložisko kolesa.',
            'Ak sa auto po nerovnosti ešte niekoľkokrát zhupne, predok sa pri brzdení výrazne potápa alebo vás v zákrute viac nakláňa, sú na vine pravdepodobne tlmiče. Nepresné riadenie, keď auto nereaguje na malé pohyby volantu, zase signalizuje vôľu v čapoch alebo koncovkách riadenia.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo sa diely menia po pároch',
        paragraphs: [
            'Tlmiče, pružiny a ďalšie diely na jednej náprave odporúčame meniť vždy v páre, na ľavej aj pravej strane. Nový tlmič na jednej strane a opotrebovaný na druhej znamená, že každá strana auta reaguje na nerovnosti a brzdenie inak. Auto potom môže pri prudkom brzdení alebo v zákrute ťahať do strany.',
            'Pri dieloch ako tyčky stabilizátora alebo koncovky riadenia to nie je vždy nutné, tam rozhoduje skutočný stav. Pri kontrole vám povieme, kde má výmena v páre zmysel a kde stačí vymeniť len jeden diel.',
        ],
    },
    {
        type: 'text',
        heading: 'Podvozok a bezpečnosť',
        paragraphs: [
            'Podvozok nie je len o komforte. Opotrebované tlmiče predlžujú brzdnú dráhu, pretože koleso na nerovnom povrchu poskakuje a nemá stály kontakt s cestou. Rovnako zhoršujú prácu asistenčných systémov ako ABS a ESP, ktoré počítajú s tým, že koleso sa opiera o vozovku.',
            'Vôľa v riadení alebo ramenách zase znamená, že auto pri vyhýbacom manévri nereaguje tak presne, ako by malo. Pri bežnej jazde si to človek nemusí všimnúť, rozdiel sa ukáže až v situácii, keď na ňom záleží.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Po výmene ramien, čapov, koncoviek riadenia alebo tlmičov sa takmer vždy posunie geometria. Ak ju nenastavíte, nové diely síce budú v poriadku, ale pneumatiky sa začnú nerovnomerne opotrebúvať. Preto [geometriu](/sluzby/geometria-bratislava) po zásahu do podvozku odporúčame spraviť hneď.',
            'Pozor aj na lacné diely neznámeho pôvodu. Pri podvozku sa ušetrené peniaze často vrátia v podobe kratšej životnosti a opakovanej práce. Radi vám poradíme, kde sa oplatí kvalitnejší diel a kde postačí bežný.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si môžete skontrolovať sami',
        paragraphs: [
            'Pri stojacom aute zatlačte silno na roh karosérie nad kolesom a pustite. Karoséria by sa mala vrátiť do pôvodnej polohy a zastaviť sa, nie sa ešte niekoľkokrát zhupnúť. Ak sa hojdá, tlmič na tej strane už nepracuje, ako má.',
            'Pozrite sa aj na tlmiče zboku za kolesom. Mastný povlak alebo stopy oleja na tele tlmiča znamenajú, že tlmič netesní a stráca náplň. Pri jazde si všímajte, či auto na diaľnici pri vyššej rýchlosti pláva, alebo či po prejazde nerovnosti chvíľu trvá, kým sa upokojí. Každý z týchto príznakov je dôvod na kontrolu na zdviháku.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'Mestská jazda v Novom Meste dáva podvozku zabrať. Výtlky po zime, spomaľovače na sídliskách, prejazdy cez električkové koľajnice a kopcovité ulice smerom na Kramáre a Kolibu zaťažujú tlmiče, silentbloky aj ložiská viac, než rovnomerná jazda po diaľnici. Ak väčšinu kilometrov najazdíte v meste, odporúčame nechať si podvozok skontrolovať aspoň raz ročne, napríklad pri prezutí.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['PODVOZOK', 'KONTROLY VOZIDLA'],
        only: ['Kontrola podvozku', 'Opravy (tlmiče, ramená, ložiská…)', 'Kontrola podvozku a náprav'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Ako dlho vydržia tlmiče?',
                a: 'Závisí od štýlu jazdy a stavu ciest, bežne desiatky tisíc kilometrov. Keďže sa opotrebúvajú postupne, odporúčame ich stav nechať skontrolovať pri pravidelnej servisnej návšteve.',
            },
            {
                q: 'Prejde auto STK s vôľou v podvozku?',
                a: 'Nie. Vôľa v čapoch, ramenách alebo koncovkách riadenia patrí k najčastejším dôvodom neúspešnej STK. Odporúčame nechať podvozok skontrolovať ešte pred termínom.',
            },
            {
                q: 'Treba po výmene dielov podvozku robiť geometriu?',
                a: 'Takmer vždy áno. Výmena ramien, čapov, koncoviek riadenia alebo tlmičov nastavenie geometrie posunie a bez nastavenia sa pneumatiky opotrebúvajú nerovnomerne.',
            },
            {
                q: 'Čo je silentblok?',
                a: 'Silentblok je gumové puzdro, ktorým je rameno alebo iný diel uchytený k podvozku. Tlmí vibrácie a umožňuje dielu pohyb. Keď guma popraská, diel dostane vôľu a začne klepať.',
            },
            {
                q: 'Musím meniť tlmiče v páre?',
                a: 'Áno, tlmiče na jednej náprave odporúčame meniť vždy spolu, aby obe strany auta reagovali na nerovnosti a brzdenie rovnako.',
            },
            {
                q: 'Oplatí sa opravovať podvozok na staršom aute?',
                a: 'Vo väčšine prípadov áno, pretože ide o bezpečnosť a diely podvozku nie sú v porovnaní s hodnotou auta drahé. Po kontrole vám povieme, čo je nutné hneď a čo môže počkať.',
            },
            {
                q: 'Čo mi klepe pri prejazde cez nerovnosti?',
                a: 'Najčastejšie tyčky stabilizátora, silentbloky alebo horné uloženie tlmičov. Presnú príčinu zistíme pri kontrole na zdviháku.',
            },
            {
                q: 'Koľko trvá oprava podvozku?',
                a: 'Závisí od rozsahu. Výmenu tyčiek stabilizátora zvládneme rýchlo, kompletná predná náprava zaberie viac času. Pri rozsiahlejšej oprave sa dá dohodnúť aj náhradné vozidlo.',
            },
            {
                q: 'Prečo cena opravy nie je v cenníku?',
                a: 'Cena závisí od toho, ktoré diely treba vymeniť a koľko práce si ich výmena na konkrétnom aute vyžiada. Po kontrole vám dáme presnú cenu ešte pred začiatkom opravy.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame objednať sa vopred, aby ste nečakali na uvoľnenie termínu. Najistejšie je zavolať na +421 944 236 257.',
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
