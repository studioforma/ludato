import Link from 'next/link';
import { areas } from '@/lib/areas';

// Homepage list of every /kde-posobime/* page, so each area page gets a
// crawlable link from the strongest page on the site. Names and drive times
// come from the areas registry, the same values the area pages show.
export default function AreasSection() {
    return (
        <section id="kde-posobime" className="bg-[#F5F5F5] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p
                        className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="font-black">//</span> Kde pôsobíme
                    </p>
                    <h2
                        className="text-3xl md:text-4xl font-black text-[#1D1D1B] mb-5"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        AUTOSERVIS A PNEUSERVIS PRE <span className="text-[#E31C25]">CELÚ BRATISLAVU</span>
                    </h2>
                    <p
                        className="text-[#1D1D1B]/60 max-w-3xl mx-auto text-base leading-relaxed"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Sme na Odborárskej 52 v Novom Meste. Zákazníci k nám chodia aj z okolitých
                        mestských častí, pri každej nájdete orientačný čas dojazdu a služby, ktoré tam
                        riešime najčastejšie.
                    </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {areas.map((a) => (
                        <li key={a.slug}>
                            <Link
                                href={`/kde-posobime/${a.slug}`}
                                className="group flex h-full flex-col bg-white border border-black/10 rounded-sm px-5 py-4 hover:border-[#E31C25]/60 transition-colors duration-300"
                            >
                                <span
                                    className="font-black text-[#1D1D1B] group-hover:text-[#E31C25] transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    <span className="text-[#E31C25] mr-1">//</span>
                                    Autoservis {a.name}
                                </span>
                                <span
                                    className="text-[#1D1D1B]/60 text-sm mt-1"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    {a.driveTime.charAt(0).toUpperCase() + a.driveTime.slice(1)}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-8">
                    <Link
                        href="/kde-posobime"
                        className="text-[#1D1D1B]/80 hover:text-[#E31C25] text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        Všetky mestské časti →
                    </Link>
                </div>
            </div>
        </section>
    );
}
