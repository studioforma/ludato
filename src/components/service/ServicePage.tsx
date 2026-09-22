import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumbs from '@/components/service/Breadcrumbs';
import RichText from '@/components/service/RichText';
import { formatPrice, getCategory, type PricingCategory } from '@/lib/pricing';
import { stripLinks } from '@/lib/richText';
import { getRelated, type ServiceMeta } from '@/lib/services';
import type { Section, ServiceContent } from '@/content/sluzby/types';

const SITE = 'https://www.ludato.sk';

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h2
            className="text-2xl font-black text-white mb-6 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
        >
            <span className="text-[#E31C25]">//</span> {children}
        </h2>
    );
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
    return (
        <div
            className="text-white/70 text-base leading-relaxed space-y-4"
            style={{ fontFamily: 'var(--font-inter)' }}
        >
            {paragraphs.map((p, i) => (
                <p key={i}>
                    <RichText text={p} />
                </p>
            ))}
        </div>
    );
}

function SectionBlock({ section }: { section: Section }) {
    switch (section.type) {
        case 'intro':
            return null;

        case 'text':
            return (
                <div className="mb-14 max-w-3xl mx-auto">
                    <Heading>{section.heading}</Heading>
                    <Paragraphs paragraphs={section.paragraphs} />
                </div>
            );

        case 'list':
            return (
                <div className="mb-14">
                    <Heading>{section.heading}</Heading>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {section.items.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-3 text-white/70 text-base leading-relaxed"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                <span className="text-[#E31C25] mt-1 flex-shrink-0">//</span>
                                <span>
                                    <RichText text={item} />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            );

        case 'breakdown':
            return (
                <div className="mb-14">
                    <Heading>{section.heading}</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        {section.items.map((item) => (
                            <div key={item.title}>
                                <h3
                                    className="text-lg font-black text-white mb-2"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-white/70 text-base leading-relaxed"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                    <RichText text={item.text} />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'steps':
            return (
                <div className="mb-14 max-w-3xl mx-auto">
                    <Heading>{section.heading}</Heading>
                    <ol className="space-y-5">
                        {section.steps.map((step, i) => (
                            <li key={step.title} className="flex gap-4">
                                <span
                                    className="text-[#E31C25] font-black text-lg flex-shrink-0 w-7"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3
                                        className="text-base font-black text-white mb-1"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className="text-white/70 text-base leading-relaxed"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        <RichText text={step.text} />
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            );

        case 'caseStudy':
            return (
                <div className="mb-14 max-w-3xl mx-auto">
                    <Heading>{section.heading}</Heading>
                    <div className="border border-[#E31C25]/30 bg-[#E31C25]/5 rounded-sm p-6 sm:p-8">
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.3em] uppercase font-bold mb-4"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            {section.vehicle}
                        </p>
                        <Paragraphs paragraphs={section.paragraphs} />
                        {section.outcomes && (
                            <ul className="mt-5 space-y-2">
                                {section.outcomes.map((o) => (
                                    <li
                                        key={o}
                                        className="flex items-start gap-3 text-white/80 text-sm leading-relaxed"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        <span className="text-[#E31C25] mt-0.5 flex-shrink-0">✓</span>
                                        {o}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            );

        case 'prices': {
            const categories = section.categories
                .map((name) => getCategory(name))
                .filter((c): c is PricingCategory => c !== undefined);

            return (
                <div className="mb-14">
                    <Heading>{section.heading}</Heading>
                    <div className="space-y-8">
                        {categories.map((cat) => (
                            <div key={cat.category}>
                                <p
                                    className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold mb-3"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {cat.category}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {cat.items.map((item) => (
                                        <div
                                            key={item.service}
                                            className="flex items-center justify-between gap-4 py-3 px-5 rounded-sm border border-white/8 bg-white/3"
                                        >
                                            <span
                                                className="text-white/80 text-sm font-semibold"
                                                style={{ fontFamily: 'var(--font-montserrat)' }}
                                            >
                                                {item.service}
                                            </span>
                                            <span
                                                className="text-white font-black text-base flex-shrink-0"
                                                style={{ fontFamily: 'var(--font-montserrat)' }}
                                            >
                                                {formatPrice(item)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                {cat.footnote && (
                                    <p
                                        className="text-white/30 text-xs mt-2"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        {cat.footnote}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <p
                        className="text-white/40 text-xs mt-6"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Kompletný cenník všetkých služieb nájdete na{' '}
                        <Link
                            href="/cennik"
                            className="text-[#E31C25] hover:text-white transition-colors underline"
                        >
                            stránke cenníka
                        </Link>
                        .
                    </p>
                </div>
            );
        }

        case 'faq':
            return (
                <div className="mb-14 max-w-3xl mx-auto">
                    <Heading>{section.heading}</Heading>
                    <FaqAccordion items={section.items} />
                </div>
            );
    }
}

export default function ServicePage({
    meta,
    content,
}: {
    meta: ServiceMeta;
    content: ServiceContent;
}) {
    const intro = content.find((s) => s.type === 'intro');
    const faq = content.find((s) => s.type === 'faq');
    const related = getRelated(meta);
    const url = `${SITE}/sluzby/${meta.slug}`;

    const [beforeAccent, afterAccent] = meta.h1.split(meta.h1Accent);

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: meta.name,
        name: `${meta.name} Ludato Family Autoservis`,
        description: meta.description,
        provider: {
            '@type': 'AutoRepair',
            name: 'Ludato Family Autoservis',
            url: `${SITE}/`,
        },
        areaServed: 'Bratislava',
        url,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Domov', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Služby', item: `${SITE}/sluzby` },
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <Navbar />

            <div className="pt-32 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
                        items={[
                            { label: 'Domov', href: '/' },
                            { label: 'Služby', href: '/sluzby' },
                            { label: meta.name },
                        ]}
                    />

                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <p
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">//</span> Služby
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
                    </div>

                    {content.map((section, i) => (
                        <SectionBlock key={i} section={section} />
                    ))}

                    <div className="mb-4 max-w-3xl mx-auto">
                        <Heading>Súvisiace služby</Heading>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/sluzby/${r.slug}`}
                                    className="text-[#E31C25] hover:text-white text-sm font-bold tracking-widest uppercase transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {r.name} →
                                </Link>
                            ))}
                            <Link
                                href="/sluzby"
                                className="text-[#E31C25] hover:text-white text-sm font-bold tracking-widest uppercase transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                Všetky služby →
                            </Link>
                            <Link
                                href="/cennik"
                                className="text-[#E31C25] hover:text-white text-sm font-bold tracking-widest uppercase transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                Cenník →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <CtaBanner
                question={meta.cta.question}
                subtext={meta.cta.subtext}
                secondaryHref={meta.cta.secondaryHref}
                secondaryLabel={meta.cta.secondaryLabel}
            />

            <Footer />
        </main>
    );
}
