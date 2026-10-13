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

### Ako funguje Google skript pre hovory (overené 9. 10. 2026, call-tracking_9.js)

Meranie hovorov funguje od nasadenia v noci na 9. 10. 2026. Overené: Google
vrátil presmerovacie číslo 0800 223 787 a `CallNumberSwap` ho dosadil na stránku.

- `cc=ZZ` v požiadavke `wcm` je normálne. Google ho posiela napevno
  (`countryNameCode="ZZ"`), s krajinou to nesúvisí.
- Skript si URL požiadavky `wcm` ukladá do localStorage na 3 hodiny, pod kľúč
  `<conversion label>,<číslice čísla>`, napr. `2kV5CJOU0YsdEMv8gdJE,0944236257`,
  a k nemu `..._expiresAt`. Kým platí, posiela stále tú istú uloženú URL.
- gclid berie skript z `location.href` v momente vytvorenia požiadavky. gclaw
  z cookie `_gcl_aw` číta len pri udelenom súhlase.
- Pôvodná chyba (errorCode 14 = "no ad click" + "not tracked" + "temporary")
  vznikla, lebo značka pre hovory bežala pred súhlasom (npa=1, bez gclaw)
  a táto zlá požiadavka sa potom 3 hodiny opakovala.

Ochrany v kóde (`layout.tsx`, `CookieBanner.tsx`):

- `ludatoConfigureCallTracking()` sa volá iba pri súhlase `accepted`: pri
  načítaní z localStorage alebo po kliknutí na Súhlasím v `CookieBanner`,
  vždy až po `gtag('consent', 'update', granted)`.
- Ak je v URL `gclid`, `gbraid` alebo `wbraid`, pred spustením značky sa
  zmažú uložené požiadavky (kľúče začínajúce na `2kV5CJOU0YsdEMv8gdJE,`).
  Inak by návštevník, ktorý bol na webe bez reklamy a do 3 hodín prišiel cez
  reklamu, dostal starú požiadavku bez gclid.
- Známy, zámerne neriešený prípad: pri prechode medzi stránkami Next.js gclid
  z URL vypadne. Ak návštevník z reklamy najprv prejde na inú stránku a až
  potom súhlasí s cookies, značka sa spustí bez gclid v URL.

Pravidlá:

- Nevolať `ludatoConfigureCallTracking` pred udelením súhlasu.
- Text čísla na webe musí ostať zhodný s `phone_conversion_number`
  (`'0944 236 257'`) a s `ORIGINAL_TEXT` v `CallNumberSwap.tsx`.
- tel: odkazy nechať `tel:+421944236257`, JSON-LD `telephone` nechať
  `+421944236257`.

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
