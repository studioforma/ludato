'use client';

import { useState } from 'react';
import OnlineBookingLink from '@/components/OnlineBookingLink';
import { trackLeadThen } from '@/lib/analytics';
import { LEAD_SOURCES, LEAD_SOURCE_LABEL } from '@/lib/leadSource';

// Quote form for the Google Ads landing pages. Same fields, endpoint
// (/api/contact, formType 'quote'), GA4 generate_lead and /dakujeme redirect
// as the site's forms, only styled for the light LP. ContactSection stays
// untouched because the homepage and /kontakt use it.
export default function LpQuoteForm({ lpKey }: { lpKey: string }) {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', source: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    message: form.message,
                    source: form.source || undefined,
                    stranka: window.location.pathname,
                    subject: `Nová žiadosť o cenovú ponuku od ${form.name} – LUDATO Cars Services`,
                    formType: 'quote',
                }),
            });
            const result = await response.json();
            if (result.success) {
                trackLeadThen(lpKey, () => {
                    window.location.href = '/dakujeme';
                });
            } else {
                setError('Nastala chyba. Skúste to prosím znova.');
            }
        } catch {
            setError('Nastala chyba. Skúste to prosím znova.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const label = 'block text-[#1D1D1B]/75 text-sm tracking-wider uppercase mb-2 font-semibold';
    const input =
        'w-full bg-white border border-black/20 hover:border-[#E31C25]/50 focus:border-[#E31C25] focus:outline-none text-[#1D1D1B] placeholder-[#1D1D1B]/45 px-4 py-3 rounded-sm text-base transition-colors';
    const mont = { fontFamily: 'var(--font-montserrat)' };

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="lp-meno" className={label} style={mont}>Meno *</label>
                    <input id="lp-meno" type="text" name="name" required value={form.name} onChange={onChange} placeholder="Vaše meno" className={input} />
                </div>
                <div>
                    <label htmlFor="lp-telefon" className={label} style={mont}>Telefón</label>
                    <input id="lp-telefon" type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+421 9XX XXX XXX" className={input} />
                </div>
            </div>
            <div>
                <label htmlFor="lp-email" className={label} style={mont}>Email *</label>
                <input id="lp-email" type="email" name="email" required value={form.email} onChange={onChange} placeholder="vas@email.sk" className={input} />
            </div>
            <div>
                <label htmlFor="lp-sprava" className={label} style={mont}>Správa *</label>
                <textarea id="lp-sprava" name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Opíšte váš problém alebo otázku..." className={`${input} resize-none`} />
            </div>
            <div>
                <label htmlFor="lp-zdroj" className={label} style={mont}>
                    {LEAD_SOURCE_LABEL} <span className="normal-case tracking-normal font-normal">(nepovinné)</span>
                </label>
                <select id="lp-zdroj" name="source" value={form.source} onChange={onChange} className={input}>
                    <option value="">Vyberte možnosť</option>
                    {LEAD_SOURCES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>
            {error && <p className="text-[#C0151D] text-base" role="alert">{error}</p>}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E31C25] hover:bg-[#c0151d] disabled:opacity-60 text-white font-black py-4 min-h-[48px] rounded-sm tracking-wider uppercase text-base transition-colors"
                style={mont}
            >
                {isSubmitting ? 'Odosiela sa...' : 'Odoslať správu'}
            </button>
            <p className="text-[#1D1D1B]/65 text-sm text-center">* Povinné polia. Vaše údaje sú v bezpečí.</p>
            <p className="text-center text-base">
                <OnlineBookingLink placement={`${lpKey}_formular`} className="text-[#1D1D1B] font-semibold underline hover:text-[#C0151D]">
                    Radšej si rezervujte termín online
                </OnlineBookingLink>
            </p>
        </form>
    );
}
