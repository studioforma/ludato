import type { Metadata } from 'next';
import LandingPage, { type LandingConfig } from '@/components/lp/LandingPage';
import { OWN_PARTS_SHORT } from '@/lib/ownParts';

// Google Ads landing page (ad group Autoservis Bratislava). Not indexed, not
// in the sitemap and not linked from the site, so it never competes with the
// SEO pages under /sluzby.
export const metadata: Metadata = {
    title: 'Autoservis Bratislava | Odborárska 52, Nové Mesto | Ludato Family Autoservis a Pneuservis',
    description: 'Rodinný autoservis na Odborárskej 52 v Bratislave, Novom Meste. Cenová ponuka do 48 hodín, ceny vopred, autá všetkých značiek.',
    robots: { index: false, follow: false },
};

const config: LandingConfig = {
    key: 'lp_autoservis',
    primaryCta: 'quote',
    h1: 'Autoservis Bratislava',
    heroText:
        'Rodinný autoservis na Odborárskej 52 v Novom Meste pre autá všetkých značiek. Pred každou opravou vám povieme, čo treba urobiť a koľko to bude stáť.',
    heroImage: { src: '/lp/ludato-podvozok-brzdy.jpg', alt: 'Ford na zdviháku v dielni Ludato počas opravy podvozku a bŕzd' },
    heroPoints: ['Cenová ponuka do 48 hodín', 'Diagnostika riadiacej jednotky za 40 €', 'Výmena oleja a olejového filtra od 35 €'],
    heroNote: 'Uvedené ceny sú bez DPH.',
    reasons: [
        {
            title: 'Ceny vopred',
            text: 'Auto skontrolujeme a povieme vám, čo treba urobiť a koľko to bude stáť. Bez vášho súhlasu nič nemeníme.',
        },
        {
            title: 'Najprv diagnostika',
            text: 'Keď na palubnej doske svieti kontrolka, začíname diagnostikou, nie skúšaním dielov naslepo.',
        },
        {
            title: 'Náhradné vozidlo',
            text: 'Pri dlhšej oprave za 35 € na deň, pri servise nad 1000 € zadarmo a pri poistnej udalosti ho hradí poisťovňa.',
        },
    ],
    priceIntro: 'Ceny z nášho cenníka. Pri väčších opravách vám cenu povieme vopred podľa vášho auta.',
    priceTables: [
        {
            heading: 'Normohodiny',
            rows: [
                { category: 'Normohodiny', service: 'Ľahká práca – jednoduché, rýchle úkony bez väčšej demontáže', label: 'Ľahká práca' },
                { category: 'Normohodiny', service: 'Stredná práca – vyžadujúca viac času alebo čiastočnú demontáž', label: 'Stredná práca' },
                { category: 'Normohodiny', service: 'Ťažká práca – náročné zásahy (rozvody, spojka, turbo, EGR, DPF, opravy motora, elektro, demontáž agregátov)', label: 'Ťažká práca (rozvody, spojka, turbo, motor)' },
            ],
        },
        {
            heading: 'Najčastejšie úkony',
            rows: [
                { category: 'Olejový servis', service: 'Výmena oleja + olejový filter' },
                { category: 'Kontroly vozidla', service: 'Diagnostika riadiacej jednotky' },
                { category: 'Brzdy', service: 'Kontrola bŕzd' },
                { category: 'Brzdy', service: 'Výmena predných kotúčov a platničiek' },
                { category: 'Geometria', service: 'Kontrola nastavenia geometrie' },
            ],
        },
    ],
    priceNotes: [OWN_PARTS_SHORT],
    steps: [
        { title: 'Zavoláte', text: 'Zavolajte alebo si rezervujte termín online. Opíšete, čo s autom potrebujete.' },
        { title: 'Cena vopred', text: 'Auto skontrolujeme a cenovú ponuku dostanete do 48 hodín. Bez vášho súhlasu nič nemeníme.' },
        { title: 'Auto hotové', text: 'Keď je auto pripravené, ozveme sa vám a vysvetlíme, čo sme robili.' },
    ],
    areas: ['raca', 'ruzinov', 'karlova-ves'],
    faq: [
        { q: 'Servisujete všetky značky?', a: 'Áno, autá všetkých značiek a modelov.' },
        { q: 'Musím sa objednať vopred?', a: 'Odporúčame to, najrýchlejšie je zavolať na 0944 236 257.' },
        { q: 'Máte náhradné auto?', a: 'Áno, za 35 € na deň, pri servise nad 1000 € zadarmo a pri poistnej udalosti ho hradí poisťovňa.' },
        {
            q: 'Vedeli by ste skontrolovať auto pred kúpou?',
            a: 'Áno, pred kúpou ojazdeného vozidla vieme preveriť jeho technický stav, aby ste vedeli, do čoho idete.',
        },
    ],
    closingHeading: 'Potrebujete opraviť auto?',
};

export default function AutoservisLandingPage() {
    return <LandingPage config={config} />;
}
