import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Ďakujeme | Ludato Family Autoservis',
    description: 'Vaša správa bola úspešne odoslaná.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function Dakujeme() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#111111] flex items-center justify-center px-4 sm:px-6 pt-32 pb-20">
                <div className="max-w-lg w-full text-center">
                    <div className="w-20 h-20 rounded-full bg-[#E31C25] flex items-center justify-center mb-6 shadow-lg shadow-[#E31C25]/40 mx-auto">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1
                        className="text-4xl sm:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        ĎAKUJEME<span className="text-[#E31C25]">!</span>
                    </h1>
                    <p
                        className="text-white/60 text-base mb-2"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Vaša správa bola úspešne odoslaná.
                    </p>
                    <p
                        className="text-lg text-[#E31C25] font-semibold mb-10"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Ozveme sa vám čo najskôr.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+421944236257"
                            className="inline-flex items-center justify-center gap-3 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +421 944 236 257
                        </a>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-[#E31C25] text-white hover:text-[#E31C25] font-semibold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            Späť na hlavnú stránku
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
