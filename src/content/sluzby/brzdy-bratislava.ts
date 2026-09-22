import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Brzdy sú bezpečnostný prvok, ktorý používate pri každej jednej jazde, a zlyhanie si tu jednoducho nemôžete dovoliť. V Bratislave, Novom Meste, riešime kontrolu bŕzd, výmenu kotúčov a platničiek aj výmenu brzdovej kvapaliny, na oboch nápravách.',
            'Brzdový systém kontrolujeme ako celok, nielen tú časť, ktorú si zákazník sám všimol. Opotrebovaná platnička na jednej náprave je totiž často znak, že podobne je opotrebovaná aj druhá strana, len sa to ešte neprejavilo zvukom.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo zahŕňa servis bŕzd u nás',
        items: [
            'Kontrola bŕzd (kotúče, platničky, hadice, strmene, ručná brzda)',
            'Výmena predných brzdových kotúčov a platničiek',
            'Výmena predných brzdových platničiek samostatne',
            'Výmena zadných brzdových kotúčov a platničiek',
            'Výmena zadných brzdových platničiek samostatne',
            'Výmena brzdovej kvapaliny',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Rozbor jednotlivých úkonov',
        items: [
            {
                title: 'Brzdové kotúče',
                text: 'Brzdové kotúče sa opotrebúvajú aj deformujú teplom, čo sa prejaví vibráciami v pedáli alebo volante pri brzdení. Meníme ich vždy spolu s platničkami, keďže opotrebované platničky na novom kotúči by ho rýchlo poškodili nerovnomerne.',
            },
            {
                title: 'Brzdové platničky',
                text: 'Platničky sú časť brzdového systému, ktorá sa trením o kotúč opotrebuje najrýchlejšie. Bežný signál, že sú na hranici, je pískanie pri brzdení alebo dlhšia brzdná dráha, než ste zvyknutí.',
            },
            {
                title: 'Brzdová kvapalina',
                text: 'Brzdová kvapalina časom nasáva vlhkosť zo vzduchu, čo znižuje jej bod varu. Pri intenzívnom brzdení sa potom môže v okruhu vytvoriť vzduchová bublina a pedál zmäkne práve vtedy, keď to najmenej potrebujete.',
            },
            {
                title: 'Kontrola celého systému',
                text: 'Pri kontrole bŕzd sa nepozeráme len na kotúče a platničky, ale aj na stav brzdových hadíc, strmeňov a funkčnosť ručnej brzdy, aby bol celý systém spoľahlivý, nielen tá časť, ktorú vidno na prvý pohľad.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Kontrola opotrebenia',
                text: 'Skontrolujeme hrúbku platničiek a stav kotúčov na oboch nápravách, nielen na tej, kde ste problém spomenuli.',
            },
            {
                title: 'Výmena podľa potreby',
                text: 'Vymeníme kotúče, platničky alebo oboje, podľa toho, čo kontrola ukázala.',
            },
            {
                title: 'Dotiahnutie na predpísaný moment',
                text: 'Všetky spoje dotiahneme presne na uťahovací moment predpísaný výrobcom, nie "od ruky".',
            },
            {
                title: 'Skúšobná jazda',
                text: 'Po väčšom zásahu do bŕzd absolvujeme skúšobnú jazdu, aby sme si overili, že je všetko v poriadku ešte pred odovzdaním vozidla.',
            },
        ],
    },
    {
        type: 'caseStudy',
        heading: 'Prípad z našej dielne',
        vehicle: 'Suzuki Swift, kompletná predná náprava',
        paragraphs: [
            'Pri servise prednej nápravy na Suzuki Swift sme okrem tlmičov a tyčiek stabilizátora riešili aj kompletnú výmenu predných brzdových kotúčov a platničiek. Opotrebenie bŕzd sa totiž pri práci na náprave prejavilo rovnako výrazne ako opotrebenie tlmičov, obe časti spolu totiž nesú zaťaženie pri brzdení.',
        ],
        outcomes: [
            'Výmena predných brzdových kotúčov',
            'Výmena predných brzdových platničiek',
            'Kontrola funkčnosti po zásahu do nápravy',
        ],
    },
    {
        type: 'text',
        heading: 'Ako spoznáte opotrebované brzdy',
        paragraphs: [
            'Pískanie alebo škrípanie pri brzdení je najčastejší prvý signál, že platničky sú na hranici opotrebenia. Vibrácie v pedáli alebo volante počas brzdenia zvyčajne znamenajú deformovaný alebo opotrebovaný kotúč.',
            'Dlhšia brzdná dráha, než ste zvyknutí, a mäkký, "hubovitý" pocit v pedáli sú signály, ktoré sa oplatí riešiť čo najskôr, môžu súvisieť s brzdovou kvapalinou alebo vzduchom v systéme. V oboch prípadoch odporúčame nečakať na najbližší plánovaný servis.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Bežná chyba je riešiť len nápravu, na ktorej sa problém prejavil, a druhú nechať bez kontroly. Brzdový systém pracuje ako celok, nerovnomerné opotrebenie medzi nápravami alebo stranami vie ovplyvniť stabilitu vozidla pri núdzovom brzdení.',
            'Kombinovanie rôznych značiek alebo typov platničiek na jednej náprave nie je vhodné, keďže majú rôzne trecie vlastnosti. Pri výmene odporúčame použiť rovnaký typ na oboch stranách nápravy.',
            'Dolievaním starej brzdovej kvapaliny "len aby bola hladina v poriadku" problém s vlhkosťou v systéme nevyriešite, kvapalinu treba pri prekročení intervalu vymeniť celú, nie len doplniť.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'Kopcovitý terén smerom na Kramáre a Kolibu zaťažuje brzdy výraznejšie než rovinatá jazda, časté brzdenie v klesaní opotrebúva platničky aj kotúče rýchlejšie. Ak bývate alebo pravidelne jazdíte touto oblasťou, oplatí sa brzdy kontrolovať o čosi častejšie, než je bežný interval.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['BRZDY'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Ako často treba meniť brzdové platničky?',
                a: 'Závisí od štýlu jazdy a typu vozidla, bežne ide o desiatky tisíc kilometrov. Najspoľahlivejší signál je pískanie pri brzdení alebo naša kontrola pri servisnej návšteve.',
            },
            {
                q: 'Musím meniť kotúče spolu s platničkami?',
                a: 'Ak sú kotúče v poriadku, stačí vymeniť len platničky. Ak sú kotúče opotrebované alebo deformované, odporúčame vymeniť oboje naraz.',
            },
            {
                q: 'Prečo pískajú aj nové brzdy?',
                a: 'Nové platničky si potrebujú "zabehnúť" prvých pár desiatok kilometrov, po zabehnutí by mal zvuk zmiznúť. Ak pretrváva dlhšie, radi to skontrolujeme.',
            },
            {
                q: 'Ako často meniť brzdovú kvapalinu?',
                a: 'Kvapalina časom nasáva vlhkosť zo vzduchu, čo znižuje jej bod varu. Odporúčame ju meniť podľa intervalu predpísaného výrobcom vozidla, bežne každé 2 roky.',
            },
            {
                q: 'Stačí vymeniť len predné brzdy?',
                a: 'Predné brzdy sa pri bežnej jazde opotrebúvajú rýchlejšie ako zadné, no vždy skontrolujeme aj zadnú nápravu, aby bolo brzdenie na oboch nápravách vyvážené.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame objednať sa vopred, aby ste nečakali na uvoľnenie termínu. Najistejšie je zavolať na +421 944 236 257.',
            },
            {
                q: 'Ako dlho trvá výmena bŕzd?',
                a: 'Bežnú výmenu kotúčov a platničiek na jednej náprave zvládneme v rámci jednej návštevy.',
            },
            {
                q: 'Skontrolujete pri brzdách aj podvozok?',
                a: 'Áno, pri práci na brzdách vizuálne skontrolujeme aj blízke časti podvozku, keďže sú na náprave vedľa seba.',
            },
            {
                q: 'Prejde auto s opotrebovanými brzdami STK?',
                a: 'Nie, opotrebenie bŕzd pod predpísanú hranicu je jeden z najčastejších dôvodov neúspešnej STK. Odporúčame nechať brzdy skontrolovať ešte pred termínom.',
            },
            {
                q: 'Robíte aj ručnú brzdu?',
                a: 'Funkčnosť ručnej brzdy kontrolujeme v rámci celkovej kontroly bŕzd, prípadné nastavenie alebo opravu vieme vyriešiť priamo u nás.',
            },
            {
                q: 'Odporúčate kontrolu bŕzd aj pri výmene pneumatík?',
                a: 'Áno, pri prezutí máme kolesá dole, takže je to ideálna príležitosť skontrolovať aj stav kotúčov a platničiek bez samostatného úkonu.',
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
