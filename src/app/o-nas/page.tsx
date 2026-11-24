import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import InlineCta from '@/components/InlineCta';
import OnlineBookingLink from '@/components/OnlineBookingLink';
import Breadcrumbs from '@/components/service/Breadcrumbs';
import { Heading } from '@/components/service/ServicePage';
import { SITE, BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';

// About page. Copy approved by Samuel on 24. 11. 2026 (T-473), taken word for
// word from the "Hotová verzia na web" draft. Change facts only with a source.

export const metadata: Metadata = {
    title: 'NAJLEPŠÍ rodinný autoservis a pneuservis v Bratislave, Nové Mesto | O nás: Ludato Family na Odborárskej 52, 1 200+ opravených áut, všetky značky, 5,0 na Google',
    description:
        'Rodinný autoservis a pneuservis Ludato Family na Odborárskej 52 v Bratislave. Všetky značky, diagnostika, cena vopred, náhradné auto a 5,0 na Google.',
    alternates: { canonical: '/o-nas' },
};

const faq = [
    {
        q: 'Odkiaľ je názov Ludato?',
        a: 'Z prvých slabík mien našej rodiny: Lucia, Damian a Tomáš. Sme rodinný servis a firma Ludato Family s. r. o. je zapísaná v obchodnom registri v Bratislave.',
    },
    {
        q: 'Opravujete všetky značky áut?',
        a: 'Áno. Robíme osobné autá všetkých značiek a modelov, od bežného servisu po rozvody, prevodovky a turbá. Staráme sa aj o veterány.',
    },
    {
        q: 'Koľko stojí oprava a kedy poznám cenu?',
        a: 'Normohodina začína na 32 € bez DPH. Cenovú ponuku pripravíme do 48 hodín a cenu s Vami odsúhlasíme pred začatím prác.',
    },
    {
        q: 'Môžem si priniesť vlastné diely?',
        a: 'Bežne nie. Pracujeme s dielmi, ktoré poznáme a za ktoré ručíme. Ak sa výnimočne dohodneme na montáži Vášho dielu, práca je o 100 % drahšia.',
    },
    {
        q: 'Dostanem náhradné auto?',
        a: 'Áno, za 35 € na deň. Pri servise nad 1 000 € je zadarmo a pri poistnej udalosti ho platí poisťovňa. Dostupnosť si overte pri objednaní.',
    },
    {
        q: 'Prezúvate aj pneumatiky Run Flat?',
        a: 'Run Flat neprezúvame. Ostatné pneumatiky prezujeme, uskladníme aj objednáme.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
};

const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE}/o-nas#stranka`,
    url: `${SITE}/o-nas`,
    name: 'O nás: rodinný autoservis Ludato Family v Bratislave',
    description:
        'Ludato Family opravuje a servisuje osobné autá všetkých značiek pre vodičov z Bratislavy a okolia, v dielni na Odborárskej 52 v Novom Meste.',
    inLanguage: 'sk',
    about: { '@id': BUSINESS_ID },
    mainEntity: { '@id': BUSINESS_ID },
};

const oNasBreadcrumb = breadcrumbSchema([
    { name: 'Domov', path: '/' },
    { name: 'O nás', path: '/o-nas' },
]);

const link = 'text-[#E31C25] hover:text-white transition-colors underline';
const text = 'text-white/70 text-base leading-relaxed space-y-4';
const section = 'mb-14 max-w-3xl mx-auto';
const inter = { fontFamily: 'var(--font-inter)' };

const steps: { title: string; body: React.ReactNode }[] = [
    {
        title: 'Objednáte sa.',
        body: 'Zavoláte na 0944 236 257 alebo si vyberiete termín v online rezervácii.',
    },
    {
        title: 'Najprv zistíme príčinu.',
        body: 'Keď svieti kontrolka, začíname diagnostikou. Diely naslepo nemeníme.',
    },
    {
        title: 'Cenu poznáte vopred.',
        body: (
            <>
                Cenovú ponuku pripravíme do 48 hodín. Cenu s Vami odsúhlasíme ešte pred začatím prác. Normohodina
                začína na 32 € bez DPH a{' '}
                <Link href="/cennik" className={link}>
                    cenník je na webe
                </Link>
                .
            </>
        ),
    },
    {
        title: 'Opravíme auto s dielmi, ktoré poznáme.',
        body: 'Pracujeme s overenými dielmi, za ktoré vieme ručiť.',
    },
    {
        title: 'Nezostanete bez auta.',
        body: (
            <>
                <Link href="/sluzby/nahradne-vozidlo-bratislava" className={link}>
                    Náhradné auto
                </Link>{' '}
                stojí 35 € na deň, pri servise nad 1 000 € je zadarmo a pri poistnej udalosti ho platí poisťovňa.
                Máme dve červené Škody Fabia s naším logom a dva VW Passaty.
            </>
        ),
    },
    {
        title: 'Auto k nám nemusíte voziť.',
        body: (
            <>
                V Bratislave a okolí si po auto prídeme za 50 €. Nepojazdné auto{' '}
                <Link href="/sluzby/odtah-vozidla-bratislava" className={link}>
                    odtiahneme
                </Link>{' '}
                za 170 €. Ceny sú bez DPH.
            </>
        ),
    },
    {
        title: 'Môžete počkať u nás.',
        body: 'V čakárni je káva a televízor. Platiť môžete aj kartou.',
    },
];

export default function ONas() {
    return (
        <main className="relative overflow-x-hidden w-full bg-[#111111]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(oNasBreadcrumb) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navbar />
            <div className="pt-32 lg:pt-40 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'O nás' }]} />

                    {/* Header */}
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <p
                            className="text-[#FF5A60] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">{'//'}</span> O nás
                        </p>
                        <h1
                            className="uppercase text-3xl md:text-5xl font-black text-white mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            O nás: rodinný autoservis <span className="text-[#E31C25]">Ludato Family</span> v Bratislave
                        </h1>
                        <div className="text-white/70 text-base leading-relaxed space-y-4 text-left" style={inter}>
                            <p>
                                Ludato Family je rodinný autoservis a pneuservis na Odborárskej 52 v Bratislave, Novom
                                Meste. Opravujeme a servisujeme osobné autá všetkých značiek a modelov, od výmeny oleja a
                                prezutia až po rozvody, prevodovky, turbá a vstrekovače. Chodia k nám vodiči z Nového Mesta,
                                Rače, Vajnor, Ružinova, Starého Mesta, Karlovej Vsi aj Dúbravky. Podľa faktúr sme opravili
                                viac ako 1 200 áut a na Google máme hodnotenie 5,0 z viac ako 50 recenzií.
                            </p>
                            <p className="border-l-2 border-[#E31C25] pl-4 text-white font-semibold">
                                Ludato Family opravuje a servisuje osobné autá všetkých značiek pre vodičov z Bratislavy a
                                okolia, v dielni na Odborárskej 52 v Novom Meste.
                            </p>
                        </div>
                    </div>

                    <div className={section}>
                        <Heading>Servis, ktorý nesie mená našej rodiny</Heading>
                        <div className={text} style={inter}>
                            <p>
                                Názov Ludato sme poskladali z prvých slabík mien našej rodiny:{' '}
                                <strong className="text-white">Lu</strong>cia, <strong className="text-white">Da</strong>mian a{' '}
                                <strong className="text-white">To</strong>máš. Každé auto, ktoré odíde z našej dielne, tak
                                nesie naše mená. Preto Vám povieme presne, čo auto potrebuje, koľko to bude stáť a kedy si ho
                                môžete vyzdvihnúť.
                            </p>
                            <p>
                                Začínali sme v menšej dielni. Dnes pracujeme na Odborárskej 52 v Novom Meste, kde máme
                                zdviháky, pneuservis, recepciu a čakáreň. Firma Ludato Family s. r. o. je zapísaná
                                v obchodnom registri od apríla 2026.
                            </p>
                            <p>
                                Do septembra 2026 sme podľa faktúr opravili 1 221 áut. Takmer dve tretiny z nich, presne 65 %,
                                boli náročné opravy: rozvody, prevodovky, zotrvačníky, turbá, vstrekovače, generálky, tlmiče,
                                podvozky a poistné udalosti. Zvyšok tvorila výmena oleja a prezúvanie. Väčšina našej práce sú
                                teda veľké opravy, pri ktorých rozhoduje skúsenosť a poriadna diagnostika.
                            </p>
                        </div>
                    </div>

                    <div className={section}>
                        <Heading>Čo robíme a pre koho</Heading>
                        <div className={text} style={inter}>
                            <p>Staráme sa o osobné autá všetkých značiek a modelov. Robíme bežný servis aj veľké opravy:</p>
                            <ul className="space-y-2">
                                {[
                                    <>
                                        <Link href="/sluzby/pocitacova-diagnostika-bratislava" className={link}>
                                            počítačovú diagnostiku
                                        </Link>{' '}
                                        a hľadanie chýb, ktoré sa inde nenašli,
                                    </>,
                                    <>výmenu oleja a filtrov, brzdy, podvozok a geometriu,</>,
                                    <>
                                        rozvody, spojku a prevodovku, turbodúchadlá a{' '}
                                        <Link href="/sluzby/vstrekovace-bratislava" className={link}>
                                            vstrekovače
                                        </Link>
                                        ,
                                    </>,
                                    <>klimatizáciu, chladenie a kúrenie, autobatérie,</>,
                                    <>prípravu na STK a emisnú kontrolu,</>,
                                    <>
                                        <Link href="/sluzby/pneuservis-bratislava" className={link}>
                                            pneuservis
                                        </Link>
                                        , uskladnenie pneumatík a pneumatiky na objednávku,
                                    </>,
                                    <>
                                        <Link href="/sluzby/servis-veteranov-bratislava" className={link}>
                                            servis veteránov
                                        </Link>{' '}
                                        vrátane zháňania nových aj repasovaných dielov,
                                    </>,
                                    <>tepovanie interiéru,</>,
                                    <>vyzdvihnutie auta, odťah a náhradné vozidlo.</>,
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-[#E31C25] font-black flex-shrink-0">{'//'}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                Vstrekovače testujeme na vlastnom testeri, takže ich neposielame ďalej a výsledok poznáte
                                skôr. Vo veteránoch máme za sebou napríklad Land Rover z roku 1974, ku ktorému sme zháňali
                                diely.
                            </p>
                            <p>
                                K nám sa oplatí ísť, ak bývate alebo pracujete v Bratislave a chcete servis, kde viete, s kým
                                hovoríte. Hodíme sa aj vtedy, keď Vám kontrolka na palubnej doske svieti stále znova
                                a príčinu treba konečne nájsť. A prídete aj s veteránom, ku ktorému sa diely bežne
                                nezoženú.
                            </p>
                        </div>
                    </div>

                    <div className={section}>
                        <Heading>Ako pracujeme</Heading>
                        <ol className="space-y-3" style={inter}>
                            {steps.map((step, i) => (
                                <li
                                    key={step.title}
                                    className="flex gap-4 border border-white/10 rounded-sm bg-white/5 px-5 py-4"
                                >
                                    <span
                                        className="text-[#E31C25] font-black text-xl leading-none pt-0.5 w-6 flex-shrink-0"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {i + 1}.
                                    </span>
                                    <p className="text-white/70 text-base leading-relaxed">
                                        <strong className="text-white">{step.title}</strong> {step.body}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className={section}>
                        <Heading>Prečo k nám vodiči chodia</Heading>
                        <div className={text} style={inter}>
                            <ul className="space-y-2">
                                {[
                                    ['Hodnotenie 5,0 na Google', 'z viac ako 50 recenzií.'],
                                    [
                                        'Viac ako 1 200 opravených áut',
                                        ', z toho 65 % náročné opravy (podľa faktúr k septembru 2026).',
                                    ],
                                    [
                                        'Cena pred prácou.',
                                        'Cenovú ponuku dostanete do 48 hodín a nič neopravujeme bez Vášho súhlasu.',
                                    ],
                                    ['Verejný cenník.', 'Normohodina od 32 € bez DPH.'],
                                    ['Vlastný tester vstrekovačov', 'a vlastné náhradné autá.'],
                                ].map(([strong, rest]) => (
                                    <li key={strong} className="flex items-start gap-3">
                                        <span className="text-[#E31C25] font-black flex-shrink-0">{'//'}</span>
                                        <span>
                                            <strong className="text-white">{strong}</strong>
                                            {rest.startsWith(',') ? rest : ` ${rest}`}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                Zákazníci v recenziách najčastejšie spomínajú prístup a ochotu, férové ceny a rýchlosť. Píšu,
                                že majiteľ všetko vysvetlí a cenovú ponuku pošle rýchlo. Oceňujú, že ich počas opravy
                                informujeme telefonicky a cez SMS, a že dostanú aj video z opravy. Jeden zákazník napísal
                                jednoducho, že chlapci sú šikovní. Zákazníčka Christina to zhrnula takto:
                            </p>
                            <blockquote className="border-l-2 border-[#E31C25] pl-4">
                                <p className="text-white text-lg italic">
                                    „Po oprave som ako keby odchádzala s novým autom.“
                                </p>
                                <p className="text-white/50 text-sm mt-1">(recenzia na Google)</p>
                            </blockquote>
                        </div>
                    </div>

                    <div className={section}>
                        <Heading>Kde nás nájdete</Heading>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={text} style={inter}>
                                <p>
                                    <strong className="text-white">Ludato Family Autoservis a Pneuservis</strong>
                                    <br />
                                    Odborárska 52, 831 02 Bratislava, Nové Mesto
                                    <br />
                                    Telefón:{' '}
                                    <a href="tel:+421944236257" className={link}>
                                        0944 236 257
                                    </a>
                                    <br />
                                    E-mail:{' '}
                                    <a href="mailto:ludato.recepcia@gmail.com" className={link}>
                                        ludato.recepcia@gmail.com
                                    </a>
                                    <br />
                                    Online rezervácia:{' '}
                                    <OnlineBookingLink placement="o_nas" className={link}>
                                        Termino
                                    </OnlineBookingLink>
                                </p>
                                <div>
                                    <p>Otváracie hodiny:</p>
                                    <ul>
                                        <li>pondelok až štvrtok 9:00 až 19:00</li>
                                        <li>piatok 7:00 až 16:00</li>
                                        <li>sobota a nedeľa zatvorené</li>
                                    </ul>
                                </div>
                                <p>Cez Vianoce máme zatvorené od 23. decembra 2026 do 10. januára 2027.</p>
                            </div>
                            <div className="relative min-h-[280px] rounded-sm overflow-hidden border border-white/10">
                                <iframe
                                    src="https://maps.google.com/maps?q=Ludato+Family+Autoservis,Odbor%C3%A1rska%2052,%20831%2002%20Bratislava&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    className="absolute inset-0"
                                    style={{ border: 0, filter: 'grayscale(60%) contrast(110%)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ludato Family Autoservis a Pneuservis – Odborárska 52, Bratislava"
                                />
                            </div>
                        </div>
                        <p className="text-white/70 text-base leading-relaxed mt-6" style={inter}>
                            Parkovať môžete priamo pred prevádzkou alebo popri ceste vedľa areálu. Najviac zákazníkov k nám
                            chodí z{' '}
                            <Link href="/kde-posobime" className={link}>
                                Nového Mesta
                            </Link>
                            ,{' '}
                            <Link href="/kde-posobime/raca" className={link}>
                                Rače
                            </Link>
                            ,{' '}
                            <Link href="/kde-posobime/vajnory" className={link}>
                                Vajnor
                            </Link>
                            ,{' '}
                            <Link href="/kde-posobime/ruzinov" className={link}>
                                Ružinova
                            </Link>
                            ,{' '}
                            <Link href="/kde-posobime/stare-mesto" className={link}>
                                Starého Mesta
                            </Link>
                            ,{' '}
                            <Link href="/kde-posobime/karlova-ves" className={link}>
                                Karlovej Vsi
                            </Link>{' '}
                            a{' '}
                            <Link href="/kde-posobime/dubravka" className={link}>
                                Dúbravky
                            </Link>
                            , občas aj z Petržalky a Devína.
                        </p>
                    </div>

                    <div className={section}>
                        <Heading>Časté otázky</Heading>
                        <FaqAccordion items={faq} />
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <InlineCta
                            heading="Objednajte sa"
                            text="Zavolajte na 0944 236 257 alebo si vyberte termín v online rezervácii. Cenovú ponuku dostanete do 48 hodín a cenu poznáte skôr, než začneme."
                            secondaryBooking="o_nas"
                            secondaryLabel="Rezervovať termín"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
