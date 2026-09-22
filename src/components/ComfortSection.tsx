'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ComfortSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="bg-[#111111] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">//</span> Počas čakania
                        </p>
                        <h2
                            className="text-4xl md:text-5xl font-black text-white mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            POSEDÍTE SI U NÁS <span className="text-[#E31C25]">V POHODLÍ</span>
                        </h2>
                        <p
                            className="text-white/60 text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Kým sa staráme o vaše auto, nemusíte nikam utekať. V našej čakárni
                            si dáte kávu, pozriete televíziu alebo si len tak posedíte, kým je
                            vaše vozidlo pripravené.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="aspect-[3/4] rounded-sm bg-gradient-to-br from-[#242422] to-[#0a0a0a] border border-white/10" />
                        <div className="aspect-[3/4] rounded-sm bg-gradient-to-br from-[#242422] to-[#0a0a0a] border border-white/10 mt-8" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
