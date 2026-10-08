'use client';

import Image from 'next/image';

export default function ComfortSection() {

    return (
        <section className="bg-[#111111] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
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
                    </div>

                    <div
                        className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10"
                    >
                        <Image
                            src="/cakaren-2.webp"
                            alt="Interiér čakárne Ludato Family Autoservis s televízorom, kávovarom a akváriom, Bratislava Nové Mesto"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
