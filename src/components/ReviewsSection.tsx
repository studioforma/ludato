'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reviews = [
    {
        name: 'Henrieta T.',
        rating: 5,
        text: '... poruchu rýchlo identifikovali, zabezpečili potrebný náhradný diel a auto dali do poriadku približne do 2 hodín...',
        initials: 'HT',
    },
    {
        name: 'Ema F.',
        rating: 5,
        text: '... všetko mi vysvetlili a informovali telefónom aj cez sms. Komunikácia 10/10, výmena bŕzd a STK boli priam bleskové...',
        initials: 'EF',
    },
    {
        name: 'Pavel P.',
        rating: 5,
        text: '... auto po servise funguje bez problémov, motor beží hladko a spojka pracuje výborne. Použili kvalitné náhradné diely...',
        initials: 'PP',
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#F5B301] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function GoogleG({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        </svg>
    );
}

export default function ReviewsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="recenzie" className="bg-white pt-24 lg:pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p
                        className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="font-black">//</span> Čo o nás hovoria
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-black text-[#1D1D1B] mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        RECENZIE <span className="text-[#E31C25]">ZÁKAZNÍKOV</span>
                    </h2>
                    <p
                        className="text-[#1D1D1B]/55 max-w-lg mx-auto"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Spokojnosť zákazníka je naším najväčším ocenením.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -4, borderColor: 'rgba(245,179,1,0.7)' }}
                            className="relative bg-white border border-black/10 rounded-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-colors duration-300 group"
                        >
                            {/* Review source */}
                            <GoogleG className="absolute top-6 right-6 w-6 h-6" />

                            {/* Stars */}
                            <StarRating count={review.rating} />

                            {/* Text */}
                            <p
                                className="text-[#1D1D1B]/75 text-sm leading-relaxed mt-4 mb-6"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                {review.text}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#E31C25] flex items-center justify-center flex-shrink-0">
                                    <span
                                        className="text-white text-xs font-black"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {review.initials}
                                    </span>
                                </div>
                                <div>
                                    <div
                                        className="text-[#1D1D1B] text-sm font-bold"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {review.name}
                                    </div>
                                    <div
                                        className="text-[#1D1D1B]/45 text-xs"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        Recenzia na Google
                                    </div>
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5B301] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* Google rating badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 flex justify-center"
                >
                    <a
                        href="https://maps.app.goo.gl/YQtaNBnBdTFTYLZn8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 border border-black/10 rounded-sm px-8 py-4 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#F5B301] transition-colors duration-300"
                    >
                        <div>
                            <div
                                className="text-3xl font-black text-[#1D1D1B]"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                5.0
                            </div>
                            <StarRating count={5} />
                        </div>
                        <div className="w-px h-10 bg-black/15" />
                        <GoogleG className="w-9 h-9 flex-shrink-0" />
                        <div
                            className="text-[#1D1D1B]/60 text-sm"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <span className="block font-semibold text-[#1D1D1B]">Google</span>
                            hodnotenie
                        </div>
                    </a>
                </motion.div>

                {/* Divider before the white About section */}
                <div className="flex items-center gap-4 max-w-4xl mx-auto mt-20 lg:mt-24" aria-hidden="true">
                    <span className="flex-1 h-px bg-gradient-to-r from-transparent to-black/15" />
                    <span
                        className="text-[#E31C25] font-black text-sm"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        //
                    </span>
                    <span className="flex-1 h-px bg-gradient-to-l from-transparent to-black/15" />
                </div>
            </div>
        </section>
    );
}
