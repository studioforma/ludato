import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
    title: 'Kde nás nájdete | Ludato Family Autoservis',
    description:
        'Ludato Family Autoservis sídli na Odborárskej v Bratislave - Novom Meste a autom k nám chodia zákazníci z celej Bratislavy: Rača, Vajnory, Staré Mesto, Ružinov, Karlová Ves a Dúbravka.',
};

type Area = {
    name: string;
    driveTime: string;
    route: string;
    note: string;
};

const whyNoveMesto = [
    {
        title: 'Skúsenosť, ktorú tu zúročujeme',
        text: 'Naša rodina sa venuje autám už viac ako 10 rokov. Túto skúsenosť teraz uplatňujeme priamo tu, v Novom Meste, na Odborárskej 52.',
    },
    {
        title: 'Sme tu doma',
        text: 'Fixná prevádzka na Odborárskej 52, žiadna mobilná služba ani výjazdy naslepo. Keď k nám prídete, viete presne, kde nás nájdete aj o rok.',
    },
    {
        title: 'Rodinný prístup',
        text: 'Servis vedie rodina, Lucia, Damian a Tomáš, osobne. Nie sme anonymná pobočka veľkej siete, poznáme svojich zákazníkov aj ich autá.',
    },
    {
        title: 'Dôvera miestnych',
        text: 'Väčšina našich zákazníkov je z Nového Mesta a najbližšieho okolia. Dôveru si budujeme na odporúčaniach a poctivej práci, nie na reklame.',
    },
];

const noveMestoServices = [
    {
        name: 'Diagnostika a opravy',
        text: 'Skôr než čokoľvek vymieňame, chceme presne vedieť, čo sa s vozidlom deje. Počítačová diagnostika nám ukáže skutočný stav auta, nie len prvý odhad, čo je dôležité obzvlášť pri starších rodinných autách, s ktorými sa v uličkách Nového Mesta stretávame bežne.',
    },
    {
        name: 'Servisné prehliadky',
        text: 'Pravidelná servisná prehliadka pred STK alebo podľa intervalov výrobcu vám ušetrí nepríjemné prekvapenia. Vzhľadom na kopcovitý terén v okolí Kramárov a Koliby odporúčame nepodceňovať kontrolu bŕzd a kvapalín ani mimo bežného intervalu.',
    },
    {
        name: 'Oprava bŕzd a podvozkov',
        text: 'Kopce, križovatky a časté brzdenie v hustej mestskej doprave dávajú bŕzdam v Novom Meste zabrať viac než priemeru. Kontrolujeme platničky, kotúče aj celý podvozok, geometriu, tlmiče, ramená, aby vaše auto zvládalo terén bez zbytočného opotrebovania.',
    },
    {
        name: 'Servis klimatizácie',
        text: 'Bratislavské leto vie potrápiť aj klimatizáciu, ktorá stojí celý deň na slnku pri ceste bez garáže. Dopĺňame chladivo, čistíme a dezinfikujeme systém, aby ste mali v aute čistý vzduch po celý rok.',
    },
    {
        name: 'Pneuservis a prezutie',
        text: 'Sezónne prezutie je pre nás bežná rutina, no pri parkovaní na uliciach Nového Mesta odporúčame nepodceňovať ani vyváženie kolies. Obrubníky a výtlky v uličkách vedia diskom ublížiť rýchlejšie, než by ste čakali.',
    },
    {
        name: 'Výmena kolies na diskoch',
        text: 'Ak máte kolesá už namontované na samostatných diskoch, výmena u nás zaberie len chvíľu, bez čakania na prezúvanie pneumatík.',
    },
];

const faq = [
    {
        q: 'Musím sa vopred objednať?',
        a: 'Objednanie vopred odporúčame, vieme sa tak lepšie pripraviť a nemusíte čakať. Niektoré jednoduchšie práce ale zvládneme aj na počkanie, najlepšie je nám vopred zavolať na +421 944 236 257 a dohodneme sa.',
    },
    {
        q: 'Je možné platiť kartou?',
        a: 'Áno, platba kartou je bez problémov.',
    },
    {
        q: 'Ponúkate náhradné vozidlo?',
        a: 'Áno, k dispozícii máme dve náhradné autá, VW Passat (ročníky približne 2019 a 2022). Dostupnosť si prosím overte vopred telefonicky, počet vozidiel je obmedzený.',
    },
    {
        q: 'Servisujete všetky značky vozidiel?',
        a: 'Áno, venujeme sa vozidlám všetkých značiek a modelov, nielen jednej konkrétnej.',
    },
    {
        q: 'Ako dlho trvá bežná diagnostika?',
        a: 'Väčšinu diagnostík zvládneme do jednej až dvoch hodín. Pri komplikovanejších závadách vás vopred informujeme o predpokladanom čase aj cene.',
    },
    {
        q: 'Máte kde parkovať pri príchode na servis?',
        a: 'Áno, parkovať môžete priamo pred prevádzkou alebo popri ceste vedľa areálu.',
    },
    {
        q: 'Obsluhujete aj zákazníkov mimo Nového Mesta?',
        a: 'Určite, chodia k nám zákazníci z celej Bratislavy, prehľad ostatných mestských častí nájdete nižšie na tejto stránke.',
    },
    {
        q: 'Robíte aj prípravu na STK a emisnú kontrolu?',
        a: 'Áno, robíme kontrolu pred STK aj EK a vieme vám sprostredkovať aj samotnú kontrolu.',
    },
    {
        q: 'Dávate vopred vedieť konečnú cenu opravy?',
        a: 'Áno, cenu si s vami vždy odsúhlasíme pred začatím prác, žiadne prekvapenia na faktúre.',
    },
    {
        q: 'Robíte aj tepovanie alebo čistenie interiéru?',
        a: 'Áno, tepovanie aj čistenie interiéru s vysávaním ponúkame ako doplnkovú službu k bežnému servisu.',
    },
    {
        q: 'Viem si u vás doplniť prevádzkové kvapaliny?',
        a: 'Áno, doplníme oleje a ostatné prevádzkové kvapaliny na predpísanú úroveň.',
    },
    {
        q: 'Viete vymeniť aj autobatériu?',
        a: 'Áno, výmenu autobatérie vieme zabezpečiť rovnako ako väčšinu ostatných bežných servisných úkonov.',
    },
    {
        q: 'Robíte aj kontrolu a nastavenie geometrie?',
        a: 'Áno, geometriu kontrolujeme a nastavujeme pre prednú nápravu, alebo pre prednú aj zadnú nápravu spolu.',
    },
    {
        q: 'Vedeli by ste skontrolovať auto pred kúpou?',
        a: 'Áno, pred kúpou ojazdeného vozidla vieme preveriť jeho technický stav, aby ste vedeli, do čoho idete.',
    },
    {
        q: 'Robíte aj kontrolu vozidla pred dlhou cestou alebo pred sezónou?',
        a: 'Áno, ponúkame aj predsezónnu kontrolu a kontrolu vozidla pred dlhou cestou, aby vás cestou nezaskočila porucha.',
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

const areas: Area[] = [
    {
        name: 'Rača',
        driveTime: 'orientačne 10 - 15 min autom',
        route: 'Cez Púchovskú a Račiansku.',
        note: 'Susedná mestská časť, veľmi častá trasa pre zákazníkov idúcich do práce cez Nové Mesto.',
    },
    {
        name: 'Vajnory',
        driveTime: 'orientačne 15 - 20 min autom',
        route: 'Cez Vajnorskú a Račiansku.',
        note: 'Aj z okrajovej časti Vajnor k nám zákazníci chodievajú pravidelne na servisné prehliadky.',
    },
    {
        name: 'Staré Mesto',
        driveTime: 'orientačne 10 min autom',
        route: 'Cez Trnavské mýto a Legionársku.',
        note: 'Blízko centra, ideálne pre zákazníkov, ktorí kombinujú servis s pochôdzkami v meste.',
    },
    {
        name: 'Ružinov',
        driveTime: 'orientačne 15 min autom',
        route: 'Cez Prievozskú alebo Trnavskú cestu.',
        note: 'Druhá najväčšia mestská časť Bratislavy, odtiaľto k nám prichádza pravidelne veľa zákazníkov.',
    },
    {
        name: 'Karlová Ves',
        driveTime: 'orientačne 20 min autom',
        route: 'Cez Most SNP alebo Botanickú.',
        note: 'Trochu ďalej, ale pre poctivý servis a férové ceny sa oplatí prejsť aj cez celé mesto.',
    },
    {
        name: 'Dúbravka',
        driveTime: 'orientačne 20 - 25 min autom',
        route: 'Cez Saratovskú a Botanickú.',
        note: 'Najvzdialenejšia oblasť z nášho okruhu, no aj odtiaľto máme spokojných stálych klientov.',
    },
];

export default function KdePosobime() {
    return (
        <main className="relative overflow-x-hidden w-full bg-[#111111]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">//</span> Kde nás nájdete
                        </p>
                        <h1
                            className="text-4xl md:text-5xl font-black text-white mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            AUTOSERVIS PRE CELÚ <span className="text-[#E31C25]">BRATISLAVU</span>
                        </h1>
                        <p
                            className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Sme na Odborárskej 52 v Novom Meste, no autom k nám chodia zákazníci
                            z celej Bratislavy. Tu je prehľad mestských častí, odkiaľ k nám
                            najčastejšie prichádzajú, s orientačným časom dojazdu (podľa dopravy
                            sa môže líšiť).
                        </p>
                    </div>

                    {/* Nové Mesto - domáca mestská časť */}
                    <div id="nove-mesto" className="mb-16">
                        <div className="text-center mb-10">
                            <p
                                className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                <span className="font-black">//</span> Naša domovská mestská časť
                            </p>
                            <h2
                                className="text-3xl md:text-4xl font-black text-white"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                AUTOSERVIS V <span className="text-[#E31C25]">NOVOM MESTE</span>
                            </h2>
                        </div>

                        {/* Intro + história */}
                        <div
                            className="text-white/70 text-base leading-relaxed space-y-4 mb-10 max-w-3xl mx-auto"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <p>
                                Ludato Family Autoservis sídli na Odborárskej 52 v Bratislave,
                                v mestskej časti Nové Mesto. Nie sme veľká reťaz s desiatkami
                                pobočiek. Sme rodinný servis, ktorý poctivo stavia svoje meno
                                priamo tu. Za diagnostikou, výmenou bŕzd aj sezónnym servisom
                                stoja Lucia, Damian a Tomáš, rodina, ktorej mená servis nesie
                                v skratke svojho názvu.
                            </p>
                            <p>
                                Naša rodina sa autám venuje viac ako 10 rokov a túto skúsenosť
                                teraz zúročujeme priamo tu, v Novom Meste, na Odborárskej 52.
                                Odmietame filozofiu veľkých korporácií s anonymným zákazníckym
                                servisom. Kto k nám prišiel raz, spravidla sa vracia, pretože
                                presne vie, s kým hovorí a čo sa s jeho autom deje.
                            </p>
                            <p>
                                Zakladáme si na tom, aby bola oprava spravená poriadne hneď na
                                prvýkrát, presne tak, ako by sme sa starali o vlastné auto. Pred
                                každou opravou vás informujeme o nákladoch, žiadne skryté
                                poplatky, len úprimná komunikácia. Táto filozofia je dôvod, prečo
                                sa k nám zákazníci z Nového Mesta vracajú a prečo nás odporúčajú
                                aj svojim susedom a rodine v okolí.
                            </p>
                        </div>

                        {/* Prečo je Nové Mesto náročné na autá */}
                        <div className="mb-10 max-w-3xl mx-auto">
                            <h3
                                className="text-white font-black text-xl mb-4 flex items-center gap-2"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                <span className="text-[#E31C25]">//</span> Prečo je Nové Mesto náročné na vozidlá
                            </h3>
                            <div
                                className="text-white/70 text-base leading-relaxed space-y-4"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                <p>
                                    Nové Mesto je jedna z najväčších mestských častí Bratislavy,
                                    s hustou zástavbou sídlisk ako Kramáre, Vinohrady alebo Koliba.
                                    Kopcovitý terén smerom na Kolibu a Kramáre dáva bŕzdam,
                                    podvozku aj prevodovke poriadne zabrať, obzvlášť v zime, keď sa
                                    k tomu pridá soľ na cestách a teplotné výkyvy.
                                </p>
                                <p>
                                    Veľká časť vozidiel tu parkuje priamo na ulici, nie v garáži,
                                    čo urýchľuje koróziu brzdových kotúčov, opotrebovanie tesnení
                                    aj batérie. Presne pre tento typ prostredia, kde sa kombinuje
                                    kopcovitý terén, staršia vozová flotila rodinných áut
                                    a parkovanie na ulici, potrebujete servis, ktorý vie, na čo sa
                                    pri kontrole zamerať ako prvé. Nie je to všeobecná poradňa, je
                                    to poznanie miestneho terénu, ktoré uplatňujeme priamo tu,
                                    v Novom Meste.
                                </p>
                                <p>
                                    K tomu sa pridáva aj hustá doprava okolo Trnavského mýta a na
                                    hlavných ťahoch smerom do centra, ktorá je v Bratislave dobre
                                    známy problém. Časté state a rozjazdy v kolónach zaťažujú
                                    spojku, brzdy aj motor omnoho viac, než rovnomerná jazda mimo
                                    mesta. Práve preto sa oplatí mať poruke servis, ktorý pozná
                                    miestne podmienky a vie odhadnúť, kde sa oplatí byť
                                    obozretný skôr, než sa z malej závady stane veľká.
                                </p>
                            </div>
                        </div>

                        {/* Why us cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {whyNoveMesto.map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-[#1D1D1B] border border-[#E31C25]/20 rounded-sm p-6 hover:border-[#E31C25]/50 transition-colors duration-300"
                                >
                                    <h4
                                        className="text-white font-black text-base mb-3 flex items-center gap-2"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        <span className="text-[#E31C25]">//</span> {item.title}
                                    </h4>
                                    <p
                                        className="text-white/60 text-sm leading-relaxed"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Služby pre Nové Mesto */}
                        <div className="mb-10 max-w-3xl mx-auto">
                            <h3
                                className="text-white font-black text-xl mb-4 flex items-center gap-2"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                <span className="text-[#E31C25]">//</span> Naše služby pre zákazníkov z Nového Mesta
                            </h3>
                            <p
                                className="text-white/70 text-base leading-relaxed mb-6"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                Ponúkame plný rozsah autoservisných služieb pod jednou strechou,
                                s dôrazom presne na to, čo autám v Novom Meste najčastejšie
                                spôsobuje problémy.
                            </p>
                            <div className="space-y-5">
                                {noveMestoServices.map((service) => (
                                    <div key={service.name}>
                                        <div
                                            className="text-white font-bold text-sm mb-1"
                                            style={{ fontFamily: 'var(--font-montserrat)' }}
                                        >
                                            {service.name}
                                        </div>
                                        <p
                                            className="text-white/60 text-sm leading-relaxed"
                                            style={{ fontFamily: 'var(--font-inter)' }}
                                        >
                                            {service.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ako sa k nám dostanete */}
                        <div className="mb-4 max-w-3xl mx-auto">
                            <h3
                                className="text-white font-black text-xl mb-4 flex items-center gap-2"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                <span className="text-[#E31C25]">//</span> Ako sa k nám dostanete
                            </h3>
                            <div
                                className="text-white/70 text-base leading-relaxed space-y-4"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                <p>
                                    Sme na Odborárskej 52 v Bratislave, Novom Meste. Parkovanie je
                                    možné priamo pred prevádzkou aj popri ceste vedľa nášho
                                    areálu, takže sa nemusíte obávať, že nebudete mať kde
                                    zastaviť. Väčšina zákazníkov z okolitých sídlisk Kramáre,
                                    Vinohrady a Koliba k nám prichádza autom do pár minút, z
                                    centra Bratislavy je to tiež len krátka jazda.
                                </p>
                                <p>
                                    Ak počas opravy potrebujete pokračovať bez auta, Nové Mesto má
                                    dobré spojenie mestskou hromadnou dopravou. Priamo z okolia
                                    Odborárskej sa dostanete spojmi smerom do centra aj na ostatné
                                    strany mesta, takže vybaviť si niečo v meste počas toho, čo
                                    vám servisujeme auto, nie je problém.
                                </p>
                            </div>
                        </div>

                        {/* Fotky prevádzky + mapa */}
                        <div className="mb-10 max-w-3xl mx-auto">
                            <h3
                                className="text-white font-black text-xl mb-4 flex items-center gap-2"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                <span className="text-[#E31C25]">//</span> Naša prevádzka na Odborárskej
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <div className="relative rounded-sm overflow-hidden border border-white/10 aspect-[3/4]">
                                    <Image
                                        src="/prevadzka-1.webp"
                                        alt="Prevádzka Ludato Family Autoservis na Odborárskej 52"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="relative rounded-sm overflow-hidden border border-white/10 aspect-[3/4]">
                                    <Image
                                        src="/prevadzka-2.webp"
                                        alt="Vchod do prevádzky Ludato Family Autoservis"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                            <div className="rounded-sm overflow-hidden border border-white/10 h-64">
                                <iframe
                                    src="https://maps.google.com/maps?q=Ludato+Family+Autoservis,Odbor%C3%A1rska%2052,%20831%2002%20Bratislava&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(60%) contrast(110%)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ludato Family Autoservis - Odborárska 52, Bratislava"
                                />
                            </div>
                        </div>

                        {/* Zhrnutie */}
                        <div className="max-w-3xl mx-auto">
                            <p
                                className="text-white/70 text-base leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                Zhrnuté, sme rodinný autoservis, ktorý pôsobí priamo v Novom
                                Meste, poznáme terén, dopravu aj typické opotrebovanie vozidiel
                                v tejto časti Bratislavy, a k zákazníkom z okolia pristupujeme
                                osobne, nie ako číslo v systéme. Nech už riešite bežnú servisnú
                                prehliadku, sezónne prezutie alebo väčšiu opravu, sme tu pre vás,
                                na Odborárskej 52. Ak si nie ste istí, čo presne vaše auto
                                potrebuje, stačí zavolať, poradíme a dohodneme si spolu
                                najbližší možný termín.
                            </p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="mb-16 max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <p
                                className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                <span className="font-black">//</span> Časté otázky
                            </p>
                            <h2
                                className="text-3xl md:text-4xl font-black text-white"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                ČASTO KLADENÉ <span className="text-[#E31C25]">OTÁZKY</span>
                            </h2>
                        </div>
                        <FaqAccordion items={faq} />
                    </div>

                    {/* Ostatné oblasti header */}
                    <div className="text-center mb-10">
                        <h2
                            className="text-2xl md:text-3xl font-black text-white"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            OBSLUHUJEME AJ <span className="text-[#E31C25]">OKOLITÉ ČASTI</span>
                        </h2>
                    </div>

                    {/* Areas grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {areas.map((area) => (
                            <div
                                key={area.name}
                                id={area.name.toLowerCase().replace(/\s+/g, '-')}
                                className="bg-[#1D1D1B] border border-white/10 rounded-sm p-6 hover:border-[#E31C25]/40 transition-colors duration-300"
                            >
                                <h2
                                    className="text-white font-black text-lg mb-1 flex items-center gap-2"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    <span className="text-[#E31C25]">//</span> {area.name}
                                </h2>
                                <div
                                    className="text-[#E31C25] text-xs font-bold tracking-widest uppercase mb-3"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {area.driveTime}
                                </div>
                                <p
                                    className="text-white/50 text-sm mb-2"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    {area.route}
                                </p>
                                <p
                                    className="text-white/70 text-sm leading-relaxed"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    {area.note}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Services + CTA */}
                    <div className="mt-16 text-center border-t border-white/10 pt-12">
                        <p
                            className="text-white/60 max-w-xl mx-auto mb-6"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Bez ohľadu na to, odkiaľ prichádzate, ponúkame rovnaký rozsah služieb
                            {' '}
                            <Link href="/sluzby" className="text-[#E31C25] hover:text-white transition-colors underline">
                                diagnostiku, servisné prehliadky, brzdy, klimatizáciu aj pneuservis
                            </Link>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+421944236257"
                                className="inline-flex items-center justify-center gap-3 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                +421 944 236 257
                            </a>
                            <Link
                                href="/nacenenie"
                                className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-[#E31C25] text-white hover:text-[#E31C25] font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                OBJEDNAŤ SA
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
