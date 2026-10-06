import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AreaPage from '@/components/area/AreaPage';
import { getAreaContent } from '@/content/oblasti';
import { areas, getArea } from '@/lib/areas';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
    return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { slug } = await params;
    const meta = getArea(slug);
    if (!meta) return {};

    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: `/kde-posobime/${meta.slug}` },
    };
}

export default async function Page({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const meta = getArea(slug);
    const content = getAreaContent(slug);

    if (!meta || !content) notFound();

    return <AreaPage meta={meta} content={content} />;
}
