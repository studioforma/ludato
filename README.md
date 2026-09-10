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

`RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO` — bez nich formuláre neodošlú mail,
zvyšok webu funguje normálne.

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
