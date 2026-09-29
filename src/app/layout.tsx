import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { services } from "@/lib/services";

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
    "NAJLEPŠÍ Autoservis Bratislava – Nové Mesto | Ak hľadáte - Diagnostika, Brzdy, Rozvody, Podvozok, Klimatizácia, Pneuservis, blízko mňa - Ludato Family Autoservis a Pneuservis je to správne miesto",
  description:
    "Autoservis Bratislava – Nové Mesto: komplexná starostlivosť o vozidlá všetkých značiek a modelov. Diagnostika, opravy, servisné prehliadky, brzdy, podvozok, klimatizácia, pneuservis. Zažite rozdiel v dôveryhodnom rodinnom autoservise LUDATO.",
  keywords:
    "autoservis bratislava, autoservis nové mesto, pneuservis bratislava, diagnostika auta bratislava, oprava bŕzd bratislava, servis klimatizácie bratislava, LUDATO, rodinný autoservis",
  openGraph: {
    title: "Ludato Family Autoservis a Pneuservis – Autoservis Bratislava, Nové Mesto",
    description: "Autám rozumieme a prácu na nich berieme osobne. Poctivá práca bez kompromisov.",
    locale: "sk_SK",
    type: "website",
  },
  verification: {
    google: "Q_Hvh23JZUi6rhADqKaSGR6n5TMIr5Xh2EwvzqqpmKs",
  },
};

const SITE = "https://www.ludato.sk";
// Service pages reference this node by @id, so Google ties them to one business.
const BUSINESS_ID = `${SITE}/#autoservis`;

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
  "@type": ["AutoRepair", "TireShop"],
  "@id": BUSINESS_ID,
  name: "Ludato Family Autoservis a Pneuservis",
  alternateName: ["LUDATO FAMILY Cars Services", "Ludato"],
  description:
    "Rodinný autoservis a pneuservis v Bratislave, Novom Meste. Diagnostika, výmena oleja, brzdy, podvozok, geometria, rozvody, turbodúchadlá, klimatizácia, STK a EK, pneuservis aj servis veteránov pre autá všetkých značiek.",
  telephone: "+421944236257",
  email: "ludato.recepcia@gmail.com",
  url: `${SITE}/`,
  image: [
    `${SITE}/prevadzka-1.webp`,
    `${SITE}/prevadzka-2.webp`,
    `${SITE}/logo.png`,
  ],
  logo: `${SITE}/logo.png`,
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
  // Google Business Profile identifiers. The Place ID and CID are both derived
  // from the profile's feature ID 0x476c8faf19a09f43:0xf675723b16b8c3cd.
  identifier: [
    { "@type": "PropertyValue", propertyID: "Google Place ID", value: "ChIJQ5-gGa-PbEcRzcO4FjtydfY" },
    { "@type": "PropertyValue", propertyID: "Google CID", value: "17759226303715263437" },
  ],
  hasMap: "https://www.google.com/maps?cid=17759226303715263437",
  sameAs: [
    "https://www.google.com/maps?cid=17759226303715263437",
    "https://maps.app.goo.gl/xaKkcTPLukbzixYB6",
    "https://www.google.com/search?kgmid=/g/11z0zy7xvy",
    "https://www.instagram.com/ludato_family_cars_services/",
    "https://www.facebook.com/ludato.family/",
  ],
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
    name: "Služby autoservisu Ludato Family Autoservis a Pneuservis",
    itemListElement: services.map((service, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `${SITE}/sluzby/${service.slug}`,
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  name: "Ludato Family Autoservis a Pneuservis",
  url: `${SITE}/`,
  inLanguage: "sk",
  publisher: { "@id": BUSINESS_ID },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
