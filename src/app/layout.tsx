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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Ludato Family Autoservis",
  telephone: "+421944236257",
  email: "ludato.recepcia@gmail.com",
  url: "https://www.ludato.sk/",
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
