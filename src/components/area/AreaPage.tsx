import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import Breadcrumbs from '@/components/service/Breadcrumbs';
import RichText from '@/components/service/RichText';
import { Heading, SectionBlock } from '@/components/service/ServicePage';
import { stripLinks } from '@/lib/richText';
import { areas, type AreaMeta } from '@/lib/areas';
import { getService, type ServiceMeta } from '@/lib/services';
import type { ServiceContent } from '@/content/sluzby/types';

const SITE = 'https://www.ludato.sk';

// Area pages reuse the service page sections (text, lists, CTA, FAQ), so they
// look the same and the CTA keeps the call tracking phone format.
export default function AreaPage({ meta, content }: { meta: AreaMeta; content: ServiceContent }) {
    const url = `${SITE}/kde-posobime/${meta.slug}`;
    const intro = content.find((s) => s.type === 'intro');
    const faq = content.find((s) => s.type === 'faq');
    const services = meta.services.map((s) => getService(s)).filter((s): s is ServiceMeta => s !== undefined);
    const otherAreas = areas.filter((a) => a.slug !== meta.slug);
    const [beforeAccent, afterAccent] = meta.h1.split(meta.h1Accent);

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#sluzba`,
        serviceType: 'Autoservis a pneuservis',
        name: `Autoservis a pneuservis pre ${meta.nameAcc}`,
        description: meta.description,
        provider: { '@id': `${SITE}/#autoservis` },
        areaServed: { '@type': 'Place', name: `Bratislava - ${meta.name}` },
        url,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Domov', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Kde pôsobíme', item: `${SITE}/kde-posobime` },
            { '@type': 'ListItem', position: 3, name: meta.name, item: url },
        ],
    };

    const faqSchema =
        faq && faq.type === 'faq'
            ? {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: faq.items.map((item) => ({
                      '@type': 'Question',
                      name: item.q,
                      acceptedAnswer: { '@type': 'Answer', text: stripLinks(item.a) },
                  })),
              }
            : null;

    return (
        <main className="relative overflow-x-hidden w-full bg-[#111111]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {faqSchema && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            )}

            <Navbar />

            <div className="pt-32 lg:pt-40 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
                        items={[
                            { label: 'Domov', href: '/' },
                            { label: 'Kde pôsobíme', href: '/kde-posobime' },
                            { label: meta.name },
                        ]}
                    />

                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">//</span> Kde pôsobíme
                        </p>
                        <h1
                            className="text-4xl md:text-5xl font-black text-white mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            {beforeAccent}
                            <span className="text-[#E31C25]">{meta.h1Accent}</span>
                            {afterAccent}
                        </h1>
                        {intro && intro.type === 'intro' && (
                            <div
                                className="text-white/60 text-base leading-relaxed space-y-4"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                {intro.paragraphs.map((p, i) => (
                                    <p key={i}>
                                        <RichText text={p} />
                                    </p>
                                ))}
                            </div>
                        )}
                        <div
                            className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-white/75"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <span className="border border-white/15 rounded-sm px-3 py-1.5">📍 Odborárska 52, Nové Mesto</span>
                            <span className="border border-white/15 rounded-sm px-3 py-1.5">🚗 {meta.driveTime}</span>
                            <span className="border border-white/15 rounded-sm px-3 py-1.5">🛣️ {meta.route}</span>
                        </div>
                    </div>

                    {content.map((section, i) => (
                        <SectionBlock key={i} section={section} />
                    ))}

                    <div className="mb-10 max-w-3xl mx-auto">
                        <Heading>Služby, ktoré tu riešime najčastejšie</Heading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {services.map((s) => (
                                <Link
                                    key={s.slug}
                                    href={`/sluzby/${s.slug}`}
                                    className="group flex flex-col gap-1 py-4 px-5 rounded-sm border border-white/10 bg-white/3 hover:border-[#E31C25]/50 hover:bg-white/5 transition-colors duration-300"
                                >
                                    <span
                                        className="text-white group-hover:text-[#E31C25] text-sm font-bold transition-colors duration-300"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {s.name} →
                                    </span>
                                    <span className="text-white/55 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                                        {s.teaser}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4 max-w-3xl mx-auto">
                        <Heading>Ďalšie mestské časti</Heading>
                        <div className="flex flex-wrap gap-2">
                            {otherAreas.map((a) => (
                                <Link
                                    key={a.slug}
                                    href={`/kde-posobime/${a.slug}`}
                                    className="text-white/70 hover:text-white text-sm border border-white/10 hover:border-[#E31C25]/50 rounded-sm px-4 py-2 transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    {a.name}
                                </Link>
                            ))}
                            <Link
                                href="/kde-posobime"
                                className="text-[#E31C25] hover:text-white text-sm px-4 py-2 transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                Všetky oblasti →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <CtaBanner
                question={meta.cta.question}
                subtext={meta.cta.subtext}
                secondaryHref="/nacenenie"
                secondaryLabel="Objednať sa"
            />

            <Footer />
        </main>
    );
}
