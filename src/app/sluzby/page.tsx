import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import Breadcrumbs from '@/components/service/Breadcrumbs';
import { serviceCategories, services } from '@/lib/services';

const SITE = 'https://www.ludato.sk';

export const metadata: Metadata = {
    title: 'Služby autoservisu Bratislava – Nové Mesto | Ludato Family Autoservis',
    description:
        'Prehľad služieb autoservisu Ludato Family v Bratislave, Novom Meste: diagnostika, výmena oleja, brzdy, klimatizácia, pneuservis, STK a EK. Ku každej službe nájdete ceny aj postup.',
    alternates: { canonical: `${SITE}/sluzby` },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Domov', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Služby', item: `${SITE}/sluzby` },
    ],
};

export default function Sluzby() {
    const populated = serviceCategories
        .map((cat) => ({
            ...cat,
            items: services.filter((s) => s.category === cat.id),
        }))
        .filter((cat) => cat.items.length > 0);

    return (
        <main className="relative overflow-x-hidden w-full bg-[#111111]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Navbar />

            <div className="pt-32 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'Služby' }]} />

                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">//</span> Čo robíme
                        </p>
                        <h1
                            className="text-4xl md:text-5xl font-black text-white mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            SLUŽBY AUTOSERVISU <span className="text-[#E31C25]">BRATISLAVA</span> – NOVÉ MESTO
                        </h1>
                        <div
                            className="text-white/60 text-base leading-relaxed space-y-4"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <p>
                                V Ludato Family Autoservis na Odborárskej 52 sa staráme o vozidlá
                                všetkých značiek, od bežnej údržby až po zložitejšie opravy, ktoré
                                inde nevyriešili. Pracujeme ako rodinný tím, takže o vašom aute sa
                                bavíte priamo s tým, kto na ňom robí.
                            </p>
                            <p>
                                Ku každej službe nižšie nájdete samostatnú stránku s orientačnými
                                cenami, postupom a odpoveďami na najčastejšie otázky. Ak si neviete
                                vybrať alebo neviete, čo presne vaše auto potrebuje, pokojne
                                zavolajte a prejdeme to spolu.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {populated.map((cat) => (
                            <div key={cat.id}>
                                <div className="flex items-center gap-3 mb-5">
                                    <span
                                        className="text-[#E31C25] font-black text-xs"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        //
                                    </span>
                                    <h2
                                        className="text-white/60 text-xs tracking-[0.3em] uppercase font-bold"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {cat.label}
                                    </h2>
                                    <div className="flex-1 h-px bg-white/8" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {cat.items.map((s) => (
                                        <Link
                                            key={s.slug}
                                            href={`/sluzby/${s.slug}`}
                                            className="group block bg-[#1D1D1B] border border-white/10 rounded-sm p-6 hover:border-[#E31C25]/50 transition-colors duration-300"
                                        >
                                            <h3
                                                className="font-black text-white text-lg mb-2"
                                                style={{ fontFamily: 'var(--font-montserrat)' }}
                                            >
                                                <span className="text-[#E31C25] mr-1">//</span>
                                                {s.name}
                                            </h3>
                                            <p
                                                className="text-white/60 text-sm leading-relaxed mb-4"
                                                style={{ fontFamily: 'var(--font-inter)' }}
                                            >
                                                {s.teaser}
                                            </p>
                                            <span
                                                className="text-[#E31C25] group-hover:text-white text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                                                style={{ fontFamily: 'var(--font-montserrat)' }}
                                            >
                                                Zistiť viac →
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p
                        className="text-white/40 text-sm mt-12 text-center"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Kompletné ceny všetkých služieb nájdete na{' '}
                        <Link
                            href="/cennik"
                            className="text-[#E31C25] hover:text-white transition-colors underline"
                        >
                            stránke cenníka
                        </Link>
                        .
                    </p>
                </div>
            </div>

            <CtaBanner
                question="Neviete, čo presne vaše auto potrebuje?"
                subtext="Zavolajte nám, poradíme vám a rovno sa dohodneme na termíne."
                secondaryHref="/nacenenie"
                secondaryLabel="Objednať sa"
            />

            <Footer />
        </main>
    );
}
