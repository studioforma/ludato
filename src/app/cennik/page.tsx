import type { Metadata } from 'next';
import CennikPage from '@/components/CennikPage';
import { pricingCategories } from '@/lib/pricing';
import { SITE, BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
    title: 'Cenník | LUDATO FAMILY Cars Services',
    description:
        'Cenník autoservisných služieb LUDATO FAMILY. Výmena oleja, diagnostika, brzdy, pneumatiky, klimatizácia a ďalšie. Normohodina od 32 €.',
    alternates: { canonical: '/cennik' },
};

const cennikBreadcrumb = breadcrumbSchema([
    { name: 'Domov', path: '/' },
    { name: 'Cenník', path: '/cennik' },
]);

// The whole cennik, one sub-catalog per category. Rows without a number
// ("Na dopyt", "Zadarmo") are left out, Google wants a numeric price.
const cennikSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Cenník Ludato Family Autoservis a Pneuservis',
    url: `${SITE}/cennik`,
    provider: { '@id': BUSINESS_ID },
    itemListElement: pricingCategories
        .filter((cat) => cat.items.some((item) => item.price !== null))
        .map((cat) => ({
        '@type': 'OfferCatalog',
        name: cat.category.charAt(0) + cat.category.slice(1).toLowerCase(),
        itemListElement: cat.items
            .filter((item) => item.price !== null)
            .map((item) => ({
                '@type': 'Offer',
                name: /^\d/.test(item.service)
                    ? `${cat.category.charAt(0)}${cat.category.slice(1).toLowerCase()} ${item.service}`
                    : item.service,
                priceCurrency: 'EUR',
                priceSpecification: {
                    '@type': item.unit ? 'UnitPriceSpecification' : 'PriceSpecification',
                    priceCurrency: 'EUR',
                    valueAddedTaxIncluded: false,
                    ...(item.prefix ? { minPrice: Number(item.price) } : { price: Number(item.price) }),
                    ...(item.unit ? { unitText: item.unit.replace('/', '') } : {}),
                },
            })),
    })),
};

export default function Cennik() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cennikBreadcrumb) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cennikSchema) }} />
            <CennikPage />
        </>
    );
}
