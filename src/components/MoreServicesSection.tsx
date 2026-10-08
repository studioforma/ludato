'use client';

import Link from 'next/link';

const extras = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 17h14M5 17a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4zM5 17l1.5-6.5A2 2 0 018.42 9h7.16a2 2 0 011.92 1.5L19 17M6.5 10.5h11" />
            </svg>
        ),
        title: 'NÁHRADNÉ VOZIDLO',
        description:
            'Počas dlhšej opravy vám požičiame náhradné auto za 35 € na deň, pri servise nad 1000 € zadarmo.',
        href: '/sluzby/nahradne-vozidlo-bratislava',
        linkLabel: 'Viac o náhradnom aute',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 20l-3.5-3.5M8.5 11h5M11 8.5v5" />
            </svg>
        ),
        title: 'KEĎ INÝ SERVIS NEVEDEL',
        description:
            'Kontrolka sa stále vracia alebo chybu inde nenašli? Hľadáme skutočnú príčinu, nie prvý diel, ktorý ukáže diagnostika.',
        href: '/sluzby/zlozita-diagnostika-bratislava',
        linkLabel: 'Viac o zložitej diagnostike',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4m0-10v10m0-10l9-4v10l-9 4" />
            </svg>
        ),
        title: 'USKLADNENIE PNEUMATÍK',
        description:
            'Sezónnu sadu pneumatík vám medzi prezutiami radi uskladníme, aby ste sa o ne nemuseli starať doma.',
        href: '/sluzby/uskladnenie-pneumatik-bratislava',
        linkLabel: 'Viac o uskladnení',
    },
];

type Extra = typeof extras[number];

function ExtraCard({ item }: { item: Extra }) {

    return (
        <div
            className="bg-[#111111] border border-white/10 rounded-sm p-8 hover:border-[#E31C25]/40 transition-colors duration-300"
        >
            <div className="text-[#E31C25] mb-5">{item.icon}</div>
            <h3
                className="font-black text-white text-lg mb-3"
                style={{ fontFamily: 'var(--font-montserrat)' }}
            >
                <span className="text-[#E31C25] mr-1">//</span>
                {item.title}
            </h3>
            <p
                className="text-white/60 text-sm leading-relaxed mb-5"
                style={{ fontFamily: 'var(--font-inter)' }}
            >
                {item.description}
            </p>
            <Link
                href={item.href}
                className="text-[#E31C25] hover:text-white text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                style={{ fontFamily: 'var(--font-montserrat)' }}
            >
                {item.linkLabel} →
            </Link>
        </div>
    );
}

export default function MoreServicesSection() {
    return (
        <section className="bg-[#1D1D1B] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <p
                        className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="font-black">//</span> Prečo Ludato
                    </p>
                    <h2
                        className="text-3xl md:text-4xl font-black text-white"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        PREČO SA K NÁM KLIENTI <span className="text-[#E31C25]">VRACAJÚ</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {extras.map((item) => (
                        <ExtraCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
