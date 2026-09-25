import Link from 'next/link';

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
    return (
        <nav
            aria-label="Omrvinková navigácia"
            className="text-xs text-white/40 mb-8"
            style={{ fontFamily: 'var(--font-inter)' }}
        >
            <ol className="flex flex-wrap items-center gap-2">
                {items.map((item, i) => (
                    <li key={item.label} className="flex items-center gap-2">
                        {i > 0 && <span className="text-white/20">/</span>}
                        {item.href ? (
                            <Link href={item.href} className="hover:text-[#E31C25] transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-white/60">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
