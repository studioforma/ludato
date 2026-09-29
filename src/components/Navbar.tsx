'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SocialIcons from '@/components/SocialIcons';

const navLinks = [
    { href: '/sluzby', label: 'Služby' },
    { href: '/cennik', label: 'Cenník' },
    { href: '/kde-posobime', label: 'Kde pôsobíme' },
    { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#1D1D1B]/95 backdrop-blur-md shadow-2xl border-b border-[#E31C25]/20'
                : 'bg-transparent'
                }`}
        >
            {/* NAP strip, collapses once the page is scrolled */}
            <div
                className={`bg-[#111111] border-b border-white/10 overflow-hidden transition-all duration-500 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
                    }`}
            >
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4 text-white/70 text-xs"
                    style={{ fontFamily: 'var(--font-inter)' }}
                >
                    <div className="flex items-center gap-5 min-w-0">
                        <a
                            href="https://maps.app.goo.gl/xaKkcTPLukbzixYB6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 hover:text-white transition-colors truncate"
                        >
                            <svg className="w-3.5 h-3.5 text-[#E31C25] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s-7-6.1-7-11.5a7 7 0 1114 0C19 14.9 12 21 12 21z" />
                                <circle cx="12" cy="9.5" r="2.5" strokeWidth={2} />
                            </svg>
                            <span className="truncate">
                                Odborárska 52<span className="hidden sm:inline">, 831 02 Bratislava – Nové Mesto</span>
                            </span>
                        </a>
                        <a
                            href="tel:+421944236257"
                            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
                        >
                            <svg className="w-3.5 h-3.5 text-[#E31C25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +421 944 236 257
                        </a>
                        <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap">
                            <svg className="w-3.5 h-3.5 text-[#E31C25]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="12" cy="12" r="9" strokeWidth={2} />
                                <path strokeLinecap="round" strokeWidth={2} d="M12 7v5l3 2" />
                            </svg>
                            Po–Št 9:00–19:00, Pi 7:00–16:00
                        </span>
                    </div>
                    <SocialIcons className="flex-shrink-0 text-white" iconClassName="w-4 h-4" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 relative">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group flex-1">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative w-16 h-14 flex-shrink-0"
                        >
                            <Image
                                src="/logo.svg"
                                alt="LUDATO FAMILY Cars Services"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Nav (Center) */}
                    <nav className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="nav-link text-white/90 hover:text-white font-medium text-sm tracking-wide uppercase transition-colors duration-200"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* CTA (Right) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="hidden md:flex flex-1 justify-end"
                    >
                        <a
                            href="tel:+421944236257"
                            className="relative inline-flex items-center gap-2 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold text-sm px-6 py-3 rounded-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#E31C25]/40 hover:-translate-y-0.5 group overflow-hidden"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="relative z-10">+421 944 236 257</span>
                            <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                        </a>
                    </motion.div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Menu"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-white origin-center transition-colors"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-6 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-white origin-center"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#1D1D1B] border-t border-[#E31C25]/20"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-white/90 hover:text-[#E31C25] font-semibold tracking-widest uppercase text-sm py-2 border-b border-white/10 transition-colors"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="tel:+421944236257"
                                onClick={() => setMenuOpen(false)}
                                className="mt-2 text-center bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold text-sm px-6 py-3 rounded-sm tracking-widest uppercase transition-colors"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                +421 944 236 257
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
