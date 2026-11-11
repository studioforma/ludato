# Fonts

Self-hosted through `next/font/local`, so the build never downloads anything
from Google Fonts. With `next/font/google` a failed download during the Vercel
build broke the production deploy (24. 10. 2026, "Can't resolve
'@vercel/turbopack-next/internal/font/google/font'").

Source: variable TTFs from https://github.com/google/fonts (SIL Open Font
License, see the OFL-*.txt files), cut down with fontTools:

- weight axis limited to what the site uses (Montserrat 400–900, Inter 300–600
  with opsz pinned to 14, Dancing Script 400–700, Space Grotesk 400–700)
- glyphs limited to Latin-1, Latin Extended-A (Slovak and Czech diacritics),
  general punctuation, arrows, € and ™
- Montserrat only (11. 11. 2026): OpenType features cut to the defaults the
  browser applies (ccmp, locl, liga, rvrn, kern); small caps, old-style and
  tabular figures, fractions and stylistic sets dropped. Same 378 characters,
  78 KB -> 44 KB. The site uses no font-feature-settings or font-variant.
- saved as woff2

To add characters or weights, run fontTools `instancer` and `subset` again on the
original TTF and replace the woff2 here.
