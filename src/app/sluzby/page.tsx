import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Všetky služby | Ludato Family Autoservis',
    description:
        'Kompletný prehľad služieb autoservisu Ludato Family: diagnostika, servisné prehliadky, brzdy, podvozok, klimatizácia, pneuservis a výmena kolies.',
};

export default function Sluzby() {
    return (
        <main className="relative overflow-x-hidden w-full">
            <Navbar />
            <div className="pt-20">
                <ServicesSection hideCta />
            </div>
            <Footer />
        </main>
    );
}
