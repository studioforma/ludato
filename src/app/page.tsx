import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ComfortSection from '@/components/ComfortSection';
import MoreServicesSection from '@/components/MoreServicesSection';
import CtaBanner from '@/components/CtaBanner';
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
