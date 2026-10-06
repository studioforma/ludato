import Link from 'next/link';
import RichText from '@/components/service/RichText';
import { GOOGLE_RATING, GOOGLE_REVIEWS, REPAIRED_CARS } from '@/lib/trust';

export type InlineCtaProps = {
    heading: string;
    /** Supports inline links in markdown form: [text](/cesta). */
    text: string;
    points?: string[];
    secondaryHref: string;
    secondaryLabel: string;
};

// Red call-to-action box used inside service pages and the area page. The
// phone is written exactly as +421 944 236 257 so Google Ads call tracking
// can swap it (see README).
export default function InlineCta({ heading, text, points, secondaryHref, secondaryLabel }: InlineCtaProps) {
    return (
        <aside className="mb-14 relative overflow-hidden rounded-sm bg-[#E31C25] px-6 py-8 sm:px-12 sm:py-12 shadow-[0_20px_60px_rgba(227,28,37,0.25)]">
            {/* Slash accent, same motif as the rest of the site */}
            <span
                className="pointer-events-none absolute -right-4 -top-10 text-[10rem] font-black leading-none text-white/10 select-none"
                style={{ fontFamily: 'var(--font-montserrat)' }}
                aria-hidden="true"
            >
                //
            </span>
            <div className="relative lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
                <div>
                    <h2
                        className="relative text-2xl sm:text-3xl font-black text-white mb-3 leading-tight"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        {heading}
                    </h2>
                    <p
                        className="relative text-white/90 leading-relaxed mb-5"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        <RichText text={text} />
                    </p>
                    {points && (
                        <ul className="relative space-y-2 mb-5">
                            {points.map((p) => (
                                <li
                                    key={p}
                                    className="flex items-start gap-3 text-white text-sm font-semibold"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    <span className="mt-0.5 flex-shrink-0">✓</span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* Social proof right next to the call buttons */}
                    <div
                        className="relative inline-flex flex-wrap items-center gap-x-3 gap-y-1 bg-black/25 rounded-sm px-4 py-2.5 mb-7 lg:mb-0 text-white text-sm"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        <span className="flex items-center gap-0.5" aria-hidden="true">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-[#F5B301] fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </span>
                        <span>
                            <strong className="font-black">{GOOGLE_RATING}</strong> na Google, {GOOGLE_REVIEWS} recenzií
                        </span>
                        <span className="text-white/50" aria-hidden="true">•</span>
                        <span>
                            <strong className="font-black">{REPAIRED_CARS}</strong> opravených áut
                        </span>
                    </div>
                </div>
                <div className="relative flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[280px]">
                    <a
                        href="tel:+421944236257"
                        className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#1D1D1B] text-[#E31C25] hover:text-white font-bold px-7 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +421 944 236 257
                    </a>
                    <Link
                        href={secondaryHref}
                        className="inline-flex items-center justify-center border border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold px-7 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        {secondaryLabel}
                    </Link>
                </div>
            </div>
        </aside>
    );
}
