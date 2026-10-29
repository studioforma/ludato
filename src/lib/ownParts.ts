// Customer-supplied parts policy (Tomáš, 26. 10. 2026). One wording for the
// cennik, the FAQs and the service price tables.

export const OWN_PARTS_QUESTION = 'Môžem si priniesť vlastné diely?';

export const OWN_PARTS_POLICY =
    'Vlastné diely neprijímame. Pracujeme s dielmi a značkami, ktoré poznáme a s ktorými máme skúsenosti. Len tak vieme stáť za tým, že oprava bude urobená poriadne a vydrží. Ak sa výnimočne dohodneme na montáži dielu, ktorý prinesiete, cena práce je o 100 % vyššia.';

/** Short version under the price tables of services where parts are replaced. */
export const OWN_PARTS_SHORT =
    'Vlastné diely neprijímame. Ak sa výnimočne dohodneme na montáži dielu, ktorý prinesiete, cena práce je o 100 % vyššia.';

/** The policy without its first sentence, for boxes that show "Vlastné diely neprijímame" as the heading. */
export const OWN_PARTS_POLICY_DETAIL = OWN_PARTS_POLICY.replace(/^Vlastné diely neprijímame\. /, '');
