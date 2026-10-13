// Pre-selects a service in the /nacenenie form from ?sluzba=<key>, so a visitor
// who clicks "Objednať prezutie" on a service page does not pick it again.
// Options must match the names in the form's service list exactly.

export const OTHER_OPTION = 'Iné (špecifikujte v správe)';

type Prefill = { service: string; note?: string };

const prefills: Record<string, Prefill> = {
    diagnostika: { service: 'Diagnostika vozidla' },
    olej: { service: 'Olejový servis (výmena oleja + filtre)' },
    brzdy: { service: 'Výmena bŕzd + odvzdušnenie' },
    stk: { service: 'Kontrola pred STK + EK' },
    geometria: { service: 'Geometria' },
    prezutie: { service: 'Kompletné prezutie kolies' },
    podvozok: { service: 'Oprava podvozku' },
    pickup: { service: 'Pickup / odťah vozidla' },
    bateria: { service: 'Výmena batérie' },
    prevodovka: { service: 'Výmena náplne prevodovky' },
    // Services without their own checkbox go to "Iné" with a note.
    klimatizacia: { service: OTHER_OPTION, note: 'Servis klimatizácie' },
    rozvody: { service: OTHER_OPTION, note: 'Výmena rozvodov' },
    turbo: { service: OTHER_OPTION, note: 'Turbodúchadlo' },
    'zlozita-diagnostika': { service: 'Diagnostika vozidla', note: 'Porucha, ktorá sa vracia (zložitá diagnostika)' },
    veteran: { service: OTHER_OPTION, note: 'Servis veterána' },
    'nahradne-vozidlo': { service: OTHER_OPTION, note: 'Náhradné vozidlo počas servisu' },
    spojka: { service: OTHER_OPTION, note: 'Spojka alebo prevodovka' },
    vstrekovace: { service: OTHER_OPTION, note: 'Vstrekovače' },
    pneumatiky: { service: OTHER_OPTION, note: 'Predaj pneumatík (rozmer, sezóna, preferovaná značka)' },
    dovolenka: { service: OTHER_OPTION, note: 'Kontrola auta pred dovolenkou' },
    ozon: { service: 'Ozónová dezinfekcia interiéru' },
    tepovanie: { service: 'Tepovanie' },
    chladenie: { service: OTHER_OPTION, note: 'Chladiaci systém alebo kúrenie' },
};

export function getOrderPrefill(key: string | null): Prefill | undefined {
    return key ? prefills[key] : undefined;
}

/** Link to the order form with a service pre-selected. */
export function orderHref(key: keyof typeof prefills): string {
    return `/nacenenie?sluzba=${key}`;
}
