import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Kontakt | Ludato Family Autoservis',
    description:
        'Kontaktujte Ludato Family Autoservis - Odborárska 52, Bratislava - Nové Mesto. Telefón, email, otváracie hodiny a mapa.',
};

export default function Kontakt() {
    return (
        <main className="relative overflow-x-hidden w-full bg-[#111111]">
            <Navbar />
            <div className="pt-20">
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
