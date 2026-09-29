import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Rozvod synchronizuje kľukový a vačkový hriadeľ, teda zabezpečuje, aby sa ventily otvárali presne vo chvíli, keď majú. Keď funguje, nevšimnete si ho. Keď povolí, motor sa zvyčajne zastaví okamžite a pri väčšine dnešných motorov sa piesty stretnú s ventilmi. Z výmeny za niekoľko stoviek eur sa tak stane oprava hlavy motora alebo celý nový motor.',
            'V Bratislave, Novom Meste, meníme rozvodové remene aj reťaze vrátane napínačov, vodiacich líšt, kladiek a vodného čerpadla. Každú výmenu robíme podľa postupu výrobcu, s aretáciou hriadeľov a kontrolou časovania pred prvým naštartovaním.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo zahŕňa výmena rozvodov u nás',
        items: [
            'Výmena rozvodového remeňa vrátane napínača a kladiek',
            'Výmena rozvodovej reťaze, napínača a vodiacich líšt',
            'Výmena vodného čerpadla, ak ho poháňa rozvod',
            'Aretácia hriadeľov a nastavenie časovania podľa výrobcu',
            'Kontrola tesnení a netesností v okolí rozvodu',
            'Kontrola chodu motora a chybových hlásení po výmene',
        ],
    },
    {
        type: 'text',
        heading: 'Remeň alebo reťaz',
        paragraphs: [
            'Rozvodový remeň je ozubený pás z gumy vystuženej vláknami. Je tichý a lacnejší na výrobu, no guma starne vekom aj teplom, preto má výrobcom predpísaný interval v kilometroch aj v rokoch. Ktorý nastane skôr, ten platí.',
            'Rozvodová reťaz je kovová a beží v motorovom oleji. Často sa o nej hovorí, že vydrží celú životnosť motora, no v praxi to platí len pri pravidelnej výmene oleja a pri motoroch, ktoré s reťazou nemajú známe konštrukčné problémy. Reťaz sa časom vyťahuje a opotrebúvajú sa aj napínač a vodiace lišty. Na rozdiel od remeňa však zvyčajne dá o sebe vedieť skôr, než zlyhá.',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Rozbor jednotlivých dielov',
        items: [
            {
                title: 'Rozvodový remeň',
                text: 'Remeň sa mení podľa intervalu výrobcu, aj keď navonok vyzerá v poriadku. Trhliny v gume, opotrebované zuby alebo nasiaknutie olejom sú dôvod na výmenu aj pred uplynutím intervalu. Remeň, na ktorý sa dostal olej alebo chladiaca kvapalina, stráca pevnosť rýchlejšie.',
            },
            {
                title: 'Rozvodová reťaz',
                text: 'Vytiahnutá reťaz mení časovanie motora. Riadiaca jednotka to často zaznamená ako chybu polohy vačkového hriadeľa ešte skôr, než sa ozve hluk. Pri výmene meníme reťaz spolu s ozubenými kolesami, ak sú opotrebované, aby nová reťaz nebežala po starých zuboch.',
            },
            {
                title: 'Napínač',
                text: 'Napínač drží remeň alebo reťaz v správnom napätí. Pri reťazi je väčšinou hydraulický a funguje vďaka tlaku oleja, preto je citlivý na starý alebo nesprávny olej. Opotrebovaný napínač je častou príčinou rachotu po studenom štarte.',
            },
            {
                title: 'Vodiace lišty a kladky',
                text: 'Vodiace lišty vedú reťaz a kladky vedú remeň. Lišty sú z plastu, ktorý časom tvrdne a láme sa, úlomky potom môžu upchať olejové sitko. Kladky majú ložiská, ktoré sa opotrebúvajú rovnako ako remeň, preto sa menia spolu s ním.',
            },
            {
                title: 'Vodné čerpadlo',
                text: 'Na mnohých motoroch poháňa vodné čerpadlo priamo rozvodový remeň. Pri výmene rozvodu je čerpadlo aj tak dostupné, takže jeho výmena znamená len cenu dielu. Ak by odišlo neskôr, rozvod by sa musel rozoberať znova, a netesné čerpadlo navyše môže poškodiť aj nový remeň.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Posúdenie stavu',
                text: 'Zistíme, aký rozvod má váš motor, kedy sa naposledy menil a podľa potreby cez [počítačovú diagnostiku](/sluzby/pocitacova-diagnostika-bratislava) načítame chyby týkajúce sa časovania.',
            },
            {
                title: 'Cena vopred',
                text: 'Povieme vám, ktoré diely sa budú meniť a koľko to bude stáť, ešte pred začiatkom práce.',
            },
            {
                title: 'Výmena podľa postupu výrobcu',
                text: 'Hriadele zaaretujeme v predpísanej polohe, vymeníme celú sadu a napínač nastavíme podľa predpisu.',
            },
            {
                title: 'Kontrola časovania a skúška',
                text: 'Motor pred naštartovaním ručne pretočíme, overíme časovanie a po naštartovaní skontrolujeme chod a chybové hlásenia.',
            },
        ],
    },
    {
        type: 'image',
        src: '/sluzby/rozvodova-retaz-ludato-bratislava.webp',
        alt: 'Rozvodová reťaz s ozubenými kolesami pri oprave motora v autoservise Ludato Family, Bratislava Nové Mesto',
        caption: 'Rozvodová reťaz a ozubené kolesá počas opravy v našej dielni.',
    },
    {
        type: 'caseStudy',
        heading: 'Prípad z našej dielne',
        vehicle: 'Oprava rozvodovej reťaze',
        paragraphs: [
            'Rozvodová reťaz sa často považuje za diel, na ktorý sa netreba pozerať. Pri tejto zákazke sa však ukázalo, že reťaz potrebuje opravu a spolu s ňou aj diely, ktoré ju držia a vedú. Opotrebovaný napínač už nedokázal reťaz udržať v správnom napätí a vodiace lišty mali za sebou svoje.',
            'Takúto opravu robíme vždy komplexne. Vymeniť len reťaz a nechať starý napínač a lišty by znamenalo, že nová reťaz bude od prvého dňa pracovať v opotrebovanom systéme a problém sa vráti.',
        ],
        outcomes: [
            'Oprava rozvodovej reťaze',
            'Výmena napínača reťaze',
            'Výmena vodiacich líšt',
            'Kontrola chodu motora po oprave',
        ],
    },
    {
        type: 'text',
        heading: 'Kedy meniť rozvody',
        paragraphs: [
            'Rozvodový remeň sa mení podľa intervalu výrobcu, ktorý sa pri bežných motoroch pohybuje zhruba od 60 000 do 200 000 km, a zároveň podľa veku, spravidla po 4 až 10 rokoch. Presný interval pre váš motor nájdeme podľa typu vozidla. Ak si nie ste istí, kedy sa rozvod menil naposledy, alebo ste auto kúpili bez servisnej histórie, odporúčame ho vymeniť preventívne.',
            'Pri reťazi pevný interval väčšinou nie je, rozhoduje stav. Kontrolu odporúčame pri vyšších nájazdoch, pri hluku po studenom štarte alebo keď diagnostika ukáže chybu časovania.',
        ],
    },
    {
        type: 'text',
        heading: 'Varovné signály',
        paragraphs: [
            'Pri reťazi je typický rachot alebo cvakanie krátko po studenom štarte, ktoré po pár sekundách utíchne, keď sa napínač naplní olejom. Časom zvuk trvá dlhšie, až kým rachot nezostane stále. Ďalšími signálmi sú kontrolka motora s chybou polohy vačkového alebo kľukového hriadeľa, horší chod motora a nižší výkon.',
            'Remeň sa zvyčajne neozýva a praskne bez varovania. Pískanie z prednej časti motora môže súvisieť s kladkami alebo napínačom, no najspoľahlivejšou ochranou je dodržať interval. Olej alebo chladiaca kvapalina v okolí krytu rozvodov je dôvod dať rozvod skontrolovať okamžite.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo sa stane, keď rozvod povolí',
        paragraphs: [
            'Väčšina dnešných motorov je takzvane kolízna. Ak remeň praskne alebo reťaz preskočí, piesty narazia do otvorených ventilov. Ohnú sa ventily, poškodiť sa môžu vodidlá ventilov, piesty aj hlava valcov. Oprava sa potom meria v tisíckach eur a pri starších autách sa často ani neoplatí.',
            'Preto je rozvod najdrahšia údržba, ktorú sa dá zanedbať. Preventívna výmena stojí zlomok toho, čo stojí oprava motora po jej zlyhaní.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo meniť celú sadu naraz',
        paragraphs: [
            'Najväčšia časť ceny výmeny rozvodov je práca, nie diely. Aby sa mechanik dostal k remeňu alebo reťazi, musí rozobrať značnú časť prednej strany motora. Keby sa vymenil len remeň a o rok odišla kladka alebo napínač, celá práca by sa opakovala.',
            'Preto meníme vždy celú sadu: remeň alebo reťaz, napínač, kladky alebo lišty, a ak ho poháňa rozvod, aj vodné čerpadlo. Nové diely majú rovnakú životnosť a do ďalšieho intervalu sa na rozvod nemusí siahať.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Neodkladajte výmenu len preto, že auto zatiaľ jazdí bez problémov. Pri remeni je to presne ten stav, v ktorom býva tesne pred prasknutím. A pri reťazi nepomôže ani to, že ju výrobca označil za bezúdržbovú. Pravidelná výmena kvalitného oleja podľa špecifikácie je najlepšia prevencia proti jej vyťahovaniu, viac o tom nájdete pri [výmene oleja](/sluzby/vymena-oleja-bratislava).',
            'Pozor aj na lacné sady neznámeho pôvodu. Rozvod je presne to miesto, kde sa neoplatí šetriť na dieloch, pretože ich zlyhanie zničí motor. Pri kúpe jazdeného auta bez dokladu o výmene rozvodov rátajte s tým, že výmena bude jedna z prvých vecí, ktoré treba spraviť.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'Mestská premávka v Novom Meste je pre rozvod náročnejšia, než by sa zdalo. Veľa krátkych jázd, studené štarty a stop and go na Račianskej či Vajnorskej znamenajú, že motor často beží bez toho, aby sa olej poriadne zohrial. Práve reťazové rozvody sú na to citlivé. Ak jazdíte prevažne po meste a máte motor s reťazou, oplatí sa sledovať, ako znie po studenom štarte, a pri prvých zvukoch nečakať.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['NORMOHODINY'],
        only: ['Ťažká práca – náročné zásahy (rozvody, spojka, turbo, EGR, DPF, opravy motora, elektro, demontáž agregátov)'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Ako často meniť rozvodový remeň?',
                a: 'Podľa intervalu výrobcu v kilometroch aj rokoch, podľa toho, čo nastane skôr. Pri bežných motoroch je to zhruba 60 000 až 200 000 km alebo 4 až 10 rokov. Presný interval pre váš motor vám povieme podľa typu vozidla.',
            },
            {
                q: 'Vydrží rozvodová reťaz celú životnosť motora?',
                a: 'Niekedy áno, no nie je to pravidlo. Reťaz sa časom vyťahuje a opotrebúva sa napínač aj lišty. Veľa závisí od konkrétneho motora a od toho, ako pravidelne sa menil olej.',
            },
            {
                q: 'Aké zvuky prezrádzajú problém s rozvodom?',
                a: 'Pri reťazi je typický rachot po studenom štarte, ktorý po chvíli utíchne. Remeň sa väčšinou neozýva vôbec, pískanie z prednej časti motora môže súvisieť s kladkami alebo napínačom.',
            },
            {
                q: 'Treba pri rozvodoch meniť aj vodné čerpadlo?',
                a: 'Ak ho poháňa rozvodový remeň, odporúčame áno. Pri výmene rozvodu je čerpadlo aj tak dostupné, takže platíte len za diel, a jeho neskoršie zlyhanie by znamenalo rozoberať rozvod znova.',
            },
            {
                q: 'Koľko trvá výmena rozvodov?',
                a: 'Závisí od motora. Pri niektorých autách ide o prácu na jeden deň, pri náročnejších konštrukciách, kde treba demontovať viac dielov, to trvá dlhšie. Presný čas vám povieme pri objednaní. Pri dlhšej oprave sa dá dohodnúť aj náhradné vozidlo.',
            },
            {
                q: 'Koľko stojí výmena rozvodov?',
                a: 'Cena závisí od motora, typu rozvodu a rozsahu sady. Prácu účtujeme podľa normohodín za náročné zásahy a presnú cenu vrátane dielov vám povieme vopred, ešte pred začiatkom práce.',
            },
            {
                q: 'Čo ak neviem, kedy sa rozvod menil naposledy?',
                a: 'Ak nemáte doklad o výmene, odporúčame rozvod vymeniť preventívne. Riziko poškodenia motora je v porovnaní s cenou výmeny príliš veľké.',
            },
            {
                q: 'Môžem s rachotiacou reťazou ďalej jazdiť?',
                a: 'Neodporúčame to. Rachot znamená, že reťaz alebo napínač už nepracujú správne a hrozí preskočenie reťaze, ktoré môže poškodiť motor. Čím skôr ju skontrolujeme, tým menšia oprava.',
            },
            {
                q: 'Robíte rozvody na všetkých značkách?',
                a: 'Áno, výmenu rozvodov robíme na autách všetkých značiek, s remeňom aj reťazou.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Áno, pri rozvodoch odporúčame objednať sa vopred, aby sme mali pripravené správne diely pre váš motor. Najistejšie je zavolať na +421 944 236 257.',
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
