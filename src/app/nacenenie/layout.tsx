import type { Metadata } from 'next';

// The page itself is a client component, so its metadata lives here.
export const metadata: Metadata = {
    title: 'Nezáväzná kalkulácia a rezervácia | Ludato Family Autoservis a Pneuservis',
    description:
        'Nezáväzná kalkulácia a rezervácia v autoservise Ludato Family v Bratislave, Novom Meste. Vyberte službu, opíšte problém a pošlite žiadosť o cenovú ponuku.',
    alternates: { canonical: '/nacenenie' },
};

export default function NacenenieLayout({ children }: { children: React.ReactNode }) {
    return children;
}
