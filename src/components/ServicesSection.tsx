'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { getService, type ServiceMeta } from '@/lib/services';

// Homepage shows only the core services. Name and teaser come from the
// registry, so the cards always match the service pages they link to.
const featured: { slug: string; detail: string; icon: React.ReactNode }[] = [
    {
        slug: 'pocitacova-diagnostika-bratislava',
        detail: 'OBD II • ESP • ABS • Airbag',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
        ),
    },
    {
        slug: 'vymena-oleja-bratislava',
        detail: 'Olej • Filtre • Kontrola kvapalín',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-3 4.5-6 7.5-6 11a6 6 0 0012 0c0-3.5-3-6.5-6-11z" />
            </svg>
        ),
    },
    {
        slug: 'brzdy-bratislava',
        detail: 'Kotúče • Platničky • Kvapalina',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            </svg>
        ),
    },
    {
        slug: 'podvozok-bratislava',
        detail: 'Tlmiče • Ramená • Ložiská',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M7 8v8M17 8v8M12 5l2 3h-4l2-3zM12 19l2-3h-4l2 3z" />
            </svg>
        ),
    },
    {
        slug: 'geometria-bratislava',
        detail: 'Zbiehavosť • Odklon • Volant',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M5 7l2 10M19 7l-2 10M3 12h18" />
            </svg>
        ),
    },
    {
        slug: 'rozvody-bratislava',
        detail: 'Remeň • Reťaz • Napínač',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <circle cx="7" cy="12" r="3.5" />
                <circle cx="17" cy="12" r="3.5" />
                <path strokeLinecap="round" d="M7 8.5h10M7 15.5h10" />
            </svg>
        ),
    },
    {
        slug: 'servis-klimatizacie-bratislava',
        detail: 'R134a • R1234yf • Dezinfekcia',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M4.9 6.5l14.2 11M4.9 17.5l14.2-11M9 3.5l3 2.5 3-2.5M9 20.5l3-2.5 3 2.5" />
            </svg>
        ),
    },
    {
        slug: 'stk-ek-bratislava',
        detail: 'Kontrola • Sprostredkovanie',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
            </svg>
        ),
    },
    {
        slug: 'pneuservis-bratislava',
        detail: '12" – 19" • Vyváženie • Uskladnenie',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="2.5" />
                <path strokeLinecap="round" d="M12 3v3M12 18v3M21 12h-3M6 12H3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7L5.6 5.6" />
            </svg>
        ),
    },
];

type Card = { meta: ServiceMeta; detail: string; icon: React.ReactNode };

const cards: Card[] = featured.flatMap((f) => {
    const meta = getService(f.slug);
    return meta ? [{ meta, detail: f.detail, icon: f.icon }] : [];
});

function ServiceCard({ card, index }: { card: Card; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
        >
            <Link
                href={`/sluzby/${card.meta.slug}`}
                className="group relative flex flex-col h-full bg-[#1D1D1B] border border-white/10 rounded-sm p-8 transition-all duration-300 hover:bg-[#242422] hover:border-[#E31C25]/70 hover:shadow-[0_20px_60px_rgba(227,28,37,0.35)] overflow-hidden"
            >
                {/* Top left slash accent */}
                <div className="absolute top-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-3 left-3 w-px h-6 bg-[#E31C25] rotate-[20deg]" />
                    <div className="absolute top-3 left-5 w-px h-6 bg-[#E31C25] rotate-[20deg]" />
                </div>

                <div className="text-[#E31C25] mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                    {card.icon}
                </div>

                <h3
                    className="font-black text-white text-lg mb-3 tracking-wider uppercase group-hover:text-[#E31C25] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    <span className="text-[#E31C25] mr-1">//</span>
                    {card.meta.name}
                </h3>

                <p
                    className="text-white/60 text-sm leading-relaxed mb-4 flex-1"
                    style={{ fontFamily: 'var(--font-inter)' }}
                >
                    {card.meta.teaser}
                </p>

                <div
                    className="flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    <span className="text-[#E31C25]/70 font-medium">{card.detail}</span>
                    <span className="text-white/70 group-hover:text-[#E31C25] font-bold whitespace-nowrap transition-colors duration-300">
                        Viac →
                    </span>
                </div>

                {/* Bottom red glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31C25] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
        </motion.div>
    );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}

export { SectionHeader };

const inlineLink = 'text-white/80 underline decoration-[#E31C25]/60 underline-offset-4 hover:text-[#E31C25] transition-colors';

export default function ServicesSection() {
    return (
        <section id="sluzby" className="bg-[#111111] py-24 lg:py-32">
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
                            className="text-4xl md:text-5xl font-black text-white mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            NAŠE <span className="text-[#E31C25]">SLUŽBY</span>
                        </h2>
                        <div
                            className="text-white/55 max-w-3xl mx-auto text-base leading-relaxed space-y-4"
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
                    {cards.map((card, i) => (
                        <ServiceCard key={card.meta.slug} card={card} index={i} />
                    ))}
                </div>

                {/* Bottom links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mt-14"
                >
                    <Link
                        href="/sluzby"
                        className="text-white/70 hover:text-[#E31C25] text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        Zobraziť všetky služby →
                    </Link>
                    <Link
                        href="/cennik"
                        className="text-white/40 hover:text-[#E31C25] text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        Cenník →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
