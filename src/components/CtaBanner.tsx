'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type CtaBannerProps = {
    question: string;
    subtext?: string;
    secondaryHref: string;
    secondaryLabel: string;
    variant?: 'dark' | 'red';
};

export default function CtaBanner({ question, subtext, secondaryHref, secondaryLabel, variant = 'dark' }: CtaBannerProps) {
    const isRed = variant === 'red';

    return (
        <section
            className={
                isRed
                    ? 'bg-[#E31C25] py-16'
                    : 'bg-[#1D1D1B] border-y border-[#E31C25]/20 py-16'
            }
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {question}
                </h2>
                {subtext && (
                    <p
                        className={`text-base mb-8 max-w-2xl mx-auto ${isRed ? 'text-white/85' : 'text-white/60'}`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        {subtext}
                    </p>
                )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {isRed ? (
                        <a
                            href="tel:+421944236257"
                            className="group relative inline-flex items-center justify-center gap-3 bg-white hover:bg-[#1D1D1B] text-[#E31C25] hover:text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 overflow-hidden"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="relative z-10">+421 944 236 257</span>
                        </a>
                    ) : (
                        <a
                            href="tel:+421944236257"
                            className="group relative inline-flex items-center justify-center gap-3 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#E31C25]/40 hover:-translate-y-1 overflow-hidden"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="relative z-10">+421 944 236 257</span>
                            <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                        </a>
                    )}
                    <Link
                        href={secondaryHref}
                        className={
                            isRed
                                ? 'inline-flex items-center justify-center gap-3 border border-white/50 hover:border-white text-white font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-white/10'
                                : 'inline-flex items-center justify-center gap-3 border border-white/30 hover:border-[#E31C25] text-white hover:text-[#E31C25] font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300'
                        }
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        {secondaryLabel}
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
