import Image from 'next/image';
import OnlineBookingLink from '@/components/OnlineBookingLink';
import CookieSettingsButton from '@/components/CookieSettingsButton';
import { getCategory, formatPrice, formatPriceWithVat, type PriceItem } from '@/lib/pricing';
import { GOOGLE_RATING, GOOGLE_REVIEWS, REPAIRED_CARS } from '@/lib/trust';
import { reviews } from '@/lib/reviews';
import { getArea } from '@/lib/areas';

// Google Ads landing pages (/lp/*). One template, two pages. No main menu and
// no links to other pages, noindex, not in the sitemap. The phone number is
// always written as 0944 236 257 / tel:+421944236257 so the call tracking in
// layout.tsx (CallNumberSwap, PhoneClickTracking) works exactly as elsewhere.

const PHONE_TEXT = '0944 236 257';
const PHONE_HREF = 'tel:+421944236257';
const HOURS = 'Pondelok až štvrtok 9:00 až 19:00, piatok 7:00 až 16:00, sobota a nedeľa zatvorené';

export type PriceRef = { category: string; service: string; label?: string };
export type PriceTable = { heading: string; rows: PriceRef[]; footnotes?: string[] };

export type LandingConfig = {
    /** Where the page is, sent with GA4 phone_click / online_booking_click. */
    key: 'lp_autoservis' | 'lp_pneuservis';
    h1: string;
    heroText: string;
    /** Short highlighted lines in the hero (offer, prices). */
    heroPoints: string[];
    heroNote?: string;
    reasons: { title: string; text: string }[];
    priceIntro: string;
    priceTables: PriceTable[];
    priceNotes?: string[];
    steps: { title: string; text: string }[];
    /** Area slugs from the areas registry for the drive-time block. */
    areas?: string[];
    faq: { q: string; a: string }[];
    closingHeading: string;
};

/** Looks a price up in the cenník data; fails the build if it is not there. */
function priceItem(ref: PriceRef): PriceItem {
    const item = getCategory(ref.category)?.items.find((i) => i.service === ref.service);
    if (!item) throw new Error(`Price not in cenník: ${ref.category} / ${ref.service}`);
    return item;
}

function PhoneButton({ location, className }: { location: string; className?: string }) {
    return (
        <a
            href={PHONE_HREF}
            data-phone-location={location}
            className={`inline-flex items-center justify-center gap-3 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-colors ${className ?? ''}`}
            style={{ fontFamily: 'var(--font-montserrat)' }}
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Zavolať {PHONE_TEXT}
        </a>
    );
}

function BookingButton({ placement, className }: { placement: string; className?: string }) {
    return (
        <OnlineBookingLink
            placement={placement}
            className={`inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-white text-white font-bold px-8 py-[14px] text-sm tracking-widest uppercase rounded-sm transition-colors ${className ?? ''}`}
            style={{ fontFamily: 'var(--font-montserrat)' }}
        >
            Rezervovať termín
        </OnlineBookingLink>
    );
}

function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <h2
            className={`uppercase text-2xl md:text-3xl font-black mb-8 ${light ? 'text-[#1D1D1B]' : 'text-white'}`}
            style={{ fontFamily: 'var(--font-montserrat)' }}
        >
            <span className="text-[#E31C25]">//</span> {children}
        </h2>
    );
}

function Stars() {
    return (
        <span className="text-[#F5B301] tracking-widest" aria-hidden="true">
            ★★★★★
        </span>
    );
}

export default function LandingPage({ config }: { config: LandingConfig }) {
    const k = config.key;
    const areas = (config.areas ?? []).map((slug) => getArea(slug)).filter((a) => a !== undefined);

    return (
        <main id="top" className="bg-[#111111] text-white pb-[72px] lg:pb-0" style={{ fontFamily: 'var(--font-inter)' }}>
            {/* The site-wide call bar is replaced here by the bar with both buttons. */}
            <style>{'[data-phone-location="spodny_pruh"],div:has(+[data-phone-location="spodny_pruh"]){display:none!important}'}</style>

            {/* Header: logo only, not a link away */}
            <header className="border-b border-white/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
                    <a href="#top" aria-label="Ludato Family Autoservis a Pneuservis">
                        <Image src="/logo.svg" alt="Ludato Family Autoservis a Pneuservis" width={70} height={56} priority />
                    </a>
                    <a
                        href={PHONE_HREF}
                        data-phone-location={`${k}_hlavicka`}
                        className="hidden sm:inline-flex text-white font-bold text-sm tracking-widest hover:text-[#E31C25] transition-colors"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        {PHONE_TEXT}
                    </a>
                </div>
            </header>

            {/* 1. Hero */}
            <section className="px-4 sm:px-6 pt-12 pb-14 lg:pt-20 lg:pb-20 bg-gradient-to-br from-[#1D1D1B] via-[#111111] to-[#0a0a0a]">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-[#FF5A60] text-xs tracking-[0.4em] uppercase mb-5 font-semibold" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        Odborárska 52, Nové Mesto
                    </p>
                    <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        {config.h1}
                    </h1>
                    <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">{config.heroText}</p>
                    <ul className="inline-flex flex-col gap-2 text-left mb-3">
                        {config.heroPoints.map((p) => (
                            <li key={p} className="flex gap-3 text-white font-semibold">
                                <span className="text-[#E31C25]" aria-hidden="true">✓</span>
                                <span>{p}</span>
                            </li>
                        ))}
                    </ul>
                    {config.heroNote && <p className="text-white/50 text-xs mb-8">{config.heroNote}</p>}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                        <PhoneButton location={`${k}_hero`} />
                        <BookingButton placement={`${k}_hero`} />
                    </div>
                </div>
            </section>

            {/* 2. Trust row */}
            <section className="border-y border-white/10 bg-[#1D1D1B] px-4 sm:px-6 py-5">
                <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/80">
                    <span><Stars /> <strong className="text-white">{GOOGLE_RATING}</strong> na Google, {GOOGLE_REVIEWS} recenzií</span>
                    <span><strong className="text-white">{REPAIRED_CARS}</strong> opravených áut</span>
                    <span>Autá všetkých značiek</span>
                </div>
            </section>

            {/* 3. Reasons */}
            <section className="px-4 sm:px-6 py-16">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading>Prečo Ludato</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {config.reasons.map((r) => (
                            <div key={r.title} className="bg-[#1D1D1B] border border-white/10 rounded-sm p-6">
                                <h3 className="uppercase font-black text-white mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {r.title}
                                </h3>
                                <p className="text-white/65 text-sm leading-relaxed">{r.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Prices */}
            <section className="px-4 sm:px-6 py-16 bg-[#0a0a0a]">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading>Ceny</SectionHeading>
                    <p className="text-white/70 text-sm mb-8">{config.priceIntro}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {config.priceTables.map((t) => (
                            <div key={t.heading}>
                                <h3 className="uppercase text-white/60 text-xs tracking-[0.3em] font-bold mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {t.heading}
                                </h3>
                                <ul className="space-y-2">
                                    {t.rows.map((ref) => {
                                        const item = priceItem(ref);
                                        const vat = formatPriceWithVat(item);
                                        return (
                                            <li key={ref.category + ref.service} className="flex items-start justify-between gap-4 bg-[#1D1D1B] border border-white/10 rounded-sm px-4 py-3">
                                                <span className="text-sm text-white font-semibold">
                                                    {ref.label ?? item.service}
                                                    {item.sub && <span className="block text-white/45 text-xs font-normal mt-0.5">{item.sub}</span>}
                                                </span>
                                                <span className="text-right shrink-0">
                                                    <span className="block text-white font-black" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                                        {formatPrice(item)}
                                                    </span>
                                                    {vat && <span className="block text-white/45 text-xs">{vat}</span>}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {t.footnotes?.map((f) => (
                                    <p key={f} className="text-white/55 text-xs mt-2">{f}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 space-y-1">
                        <p className="text-white/55 text-xs">Ceny sú uvedené bez DPH, pod každou nájdete aj sumu s DPH 23 %.</p>
                        {config.priceNotes?.map((n) => (
                            <p key={n} className="text-white/55 text-xs">{n}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Steps */}
            <section className="px-4 sm:px-6 py-16">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading>Ako to prebieha</SectionHeading>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {config.steps.map((s, i) => (
                            <li key={s.title} className="bg-[#1D1D1B] border border-white/10 rounded-sm p-6">
                                <span className="text-[#E31C25] font-black text-3xl" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {i + 1}
                                </span>
                                <h3 className="uppercase font-black text-white mt-2 mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {s.title}
                                </h3>
                                <p className="text-white/65 text-sm leading-relaxed">{s.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 6. Reviews */}
            <section className="px-4 sm:px-6 py-16 bg-white">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading light>Recenzie z Google</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {reviews.map((r) => (
                            <figure key={r.name} className="flex flex-col border border-black/10 rounded-sm p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                                <Stars />
                                <blockquote className="text-[#1D1D1B]/75 text-sm leading-relaxed mt-3 mb-4 flex-1">{r.text}</blockquote>
                                <figcaption className="text-[#1D1D1B] text-sm font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {r.name}
                                    <span className="block text-[#1D1D1B]/45 text-xs font-normal">Recenzia na Google</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Where we are */}
            <section className="px-4 sm:px-6 py-16">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading>Kde nás nájdete</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4 text-sm">
                            <p><strong className="block text-white/50 text-xs uppercase tracking-widest mb-1">Adresa</strong>Odborárska 52, 831 02 Bratislava, Nové Mesto</p>
                            <p>
                                <strong className="block text-white/50 text-xs uppercase tracking-widest mb-1">Telefón</strong>
                                <a href={PHONE_HREF} data-phone-location={`${k}_kde`} className="text-white font-bold hover:text-[#E31C25]">{PHONE_TEXT}</a>
                            </p>
                            <p><strong className="block text-white/50 text-xs uppercase tracking-widest mb-1">Otváracie hodiny</strong>{HOURS}</p>
                            {areas.length > 0 && (
                                <div>
                                    <strong className="block text-white/50 text-xs uppercase tracking-widest mb-2">Dojazd autom</strong>
                                    <ul className="space-y-1 text-white/75">
                                        {areas.map((a) => (
                                            <li key={a.slug}>
                                                {a.name}: {a.driveTime}{a.route ? `, ${a.route.charAt(0).toLowerCase()}${a.route.slice(1)}` : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="relative w-full min-h-[260px] rounded-sm overflow-hidden border border-white/10">
                            <iframe
                                src="https://maps.google.com/maps?q=Ludato+Family+Autoservis,Odbor%C3%A1rska%2052,%20831%2002%20Bratislava&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                title="Mapa: Ludato Family Autoservis a Pneuservis, Odborárska 52"
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="px-4 sm:px-6 py-16 bg-[#0a0a0a]">
                <div className="max-w-3xl mx-auto">
                    <SectionHeading>Časté otázky</SectionHeading>
                    <div className="space-y-3">
                        {config.faq.map((f) => (
                            <div key={f.q} className="border border-white/10 rounded-sm bg-white/5 px-5 py-4">
                                <h3 className="text-white font-bold text-sm sm:text-base mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>{f.q}</h3>
                                <p className="text-white/65 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Closing CTA */}
            <section className="px-4 sm:px-6 py-16 bg-[#E31C25]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="uppercase text-2xl md:text-3xl font-black mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        {config.closingHeading}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={PHONE_HREF}
                            data-phone-location={`${k}_zaver`}
                            className="inline-flex items-center justify-center gap-3 bg-white text-[#E31C25] font-bold px-8 py-4 text-sm tracking-widest uppercase rounded-sm"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            Zavolať {PHONE_TEXT}
                        </a>
                        <BookingButton placement={`${k}_zaver`} />
                    </div>
                </div>
            </section>

            {/* NAP only */}
            <footer className="px-4 sm:px-6 py-8 text-center text-xs text-white/50 space-y-2">
                <p className="text-white/80 font-semibold">Ludato Family Autoservis a Pneuservis</p>
                <p>Odborárska 52, 831 02 Bratislava</p>
                <p>
                    <a href={PHONE_HREF} data-phone-location={`${k}_paticka`} className="text-white/80 hover:text-white">{PHONE_TEXT}</a>
                </p>
                <CookieSettingsButton className="underline hover:text-white" />
            </footer>

            {/* Mobile sticky bar: call + book */}
            <div
                data-phone-location={`${k}_spodny_pruh`}
                className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] grid grid-cols-2 bg-[#E31C25] shadow-[0_-8px_30px_rgba(0,0,0,0.35)]"
                style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
                <a href={PHONE_HREF} className="flex items-center justify-center py-5 text-white font-black text-sm tracking-widest uppercase border-r border-white/25" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Zavolať
                </a>
                <OnlineBookingLink placement={`${k}_spodny_pruh`} className="flex items-center justify-center py-5 text-white font-black text-sm tracking-widest uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    Rezervovať
                </OnlineBookingLink>
            </div>
        </main>
    );
}
