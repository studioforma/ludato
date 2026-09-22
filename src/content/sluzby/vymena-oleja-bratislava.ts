import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Výmena oleja a filtrov je najčastejší servisný úkon, ktorý u nás zákazníci riešia, a zároveň najlepšia investícia do životnosti motora. Olej mazňuje, chladí a čistí motor od nečistôt, bez neho by sa kovové časti motora za pár minút jazdy zadreli.',
            'V Bratislave, Novom Meste, vám olej a filtre vymeníme podľa presnej špecifikácie výrobcu vášho vozidla, nie univerzálnym olejom naslepo. Súčasťou je aj vizuálna kontrola motora a ostatných kvapalín, aby sme prípadný problém zachytili skôr, než sa prejaví na ceste.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo zahŕňa výmena oleja u nás',
        items: [
            'Výmena motorového oleja podľa špecifikácie výrobcu vozidla',
            'Výmena olejového filtra pri každej výmene oleja',
            'Výmena vzduchového filtra (podľa vybraného balíka)',
            'Výmena kabínového (peľového) filtra (podľa vybraného balíka)',
            'Výmena palivového filtra v rámci kompletného servisu',
            'Vizuálna kontrola hladiny ostatných kvapalín a stavu motora',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Rozbor jednotlivých úkonov',
        items: [
            {
                title: 'Motorový olej',
                text: 'Motorový olej vyberáme podľa presnej špecifikácie výrobcu vášho vozidla, nie univerzálne. Bežne pracujeme s viskozitami ako 0W20 alebo 5W30, konkrétny typ a objem zistíme podľa EČV vozidla, aby motor dostal presne to, čo má predpísané.',
            },
            {
                title: 'Olejový filter',
                text: 'Olejový filter zachytáva kovové čiastočky a nečistoty z motora. Meníme ho pri každej výmene oleja, staré, upchaté vedie k horšiemu mazaniu a rýchlejšiemu opotrebovaniu motora.',
            },
            {
                title: 'Vzduchový filter',
                text: 'Vzduchový filter zabraňuje nečistotám z okolia dostať sa do motora. Upchatý filter zvyšuje spotrebu paliva a znižuje výkon, preto ho odporúčame kontrolovať pri každej väčšej servisnej návšteve.',
            },
            {
                title: 'Kabínový (peľový) filter',
                text: 'Kabínový filter čistí vzduch, ktorý sa dostáva do interiéru cez klimatizáciu a vetranie. Zanesený filter je najčastejšia príčina nepríjemného zápachu z ventilácie a zníženého výkonu klimatizácie.',
            },
            {
                title: 'Palivový filter',
                text: 'Palivový filter chráni vstrekovače a čerpadlo od nečistôt v palive. Je súčasťou nášho kompletného servisného balíka, keďže sa mení v dlhších intervaloch než ostatné filtre.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Kontrola podľa EČV',
                text: 'Podľa EČV vozidla zistíme presnú špecifikáciu, objem oleja a zoznam filtrov, ktoré vaše vozidlo potrebuje.',
            },
            {
                title: 'Vypustenie starého oleja a filtre',
                text: 'Vypustíme starý olej a vymeníme olejový filter, prípadne aj ďalšie filtre podľa vybraného balíka.',
            },
            {
                title: 'Nová náplň',
                text: 'Motor naplníme novým olejom na predpísanú hladinu a skontrolujeme, že nikde nič nepresakuje.',
            },
            {
                title: 'Záverečná kontrola',
                text: 'Na záver skontrolujeme hladinu ostatných kvapalín a vizuálne posúdime celkový stav motora.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Typy motorových olejov',
        paragraphs: [
            'Motorové oleje sa delia na minerálne, polosyntetické a syntetické. Minerálny olej je najlevnejší, ale najrýchlejšie stráca svoje vlastnosti a hodí sa len pre staršie, jednoduchšie motory. Polosyntetický olej je kompromisom medzi cenou a odolnosťou, syntetický olej si najdlhšie udrží správnu viskozitu aj pri vysokých teplotách a extrémnom zaťažení, preto ho predpisuje väčšina novších motorov.',
            'Pri výbere oleja pre vaše vozidlo sa neriadime len touto deľbou, ale hlavne normou a viskozitou, ktorú predpisuje výrobca. Použitie oleja, ktorý normu nespĺňa, môže aj pri "lepšom" oleji viesť k problémom, napríklad s filtrom pevných častíc pri naftových motoroch.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako vyberáme správny olej',
        paragraphs: [
            'Nesprávny olej vie motoru uškodiť rovnako ako olej, ktorý sa dlho nemenil. Preto sa vždy riadime špecifikáciou výrobcu vozidla, nie len viskozitou napísanou na kanistri. Bežné motorové oleje, s ktorými pracujeme, sú napríklad 0W20 pre novšie motory s nižšou viskozitou alebo 5W30 pre širšiu skupinu bežných benzínových aj naftových motorov. Presný typ, viskozitu aj objem oleja vám vieme povedať podľa EČV vozidla ešte pred samotnou výmenou.',
        ],
    },
    {
        type: 'text',
        heading: 'Ako často meniť olej',
        paragraphs: [
            'Interval výmeny oleja predpisuje výrobca vozidla, bežne ide o rozsah 10 000 až 15 000 km alebo raz ročne, podľa toho, čo nastane skôr. Olej totiž starne aj časom, nielen prejdenými kilometrami, jeho mazacie vlastnosti sa postupne znižujú aj keď auto stojí v garáži.',
            'Mestská jazda s krátkymi trasami a častým zastavovaním, typická pre Nové Mesto a okolité časti Bratislavy, zaťažuje olej viac než rovnomerná jazda po diaľnici. Motor sa nestíha poriadne zahriať, do oleja sa dostáva viac kondenzátu a nespálených splodín, preto pri prevažne mestskej jazde odporúčame držať sa skôr kratšieho intervalu.',
        ],
    },
    {
        type: 'text',
        heading: 'Varovné signály, že olej treba vymeniť',
        paragraphs: [
            'Tmavý, takmer čierny olej na mierke je bežným znakom, že olej už stráca svoje mazacie vlastnosti. Rozsvietená kontrolka oleja na palubnej doske je vážnejší signál, ktorý neznamená len "treba dolievať", ale často už aj problém s tlakom v mazacom okruhu.',
            'Zvýšená spotreba oleja medzi servismi, nezvyčajný hluk motora po nastartovaní alebo namodralý dym z výfuku môžu signalizovať opotrebenie motora, ktoré súvisí s dlhodobo zanedbanou výmenou oleja. V takom prípade odporúčame nečakať na najbližší plánovaný termín a prísť na kontrolu skôr.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Bežná chyba je odkladať výmenu oleja "ešte o kúsok ďalej", najmä pri aute, ktoré jazdí málo. Ako sme spomínali, olej starne aj časom, takže prekročenie ročného intervalu je rizikové aj pri nízkom počte kilometrov.',
            'Miešanie rôznych typov alebo výrobcov oleja pri dolievaní medzi servisami sa vo väčšine prípadov nič nestane, no pri väčšom úbytku oleja odporúčame nechať si poradiť, aby ste dolievali kompatibilný olej a nie len "čo bolo doma v garáži".',
            'Zabudnutý alebo nevymenený vzduchový filter je tichý zlodej výkonu a paliva, motor totiž musí cez zanesený filter nasávať vzduch s väčšou námahou. Odporúčame ho kontrolovať pri každej väčšej servisnej návšteve, nielen pri výmene oleja.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['OLEJOVÝ SERVIS'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Ako často treba meniť motorový olej?',
                a: 'Riadime sa intervalom predpísaným výrobcom vozidla, bežne 10 000 až 15 000 km alebo raz ročne, podľa toho, čo nastane skôr. Pri prevažne mestskej jazde odporúčame kratší interval.',
            },
            {
                q: 'Vymieňate pri výmene oleja aj filtre?',
                a: 'Olejový filter meníme vždy pri výmene oleja. Vzduchový a kabínový filter sú súčasťou vyšších servisných balíkov, palivový filter je súčasťou kompletného servisu.',
            },
            {
                q: 'Čo ak jazdím veľmi málo kilometrov?',
                a: 'Olej starne aj časom, nielen kilometrami, preto odporúčame dodržať aj ročný interval výmeny, aj keď vozidlo najazdí len málo kilometrov.',
            },
            {
                q: 'Aký olej u vás dostanem?',
                a: 'Olej vyberáme podľa špecifikácie výrobcu vášho vozidla. Bežne pracujeme s viskozitami ako 0W20 alebo 5W30, presný typ a objem zistíme podľa EČV.',
            },
            {
                q: 'Prečo nie je cena v cenníku konečná?',
                a: 'Uvedená cena je za prácu, materiál (olej a filtre) naceňujeme individuálne podľa EČV vozidla, keďže sa líši typ, objem aj počet potrebných filtrov.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame objednať sa vopred, aby ste nečakali na uvoľnenie termínu. Najistejšie je zavolať na +421 944 236 257.',
            },
            {
                q: 'Ako dlho trvá výmena oleja?',
                a: 'Výmena oleja a filtrov patrí medzi rýchlejšie servisné úkony, bežne ju zvládneme v rámci jednej návštevy.',
            },
            {
                q: 'Riešite aj výmenu oleja v prevodovke?',
                a: 'Prevodový olej je iný typ oleja s iným intervalom výmeny a riešime ho v rámci servisu prevodovky, nie pri bežnej výmene motorového oleja.',
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
