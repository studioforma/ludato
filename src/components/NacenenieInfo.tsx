import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';
import { OWN_PARTS_POLICY, OWN_PARTS_QUESTION } from '@/lib/ownParts';

// Server-rendered text under the /nacenenie form. The form itself is a client
// component with almost no text, so the page looked thin to search engines.
// Every fact here already appears elsewhere on the site (cenník, kontakt,
// ownParts), nothing new is promised.
const faq = [
    {
        q: 'Je nacenenie záväzné?',
        a: 'Nie. Žiadosť o nacenenie je nezáväzná. Podľa vybraných služieb a údajov o aute vám pripravíme cenu a až potom sa rozhodnete, či sa objednáte.',
    },
    {
        q: 'Kedy sa mi ozvete?',
        a: 'Ozveme sa vám do 48 hodín, rovnako ako pri správe z kontaktného formulára. Ak to súrne potrebujete, zavolajte na 0944 236 257.',
    },
    {
        q: 'Prečo chcete auto a EČV?',
        a: 'Cena dielov aj práce závisí od konkrétneho auta a motora. Podľa typu auta a EČV vieme vybrať správne diely a nacenenie je presnejšie.',
    },
    {
        q: 'Sú ceny na webe s DPH?',
        a: 'Ceny v cenníku sú uvedené bez DPH a pri každej cene nájdete aj sumu s DPH 23 %.',
    },
    {
        q: 'Čo ak auto nie je pojazdné?',
        a: 'Auto vieme vyzdvihnúť v rámci Bratislavy a okolia za 50 €, nepojazdné auto odtiahneme za 170 € (ceny bez DPH). Vo formulári stačí vybrať Pickup / odťah vozidla.',
    },
    { q: OWN_PARTS_QUESTION, a: OWN_PARTS_POLICY },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
};

const link = 'text-white underline decoration-[#E31C25]/60 underline-offset-4 hover:text-[#E31C25] transition-colors';

export default function NacenenieInfo() {
    return (
        <section className="bg-[#111111] px-4 sm:px-6 lg:px-8 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="max-w-3xl mx-auto space-y-12" style={{ fontFamily: 'var(--font-inter)' }}>
                <div>
                    <h2
                        className="text-2xl font-black text-white mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="text-[#E31C25]">//</span> Ako nacenenie funguje
                    </h2>
                    <ol className="space-y-3 text-white/70 text-sm leading-relaxed list-decimal pl-5">
                        <li>Vyberiete jednu alebo viac služieb, prípadne opíšete problém vlastnými slovami.</li>
                        <li>Doplníte auto, EČV a kontakt, aby sme vedeli vybrať správne diely.</li>
                        <li>Pripravíme vám cenu a ozveme sa do 48 hodín. Termín si potom dohodneme podľa vás.</li>
                    </ol>
                </div>

                <div>
                    <h2
                        className="text-2xl font-black text-white mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="text-[#E31C25]">//</span> Orientačné ceny
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed">
                        Pri bežných úkonoch poznáte cenu vopred aj bez nacenenia:{' '}
                        <Link href="/sluzby/pocitacova-diagnostika-bratislava" className={link}>
                            diagnostika riadiacej jednotky
                        </Link>{' '}
                        stojí 40 €,{' '}
                        <Link href="/sluzby/vymena-oleja-bratislava" className={link}>
                            výmena oleja a olejového filtra
                        </Link>{' '}
                        od 35 € a{' '}
                        <Link href="/sluzby/pneuservis-bratislava" className={link}>
                            kompletné prezutie
                        </Link>{' '}
                        od 45 € vrátane vyváženia. Všetky ceny bez DPH nájdete v{' '}
                        <Link href="/cennik" className={link}>
                            cenníku
                        </Link>
                        . Nacenenie sa oplatí hlavne pri opravách, kde cena závisí od dielov pre konkrétne auto, ako
                        sú brzdy, rozvody alebo spojka.
                    </p>
                </div>

                <div>
                    <h2
                        className="text-2xl font-black text-white mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="text-[#E31C25]">//</span> Časté otázky
                    </h2>
                    <FaqAccordion items={faq} />
                </div>
            </div>
        </section>
    );
}
