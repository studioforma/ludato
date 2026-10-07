import type { ServiceContent } from './types';

const content: ServiceContent = [
    {
        type: 'intro',
        paragraphs: [
            'Geometria kolies rozhoduje o tom, či auto ide rovno, či sa volant po zákrute vracia sám do stredu a ako rýchlo sa zjedia pneumatiky. Stačí jeden poriadny výtlk alebo zlý nájazd na obrubník a nastavenie sa posunie, aj keď na aute navonok nevidno nič.',
            'V Bratislave, Novom Meste, vám geometriu skontrolujeme a nastavíme na prednej aj zadnej náprave podľa hodnôt predpísaných výrobcom vozidla. Pred samotným nastavením vždy pozrieme aj podvozok, pretože nastavovať geometriu na vybitých dieloch nemá zmysel.',
        ],
    },
    {
        type: 'cta',
        heading: 'Ťahá vám auto do strany?',
        text: 'Zlá geometria vám každým kilometrom zjedá pneumatiky a novú sadu vie zničiť za jednu sezónu. Skontrolujeme ju a nastavíme podľa výrobcu.',
        points: [
            'Kontrola geometrie za 16 €',
            'Nastavenie prednej nápravy za 40 €, oboch náprav za 55 €',
            'Pred nastavením skontrolujeme aj podvozok',
        ],
        secondaryHref: '/nacenenie?sluzba=geometria',
        secondaryLabel: 'Objednať geometriu',
    },
    {
        type: 'list',
        heading: 'Čo zahŕňa geometria u nás',
        items: [
            'Kontrola nastavenia geometrie a porovnanie s hodnotami výrobcu',
            'Nastavenie geometrie prednej nápravy',
            'Nastavenie geometrie prednej aj zadnej nápravy',
            'Kontrola vôle v riadení a podvozku pred nastavením',
            'Kontrola tlaku v pneumatikách pred meraním',
            'Nastavenie tak, aby volant stál pri jazde rovno',
        ],
    },
    {
        type: 'breakdown',
        heading: 'Čo sa pri geometrii meria a nastavuje',
        items: [
            {
                title: 'Zbiehavosť',
                text: 'Zbiehavosť hovorí o tom, či kolesá pri pohľade zhora smerujú presne dopredu, mierne k sebe, alebo od seba. Je to hodnota, ktorá sa po náraze posúva najčastejšie a ktorá má najväčší vplyv na opotrebenie pneumatík. Už malá odchýlka znamená, že pneumatika sa po ceste mierne šmýka do strany a jej vnútorná alebo vonkajšia hrana sa zjedá rýchlejšie.',
            },
            {
                title: 'Odklon kolesa',
                text: 'Odklon je náklon kolesa dovnútra alebo von pri pohľade spredu. Správny odklon zaručí, že sa pneumatika opiera o cestu celou šírkou dezénu. Ak je odklon mimo tolerancie, pneumatika sa opotrebúva len na jednej strane a auto môže ťahať k strane s väčším odklonom.',
            },
            {
                title: 'Záklon čapu',
                text: 'Záklon ovplyvňuje, ako stabilne auto drží priamy smer a ako ochotne sa volant po zákrute vracia do stredu. Pri mnohých autách sa priamo nastaviť nedá, jeho meranie je však cenné aj tak, pretože odchýlka od normy často prezradí ohnuté rameno alebo iný poškodený diel podvozku.',
            },
            {
                title: 'Poloha volantu',
                text: 'Súčasťou nastavenia je aj to, aby volant pri jazde rovno stál v strede. Krivo stojaci volant pri priamej jazde je jeden z najčastejších dôvodov, prečo k nám zákazníci s geometriou prichádzajú, a zvyčajne súvisí práve so zbiehavosťou.',
            },
        ],
    },
    {
        type: 'steps',
        heading: 'Ako to u nás prebieha',
        steps: [
            {
                title: 'Kontrola podvozku a pneumatík',
                text: 'Skontrolujeme vôľu v čapoch, ramenách a koncovkách riadenia a upravíme tlak v pneumatikách. Na opotrebovanom podvozku by nastavenie vydržalo len krátko.',
            },
            {
                title: 'Zmeranie hodnôt',
                text: 'Zmeriame zbiehavosť, odklon a ďalšie hodnoty a porovnáme ich s údajmi výrobcu pre váš konkrétny model.',
            },
            {
                title: 'Nastavenie',
                text: 'Nastavíme hodnoty, ktoré sa na vašom vozidle nastaviť dajú, a zarovnáme volant do stredu.',
            },
            {
                title: 'Overenie',
                text: 'Po nastavení skontrolujeme, že volant stojí rovno a auto pri jazde nikam neťahá.',
            },
        ],
    },
    {
        type: 'text',
        heading: 'Kedy je čas na geometriu',
        paragraphs: [
            'Najčastejší signál je, že auto na rovnej ceste samo ťahá do jednej strany a musíte ho volantom neustále korigovať. Druhý typický príznak je krivý volant, auto ide rovno, ale volant je natočený. Tretím je nerovnomerne zjedená pneumatika, najmä keď je jedna hrana dezénu výrazne opotrebovanejšia ako zvyšok.',
            'Geometriu odporúčame skontrolovať aj preventívne, napríklad raz ročne pri [sezónnom prezutí](/sluzby/pneuservis-bratislava), a vždy po výmene dielov podvozku alebo riadenia. Pri kúpe nových pneumatík je kontrola geometrie rozumná investícia, pretože zlé nastavenie dokáže novú sadu zničiť za jedinú sezónu.',
        ],
    },
    {
        type: 'text',
        heading: 'Prečo po výtlku alebo obrubníku',
        paragraphs: [
            'Pri náraze kolesa do hrany výtlku alebo obrubníka sa sila prenesie do ramien, čapov a koncoviek riadenia. Niekedy sa len mierne posunie nastavenie, inokedy sa ohne rameno alebo tyč riadenia. Zvonka na aute nemusí byť vidno nič a auto ide zdanlivo normálne, no pneumatiky sa odvtedy opotrebúvajú rýchlejšie.',
            'Ak ste mali výraznejší náraz, oplatí sa geometriu skontrolovať čo najskôr. Meranie zároveň ukáže, či ide len o rozladené nastavenie, alebo o poškodený diel, ktorý treba vymeniť.',
        ],
    },
    {
        type: 'text',
        heading: 'Geometria po výmene dielov podvozku',
        paragraphs: [
            'Výmena ramena, koncovky riadenia, tyče riadenia alebo tlmiča takmer vždy zmení nastavenie geometrie. Nový diel má mierne iné rozmery ako ten opotrebovaný a zbiehavosť sa po montáži takmer určite posunie. Preto po zásahu do podvozku odporúčame geometriu nastaviť hneď, nie až keď sa ozve krivý volant alebo zjedená pneumatika.',
        ],
    },
    {
        type: 'text',
        heading: 'Koľko vás zlá geometria stojí',
        paragraphs: [
            'Zle nastavená geometria sa neprejaví hneď ako porucha, ale postupne ako výdavok. Pneumatika, ktorá by pri správnom nastavení vydržala niekoľko sezón, sa môže zjesť na jednej hrane podstatne skôr a sadu treba meniť predčasne. Pri dnešných cenách pneumatík to býva násobne viac, než stojí samotné nastavenie.',
            'Kolesá, ktoré nesmerujú presne v smere jazdy, navyše kladú väčší valivý odpor, čo sa prejaví aj na mierne vyššej spotrebe. A nakoniec je tu bezpečnosť, auto s rozladenou geometriou reaguje pri prudkom brzdení alebo vyhýbacom manévri menej predvídateľne.',
        ],
    },
    {
        type: 'text',
        heading: 'Na čo si dať pozor',
        paragraphs: [
            'Nastavovať geometriu na opotrebovanom podvozku je vyhodený čas aj peniaze. Ak má rameno alebo čap vôľu, nastavené hodnoty sa pri jazde aj tak menia. Preto pred meraním vždy kontrolujeme aj [podvozok](/sluzby/podvozok-bratislava) a ak nájdeme opotrebovaný diel, povieme vám to skôr, než sa pustíme do nastavovania.',
            'Rovnako dôležité sú pneumatiky. Rozdielny tlak alebo rozdielne opotrebenie medzi ľavou a pravou stranou vie spôsobiť ťahanie do strany aj pri úplne správnej geometrii. Často sa tak stane, že problém, ktorý vyzerá na geometriu, vyrieši už správne nahustenie alebo prehodenie kolies.',
        ],
    },
    {
        type: 'text',
        heading: 'Čo si môžete skontrolovať sami',
        paragraphs: [
            'Na prázdnej a rovnej ceste pri nízkej rýchlosti na chvíľu uvoľnite zovretie volantu. Ak auto zreteľne uhýba do jednej strany, niečo nie je v poriadku. Pozor, mierny náklon cesty smerom ku krajnici vie ťahanie napodobniť, preto test zopakujte na viacerých miestach.',
            'Pozrite sa aj na predné pneumatiky. Ak je vnútorná alebo vonkajšia hrana dezénu výrazne opotrebovanejšia ako stred, prípadne cítite na hrane pod prstami zúbkovanie, je to typický prejav zlej geometrie. S takýmto nálezom sa oplatí prísť skôr, než pneumatika dosiahne minimálnu hĺbku dezénu.',
        ],
    },
    {
        type: 'text',
        heading: 'Lokálny kontext',
        paragraphs: [
            'Ulice v Novom Meste geometrii veľmi neprajú. Výtlky po zime, prejazdy cez električkové koľajnice na Račianskej či Vajnorskej a parkovanie tesne pri obrubníkoch na sídliskách ako Kramáre alebo Ahoj sú presne situácie, pri ktorých sa nastavenie postupne rozlaďuje. Ak jazdíte prevažne po meste, odporúčame nechať si geometriu skontrolovať aspoň raz ročne.',
        ],
    },
    {
        type: 'prices',
        heading: 'Orientačné ceny',
        categories: ['GEOMETRIA'],
    },
    {
        type: 'faq',
        heading: 'Časté otázky',
        items: [
            {
                q: 'Ako často treba robiť geometriu?',
                a: 'Preventívne odporúčame kontrolu raz ročne, ideálne pri sezónnom prezutí. Vždy ju odporúčame po výraznom náraze do výtlku alebo obrubníka a po výmene dielov podvozku či riadenia.',
            },
            {
                q: 'Stačí nastaviť len prednú nápravu?',
                a: 'Pri mnohých autách áno, pretože zadná náprava sa často nastaviť nedá. Ak ju však vaše vozidlo nastaviteľnú má, odporúčame nastaviť obe nápravy, aby spolu kolesá smerovali rovnako.',
            },
            {
                q: 'Treba robiť geometriu po prezutí?',
                a: 'Samotné prezutie geometriu nezmení. Ak však auto po prezutí ťahá do strany, príčinou môže byť aj rozdielny tlak alebo opotrebenie pneumatík, ktoré pri kontrole preveríme ako prvé.',
            },
            {
                q: 'Prečo mi auto ťahá do strany?',
                a: 'Najčastejšie ide o zbiehavosť alebo odklon mimo tolerancie. Rovnaký príznak však spôsobuje aj rozdielny tlak v pneumatikách, zaseknutý [brzdový strmeň](/sluzby/brzdy-bratislava) alebo opotrebovaný diel podvozku, preto pred nastavením kontrolujeme aj tieto veci.',
            },
            {
                q: 'Volant mám krivo, ale auto ide rovno. Je to geometria?',
                a: 'Takmer vždy áno. Krivo stojaci volant pri priamej jazde súvisí so zbiehavosťou a pri nastavení geometrie ho zarovnáme do stredu.',
            },
            {
                q: 'Koľko trvá nastavenie geometrie?',
                a: 'Bežnú kontrolu a nastavenie zvládneme v rámci jednej návštevy. Dlhšie to trvá len vtedy, keď pri kontrole narazíme na opotrebovaný diel, ktorý treba najprv vymeniť.',
            },
            {
                q: 'Čo ak sa geometria nedá nastaviť?',
                a: 'Ak sa hodnoty nedajú dostať do tolerancie, zvyčajne to znamená ohnuté rameno, tyč riadenia alebo iný poškodený diel. V takom prípade vám povieme, ktorý diel treba vymeniť, a po výmene geometriu nastavíme.',
            },
            {
                q: 'Oplatí sa kontrola geometrie pri nových pneumatikách?',
                a: 'Áno. Zle nastavená geometria vie novú sadu pneumatík opotrebovať nerovnomerne už za jednu sezónu, takže kontrola sa pri kúpe nových pneumatík zvyčajne rýchlo vráti.',
            },
            {
                q: 'Ovplyvňuje geometria spotrebu?',
                a: 'Mierne áno. Kolesá, ktoré nesmerujú presne v smere jazdy, majú väčší valivý odpor. Väčším výdavkom je však rýchlejšie opotrebenie pneumatík.',
            },
            {
                q: 'Musím sa objednať vopred?',
                a: 'Odporúčame objednať sa vopred, aby ste nečakali na uvoľnenie termínu. Najistejšie je zavolať na 0944 236 257.',
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
