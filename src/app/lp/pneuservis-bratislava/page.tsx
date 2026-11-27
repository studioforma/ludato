import type { Metadata } from 'next';
import LandingPage, { type LandingConfig } from '@/components/lp/LandingPage';
import { withVat } from '@/lib/pricing';

// Google Ads landing page (ad group Pneuservis: defekt, vyváženie, pneuservis).
// Prezutie has its own page, /lp/prezutie-pneumatik-bratislava. Not indexed,
// not in the sitemap and not linked from the site, so it never competes with
// /sluzby/pneuservis-bratislava. Facts and prices only from that service page
// and pricing.ts: oprava defektu has no fixed price (individuálne nacenenie),
// vyváženie has no separate price (it is part of prezutie and preváženie).
export const metadata: Metadata = {
    title: 'Pneuservis Bratislava | Oprava defektu, vyváženie kolies, prezutie od 45 € | Ludato Family Autoservis a Pneuservis',
    description:
        'Pneuservis v Bratislave, Novom Meste: oprava defektu, vyváženie a preváženie kolies od 40 €, kompletné prezutie od 45 €, uskladnenie pneumatík. Ceny bez DPH.',
    robots: { index: false, follow: false },
};

const config: LandingConfig = {
    key: 'lp_pneuservis',
    primaryCta: 'call',
    h1: 'Pneuservis Bratislava',
    heroText:
        'Oprava defektu, vyváženie a prehodenie kolies, prezutie aj uskladnenie pneumatík na Odborárskej 52 v Novom Meste.',
    heroImage: { src: '/lp/ludato-pneuservis-prezutie.jpg', alt: 'Subaru na zdviháku a mechanik pri prezúvačke pneumatík v dielni Ludato' },
    heroPoints: [
        'Oprava defektu, ak to stav pneumatiky dovoľuje. Cenu povieme po obhliadke.',
        `Vyváženie kolies na presnom stroji, preváženie kolies na diskoch od 40 € (s DPH od ${withVat('40')} €)`,
        `Kompletné prezutie od 45 € vrátane vyváženia (s DPH od ${withVat('45')} €)`,
    ],
    heroNote: 'Uvedené ceny sú bez DPH. Pneumatiky Run Flat neprezúvame.',
    reasons: [
        {
            title: 'Defekt posúdime férovo',
            text: 'Defekt vieme opraviť, ak je poškodenie v bežnej dráhe pneumatiky. Ak sa opraviť nedá, napríklad pri poškodenej bočnici, povieme vám to rovno.',
        },
        {
            title: 'Presné vyváženie',
            text: 'Každé koleso vyvažujeme na presnom stroji, aby pri jazde nevibroval volant a zbytočne sa nezaťažovali ložiská a tlmiče.',
        },
        {
            title: 'Pozrieme aj podvozok',
            text: 'Keďže robíme aj mechanické opravy, vieme odhaliť aj opotrebované tlmiče, netesniace poloosové manžety alebo nesprávnu geometriu.',
        },
    ],
    priceIntro: 'Ceny z nášho cenníka. Opravu defektu naceníme podľa stavu pneumatiky.',
    priceTables: [
        {
            heading: 'Oprava a uskladnenie pneumatík',
            rows: [
                { category: 'Uskladnenie a oprava pneumatík', service: 'Oprava defektu' },
                { category: 'Uskladnenie a oprava pneumatík', service: 'Sezónne uskladnenie pneumatík' },
            ],
            footnotes: ['* Oprava defektu – individuálne nacenenie podľa stavu pneumatiky'],
        },
        {
            heading: 'Kolesá na diskoch (preváženie a prehodenie)',
            rows: [
                { category: 'Preváženie a prehodenie kolies na disku', service: '12" – 14"', label: '12" až 14"' },
                { category: 'Preváženie a prehodenie kolies na disku', service: '15" – 17"', label: '15" až 17"' },
                { category: 'Preváženie a prehodenie kolies na disku', service: '18" – 21"', label: '18" až 21"' },
            ],
        },
        {
            heading: 'Kompletné prezutie',
            rows: [
                { category: 'Kompletné prezutie', service: '12" – 14"', label: '12" až 14"' },
                { category: 'Kompletné prezutie', service: '15" – 16"', label: '15" až 16"' },
                { category: 'Kompletné prezutie', service: '17" – 18"', label: '17" až 18"' },
                { category: 'Kompletné prezutie', service: '19" – 20"', label: '19" až 20"' },
            ],
            footnotes: ['* Pneumatiky Run Flat neprezúvame. Disky 21" už neprezúvame.'],
        },
    ],
    priceNotes: ['Nové pneumatiky Pirelli, Michelin, Nexen a Matador vám dodáme na objednávku.'],
    steps: [
        { title: 'Zavoláte', text: 'Zavolajte alebo si rezervujte termín online. Povedzte nám, či ide o defekt, vyváženie alebo prezutie.' },
        { title: 'Pozrieme sa', text: 'Skontrolujeme pneumatiky, dezén aj tlak a pri defekte vám povieme, či sa dá opraviť a koľko to bude stáť.' },
        { title: 'Hotovo', text: 'Opravené alebo vyvážené kolesá vám dotiahneme na predpísaný uťahovací moment.' },
    ],
    reviews: ['sabina-d', 'robert-p', 'ivana-s', 'pavol-d'],
    areas: ['raca', 'ruzinov', 'karlova-ves'],
    faq: [
        {
            q: 'Opravíte defekt na pneumatike?',
            a: 'Áno, ak to stav a poškodenie pneumatiky dovoľuje. Presnú cenu vieme povedať až po obhliadke.',
        },
        {
            q: 'Dá sa opraviť pneumatika s poškodenou bočnicou?',
            a: 'Poškodenie bočnice sa spravidla opraviť nedá, v takom prípade je potrebná výmena pneumatiky.',
        },
        {
            q: 'Vyvažujete kolesá pri každom prezutí?',
            a: 'Áno, každé koleso vyvážime na presnom stroji priamo v rámci prezutia, aby pri jazde nevibroval volant.',
        },
        { q: 'Prezúvate aj Run Flat pneumatiky?', a: 'Nie, pneumatiky Run Flat neprezúvame.' },
    ],
    closingHeading: 'Defekt alebo vibruje volant?',
};

export default function PneuservisLandingPage() {
    return <LandingPage config={config} />;
}
