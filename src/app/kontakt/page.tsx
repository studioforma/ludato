import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
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
    title: 'Kontakt | Ludato Family Autoservis',
    description:
        'Kontaktujte Ludato Family Autoservis a Pneuservis - Odborárska 52, Bratislava - Nové Mesto. Telefón, email, otváracie hodiny a mapa.',
    alternates: { canonical: '/kontakt' },
};

export default function Kontakt() {
    return (
        <main className="relative overflow-x-hidden w-full bg-[#111111]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kontaktBreadcrumb) }} />
            <Navbar />
            <div className="pt-20">
                <ContactSection asPageHeading />
            </div>
            <Footer />
        </main>
    );
}
