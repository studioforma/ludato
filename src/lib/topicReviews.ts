// Real Google reviews of Ludato, quoted word for word as the customers wrote
// them (also without diacritics). Shortened only with "…" at the start or end
// of a sentence. Name: first name and initial of the surname.
// Source: Ludato Google Business Profile via the GBP API, 18. 11. 2026
// (59 reviews, all 5 stars). No Review or AggregateRating schema for these:
// Google does not show it for a business's own reviews on its own site.
export type TopicReviewId =
    | 'alen-p'
    | 'pavol-d'
    | 'ivana-s'
    | 'sabina-d'
    | 'robert-p'
    | 'jan-o'
    | 'peter-d'
    | 'elnur-k'
    | 'henrieta-t'
    | 'ema-f'
    | 'cyntia'
    | 'boris-b'
    | 'patrik-o'
    | 'sandra-b'
    | 'roman-k';

export type TopicReview = { name: string; date: string; text: string };

export const TOPIC_REVIEWS: Record<TopicReviewId, TopicReview> = {
    'alen-p': {
        name: 'Alen P.',
        date: 'október 2026',
        text: 'Som nad mieru spokojný. Išlo “iba” o prezutie zo starých letných na  nové zimné pneu ale páčia sa mi tie DETAILY. Staré zavážia boli odstránené čo je bežná vec ale veľmi sa mi páči že na disku neostali žiadne kúsky zo starého lepidla. … Okrem toho som spokojný aj so “službami “ - človek sedí v teple kde mu ponúknu kávu.',
    },
    'pavol-d': {
        name: 'Pavol D.',
        date: 'október 2026',
        text: 'Je to menší autoservis a pneuservis. Na objednanie nie sú žiadne dĺhe čakacie doby. Ideálne pre tých, ktorí si na poslednú chvíľu spomenú, že je treba prezuť 😅. Dobrý prístup. Čakanie minimálne, príjemný personál. A cena je super👍.',
    },
    'ivana-s': {
        name: 'Ivana S.',
        date: 'október 2026',
        text: 'Skvelý a profesionálny prístup, rýchle prezutie v núdzi a super ceny! Maximálna spokojnosť, odporúčam.',
    },
    'sabina-d': {
        name: 'Sabína D.',
        date: 'september 2026',
        text: 'Super. Potrebovala som vymeniť pneu, kvôli defektu. Cez obed som volala, poobede vybavené. Odporúčam aj cenovo.',
    },
    'robert-p': {
        name: 'Robert P.',
        date: 'máj 2026',
        text: 'Defekt opravený ľahko a bez problémov.',
    },
    'jan-o': {
        name: 'Ján O.',
        date: 'október 2026',
        text: 'Rovno ma zobrali a vopred mi vsetko nacenili. Problem mi v ten isty den vyriesili. Odporucam',
    },
    'peter-d': {
        name: 'Peter D.',
        date: 'september 2026',
        text: 'Priateľský prístup. Celkom určite aj férový. V rámci olejservisu mi prekontrolovali aj ostatné časti vozidla a upozornili na budúce opravy rovno aj s detailnou cenovou ponukou. Moje odporúčanie je na 101 %.',
    },
    'elnur-k': {
        name: 'Elnur K.',
        date: 'október 2026',
        text: 'Bol som spokojný s vymenou oleja a vartjych filtrov majitel mi ukazak aj stare diely aj krabice ktore boli rovnake s kódami z cenovej ponuky tak som vedel ze tento autoservis he ferovy neklame ako ine autoservisy preto odporucam pridem znova👍🏻',
    },
    'henrieta-t': {
        name: 'Henrieta T.',
        date: 'september 2026',
        text: 'Na výlete v Bratislave sa nám pokazilo auto, tak sme išli do najbližšieho autoservisu. Poruchu rýchlo identifikovali, zabezpečili potrebný náhradný diel a auto dali do poriadku približne do 2 hodín.',
    },
    'ema-f': {
        name: 'Ema F.',
        date: 'september 2026',
        text: '…Výmena brzdových platničiek a kotúčov a stk boli priam bleskové⚡️. Vrelo odporúčam, tento servis bude moja voľba aj nabudúce!',
    },
    cyntia: {
        name: 'Cyntia',
        date: 'október 2026',
        text: 'Skvele nam poradili a ponukli aj opravu zisteneho problemu ihned na mieste, aj keď sme mali rezervovany termin iba na opravu geometrie. Dakujem a určite odporucam na 100%',
    },
    'boris-b': {
        name: 'Boris B.',
        date: 'október 2026',
        text: 'Všetko prebehlo rýchlo bez zbytočných naťahovačiek. Komunikacia bola v pohode a co sme sa dohodli, to aj platilo. Mal som problem s prednou nápravou a trebalo meniť aj poloosi.',
    },
    'patrik-o': {
        name: 'Patrik O.',
        date: 'máj 2026',
        text: 'Perfektný prístup chlapci sú šikovný slušný olejový servis na počkanie super cena.Odporúčam 👍👍👍',
    },
    'sandra-b': {
        name: 'Sandra B.',
        date: 'august 2026',
        text: 'Výborná skúsenosť -  príjemný a ochotný prístup. Náhodou sme pri výmene oleja poprosili o kontrolu rozvodov, kde zistili chybu a rýchlo sa nám prispôsobili aby to vedeli asap napraviť. Môžeme len odporúčit.',
    },
    'roman-k': {
        name: 'Roman K.',
        date: 'október 2026',
        text: 'Veľmi odporúčam tento autoservis! … Aj napriek nečakaným komplikáciám s elektrikou urobili všetko precízne, profesionálne a poctivo. Pán majiteľ ma o všetkom úprimne informoval. Skvelá komunikácia a ľudský prístup.',
    },
};
