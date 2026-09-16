'use client';

import { useState } from 'react';

type FaqItem = {
    q: string;
    a: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-3">
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div
                        key={item.q}
                        className="border border-white/10 rounded-sm overflow-hidden"
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 bg-white/5 hover:bg-white/8 transition-colors duration-200"
                            aria-expanded={isOpen}
                        >
                            <span
                                className="text-white font-bold text-sm sm:text-base"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                {item.q}
                            </span>
                            <span
                                className={`text-[#E31C25] text-xl font-black flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                            >
                                +
                            </span>
                        </button>
                        {isOpen && (
                            <div className="px-5 pb-4 pt-1 bg-white/5">
                                <p
                                    className="text-white/60 text-sm leading-relaxed"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    {item.a}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
