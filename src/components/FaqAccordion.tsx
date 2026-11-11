type FaqItem = {
    q: string;
    a: string;
};

// FAQ shown fully expanded as normal page text (question as h3, answer below).
// Collapsed <details> hid the answers from visitors and from AI answer engines
// that weigh visible text; the FAQPage schema on each page stays as it was.
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
    return (
        <div className="space-y-3">
            {items.map((item) => (
                <div key={item.q} className="border border-white/10 rounded-sm bg-white/5 px-5 py-4">
                    <h3
                        className="text-white font-bold text-sm sm:text-base mb-2"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        {item.q}
                    </h3>
                    <p
                        className="text-white/65 text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        {item.a}
                    </p>
                </div>
            ))}
        </div>
    );
}
