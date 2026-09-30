import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Druhá sada pneumatík zaberá miesto, ktoré v byte na sídlisku väčšinou nie je. Končí na balkóne, v pivnici alebo v kúte garáže, kde ju cez leto pečie slnko a v zime jej škodí vlhko. Pneumatika pritom starne aj vtedy, keď sa nepoužíva, a zlé skladovanie jej vie ubrať podstatnú časť životnosti.',
            'V Bratislave, Novom Meste, vám sezónnu sadu uskladníme za 40 € na sezónu. Pri ďalšom prezutí ju máme pripravenú priamo v servise, takže nemusíte nič vláčiť v kufri ani hľadať, kam s ňou doma.',
        ],
    },
    {
        type: 'list',
        heading: 'Čo zahŕňa uskladnenie u nás',
        items: [
            'Uskladnenie sezónnej sady pneumatík na celú sezónu',
            'Vizuálna kontrola stavu a dezénu pri uskladnení',
            'Upozornenie, ak sa sada na ďalšiu sezónu už nehodí',
            'Pripravená sada pri ďalšom sezónnom prezutí',
            'Výmena uskladnenej sady za tú, ktorú máte práve na aute',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Čo pneumatikám doma škodí',
        items: [
            {
                title: 'Slnko a UV žiarenie',
                text: 'Ultrafialové žiarenie rozkladá gumu na povrchu pneumatiky. Prejaví sa to jemnými prasklinkami na bočnici, ktoré sa časom prehlbujú. Pneumatiky na balkóne alebo pri okne garáže starnú rýchlejšie, než by zodpovedalo ich veku.',
            },
            {
                title: 'Teplo a teplotné výkyvy',
                text: 'Guma najlepšie znáša stabilnú teplotu. Letné horúčavy na balkóne a mrazy v nevykurovanej garáži ju striedavo zmäkčujú a stvrdzujú, čím zmes postupne stráca pružnosť, na ktorej závisí priľnavosť.',
            },
            {
                title: 'Vlhkosť',
                text: 'Vlhká pivnica škodí najmä kolesám na diskoch, kde môže začať korodovať disk a jeho dosadacia plocha. Ani samotnej pneumatike dlhodobá vlhkosť neprospieva.',
            },
            {
                title: 'Nesprávne uloženie',
                text: 'Pneumatiky bez diskov naukladané na sebe sa pod váhou deformujú a spodné kusy sa môžu natrvalo zdeformovať. Zle uložená pneumatika potom po nasadení nemusí sadnúť rovnomerne a ťažšie sa vyvažuje.',
            },
            {
                title: 'Chemikálie a výpary',
                text: 'Garáž je často aj sklad benzínu, olejov a riedidiel. Ich výpary gume neprospievajú a pneumatika uložená vedľa kanistrov či rozpúšťadiel môže starnúť rýchlejšie.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás funguje',
        steps: [
            {
                title: 'Prezutie a prevzatie sady',
                text: 'Pri sezónnom prezutí vám namontujeme sadu na aktuálne obdobie a tú, ktorú ste práve zložili, si rovno necháte u nás.',
            },
            {
                title: 'Kontrola pred uskladnením',
                text: 'Pozrieme sa na dezén a na viditeľné poškodenie, aby ste o stave sady vedeli už teraz, nie až pri ďalšom prezutí.',
            },
            {
                title: 'Uskladnenie na sezónu',
                text: 'Sada ostane u nás celú sezónu, bez toho, aby ste sa o ňu museli starať.',
            },
            {
                title: 'Výmena pri ďalšom prezutí',
                text: 'Keď prídete na ďalšie prezutie, uskladnenú sadu vám namontujeme a tú z auta uložíme na jej miesto.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Prečo sa uskladnenie oplatí',
        paragraphs: [
            'Uskladnenie stojí 40 € na sezónu. Sada kvalitných pneumatík stojí niekoľko stoviek eur a pri správnom skladovaní vydrží viac sezón. Ak ju zlé skladovanie pripraví čo i len o jednu sezónu, stratíte viac, než by stálo uskladnenie za celé obdobie jej životnosti.',
            'K tomu sa pridáva pohodlie. Nemusíte štyri kolesá nosiť z pivnice, špiniť si kufor a zadné sedadlá ani riešiť, ako ich dostať do auta, keď sú v ňom deti alebo nákup. Na prezutie prídete s prázdnym kufrom a s prázdnym kufrom aj odídete.',
        ],
    },
    {
        type: 'text',
        heading: 'Kedy sa pneumatika už neoplatí skladovať',
        paragraphs: [
            'Zákonom predpísaná minimálna hĺbka dezénu je 1,6 mm, z bezpečnostného hľadiska však odporúčame pneumatiky meniť už okolo 3 mm. Pri zimných pneumatikách je hranica ešte dôležitejšia, pretože s plytkým dezénom strácajú schopnosť odvádzať sneh a rozbahnenú kašu. Ak má sada dezén na hranici, nemá zmysel ju skladovať na ďalšiu sezónu.',
            'Rozhoduje aj vek. Dátum výroby nájdete na bočnici v štvorcifernom kóde DOT, prvé dve číslice označujú týždeň a posledné dve rok výroby. Guma starne aj s dostatočným dezénom a staršia pneumatika má horšiu priľnavosť, hlavne za studena a na mokrej ceste. Ak pri kontrole uvidíme, že sada je na konci životnosti, povieme vám to ešte pred uskladnením.',
        ],
    },
    {
        type: 'text',
        heading: 'Letné a zimné pneumatiky počas skladovania',
        paragraphs: [
            'Zimné pneumatiky majú mäkšiu zmes, ktorá musí zostať pružná aj pri mraze. Práve táto vlastnosť sa pri zlom skladovaní stráca najrýchlejšie. Zimná pneumatika, ktorá celé leto ležala na horúcom balkóne, môže mať na jeseň ešte dostatočný dezén, no jej guma už nemusí držať na studenej ceste tak, ako by mala.',
            'Letné pneumatiky sú odolnejšie voči teplu, zato im cez zimu v nevykurovanej garáži škodí mráz a vlhkosť. V oboch prípadoch platí, že pneumatiky potrebujú stabilné prostredie bez slnka, tepla a chemikálií, a presne také im dokážeme zabezpečiť.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo pri prezutí rozhoduje aj poloha kolesa',
        paragraphs: [
            'Pneumatiky na hnanej náprave sa opotrebúvajú rýchlejšie než tie na druhej náprave. Ak sa pri každom prezutí nasadia na rovnaké miesto, jedna dvojica sa zjedá podstatne skôr a celú sadu treba meniť predčasne. Preto pri prezutí sledujeme, odkiaľ ktoré koleso pochádza, a podľa stavu dezénu odporučíme, či kolesá prehodiť medzi nápravami. Rovnomerne opotrebovaná sada vydrží dlhšie a správa sa na ceste predvídateľnejšie.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo pri uskladnení kontrolujeme',
        paragraphs: [
            'Uskladnenie je dobrá príležitosť pozrieť sa na pneumatiky v pokoji, keď sú dole z auta. Všímame si hĺbku a rovnomernosť dezénu, praskliny na bočnici, vydutiny a poškodenia po náraze do obrubníka.',
            'Nerovnomerne zjedený dezén, napríklad len na vnútornej alebo vonkajšej hrane, zvyčajne neznamená chybu pneumatiky, ale nesprávne nastavenú [geometriu](/sluzby/geometria-bratislava). V takom prípade vám odporučíme ju skontrolovať, aby sa rovnakým spôsobom nezačala zjedať aj sada, ktorú ste práve nasadili.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Ak si pneumatiky predsa len skladujete doma, dajte ich na tmavé, suché a chladné miesto, ďaleko od zdrojov tepla a chemikálií. Pneumatiky bez diskov skladujte postojačky a raz za čas ich pootočte, kolesá na diskoch môžete zavesiť alebo uložiť na seba.',
            'Pred uskladnením je dobré pneumatiky očistiť od blata a soli a označiť si, z ktorej pozície na aute boli, aby sa pri ďalšom prezutí dali správne prehodiť. Pri uskladnení u nás to riešime za vás.',
        ],
    },
    {
        type: 'text',
        heading: 'Uskladnenie a prezutie na jednom mieste',
        paragraphs: [
            'Uskladnenie funguje najlepšie spolu s [pneuservisom](/sluzby/pneuservis-bratislava). Pri prezutí kolesá vyvážime, dotiahneme na predpísaný moment a skontrolujeme tlak, a sadu, ktorú ste zložili, rovno uložíme. Keďže máme kolesá dole z auta, je to aj vhodná chvíľa pozrieť sa na [brzdy](/sluzby/brzdy-bratislava), kotúče a platničky sú vtedy dobre viditeľné.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'Vo veľkej časti Nového Mesta, na Kramároch, na Račianskej či na sídlisku Ahoj, sa býva v bytových domoch, kde je miesta na pneumatiky málo. Pivnice bývajú vlhké, balkóny vystavené slnku a nosiť štyri kolesá výťahom alebo po schodoch nikoho nebaví. Preto si väčšina našich zákazníkov z okolia necháva sadu uskladniť u nás a na prezutie príde len s autom.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['USKLADNENIE A OPRAVA PNEUMATÍK'],
        only: ['Sezónne uskladnenie pneumatík'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Koľko stojí uskladnenie pneumatík?',
                a: 'Sezónne uskladnenie stojí 40 € na sezónu.',
            },
            {
                q: 'Ako sa na uskladnenie objednám?',
                a: 'Najjednoduchšie je dohodnúť ho spolu s prezutím. Sadu, ktorú zložíme z auta, si rovno necháte u nás. Objednať sa môžete na +421 944 236 257.',
            },
            {
                q: 'Musím si pneumatiky u vás aj prezúvať?',
                a: 'Uskladnenie je navrhnuté ako doplnok k prezutiu, pretože sada je potom pripravená priamo v servise. Ak máte inú požiadavku, zavolajte a dohodneme sa.',
            },
            {
                q: 'Skontrolujete pneumatiky pri uskladnení?',
                a: 'Áno, pozrieme sa na dezén a viditeľné poškodenie. Ak sa sada na ďalšiu sezónu už nehodí, povieme vám to vopred.',
            },
            {
                q: 'Ako zistím, aké staré sú moje pneumatiky?',
                a: 'Na bočnici je štvorciferný kód DOT. Prvé dve číslice označujú týždeň výroby, posledné dve rok. Napríklad 2521 znamená 25. týždeň roku 2021.',
            },
            {
                q: 'Ako dlho si pneumatiky môžem nechať uskladnené?',
                a: 'Uskladnenie platí na sezónu, teda do najbližšieho prezutia. Potom sadu vymeníme za tú z auta a pokračuje ďalšia sezóna.',
            },
            {
                q: 'Čo ak si chcem kúpiť nové pneumatiky?',
                a: 'Povedzte nám to pri prezutí alebo pri kontrole pred uskladnením. Poradíme vám, či sa stará sada ešte oplatí, a s novými pneumatikami vieme pomôcť.',
            },
            {
                q: 'Oplatí sa uskladnenie, keď mám miesto v pivnici?',
                a: 'Ak je pivnica suchá, tmavá a chladná, pneumatiky tam vydržia dobre. Uskladnenie u nás sa oplatí hlavne vtedy, keď je pivnica vlhká, pneumatiky by ležali na slnku, alebo keď ich nechcete nosiť hore dole.',
            },
            {
                q: 'Kedy si mám dohodnúť termín na prezutie?',
                a: 'Odporúčame objednať sa ešte pred sezónou. Keď príde prvý mráz alebo sneh, termíny sa rýchlo zapĺňajú.',
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
