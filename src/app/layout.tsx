import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});



export const metadata: Metadata = {
  title:
    "NAJLEPŠÍ Autoservis Bratislava – Nové Mesto | Ak hľadáte - Diagnostika, Opravy, Brzdy, Rozvody, Podvozok, Klimatizácia, Pneuservis, blízko mňa - Ludato Family Autoservis je to správne miesto",
  description:
    "Autoservis Bratislava – Nové Mesto: komplexná starostlivosť o vozidlá všetkých značiek a modelov. Diagnostika, opravy, servisné prehliadky, brzdy, podvozok, klimatizácia, pneuservis. Zažite rozdiel v dôveryhodnom rodinnom autoservise LUDATO.",
  keywords:
    "autoservis bratislava, autoservis nové mesto, pneuservis bratislava, diagnostika auta bratislava, oprava bŕzd bratislava, servis klimatizácie bratislava, LUDATO, rodinný autoservis",
  openGraph: {
    title: "Ludato Family Autoservis – Autoservis Bratislava, Nové Mesto",
    description: "Autám rozumieme a prácu na nich berieme osobne. Poctivá práca bez kompromisov.",
    locale: "sk_SK",
    type: "website",
  },
  verification: {
    google: "Q_Hvh23JZUi6rhADqKaSGR6n5TMIr5Xh2EwvzqqpmKs",
  },
};

const servicesOffered = [
  {
    name: "Diagnostika a opravy",
    description:
      "Spoľahlivá počítačová diagnostika všetkých systémov vozidla. Presná identifikácia závad a poctivý prístup pri hľadaní riešenia bez zbytočných výmien.",
  },
  {
    name: "Servisné prehliadky",
    description:
      "Kompletné STK-prípravné prehliadky a pravidelný servis podľa servisných intervalov výrobcu. Váš voz vždy v perfektnom stave.",
  },
  {
    name: "Oprava bŕzd a podvozkov",
    description:
      "Výmena brzdových platničiek, kotúčov a hydrauliky. Geometria, tlmiče, ramená, kompletná starostlivosť o podvozok vašeho vozidla.",
  },
  {
    name: "Servis klimatizácie",
    description:
      "Dopĺňanie chladiva, čistenie a dezinfekcia systémov klimatizácie. Certifikovaný servis pre príjemné cestovanie počas celého roka.",
  },
  {
    name: "Pneuservis a prezutie",
    description:
      "Sezónne prezutie pneumatík vrátane vyváženia kolies pre všetky bežné veľkosti diskov. Rýchlo, presne a bez zbytočného čakania.",
  },
  {
    name: "Výmena kolies na diskoch",
    description:
      "Rýchla výmena kolies už namontovaných na diskoch, ideálne riešenie pri sezónnej výmene bez nutnosti prezúvania pneumatík.",
  },
];

const areasServed = [
  "Bratislava - Nové Mesto",
  "Bratislava - Rača",
  "Bratislava - Vajnory",
  "Bratislava - Staré Mesto",
  "Bratislava - Ružinov",
  "Bratislava - Karlová Ves",
  "Bratislava - Dúbravka",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Ludato Family Autoservis",
  telephone: "+421944236257",
  email: "ludato.recepcia@gmail.com",
  url: "https://www.ludato.sk/",
  image: "https://www.ludato.sk/logo.png",
  logo: "https://www.ludato.sk/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Odborárska 52",
    addressLocality: "Bratislava",
    addressRegion: "Bratislavský kraj",
    postalCode: "831 02",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.17825271232653,
    longitude: 17.139108691302297,
  },
  hasMap: "https://maps.app.goo.gl/xaKkcTPLukbzixYB6",
  sameAs: ["https://maps.app.goo.gl/xaKkcTPLukbzixYB6"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "07:00",
      closes: "16:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+421944236257",
    contactType: "customer service",
    email: "ludato.recepcia@gmail.com",
    areaServed: "SK",
    availableLanguage: ["Slovak"],
  },
  areaServed: [
    { "@type": "City", name: "Bratislava" },
    ...areasServed.map((name) => ({ "@type": "Place", name })),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby autoservisu Ludato Family Autoservis",
    itemListElement: servicesOffered.map((service, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
    })),
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18425609803" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18425609803');
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased overflow-x-hidden flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
