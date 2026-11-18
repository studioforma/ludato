import Image from 'next/image';
import OnlineBookingLink from '@/components/OnlineBookingLink';
import ContactSection from '@/components/ContactSection';
import InlineCta from '@/components/InlineCta';
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
    key: 'lp_autoservis' | 'lp_pneuservis' | 'lp_prezutie';
    /** Main button in the hero, closing section and mobile bar. 'quote' also
     * puts the quote form on the page; the second button is always the other
     * of call / booking (call for quote and booking, booking for call). */
    primaryCta: 'quote' | 'booking' | 'call';
    /** Name of the review to show first (the one closest to the page topic). */
    leadReview?: string;
    h1: string;
    heroText: string;
    /** Short highlighted lines in the hero (offer, prices). */
    heroPoints: string[];
    heroNote?: string;
    /** Real workshop photo next to the hero text (desktop) or under the buttons (mobile). 1200 × 628 in /public/lp. */
    heroImage: { src: string; alt: string };
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

const QUOTE_ANCHOR = 'cenova-ponuka';

function ctaClass(primary: boolean, onRed: boolean) {
    const base = 'inline-flex items-center justify-center gap-3 font-bold px-5 sm:px-8 min-h-[48px] text-base tracking-wider uppercase rounded-sm transition-colors';
    if (onRed) {
        return `${base} ${primary ? 'bg-white text-[#E31C25] py-4' : 'border-2 border-white/80 hover:border-white text-white py-[14px]'}`;
    }
    return `${base} ${
        primary
            ? 'bg-[#E31C25] hover:bg-[#c0151d] text-white py-4'
            : 'border-2 border-[#1D1D1B] hover:bg-[#1D1D1B] hover:text-white text-[#1D1D1B] py-[14px]'
    }`;
}

const MONT = { fontFamily: 'var(--font-montserrat)' };

function PhoneButton({ location, primary, onRed = false }: { location: string; primary: boolean; onRed?: boolean }) {
    return (
        <a href={PHONE_HREF} data-phone-location={location} className={ctaClass(primary, onRed)} style={MONT}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Zavolať {PHONE_TEXT}
        </a>
    );
}

function BookingButton({ placement, primary, onRed = false }: { placement: string; primary: boolean; onRed?: boolean }) {
    return (
        <OnlineBookingLink placement={placement} className={ctaClass(primary, onRed)} style={MONT}>
            Rezervovať termín
        </OnlineBookingLink>
    );
}

function QuoteButton({ onRed = false }: { onRed?: boolean }) {
    return (
        <a href={`#${QUOTE_ANCHOR}`} className={ctaClass(true, onRed)} style={MONT}>
            Nezáväzná cenová ponuka
        </a>
    );
}

/** Main button first, second button after it (hero and closing section). */
function CtaButtons({ config, place, onRed = false }: { config: LandingConfig; place: string; onRed?: boolean }) {
    const where = `${config.key}_${place}`;
    if (config.primaryCta === 'quote') {
        return (
            <>
                <QuoteButton onRed={onRed} />
                <PhoneButton location={where} primary={false} onRed={onRed} />
            </>
        );
    }
    if (config.primaryCta === 'booking') {
        return (
            <>
                <BookingButton placement={where} primary onRed={onRed} />
                <PhoneButton location={where} primary={false} onRed={onRed} />
            </>
        );
    }
    return (
        <>
            <PhoneButton location={where} primary onRed={onRed} />
            <BookingButton placement={where} primary={false} onRed={onRed} />
        </>
    );
}

/** Mobile sticky bar: main action red, second action white. */
function StickyBar({ config }: { config: LandingConfig }) {
    const k = config.key;
    const half = (primary: boolean) =>
        `flex items-center justify-center py-5 min-h-[56px] font-black text-base tracking-wider uppercase ${
            primary ? 'bg-[#E31C25] text-white' : 'bg-white text-[#1D1D1B] border-t border-black/15'
        }`;
    const call = (primary: boolean) => (
        <a key="call" href={PHONE_HREF} className={half(primary)} style={MONT}>
            Zavolať
        </a>
    );
    const book = (primary: boolean) => (
        <OnlineBookingLink key="book" placement={`${k}_spodny_pruh`} className={half(primary)} style={MONT}>
            Rezervovať
        </OnlineBookingLink>
    );
    const quote = (
        <a key="quote" href={`#${QUOTE_ANCHOR}`} className={half(true)} style={MONT}>
            Cenová ponuka
        </a>
    );
    const items =
        config.primaryCta === 'quote' ? [quote, call(false)] : config.primaryCta === 'booking' ? [book(true), call(false)] : [call(true), book(false)];
    return (
        <div
            data-phone-location={`${k}_spodny_pruh`}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] grid grid-cols-2 shadow-[0_-8px_30px_rgba(0,0,0,0.15)]"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
            {items}
        </div>
    );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2
            className="uppercase text-2xl md:text-3xl font-black mb-8 text-[#1D1D1B]"
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
        <main id="top" className="bg-white text-[#1D1D1B] pb-[72px] lg:pb-0" style={{ fontFamily: 'var(--font-inter)' }}>
            {/* The site-wide call bar is replaced here by the bar with both buttons. */}
            <style>{'[data-phone-location="spodny_pruh"],div:has(+[data-phone-location="spodny_pruh"]){display:none!important}'}</style>

            {/* Header: logo only, not a link away */}
            <header className="bg-[#1D1D1B]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
                    <a href="#top" aria-label="Ludato Family Autoservis a Pneuservis">
                        <Image src="/logo.svg" alt="Ludato Family Autoservis a Pneuservis" width={70} height={56} priority />
                    </a>
                    <a
                        href={PHONE_HREF}
                        data-phone-location={`${k}_hlavicka`}
                        className="hidden sm:inline-flex text-white font-bold text-base tracking-widest hover:text-[#E31C25] transition-colors"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        {PHONE_TEXT}
                    </a>
                </div>
            </header>

            {/* 1. Hero */}
            <section className="px-4 sm:px-6 pt-12 pb-14 lg:pt-20 lg:pb-20 bg-gradient-to-b from-white to-[#F4F4F3] border-b border-black/10">
                <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="max-w-3xl mx-auto text-center lg:text-left">
                    <p className="text-[#C0151D] text-xs md:text-sm tracking-[0.25em] uppercase mb-5 font-semibold" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        Odborárska 52, Nové Mesto
                    </p>
                    <h1 className="text-[#1D1D1B] uppercase text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        {config.h1}
                    </h1>
                    <p className="text-[#1D1D1B]/75 text-base sm:text-lg leading-relaxed mb-8">{config.heroText}</p>
                    <ul className="inline-flex flex-col gap-2 text-left mb-3">
                        {config.heroPoints.map((p) => (
                            <li key={p} className="flex gap-3 text-[#1D1D1B] font-semibold">
                                <span className="text-[#C0151D]" aria-hidden="true">✓</span>
                                <span>{p}</span>
                            </li>
                        ))}
                    </ul>
                    {config.heroNote && <p className="text-[#1D1D1B]/65 text-sm mb-8">{config.heroNote}</p>}
                    <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start">
                        <CtaButtons config={config} place="hero" />
                    </div>
                </div>
                {/* Under the buttons on mobile, so call / quote stay on the first screen. */}
                <div className="mt-10 lg:mt-0 max-w-3xl mx-auto w-full">
                    <Image
                        src={config.heroImage.src}
                        alt={config.heroImage.alt}
                        width={1200}
                        height={628}
                        sizes="(min-width: 1152px) 552px, (min-width: 1024px) 45vw, (min-width: 768px) 720px, 100vw"
                        loading="eager"
                        className="w-full h-auto rounded-sm border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                    />
                </div>
                </div>
            </section>

            {/* 2. Trust row */}
            <section className="border-b border-black/10 bg-white px-4 sm:px-6 py-5">
                <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-base text-[#1D1D1B]/75">
                    <span><Stars /> <strong className="text-[#1D1D1B]">{GOOGLE_RATING}</strong> na Google, {GOOGLE_REVIEWS} recenzií</span>
                    <span><strong className="text-[#1D1D1B]">{REPAIRED_CARS}</strong> opravených áut</span>
                    <span>Autá všetkých značiek</span>
                </div>
            </section>

            {/* 3. Reasons */}
            <section className="px-4 sm:px-6 py-16">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading>Prečo Ludato</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {config.reasons.map((r) => (
                            <div key={r.title} className="bg-[#F4F4F3] border border-black/10 rounded-sm p-6">
                                <h3 className="uppercase font-black text-[#1D1D1B] mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {r.title}
                                </h3>
                                <p className="text-[#1D1D1B]/75 text-base leading-relaxed">{r.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 4. Prices */}
            <section className="px-4 sm:px-6 py-16 bg-[#F4F4F3]">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading>Ceny</SectionHeading>
                    <p className="text-[#1D1D1B]/75 text-base leading-relaxed mb-8">{config.priceIntro}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {config.priceTables.map((t) => (
                            <div key={t.heading}>
                                <h3 className="uppercase text-[#1D1D1B]/70 text-sm tracking-[0.2em] font-bold mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {t.heading}
                                </h3>
                                <ul className="space-y-2">
                                    {t.rows.map((ref) => {
                                        const item = priceItem(ref);
                                        const vat = formatPriceWithVat(item);
                                        return (
                                            <li key={ref.category + ref.service} className="flex items-start justify-between gap-4 bg-white border border-black/10 rounded-sm px-4 py-3">
                                                <span className="text-base leading-snug text-[#1D1D1B] font-semibold">
                                                    {ref.label ?? item.service}
                                                    {item.sub && <span className="block text-[#1D1D1B]/65 text-sm font-normal mt-0.5">{item.sub}</span>}
                                                </span>
                                                <span className="text-right shrink-0">
                                                    <span className="block text-lg text-[#1D1D1B] font-black whitespace-nowrap" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                                        {formatPrice(item)}
                                                    </span>
                                                    {vat && <span className="block text-[#1D1D1B]/65 text-sm whitespace-nowrap">{vat}</span>}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {t.footnotes?.map((f) => (
                                    <p key={f} className="text-[#1D1D1B]/65 text-sm mt-2">{f}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 space-y-1">
                        <p className="text-[#1D1D1B]/65 text-sm">Ceny sú uvedené bez DPH, pod každou nájdete aj sumu s DPH 23 %.</p>
                        {config.priceNotes?.map((n) => (
                            <p key={n} className="text-[#1D1D1B]/65 text-sm">{n}</p>
                        ))}
                    </div>
                    {/* Same red CTA band as under the prices on /sluzby/* (InlineCta). The
                        wrapper sets the call location for PhoneClickTracking. */}
                    <div data-phone-location={`${k}_ceny`} className="mt-10 [&>aside]:mb-0">
                        {config.primaryCta === 'quote' && (
                            <InlineCta secondaryHref={`#${QUOTE_ANCHOR}`} secondaryLabel="Nezáväzná cenová ponuka" secondaryFirst onlineBooking={false} />
                        )}
                        {config.primaryCta === 'booking' && (
                            <InlineCta secondaryBooking={`${k}_ceny`} secondaryLabel="Rezervovať termín" secondaryFirst onlineBooking={false} />
                        )}
                        {config.primaryCta === 'call' && (
                            <InlineCta secondaryBooking={`${k}_ceny`} secondaryLabel="Rezervovať termín" onlineBooking={false} />
                        )}
                    </div>
                </div>
            </section>

            {/* 5. Steps */}
            <section className="px-4 sm:px-6 py-16">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading>Ako to prebieha</SectionHeading>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {config.steps.map((s, i) => (
                            <li key={s.title} className="bg-[#F4F4F3] border border-black/10 rounded-sm p-6">
                                <span className="text-[#E31C25] font-black text-3xl" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {i + 1}
                                </span>
                                <h3 className="uppercase font-black text-[#1D1D1B] mt-2 mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {s.title}
                                </h3>
                                <p className="text-[#1D1D1B]/75 text-base leading-relaxed">{s.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 6. Reviews */}
            <section className="px-4 sm:px-6 py-16 bg-white border-t border-black/10">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading>Recenzie z Google</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[...reviews]
                            .sort((a, b) => Number(b.name === config.leadReview) - Number(a.name === config.leadReview))
                            .map((r) => (
                            <figure key={r.name} className="flex flex-col border border-black/10 rounded-sm p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                                <Stars />
                                <blockquote className="text-[#1D1D1B]/75 text-base leading-relaxed mt-3 mb-4 flex-1">{r.text}</blockquote>
                                <figcaption className="text-[#1D1D1B] text-base font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    {r.name}
                                    <span className="block text-[#1D1D1B]/65 text-sm font-normal">Recenzia na Google</span>
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
                        <div className="space-y-4 text-base leading-relaxed">
                            <p><strong className="block text-[#1D1D1B]/65 text-sm uppercase tracking-widest mb-1">Adresa</strong>Odborárska 52, 831 02 Bratislava, Nové Mesto</p>
                            <p>
                                <strong className="block text-[#1D1D1B]/65 text-sm uppercase tracking-widest mb-1">Telefón</strong>
                                <a href={PHONE_HREF} data-phone-location={`${k}_kde`} className="text-[#1D1D1B] font-bold hover:text-[#E31C25]">{PHONE_TEXT}</a>
                            </p>
                            <p><strong className="block text-[#1D1D1B]/65 text-sm uppercase tracking-widest mb-1">Otváracie hodiny</strong>{HOURS}</p>
                            {areas.length > 0 && (
                                <div>
                                    <strong className="block text-[#1D1D1B]/65 text-sm uppercase tracking-widest mb-2">Dojazd autom</strong>
                                    <ul className="space-y-1 text-[#1D1D1B]/75">
                                        {areas.map((a) => (
                                            <li key={a.slug}>
                                                {a.name}: {a.driveTime}{a.route ? `, ${a.route.charAt(0).toLowerCase()}${a.route.slice(1)}` : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="relative w-full min-h-[260px] rounded-sm overflow-hidden border border-black/10">
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
            <section className="px-4 sm:px-6 py-16 bg-[#F4F4F3]">
                <div className="max-w-3xl mx-auto">
                    <SectionHeading>Časté otázky</SectionHeading>
                    <div className="space-y-3">
                        {config.faq.map((f) => (
                            <div key={f.q} className="border border-black/10 rounded-sm bg-white px-5 py-4">
                                <h3 className="text-[#1D1D1B] font-bold text-base sm:text-lg leading-snug mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>{f.q}</h3>
                                <p className="text-[#1D1D1B]/75 text-base leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Closing CTA */}
            <section className="px-4 sm:px-6 py-16 bg-[#E31C25]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white uppercase text-2xl md:text-3xl font-black mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        {config.closingHeading}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <CtaButtons config={config} place="zaver" onRed />
                    </div>
                </div>
            </section>

            {/* Quote form (Autoservis): the site's contact form, at the end before the
                footer as on the homepage. */}
            {config.primaryCta === 'quote' && (
                <section id={QUOTE_ANCHOR} className="scroll-mt-4 px-4 sm:px-6 py-16 bg-white">
                    <div className="max-w-2xl mx-auto bg-[#F4F4F3] border border-black/10 rounded-sm p-6 sm:p-8">
                        <SectionHeading>Nezáväzná cenová ponuka</SectionHeading>
                        <p className="text-[#1D1D1B] font-semibold -mt-4 mb-6">Cenovú ponuku pošleme do 48 hodín.</p>
                        <ContactSection variant="light" formOnly quote />
                        <p className="text-center text-base mt-5">
                            <OnlineBookingLink placement={`${k}_formular`} className="text-[#1D1D1B] font-semibold underline hover:text-[#C0151D]">
                                Radšej si rezervujte termín online
                            </OnlineBookingLink>
                        </p>
                    </div>
                </section>
            )}

            {/* NAP plus small links to the homepage and the privacy page */}
            <footer className="px-4 sm:px-6 py-8 text-center text-sm text-[#1D1D1B]/70 space-y-2 bg-white">
                <p className="text-[#1D1D1B] font-semibold">Ludato Family Autoservis a Pneuservis</p>
                <p>Odborárska 52, 831 02 Bratislava</p>
                <p>
                    <a href={PHONE_HREF} data-phone-location={`${k}_paticka`} className="text-[#1D1D1B] hover:text-[#E31C25]">{PHONE_TEXT}</a>
                </p>
                <p>
                    <a href="/" className="underline hover:text-[#E31C25]">ludato.sk</a>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <a href="/ochrana-osobnych-udajov" className="underline hover:text-[#E31C25]">Ochrana osobných údajov</a>
                </p>
                <CookieSettingsButton className="underline hover:text-[#E31C25]" />
            </footer>
            {/* Mobile sticky bar: main action + second action */}
            <StickyBar config={config} />
        </main>
    );
}
