import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/service/ServicePage';
import { getServiceContent } from '@/content/sluzby';
import { getService, services } from '@/lib/services';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { slug } = await params;
    const meta = getService(slug);
    if (!meta) return {};

    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: `https://www.ludato.sk/sluzby/${meta.slug}` },
    };
}

export default async function Page({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const meta = getService(slug);
    const content = getServiceContent(slug);

    if (!meta || !content) notFound();

    return <ServicePage meta={meta} content={content} />;
}
