import Link from 'next/link';
import { GOOGLE_RATING, REPAIRED_CARS } from '@/lib/trust';

// Rendered on the server with no entrance animation, so the headline is in the
// first paint (it is the page's largest element for Core Web Vitals).
export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            id="hero"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D1D1B] via-[#111111] to-[#0a0a0a]">
                {/* Subtle radial glow accent */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Radial glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#E31C25]/5 blur-3xl" />
                </div>
            </div>

            {/* Content */}
            <div
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pt-28 pb-16 lg:pt-40 lg:pb-36 text-center"
            >
                {/* Small label */}
                <div className="mb-6">
                    <span
                        className="inline-flex items-center gap-2 text-[#E31C25] text-xs tracking-[0.4em] uppercase border border-[#E31C25]/40 px-4 py-2 rounded-sm bg-black/20 backdrop-blur-sm"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="w-4 h-px bg-[#E31C25]" />
                        Rodinný autoservis
                        <span className="w-4 h-px bg-[#E31C25]" />
                    </span>
                </div>

                {/* Main Headline */}
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    AUTOSERVIS{' '}
                    <span className="block text-[#E31C25]">BRATISLAVA</span>
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">NOVÉ MESTO</span>
                </h1>

                {/* Sub-headline */}
                <p
                    className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)' }}
                >
                    Riešime problémy, ktoré iné servisy nezvládli vyriešiť.
                    Zavolajte, objednajte sa a vyriešte problém ešte dnes.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="tel:+421944236257"
                        className="group relative inline-flex items-center justify-center gap-3 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#E31C25]/40 hover:-translate-y-1 overflow-hidden"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="relative z-10">0944 236 257</span>
                        <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                    </a>
                    <Link
                        href="/nacenenie"
                        className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-[#E31C25] text-white hover:text-[#E31C25] font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        OBJEDNAŤ SA
                    </Link>
                </div>

                {/* Stats row */}
                <div
                    className="mt-10 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-8 max-w-3xl mx-auto"
                >
                    {[
                        { value: '10+', label: 'rokov skúseností' },
                        { value: `${GOOGLE_RATING} ★`, label: 'Google hodnotenie' },
                        { value: REPAIRED_CARS, label: 'opravených áut' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center bg-white/5 border border-white/10 rounded-sm px-2 py-3 sm:p-4 backdrop-blur-sm">
                            <div
                                className="text-lg sm:text-2xl font-black text-[#E31C25]"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="text-[10px] leading-tight sm:text-xs text-white/70 mt-1 tracking-wide uppercase"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
