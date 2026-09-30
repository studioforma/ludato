import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/service/Breadcrumbs';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export const metadata: Metadata = {
    title: 'Ochrana osobných údajov a cookies | Ludato Family Autoservis a Pneuservis',
    description:
        'Ako Ludato Family s. r. o. spracúva osobné údaje z formulárov a aké súbory cookies používa web ludato.sk, vrátane Google Analytics a Google Ads.',
    alternates: { canonical: '/ochrana-osobnych-udajov' },
};

const cookies = [
    {
        name: 'ludato_cookie_consent',
        provider: 'ludato.sk',
        purpose: 'Pamätá si, či ste súbory cookies prijali alebo odmietli. Ukladá sa v úložisku prehliadača.',
        type: 'Nevyhnutné',
    },
    {
        name: '_ga, _ga_7VKRXW04MX',
        provider: 'Google Analytics',
        purpose: 'Anonymná štatistika návštevnosti: ktoré stránky sa čítajú a odkiaľ návštevníci prichádzajú.',
        type: 'Analytické, len so súhlasom',
    },
    {
        name: '_gcl_au, _gcl_aw a ďalšie',
        provider: 'Google Ads',
        purpose: 'Meranie účinnosti reklamy, vrátane toho, či hovor alebo objednávka prišli z reklamy.',
        type: 'Marketingové, len so súhlasom',
    },
    {
        name: 'Cookies Google Máp',
        provider: 'Google Maps',
        purpose: 'Zobrazenie mapy s polohou prevádzky na stránkach Kontakt a Kde pôsobíme.',
        type: 'Funkčné',
    },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2
                className="text-white font-black text-xl sm:text-2xl mb-4 flex items-baseline gap-2"
                style={{ fontFamily: 'var(--font-montserrat)' }}
            >
                <span className="text-[#E31C25]">//</span> {title}
            </h2>
            <div className="space-y-4 text-white/65 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                {children}
            </div>
        </section>
    );
}

export default function OchranaOsobnychUdajov() {
    return (
        <main className="relative overflow-x-hidden w-full bg-[#111111]">
            <Navbar />

            <div className="pt-32 lg:pt-40 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'Ochrana osobných údajov' }]} />

                    <h1
                        className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        OCHRANA OSOBNÝCH ÚDAJOV <span className="text-[#E31C25]">A COOKIES</span>
                    </h1>
                    <p className="text-white/40 text-sm mb-12" style={{ fontFamily: 'var(--font-inter)' }}>
                        Platné od 30. 9. 2026
                    </p>

                    <Section title="Kto spracúva vaše údaje">
                        <p>
                            Prevádzkovateľom webu ludato.sk a správcom vašich osobných údajov je spoločnosť
                            <strong className="text-white"> Ludato Family s. r. o.</strong>, Odborárska 52, 831 02
                            Bratislava, mestská časť Nové Mesto, IČO 57526800, DIČ 2122815046.
                        </p>
                        <p>
                            V otázkach ochrany osobných údajov nás kontaktujte na{' '}
                            <a href="mailto:ludato.recepcia@gmail.com" className="text-[#E31C25] hover:text-white underline">
                                ludato.recepcia@gmail.com
                            </a>{' '}
                            alebo na čísle{' '}
                            <a href="tel:+421944236257" className="text-[#E31C25] hover:text-white underline">
                                +421 944 236 257
                            </a>
                            .
                        </p>
                    </Section>

                    <Section title="Aké údaje spracúvame z formulárov">
                        <p>
                            Keď nám pošlete správu cez kontaktný formulár alebo žiadosť o cenovú ponuku, spracúvame
                            údaje, ktoré do formulára vyplníte: meno, e-mail, telefónne číslo (ak ho uvediete),
                            text správy a vybrané služby.
                        </p>
                        <p>
                            Údaje používame len na to, aby sme vám odpovedali, pripravili cenovú ponuku a dohodli
                            termín. Právnym základom je vykonanie opatrení pred uzavretím zmluvy na vašu žiadosť
                            podľa čl. 6 ods. 1 písm. b) GDPR. Uchovávame ich po dobu potrebnú na vybavenie vášho
                            dopytu a prípadnej objednávky, a ak ide o zákazku, po dobu, ktorú vyžadujú účtovné
                            a daňové predpisy.
                        </p>
                        <p>
                            Formulár sa odosiela ako e-mail cez službu Resend priamo do našej schránky. Údaje
                            nepredávame ani neposkytujeme tretím stranám na marketing.
                        </p>
                    </Section>

                    <Section title="Súbory cookies">
                        <p>
                            Analytické a marketingové cookies používame len vtedy, keď s nimi súhlasíte v lište
                            na spodku stránky. Kým nesúhlasíte, Google Analytics ani Google Ads si do vášho
                            prehliadača nič neukladajú (tzv. režim súhlasu Google, consent mode v2). Právnym
                            základom je váš súhlas podľa čl. 6 ods. 1 písm. a) GDPR.
                        </p>

                        <div className="overflow-x-auto -mx-4 sm:mx-0">
                            <table className="w-full min-w-[560px] text-sm border border-white/10">
                                <thead>
                                    <tr className="bg-white/5 text-white text-left">
                                        <th className="p-3 font-semibold">Cookie</th>
                                        <th className="p-3 font-semibold">Poskytovateľ</th>
                                        <th className="p-3 font-semibold">Účel</th>
                                        <th className="p-3 font-semibold">Typ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cookies.map((c) => (
                                        <tr key={c.name} className="border-t border-white/10 align-top">
                                            <td className="p-3 text-white/85 font-mono text-xs">{c.name}</td>
                                            <td className="p-3">{c.provider}</td>
                                            <td className="p-3">{c.purpose}</td>
                                            <td className="p-3">{c.type}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Súhlas môžete kedykoľvek zmeniť alebo odvolať. Odvolanie súhlasu nemá vplyv na
                            spracovanie, ktoré prebehlo predtým.
                        </p>
                        <CookieSettingsButton className="inline-flex items-center gap-2 border border-white/30 hover:border-[#E31C25] text-white hover:text-[#E31C25] font-semibold px-6 py-3 text-xs tracking-widest uppercase rounded-sm transition-colors" />
                    </Section>

                    <Section title="Meranie hovorov z reklamy">
                        <p>
                            Ak na web prídete z reklamy Google a súhlasíte s cookies, môže sa vám namiesto nášho
                            čísla zobraziť presmerovacie číslo od Google. Hovor sa normálne spojí s nami, Google
                            nám len oznámi, že hovor prišiel z reklamy. Údaje o hovore spracúva Google podľa
                            svojich pravidiel ochrany súkromia. Bez súhlasu vidíte vždy naše skutočné číslo.
                        </p>
                    </Section>

                    <Section title="Komu údaje poskytujeme">
                        <p>
                            Údaje spracúvajú aj služby, ktoré používame na prevádzku webu: Vercel (hosting webu),
                            Resend (odosielanie formulárov e-mailom) a Google (Analytics, Ads, Mapy, e-mailová
                            schránka). Niektoré z nich môžu údaje prenášať mimo Európskej únie, najmä do USA.
                            Deje sa tak na základe štandardných zmluvných doložiek alebo rámca EU-US Data Privacy
                            Framework.
                        </p>
                    </Section>

                    <Section title="Vaše práva">
                        <p>Máte právo:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>získať prístup k svojim údajom a ich kópiu,</li>
                            <li>požiadať o opravu nesprávnych údajov,</li>
                            <li>požiadať o vymazanie údajov alebo obmedzenie ich spracúvania,</li>
                            <li>namietať proti spracúvaniu a na prenosnosť údajov,</li>
                            <li>kedykoľvek odvolať súhlas s cookies.</li>
                        </ul>
                        <p>
                            Stačí nám napísať na{' '}
                            <a href="mailto:ludato.recepcia@gmail.com" className="text-[#E31C25] hover:text-white underline">
                                ludato.recepcia@gmail.com
                            </a>
                            . Ak si myslíte, že s vašimi údajmi zaobchádzame v rozpore so zákonom, môžete podať
                            sťažnosť na Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07
                            Bratislava 27, www.dataprotection.gov.sk.
                        </p>
                    </Section>

                    <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                        Máte otázku? <Link href="/kontakt" className="text-[#E31C25] hover:text-white underline">Kontaktujte nás</Link>.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
