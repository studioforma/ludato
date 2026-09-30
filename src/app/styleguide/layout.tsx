import type { Metadata } from 'next';

// Internal design reference, not a page for search results.
export const metadata: Metadata = {
    title: 'Styleguide | Ludato Family Autoservis',
    robots: { index: false, follow: false },
};

export default function StyleguideLayout({ children }: { children: React.ReactNode }) {
    return children;
}
