type FaqItem = {
    q: string;
    a: string;
};

// Native <details> keeps every answer in the DOM, so the text counts as page
// content for search engines instead of living only in the FAQPage schema.
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
    return (
        <div className="space-y-3">
            {items.map((item) => (
                <details
                    key={item.q}
                    className="group border border-white/10 rounded-sm overflow-hidden bg-white/5"
                >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 hover:bg-white/8 transition-colors duration-200 [&::-webkit-details-marker]:hidden">
                        <span
                            className="text-white font-bold text-sm sm:text-base"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            {item.q}
                        </span>
                        <span className="faq-toggle text-[#E31C25] text-xl font-black flex-shrink-0">
                            +
                        </span>
                    </summary>
                    <div className="px-5 pb-4 pt-1">
                        <p
                            className="text-white/60 text-sm leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            {item.a}
                        </p>
                    </div>
                </details>
            ))}
        </div>
    );
}
