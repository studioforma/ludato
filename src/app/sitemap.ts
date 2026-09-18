import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.ludato.sk';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        { path: '/', priority: 1, changeFrequency: 'weekly' as const },
        { path: '/sluzby', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/sluzby/pneuservis', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/cennik', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/kde-posobime', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/kontakt', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/nacenenie', priority: 0.7, changeFrequency: 'monthly' as const },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
