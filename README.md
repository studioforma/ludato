# LUDATO FAMILY Cars Services

Web autoservisu. Next.js 16 (App Router), Tailwind v4, Framer Motion.
Kontaktný a objednávkový formulár posielajú mail cez Resend.

## Spustenie

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Premenné

`RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO`: bez nich formuláre neodošlú mail,
zvyšok webu funguje normálne.

## Telefónne číslo a meranie hovorov (Google Ads)

Návštevníkom z reklamy Google Ads vymení číslo za presmerovacie, aby sa hovor
započítal ako konverzia. Config je v inline gtag skripte v `src/app/layout.tsx`,
výmenu robí `src/components/CallNumberSwap.tsx`.

Pravidlá pri úpravách webu:

- **Zobrazené číslo píš vždy presne ako `0944 236 257`** (národný formát).
  Iný zápis (`+421 944 236 257`, `+421944236257`, bez medzier…) sa nevymení
  a hovor z reklamy sa nezapočíta. Medzinárodný formát s "+" spôsoboval chybu
  errorCode 14 / cc=ZZ (podpora Google Ads, case 8-6626000041470).
- **tel: odkazy vždy ako `href="tel:+421944236257"`.** Iný tvar sa nevymení.
- Platí to aj pre nové stránky a texty v `src/content/sluzby/*.ts`.
- JSON-LD schéma (`telephone` v `layout.tsx`) a maily z formulárov majú mať
  vždy skutočné číslo. `CallNumberSwap` skripty nemení, nič netreba riešiť.
- Značka pre hovory sa spúšťa až po súhlase s cookies (consent mode v2,
  `CookieBanner`), nikdy pred ním. Číslo sa teda vymení len pri súhlase.
  Kto cookies odmietne, uvidí skutočné číslo a jeho hovor sa v Ads nezapočíta.
  Je to zámer.

Test na produkcii: `https://www.ludato.sk/#google-wcc-debug` (na localhoste
nefunguje).

## Build

```bash
npm run build
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
node .next/standalone/server.js
```

Kopírovanie `public/` a `.next/static` je nutné, standalone build ich neobsahuje.
Buildovať treba na rovnakej platforme ako beží server (`sharp`, Next binárky).

Texty sú po slovensky priamo v komponentoch, žiadny CMS.
