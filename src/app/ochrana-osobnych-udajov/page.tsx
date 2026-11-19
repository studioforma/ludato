import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/service/Breadcrumbs';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export const metadata: Metadata = {
    title: 'Ochrana osobných údajov a cookies | Ako spracúvame údaje z formulárov, meranie návštevnosti a reklamy | Ludato Family Autoservis a Pneuservis',
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
        name: '_clck, _clsk, CLID, MUID',
        provider: 'Microsoft Clarity (Microsoft)',
        purpose: 'Analytika správania na webe: kliky, posúvanie stránky (scroll) a záznamy návštev.',
        type: 'Analytické, len so súhlasom',
    },
    {
        name: 'ludato_zdroj',
        provider: 'ludato.sk',
        purpose: 'Odkiaľ ste na web prišli (napríklad vyhľadávač alebo reklama) a vstupná stránka, pre štatistiku dopytov z formulárov. Ukladá sa v úložisku prehliadača a vymaže sa po zatvorení karty.',
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
                        className="uppercase text-3xl md:text-5xl font-black text-white mb-4 leading-tight"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        Ochrana osobných údajov <span className="text-[#E31C25]">a cookies</span>
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
                                0944 236 257
                            </a>
                            .
                        </p>
                    </Section>

                    <Section title="Aké údaje spracúvame z formulárov">
                        <p>
                            Keď nám pošlete správu cez kontaktný formulár alebo žiadosť o cenovú ponuku, spracúvame
                            údaje, ktoré do formulára vyplníte: meno, e-mail, telefónne číslo,
                            ŠPZ alebo VIN vozidla, text správy a vybrané služby.
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
                        <p>
                            Pri odoslaní formulára si do vlastnej tabuľky zapisujeme aj anonymnú štatistiku: na
                            ktorej stránke ste formulár odoslali, ktorú službu ste vybrali a čo ste uviedli
                            v otázke „Ako ste sa o nás dozvedeli?“. Ak ste súhlasili s cookies, zapíšeme aj to,
                            odkiaľ ste na náš web prišli (napríklad z vyhľadávača alebo z reklamy). Údaj o zdroji
                            návštevy sa ukladá len s vaším súhlasom, dočasne v pamäti prehliadača (sessionStorage),
                            a vymaže sa po zatvorení karty. Záznam v tabuľke neobsahuje vaše meno, telefón, e-mail
                            ani text správy a používame ho len na vyhodnotenie, ktoré kanály nám prinášajú dopyty.
                        </p>
                    </Section>

                    <Section title="Súbory cookies">
                        <p>
                            Analytické a marketingové cookies používame len vtedy, keď s nimi súhlasíte v lište
                            na spodku stránky. Kým nesúhlasíte, Google Analytics ani Google Ads si do vášho
                            prehliadača nič neukladajú (tzv. režim súhlasu Google, consent mode v2). Právnym
                            základom je váš súhlas podľa čl. 6 ods. 1 písm. a) GDPR.
                        </p>
                        <p>
                            Ak súhlasíte s cookies, používame aj Microsoft Clarity od spoločnosti Microsoft na
                            analytiku správania na webe (kliky, posúvanie stránky a záznamy návštev). Bez súhlasu
                            sa Microsoft Clarity nenačíta.
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
                            schránka) a Microsoft (Clarity, len so súhlasom s cookies). Niektoré z nich môžu údaje prenášať mimo Európskej únie, najmä do USA.
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
                            <li>namietať proti spracúvaniu údajov a preniesť si ich k inému prevádzkovateľovi,</li>
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
