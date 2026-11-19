import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Heading } from '@/components/service/ServicePage';
import { areas } from '@/lib/areas';
import { services } from '@/lib/services';
import { SITE, BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';

const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontakt',
    url: `${SITE}/kontakt`,
    about: { '@id': BUSINESS_ID },
};

const kontaktBreadcrumb = breadcrumbSchema([
    { name: 'Domov', path: '/' },
    { name: 'Kontakt', path: '/kontakt' },
]);

export const metadata: Metadata = {
    title: 'Kontakt autoservis Bratislava – Nové Mesto | Odborárska 52, telefón 0944 236 257, otváracie hodiny a mapa | Ludato Family Autoservis a Pneuservis',
    description:
        'Kontaktujte Ludato Family Autoservis a Pneuservis, Odborárska 52, Bratislava, Nové Mesto. Telefón, email, otváracie hodiny a mapa.',
    alternates: { canonical: '/kontakt' },
};

// /kontakt links every service and every area page (Samuel's rule).
const chip =
    'text-white/70 hover:text-white text-sm border border-white/10 hover:border-[#E31C25]/50 rounded-sm px-4 py-2 transition-colors duration-300';

export default function Kontakt() {
    return (
        <main className="relative overflow-x-hidden w-full bg-[#111111]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kontaktBreadcrumb) }} />
            <Navbar />
            <div className="pt-20">
                <ContactSection asPageHeading />
            </div>
            <section className="bg-[#111111] pb-24 lg:pb-32">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <Heading>Kde pôsobíme</Heading>
                        <div className="flex flex-wrap gap-2" style={{ fontFamily: 'var(--font-inter)' }}>
                            {areas.map((a) => (
                                <Link key={a.slug} href={`/kde-posobime/${a.slug}`} className={chip}>
                                    {a.name}
                                </Link>
                            ))}
                            <Link href="/kde-posobime" className={chip}>
                                Prehľad mestských častí →
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Heading>Naše služby</Heading>
                        <div className="flex flex-wrap gap-2" style={{ fontFamily: 'var(--font-inter)' }}>
                            {services.map((s) => (
                                <Link key={s.slug} href={`/sluzby/${s.slug}`} className={chip}>
                                    {s.name}
                                </Link>
                            ))}
                            <Link href="/sluzby" className={chip}>
                                Prehľad služieb →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
