import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
    title: 'Pneuservis Bratislava – Nové Mesto | Ludato Family Autoservis',
    description:
        'Pneuservis Ludato Family Autoservis v Bratislave, Novom Meste: kompletné prezutie, vyváženie, oprava defektu a uskladnenie pneumatík. Rýchlo, presne, bez zbytočného čakania.',
};

const includes = [
    'Kompletné prezutie vozidla (letné aj zimné pneumatiky) s vyvážením kolies',
    'Prehodenie kolies medzi nápravami',
    'Výmena ventilčekov v pneumatikách',
    'Kontrola tlaku a stavu pneumatík (dezén)',
    'Oprava defektu, ak to stav pneumatiky dovoľuje',
    'Sezónne uskladnenie pneumatík',
];

const breakdown = [
    {
        title: 'Kompletné prezutie',
        text: 'Pri kompletnom prezutí vymeníme všetky štyri kolesá za sezónnu sadu, vždy s ohľadom na smer otáčania pneumatiky a so správnym dotiahnutím skrutiek na predpísaný uťahovací moment. Súčasťou je aj vizuálna kontrola stavu pneumatík, diskov a ventilčekov, aby sme prípadný problém zachytili skôr, než sa prejaví na ceste.',
    },
    {
        title: 'Vyváženie kolies',
        text: 'Nevyvážené koleso spôsobuje pri vyšších rýchlostiach vibrácie volantu alebo karosérie a zbytočne zaťažuje ložiská aj tlmiče. Preto každé koleso pri prezutí vyvažujeme na presnom stroji, aj keď si vyváženie zákazník výslovne nepýta, je to u nás prirodzená súčasť poctivého prezutia.',
    },
    {
        title: 'Prehodenie kolies medzi nápravami',
        text: 'Predné a zadné pneumatiky sa neopotrebúvajú rovnako, hlavne pri autách s pohonom prednej nápravy. Pravidelné prehodenie kolies medzi nápravami predlžuje životnosť celej sady a pomáha, aby sa opotrebovanie dezénu vyrovnávalo na všetkých štyroch kolesách.',
    },
    {
        title: 'Kontrola tlaku a dezénu',
        text: 'Pri každej návšteve skontrolujeme tlak vo všetkých pneumatikách aj hĺbku dezénu. Zákonom predpísaná minimálna hĺbka dezénu je 1,6 mm, z bezpečnostného hľadiska však odporúčame meniť pneumatiky už okolo 3 mm, keďže s klesajúcim dezénom výrazne rastie brzdná dráha na mokrej vozovke.',
    },
    {
        title: 'Oprava defektu',
        text: 'Defekt vieme opraviť, ak je poškodenie v bežnej dráhe pneumatiky a nie je príliš rozsiahle. Poškodenie bočnice alebo viacnásobný defekt na jednom mieste sa spravidla opraviť nedá a pneumatiku treba vymeniť. Presne vieme povedať až po obhliadke, cena opravy sa preto určuje individuálne.',
    },
    {
        title: 'Sezónne uskladnenie pneumatík',
        text: 'Ak nemáte doma vhodné miesto na uskladnenie druhej sady pneumatík, radi vám ju uskladníme priamo u nás. Pri ďalšom prezutí vám už len vymeníme aktuálnu sadu za tú uskladnenú, nemusíte nič vláčiť ani riešiť skladovanie doma.',
    },
    {
        title: 'Výmena ventilčekov',
        text: 'Ventilček je malá súčiastka, cez ktorú sa hustí vzduch do pneumatiky, no práve on časom stráca tesnosť a spôsobuje pomalý únik tlaku. Preto pri kompletnom prezutí ventilčeky rovno kontrolujeme a v prípade potreby vymeníme za nové, aby ste nemuseli riešiť dofukovanie kolies každý týždeň.',
    },
];

const prices = [
    { label: 'Kompletné prezutie, 12" – 14"', price: '45 €' },
    { label: 'Kompletné prezutie, 15" – 16"', price: '55 €' },
    { label: 'Kompletné prezutie, 17" – 19"', price: '65 €' },
    { label: 'Prevažovanie a prehodenie kolies na disku, 12" – 14"', price: '40 €' },
    { label: 'Prevažovanie a prehodenie kolies na disku, 15" – 16"', price: '45 €' },
    { label: 'Prevažovanie a prehodenie kolies na disku, 17" – 19"', price: '50 €' },
    { label: 'Sezónne uskladnenie pneumatík', price: '40 € / sezóna' },
    { label: 'Oprava defektu', price: 'Individuálne' },
];

const faq = [
    {
        q: 'Musím sa objednať vopred na prezutie?',
        a: 'Odporúčame objednať sa vopred, keďže v hlavnej sezóne (jar, jeseň) je o prezutie vysoký záujem a termíny sa rýchlo zapĺňajú. Najistejšie je zavolať vopred na +421 944 236 257.',
    },
    {
        q: 'Vyvažujete kolesá pri každom prezutí?',
        a: 'Áno, každé koleso vyvážime na presnom stroji priamo v rámci prezutia, aby pri jazde nevibroval volant.',
    },
    {
        q: 'Ponúkate aj uskladnenie pneumatík?',
        a: 'Áno, sezónne uskladnenie pneumatík stojí 40 € za sezónu.',
    },
    {
        q: 'Opravíte defekt na pneumatike?',
        a: 'Áno, ak to stav a poškodenie pneumatiky dovoľuje. Presnú cenu vieme povedať až po obhliadke.',
    },
    {
        q: 'Dá sa opraviť pneumatika s poškodenou bočnicou?',
        a: 'Poškodenie bočnice sa spravidla opraviť nedá, v takom prípade je potrebná výmena pneumatiky.',
    },
    {
        q: 'Aké veľkosti diskov zvládnete?',
        a: 'Bežné veľkosti od 12" do 19".',
    },
    {
        q: 'Ako dlho trvá kompletné prezutie?',
        a: 'Bežné prezutie zvládneme v rámci jednej návštevy, presný čas závisí od aktuálnej vyťaženosti servisu.',
    },
    {
        q: 'Ako často treba kontrolovať tlak v pneumatikách?',
        a: 'Odporúčame kontrolovať tlak aspoň raz mesačne a vždy pred dlhšou cestou, keďže správny tlak ovplyvňuje spotrebu paliva aj životnosť pneumatiky.',
    },
    {
        q: 'Robíte aj geometriu po prezutí?',
        a: 'Geometriu vieme skontrolovať a nastaviť samostatne, najmä ak auto po prezutí ťahá na jednu stranu alebo ste nedávno narazili do výtlku či obrubníka.',
    },
    {
        q: 'Treba po prezutí ešte raz dotiahnuť skrutky?',
        a: 'Áno, po približne 50 kilometroch odporúčame dotiahnutie skrutiek prekontrolovať, hlavne pri nových diskoch alebo po výmene celej sady kolies.',
    },
    {
        q: 'Musia byť na všetkých štyroch kolesách rovnaké pneumatiky?',
        a: 'Odporúčame mať na všetkých štyroch kolesách rovnaký typ, vzor aj rozmer pneumatiky. Ak riešite len čiastočnú výmenu jednej alebo dvoch pneumatík, poradíme vám, ako ich čo najbezpečnejšie skombinovať so zvyšnou sadou.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Pneuservis',
    name: 'Pneuservis Ludato Family Autoservis',
    provider: {
        '@type': 'AutoRepair',
        name: 'Ludato Family Autoservis',
        url: 'https://www.ludato.sk/',
    },
    areaServed: 'Bratislava',
    url: 'https://www.ludato.sk/sluzby/pneuservis',
};

export default function PneuservisPage() {
    return (
        <main className="relative overflow-x-hidden w-full bg-[#111111]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">//</span> Služby
                        </p>
                        <h1
                            className="text-4xl md:text-5xl font-black text-white mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            PNEUSERVIS <span className="text-[#E31C25]">BRATISLAVA</span> – NOVÉ MESTO
                        </h1>
                        <p
                            className="text-white/60 text-base leading-relaxed mb-4"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Pneuservis Ludato Family Autoservis v Bratislave, Novom Meste, sa
                            stará o pneumatiky a kolesá vášho vozidla po celý rok. Sezónne
                            prezutie, vyváženie, prehodenie kolies, oprava defektu aj
                            uskladnenie pneumatík, všetko na jednom mieste, bez zbytočného
                            čakania.
                        </p>
                        <p
                            className="text-white/60 text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Pneumatiky sú jediný kontakt vozidla s vozovkou, ich stav preto
                            priamo ovplyvňuje brzdnú dráhu, správanie auta v zákrute aj na
                            mokrej či zľadovatenej ceste. Práve preto sa pneuservisu venujeme
                            ako plnohodnotnej službe, nie len ako doplnku k väčšej oprave.
                        </p>
                    </div>

                    {/* Čo zahŕňa */}
                    <div className="mb-14">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Čo zahŕňa náš pneuservis
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                            {includes.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-white/70 text-base leading-relaxed"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    <span className="text-[#E31C25] mt-1 flex-shrink-0">//</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Jednotlivé služby podrobnejšie */}
                    <div className="mb-14">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Naše pneuservisné služby podrobnejšie
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                            {breakdown.map((item) => (
                                <div key={item.title}>
                                    <h3
                                        className="text-lg font-black text-white mb-2"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-white/70 text-base leading-relaxed"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rozdiel letné/zimné */}
                    <div className="mb-14 max-w-3xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Rozdiel medzi letnými a zimnými pneumatikami
                        </h2>
                        <p
                            className="text-white/70 text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Zimné pneumatiky majú mäkšiu zmes gumy, ktorá si zachováva
                            pružnosť aj pri nízkych teplotách, a hlbší dezén s väčším počtom
                            lamiel, ktoré lepšie odvádzajú vodu, sneh aj rozbahnenú kašu.
                            Letné pneumatiky sú naopak tvrdšie, majú kratšiu brzdnú dráhu na
                            suchej aj mokrej vozovke pri vyšších teplotách a menší valivý
                            odpor, čo sa prejaví aj na spotrebe paliva. Preto sa neoplatí
                            jazdiť na zimných pneumatikách celoročne len z pohodlnosti.
                        </p>
                    </div>

                    {/* Kedy prezúvať */}
                    <div className="mb-14 max-w-3xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Kedy prezúvať pneumatiky
                        </h2>
                        <p
                            className="text-white/70 text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Slovenská legislatíva neurčuje pevný dátum prezutia, zimné
                            pneumatiky sú však povinné vždy, keď je na vozovke sneh, ľad
                            alebo námraza, prípadne keď teplota klesne pod 3 °C. V praxi to
                            znamená, že najbezpečnejšie je prezuť sa ešte pred prvým mrazom,
                            nie až keď napadne prvý sneh. Podobne to platí aj na jar, letné
                            pneumatiky majú pri vyšších teplotách kratšiu brzdnú dráhu aj
                            lepšiu priľnavosť než zimné.
                        </p>
                    </div>

                    {/* Ako predĺžiť životnosť pneumatík */}
                    <div className="mb-14 max-w-3xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Ako predĺžiť životnosť pneumatík
                        </h2>
                        <p
                            className="text-white/70 text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Životnosť pneumatiky výrazne ovplyvňuje aj to, ako sa o ňu
                            staráte medzi jednotlivými prezutiami. Pravidelná kontrola tlaku,
                            plynulá jazda bez zbytočne prudkého brzdenia a zrýchľovania a
                            včasné riešenie nesprávnej geometrie po náraze do výtlku dokážu
                            predĺžiť životnosť sady o desiatky percent. Rovnako dôležité je
                            nenechávať auto dlhodobo stáť s podhustenými pneumatikami, čo
                            zaťažuje bočnice a spôsobuje nerovnomerné opotrebovanie. Ak si
                            nie ste istí, v akom stave vaše pneumatiky sú, radi vám ich pri
                            návšteve skontrolujeme aj bez objednaného prezutia.
                        </p>
                    </div>

                    {/* Ako to prebieha */}
                    <div className="mb-14 max-w-3xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Ako to u nás prebieha
                        </h2>
                        <p
                            className="text-white/70 text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Pri prezutí najprv skontrolujeme stav, dezén a tlak všetkých
                            štyroch pneumatík. Kolesá vymeníme, skrutky dotiahneme na
                            predpísaný uťahovací moment a každé koleso vyvážime na presnom
                            stroji, aby vám pri jazde nevibroval volant. Ak si u nás
                            pneumatiky uskladňujete, sezónnu sadu vám len vyzdvihneme zo
                            skladu a po prezutí uložíme tú predchádzajúcu na jej miesto. Na
                            záver ešte skontrolujeme, či niektoré koleso nemá viditeľné
                            poškodenie, ktoré by ste si sami nemuseli všimnúť.
                        </p>
                    </div>

                    {/* Na čo si dať pozor */}
                    <div className="mb-14 max-w-3xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Na čo si dať pozor
                        </h2>
                        <div
                            className="text-white/70 text-base leading-relaxed space-y-4"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <p>
                                Veľa vodičov odkladá prezutie na poslednú chvíľu. Keď príde
                                prvý mráz alebo sneh, termíny bývajú narýchlo obsadené,
                                odporúčame preto objednať sa ešte pred sezónou.
                            </p>
                            <p>
                                Bežná chyba je aj nesprávne skladovanie pneumatík doma,
                                napríklad naukladané na sebe alebo na priamom slnku, čo
                                skracuje ich životnosť. Presne preto ponúkame aj sezónne
                                uskladnenie priamo u nás.
                            </p>
                            <p>
                                Po náraze do výtlku alebo obrubníka sa oplatí nechať
                                skontrolovať vyváženie kolies aj geometriu, aj keď auto
                                navonok vyzerá úplne v poriadku.
                            </p>
                            <p>
                                Miešanie rôznych vzorov alebo značiek pneumatík na jednej
                                náprave nie je vhodné, keďže to ovplyvňuje správanie auta pri
                                prudkom brzdení alebo v zákrute. Ak potrebujete vymeniť len
                                jednu alebo dve pneumatiky, poradíme vám, ako to
                                najbezpečnejšie riešiť.
                            </p>
                            <p>
                                Ak sa na palubnej doske rozsvieti kontrolka tlaku v
                                pneumatikách, neignorujte ju. Môže signalizovať pomalý únik
                                vzduchu, ktorý si na prvý pohľad nevšimnete, no postupne
                                zvyšuje opotrebovanie aj riziko defektu.
                            </p>
                        </div>
                    </div>

                    {/* Prečo si vybrať nás */}
                    <div className="mb-14 max-w-3xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Prečo si vybrať náš pneuservis
                        </h2>
                        <p
                            className="text-white/70 text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Pneuservis u nás nie je len rýchla zástavka, ale súčasť
                            komplexnej starostlivosti o vozidlo. Keďže sa venujeme aj
                            mechanickým opravám, podvozku aj diagnostike, dokážeme pri
                            prezutí odhaliť aj súvisiace problémy, napríklad opotrebované
                            tlmiče, netesniace poloosové manžety alebo nesprávnu geometriu,
                            ktoré by inak zostali nepovšimnuté až do ďalšej väčšej poruchy.
                            Vďaka tomu je prezutie u nás zároveň krátkou preventívnou
                            kontrolou podvozku. Snažíme sa, aby ste od nás odchádzali nielen
                            s prezutými kolesami, ale aj s jasnou predstavou o tom, v akom
                            stave je vaše vozidlo a čo prípadne bude treba riešiť pri
                            najbližšej návšteve.
                        </p>
                    </div>

                    {/* Ceny */}
                    <div className="mb-14">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Orientačné ceny
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {prices.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center justify-between gap-4 py-3 px-5 rounded-sm border border-white/8 bg-white/3"
                                >
                                    <span
                                        className="text-white/80 text-sm font-semibold"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {item.label}
                                    </span>
                                    <span
                                        className="text-white font-black text-base flex-shrink-0"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p
                            className="text-white/40 text-xs mt-4"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Kompletný cenník všetkých služieb nájdete na{' '}
                            <Link href="/cennik" className="text-[#E31C25] hover:text-white transition-colors underline">
                                stránke cenníka
                            </Link>.
                        </p>
                    </div>

                    {/* FAQ */}
                    <div className="mb-14 max-w-3xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Časté otázky
                        </h2>
                        <FaqAccordion items={faq} />
                    </div>

                    {/* Kde nás nájdete */}
                    <div className="mb-4 max-w-3xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-4 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Kde nás nájdete
                        </h2>
                        <p
                            className="text-white/70 text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Sme na Odborárskej 52 v Bratislave, Novom Meste. Autom k nám
                            chodia zákazníci aj z okolitých mestských častí, prehľad aj
                            s orientačným časom dojazdu nájdete na stránke{' '}
                            <Link href="/kde-posobime" className="text-[#E31C25] hover:text-white transition-colors underline">
                                Kde pôsobíme
                            </Link>.
                        </p>
                    </div>

                    {/* Súvisiace služby */}
                    <div className="mb-4 max-w-3xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-4 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Súvisiace služby
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/sluzby"
                                className="text-[#E31C25] hover:text-white text-sm font-bold tracking-widest uppercase transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                Všetky služby →
                            </Link>
                            <Link
                                href="/cennik"
                                className="text-[#E31C25] hover:text-white text-sm font-bold tracking-widest uppercase transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                Cenník →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <CtaBanner
                question="Čas na sezónne prezutie?"
                subtext="Objednajte sa ešte dnes, kým nie je plný kalendár."
                secondaryHref="/nacenenie"
                secondaryLabel="Objednať sa"
            />

            <Footer />
        </main>
    );
}
