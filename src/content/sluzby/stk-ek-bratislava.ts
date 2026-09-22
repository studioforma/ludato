import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'STK a emisná kontrola sú pre väčšinu vodičov najmenej obľúbená povinnosť roka, hlavne keď auto neprejde na prvý pokus a musíte prísť znova. V Bratislave, Novom Meste, vám vieme vozidlo pripraviť tak, aby prešlo na prvýkrát, alebo vám celú kontrolu aj sprostredkovať.',
            'Ponúkame dve úrovne, kontrolu pred STK a EK, kde vám povieme presne, čo treba opraviť, alebo kompletné sprostredkovanie, kde sa o všetko postaráme za vás.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo ponúkame',
        items: [
            'Kontrola vozidla pred STK a EK, s presným zoznamom, čo je potrebné opraviť',
            'Kompletné sprostredkovanie STK a EK, vybavíme to za vás',
            'Kontrola emisného systému, dôležitá hlavne pri dieselových vozidlách',
            'Odporúčanie opravy pred samotnou kontrolou, aby ste neplatili za opakovaný termín',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Rozdiel medzi kontrolou a sprostredkovaním',
        items: [
            {
                title: 'Kontrola pred STK a EK',
                text: 'Vozidlo prejdeme podľa rovnakých kritérií, ako ho bude posudzovať stanica technickej kontroly, a povieme vám presne, čo treba opraviť, aby ste s vysokou istotou prešli na prvý pokus.',
            },
            {
                title: 'Sprostredkovanie STK a EK',
                text: 'Vozidlo u nás necháte a o celú kontrolu, vrátane objednania termínu na stanici, sa postaráme sami. Vy si len prídete po vozidlo s hotovou kontrolou.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako prebieha sprostredkovanie',
        steps: [
            {
                title: 'Odovzdanie vozidla',
                text: 'Vozidlo u nás odovzdáte spolu s dokladmi potrebnými na kontrolu.',
            },
            {
                title: 'Predbežná kontrola',
                text: 'Vozidlo prejdeme podľa kritérií STK a EK, aby sme vopred zachytili prípadné nedostatky.',
            },
            {
                title: 'Objednanie a odvoz na stanicu',
                text: 'Dohodneme termín na stanici technickej kontroly a vozidlo tam zabezpečíme dopraviť.',
            },
            {
                title: 'Vyzdvihnutie s hotovým výsledkom',
                text: 'Vozidlo si vyzdvihnete u nás, spolu s výsledkom kontroly a novou známkou.',
            },
        ],
    },
    {
        type: 'breakdown',
        heading: 'Čo sa na STK kontroluje',
        items: [
            {
                title: 'Brzdová sústava',
                text: 'Na valcovej skúšobni sa meria účinnosť bŕzd a rovnomernosť brzdenia medzi ľavou a pravou stranou. Kontroluje sa aj stav kotúčov, platničiek, hadíc a funkčnosť parkovacej brzdy.',
            },
            {
                title: 'Riadenie a podvozok',
                text: 'Posudzuje sa vôľa v riadení, stav čapov, ramien a silentblokov, tlmiče a celkový stav náprav. Práve tu sa najčastejšie ukáže opotrebenie, ktoré vodič pri bežnej jazde ani nevníma.',
            },
            {
                title: 'Osvetlenie a elektrika',
                text: 'Kontroluje sa funkčnosť všetkých svetiel a ich správne nastavenie. Zle nasmerované svetlomety po výmene žiarovky alebo dielu sú bežný a pritom rýchlo odstrániteľný dôvod neúspechu.',
            },
            {
                title: 'Pneumatiky a kolesá',
                text: 'Sleduje sa hĺbka dezénu, rovnomernosť opotrebenia, poškodenie bočníc a či rozmer zodpovedá tomu, čo je uvedené v technickom preukaze.',
            },
            {
                title: 'Karoséria a výfuk',
                text: 'Kontroluje sa korózia nosných častí, stav karosérie a tesnosť výfukového systému vrátane hlučnosti.',
            },
            {
                title: 'Doklady a výbava',
                text: 'Overuje sa zhoda vozidla s technickým preukazom, platné poistenie a povinná výbava.',
            },
        ],
    },
    {
        type: 'image',
        src: '/sluzby/dielna-ludato-bratislava.webp',
        alt: 'Dielňa autoservisu Ludato Family s dvomi zdvihákmi na Odborárskej v Bratislave, Novom Meste',
        caption: 'Kontrolu pred STK robíme na zdviháku u nás na Odborárskej 52, takže vidíme aj to, čo je zospodu.',
    },
    {
        type: 'text',
        heading: 'Najčastejšie dôvody neúspešnej STK',
        paragraphs: [
            'Medzi najčastejšie dôvody, prečo vozidlo neprejde na prvý pokus, patrí opotrebovaný brzdový systém, nefunkčné alebo nesprávne nastavené osvetlenie, opotrebovaný podvozok, nesprávne nastavená geometria alebo úniky prevádzkových kvapalín. Väčšina z toho sa dá zistiť a opraviť vopred, práve to je zmyslom kontroly pred STK.',
        ],
    },
    {
        type: 'text',
        heading: 'Emisná kontrola pri dieselových vozidlách',
        paragraphs: [
            'Dieselové vozidlá majú pri emisnej kontrole prísnejšie limity, hlavne v súvislosti s filtrom pevných častíc (DPF). Upchatý alebo poškodený DPF filter je bežný dôvod, prečo diesel na emisnej kontrole neprejde, a odporúčame ho riešiť ešte pred samotnou kontrolou, nie po neúspešnom pokuse.',
        ],
    },
    {
        type: 'text',
        heading: 'Lehoty STK a EK',
        paragraphs: [
            'Pri bežnom osobnom vozidle platí, že prvá technická aj emisná kontrola sa absolvuje štyri roky od prvého prihlásenia vozidla do evidencie, a potom sa opakuje každé dva roky. Pri vozidlách používaných na podnikanie, napríklad v taxislužbe alebo autoškole, sú lehoty kratšie.',
            'Keďže lehoty sa odvíjajú od kategórie a spôsobu používania vozidla a legislatíva sa môže meniť, najspoľahlivejšie je riadiť sa dátumom na kontrolnej nálepke a údajmi v technickom preukaze. Ak si nie ste istí, kedy máte ísť, pokojne sa ozvite a termín vám podľa technického preukazu overíme.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si pripraviť',
        paragraphs: [
            'Na STK a EK budete potrebovať technický preukaz vozidla, doklad o poistení a povinnú výbavu (náhradné koleso alebo súpravu na opravu defektu, lekárničku, výstražný trojuholník a reflexnú vestu). Pri sprostredkovaní si toto všetko overíme za vás ešte pred odovzdaním na stanicu.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Bežná chyba je nechať kontrolu na posledný týždeň platnosti známky, keď sú termíny na staniciach najviac obsadené. Odporúčame prísť na kontrolu aspoň dva až tri týždne vopred, aby ste mali čas prípadné nedostatky opraviť bez stresu.',
            'Ak ste na vozidle nedávno robili väčšiu opravu, napríklad výmenu tlmičov alebo svetiel, oplatí sa nechať si to skontrolovať ešte pred STK, nesprávne nastavené svetlá po výmene sú bežný a ľahko odstrániteľný dôvod neúspechu.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'V okolí Nového Mesta je viacero staníc technickej kontroly, termíny sa hlavne v lete a pred koncom roka rýchlo plnia. Pri sprostredkovaní za vás termín dohodneme a odvoz vyriešime, takže sa o toto nemusíte starať.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['KONTROLY VOZIDLA', 'STK A EK'],
        only: ['Kontrola pred STK + EK', 'Sprostredkovanie kontroly STK + EK'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Čo presne znamená sprostredkovanie?',
                a: 'Vozidlo u nás necháte a my zabezpečíme celý priebeh STK a EK, vrátane objednania termínu na stanici. Vy si prídete po hotové vozidlo.',
            },
            {
                q: 'Ako dlho to trvá?',
                a: 'Kontrola pred STK trvá v rámci jednej návštevy. Pri sprostredkovaní závisí čas aj od voľných termínov na stanici technickej kontroly.',
            },
            {
                q: 'Čo ak vozidlo na STK neprejde?',
                a: 'Pri kontrole pred STK vám vopred povieme presne, čo treba opraviť, aby sa toto riziko minimalizovalo. Pri sprostredkovaní riešime prípadné nedostatky spolu s vami.',
            },
            {
                q: 'Kedy mám ísť na STK?',
                a: 'Lehoty určuje zákon podľa veku a typu vozidla. Presný termín vám vieme overiť podľa technického preukazu.',
            },
            {
                q: 'Opravíte to, čo STK vytkne?',
                a: 'Áno, opravy vieme zabezpečiť priamo u nás, väčšinu bežných nedostatkov (brzdy, osvetlenie, podvozok) riešime sami.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame objednať sa vopred, aby ste nečakali na uvoľnenie termínu. Najistejšie je zavolať na +421 944 236 257.',
            },
            {
                q: 'Robíte kontrolu aj na dieselové vozidlá?',
                a: 'Áno, pri dieseloch venujeme zvýšenú pozornosť aj filtru pevných častíc (DPF), ktorý je bežným dôvodom neúspešnej emisnej kontroly.',
            },
            {
                q: 'Je sprostredkovanie drahšie ako bežná STK?',
                a: 'Cena sprostredkovania zahŕňa aj našu prácu s vybavením celého procesu, nie len samotný poplatok za kontrolu na stanici.',
            },
            {
                q: 'Môžem prísť len na kontrolu bez sprostredkovania?',
                a: 'Áno, kontrolu pred STK a EK ponúkame aj samostatne, bez toho, aby ste si museli objednať aj sprostredkovanie.',
            },
            {
                q: 'Čo ak mám platnosť známky už prekročenú?',
                a: 'Čím skôr sa ozvete, tým skôr vám vieme termín zabezpečiť. Neodkladajte to, jazda s prepadnutou známkou je riziková aj z hľadiska prípadnej pokuty.',
            },
            {
                q: 'Riešite aj STK pri novšom dovezenom vozidle?',
                a: 'Áno, prvá kontrola po dovoze má svoje špecifiká, radi vám s ňou pomôžeme aj so sprostredkovaním.',
            },
            {
                q: 'Ako skoro pred termínom sa mám ozvať?',
                a: 'Odporúčame ozvať sa aspoň dva až tri týždne vopred, hlavne v lete a pred koncom roka, keď sú termíny na staniciach najviac obsadené.',
            },
            {
                q: 'Zabezpečíte aj odvoz vozidla na stanicu?',
                a: 'Áno, pri sprostredkovaní vozidlo na stanicu aj z nej dopravíme sami, vy si ho vyzdvihnete u nás s hotovým výsledkom.',
            },
            {
                q: 'Čo ak mám na vozidle ťažné zariadenie alebo iné úpravy?',
                a: 'Akákoľvek úprava vozidla musí byť zapísaná v technickom preukaze. Ak zapísaná nie je, býva to dôvod na neúspech, preto to odporúčame overiť ešte pred kontrolou.',
            },
            {
                q: 'Musí byť auto pred kontrolou umyté?',
                a: 'Umyté vozidlo nie je podmienkou, ale pomáha. Pri zanesenom podvozku alebo zablatenej karosérii sa horšie posudzuje korózia a stav jednotlivých dielov.',
            },
            {
                q: 'Rieši sa na emisnej kontrole aj kvalita paliva?',
                a: 'Priamo nie, meria sa zloženie výfukových plynov. Dlhodobé tankovanie nekvalitného paliva sa však na výsledku prejaví nepriamo, cez zanesené vstrekovače alebo filter pevných častíc.',
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
