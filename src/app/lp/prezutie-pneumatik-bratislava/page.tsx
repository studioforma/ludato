import type { Metadata } from 'next';
import LandingPage, { type LandingConfig } from '@/components/lp/LandingPage';
import { withVat } from '@/lib/pricing';

// Google Ads landing page (ad group Prezutie). Not indexed, not in the
// sitemap and not linked from the site, so it never competes with
// /sluzby/pneuservis-bratislava.
export const metadata: Metadata = {
    title: 'Prezutie pneumatík Bratislava | Od 45 € vrátane vyváženia | Ludato Family Autoservis a Pneuservis',
    description:
        'Prezutie pneumatík v Bratislave, Novom Meste: kompletné prezutie od 45 €, kolesá na diskoch od 40 €, uskladnenie 40 € na sezónu. Ceny bez DPH.',
    robots: { index: false, follow: false },
};

const config: LandingConfig = {
    key: 'lp_prezutie',
    h1: 'Prezutie pneumatík Bratislava',
    heroText: 'Prezutie a vyváženie kolies na Odborárskej 52 v Novom Meste.',
    heroPoints: [
        `Kompletné prezutie od 45 € vrátane vyváženia (s DPH od ${withVat('45')} €)`,
        `Kolesá na diskoch: preváženie a prehodenie od 40 € (s DPH od ${withVat('40')} €)`,
        `Uskladnenie pneumatík 40 € na sezónu (s DPH ${withVat('40')} €)`,
    ],
    heroNote: 'Uvedené ceny sú bez DPH. Pneumatiky Run Flat neprezúvame.',
    reasons: [
        {
            title: 'Vyváženie v cene',
            text: 'Každé koleso vyvážime na presnom stroji priamo v rámci prezutia, aby pri jazde nevibroval volant.',
        },
        {
            title: 'Pozrieme aj podvozok',
            text: 'Pri prezutí vieme odhaliť aj opotrebované tlmiče, netesniace poloosové manžety alebo nesprávnu geometriu.',
        },
        {
            title: 'Uskladnenie u nás',
            text: 'Druhú sadu vám uskladníme za 40 € na sezónu a pri ďalšom prezutí ju budete mať pripravenú.',
        },
    ],
    priceIntro: 'Ceny z nášho cenníka podľa veľkosti diskov.',
    priceTables: [
        {
            heading: 'Kompletné prezutie',
            rows: [
                { category: 'Kompletné prezutie', service: '12" – 14"', label: '12" až 14"' },
                { category: 'Kompletné prezutie', service: '15" – 17"', label: '15" až 17"' },
                { category: 'Kompletné prezutie', service: '18" – 21"', label: '18" až 21"' },
            ],
            footnotes: ['* Pneumatiky Run Flat neprezúvame.'],
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
            heading: 'Uskladnenie',
            rows: [{ category: 'Uskladnenie a oprava pneumatík', service: 'Sezónne uskladnenie pneumatík' }],
        },
    ],
    priceNotes: ['Nové pneumatiky Pirelli, Michelin, Nexen a Matador vám dodáme na objednávku.'],
    steps: [
        { title: 'Zavoláte', text: 'Zavolajte alebo si rezervujte termín online. Pri rezervácii uveďte rozmer kolies.' },
        { title: 'Prídete', text: 'Prídete s autom a druhou sadou kolies, alebo ju máte uskladnenú u nás.' },
        { title: 'Prezuté', text: 'Bežné prezutie zvládneme v rámci jednej návštevy, presný čas závisí od vyťaženosti servisu.' },
    ],
    faq: [
        {
            q: 'Musím sa objednať vopred na prezutie?',
            a: 'Odporúčame objednať sa vopred, keďže v hlavnej sezóne (jar, jeseň) je o prezutie vysoký záujem a termíny sa rýchlo zapĺňajú. Najistejšie je zavolať vopred na 0944 236 257.',
        },
        {
            q: 'Vyvažujete kolesá pri každom prezutí?',
            a: 'Áno, každé koleso vyvážime na presnom stroji priamo v rámci prezutia, aby pri jazde nevibroval volant.',
        },
        { q: 'Ponúkate aj uskladnenie pneumatík?', a: 'Áno, sezónne uskladnenie pneumatík stojí 40 € za sezónu.' },
        { q: 'Prezúvate aj Run Flat pneumatiky?', a: 'Nie, pneumatiky Run Flat neprezúvame.' },
    ],
    closingHeading: 'Čas na prezutie?',
};

export default function PrezutieLandingPage() {
    return <LandingPage config={config} />;
}
