import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ComfortSection from '@/components/ComfortSection';
import MoreServicesSection from '@/components/MoreServicesSection';
import CtaBanner from '@/components/CtaBanner';
import InlineCta from '@/components/InlineCta';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import StudioFormaAd from '@/components/StudioFormaAd';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

// Google Ads clicks land on /?gclid=..., so the homepage needs an explicit
// canonical or every tracking variant looks like a duplicate.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden w-full">
      <Navbar />
      <HeroSection />
      {/* Red CTA right under the hero, on the hero's dark background */}
      <section className="bg-gradient-to-r from-[#111111] to-[#0a0a0a] px-4 sm:px-6 lg:px-8 pb-6 lg:pb-10">
        <div className="max-w-5xl mx-auto">
          <InlineCta
            heading="Potrebujete servis alebo prezutie?"
            text="Nečakajte, kým sa z malej závady stane drahá oprava a kým prvý sneh zaplní všetky termíny. Zavolajte a dohodneme sa."
            points={[
              'Diagnostika riadiacej jednotky za 40 €',
              'Výmena oleja a olejového filtra od 35 €',
              'Kompletné prezutie od 45 € vrátane vyváženia',
            ]}
            secondaryHref="/nacenenie"
            secondaryLabel="Objednať sa"
          />
        </div>
      </section>
      <ServicesSection />
      <CtaBanner
        question="Počuli ste zvláštny zvuk spod auta?"
        subtext="Nečakajte, kým sa z malej závady stane veľká. Zistíme presne, čo sa deje."
        secondaryHref="/nacenenie"
        secondaryLabel="Objednať sa"
      />
      <ReviewsSection />
      <AboutSection />
      <ComfortSection />
      <MoreServicesSection />
      <CtaBanner
        question="Blíži sa vám STK?"
        subtext="Pripravíme vaše auto tak, aby prešlo na prvýkrát, bez zbytočného stresu."
        secondaryHref="/cennik"
        secondaryLabel="Pozrieť cenník"
        variant="red"
      />
      <ContactSection />
      <StudioFormaAd />
      <Footer />
    </main>
  );
}
