// Real Google reviews used on the homepage and the Google Ads landing pages.
// Full, unedited texts of real Google reviews (export from 23. 9. 2026,
// klienti/ludato/ludato-recenzie.pdf), names exactly as shown on Google.
// Three reviews, each about a different service; the tag names that service.
export const reviews: { name: string; rating: number; text: string; initials: string; service: string }[] = [
    {
        name: 'Sandra Braunova',
        rating: 5,
        text: 'Výborná skúsenosť - príjemný a ochotný prístup. Náhodou sme pri výmene oleja poprosili o kontrolu rozvodov, kde zistili chybu a rýchlo sa nám prispôsobili aby to vedeli asap napraviť. Môžeme len odporúčit.',
        initials: 'SB',
        service: 'Výmena oleja a rozvody',
    },
    {
        name: 'Sabína Diaz',
        rating: 5,
        text: 'Super. Potrebovala som vymeniť pneu, kvôli defektu. Cez obed som volala, poobede vybavené. Odporúčam aj cenovo.',
        initials: 'SD',
        service: 'Defekt pneumatiky',
    },
    {
        name: 'Jaro Sifra',
        rating: 5,
        text: 'Využil som kontrolu auta pred kúpou. Poradili, čo je potrebné vymeniť, nezáväzne nacenili a odporučili aj cenu, za akú auto kúpiť.',
        initials: 'JS',
        service: 'Kontrola pred kúpou',
    },
];
