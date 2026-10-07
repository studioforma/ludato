'use client';

import Link from 'next/link';
import { getService, type ServiceMeta } from '@/lib/services';
import ServiceIcon from '@/components/ServiceIcon';

// Homepage shows only the core services. Name and teaser come from the
// registry, so the cards always match the service pages they link to.
const featured: { slug: string; detail: string }[] = [
    {
        slug: 'pocitacova-diagnostika-bratislava',
        detail: 'OBD II • ESP • ABS • Airbag',
    },
    {
        slug: 'vymena-oleja-bratislava',
        detail: 'Olej • Filtre • Kontrola kvapalín',
    },
    {
        slug: 'brzdy-bratislava',
        detail: 'Kotúče • Platničky • Kvapalina',
    },
    {
        slug: 'podvozok-bratislava',
        detail: 'Tlmiče • Ramená • Ložiská',
    },
    {
        slug: 'servis-klimatizacie-bratislava',
        detail: 'R134a • R1234yf • Dezinfekcia',
    },
    {
        slug: 'pneuservis-bratislava',
        detail: '12" – 21" • Vyváženie • Uskladnenie',
    },
];

type Card = { meta: ServiceMeta; detail: string };

const cards: Card[] = featured.flatMap((f) => {
    const meta = getService(f.slug);
    return meta ? [{ meta, detail: f.detail }] : [];
});

function ServiceCard({ card }: { card: Card }) {
    return (
            <Link
                href={`/sluzby/${card.meta.slug}`}
                className="group relative flex flex-col h-full bg-white border border-black/10 rounded-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E31C25]/60 hover:shadow-[0_20px_50px_rgba(227,28,37,0.18)] overflow-hidden"
            >
                {/* Top left slash accent */}
                <div className="absolute top-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-3 left-3 w-px h-6 bg-[#E31C25] rotate-[20deg]" />
                    <div className="absolute top-3 left-5 w-px h-6 bg-[#E31C25] rotate-[20deg]" />
                </div>

                <div className="text-[#E31C25] mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                    <ServiceIcon slug={card.meta.slug} className="w-8 h-8" />
                </div>

                <h3
                    className="font-black text-[#1D1D1B] text-lg mb-3 tracking-wider uppercase group-hover:text-[#E31C25] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    <span className="text-[#E31C25] mr-1">//</span>
                    {card.meta.name}
                </h3>

                <p
                    className="text-[#1D1D1B]/65 text-sm leading-relaxed mb-4 flex-1"
                    style={{ fontFamily: 'var(--font-inter)' }}
                >
                    {card.meta.teaser}
                </p>

                <div
                    className="flex items-center justify-between gap-4 border-t border-black/10 pt-4 text-xs tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    <span className="text-[#E31C25]/80 font-medium">{card.detail}</span>
                    <span className="text-[#1D1D1B]/70 group-hover:text-[#E31C25] font-bold whitespace-nowrap transition-colors duration-300">
                        Viac →
                    </span>
                </div>

                {/* Bottom red glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31C25] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
    );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

export { SectionHeader };

const inlineLink = 'text-[#1D1D1B]/85 underline decoration-[#E31C25]/60 underline-offset-4 hover:text-[#E31C25] transition-colors';

export default function ServicesSection() {
    return (
        <section id="sluzby" className="bg-white py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <SectionHeader>
                    <div className="text-center mb-16">
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25] font-black">//</span> Čo robíme najlepšie
                        </p>
                        <h2
                            className="text-4xl md:text-5xl font-black text-[#1D1D1B] mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            NAŠE <span className="text-[#E31C25]">SLUŽBY</span>
                        </h2>
                        <div
                            className="text-[#1D1D1B]/60 max-w-3xl mx-auto text-base leading-relaxed space-y-4"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <p>
                                Na Odborárskej v Novom Meste sa staráme o autá všetkých značiek, od
                                bežnej údržby po opravy, s ktorými si inde nevedeli rady. Väčšina
                                zákazníkov k nám prvýkrát príde na{' '}
                                <Link href="/sluzby/vymena-oleja-bratislava" className={inlineLink}>
                                    výmenu oleja
                                </Link>{' '}
                                alebo{' '}
                                <Link href="/sluzby/pneuservis-bratislava" className={inlineLink}>
                                    sezónne prezutie
                                </Link>
                                , a keď na palubnej doske svieti kontrolka, začíname{' '}
                                <Link href="/sluzby/pocitacova-diagnostika-bratislava" className={inlineLink}>
                                    diagnostikou
                                </Link>
                                , nie skúšaním dielov naslepo.
                            </p>
                            <p>
                                Ku každej službe nižšie nájdete samostatnú stránku s postupom,
                                orientačnými cenami a odpoveďami na najčastejšie otázky.
                            </p>
                        </div>
                    </div>
                </SectionHeader>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <ServiceCard key={card.meta.slug} card={card} />
                    ))}
                </div>

                {/* Bottom buttons, set apart from the cards */}
                <div className="mt-14 pt-10 border-t border-black/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                    <Link
                        href="/sluzby"
                        className="inline-flex items-center justify-center gap-2 bg-[#1D1D1B] hover:bg-[#E31C25] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        Zobraziť všetky služby
                        <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                        href="/cennik"
                        className="inline-flex items-center justify-center gap-2 border-2 border-[#1D1D1B] hover:border-[#E31C25] text-[#1D1D1B] hover:text-[#E31C25] font-bold px-8 py-[14px] text-sm tracking-widest uppercase rounded-sm transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        Cenník služieb
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
