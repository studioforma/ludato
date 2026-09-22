import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { serviceCategories, services } from '@/lib/services';

export const metadata: Metadata = {
    title: 'Všetky služby | Ludato Family Autoservis',
    description:
        'Kompletný prehľad služieb autoservisu Ludato Family: diagnostika, servisné prehliadky, brzdy, podvozok, klimatizácia, pneuservis a výmena kolies.',
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
            <Navbar />
            <div className="pt-20">
                <ServicesSection hideCta />
            </div>

            <section className="bg-[#1D1D1B] py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">//</span> Podrobne
                        </p>
                        <h2
                            className="text-3xl md:text-4xl font-black text-white"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            PODROBNÉ STRÁNKY <span className="text-[#E31C25]">SLUŽIEB</span>
                        </h2>
                    </div>

                    <div className="space-y-12">
                        {populated.map((cat) => (
                            <div key={cat.id}>
                                <p
                                    className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold mb-5"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {cat.label}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {cat.items.map((s) => (
                                        <Link
                                            key={s.slug}
                                            href={`/sluzby/${s.slug}`}
                                            className="block bg-[#111111] border border-white/10 rounded-sm p-6 hover:border-[#E31C25]/50 transition-colors duration-300 group"
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
                </div>
            </section>

            <Footer />
        </main>
    );
}
