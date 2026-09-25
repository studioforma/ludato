// Service page content is stored as data, not JSX, so 30+ pages share one
// template and a layout change is a single edit.
//
// Paragraph strings support inline links in markdown form: [text](/cesta).

export type Section =
    | { type: 'intro'; paragraphs: string[] }
    | { type: 'text'; heading: string; paragraphs: string[] }
    | { type: 'list'; heading: string; items: string[] }
    | { type: 'breakdown'; heading: string; items: { title: string; text: string }[] }
    | { type: 'steps'; heading: string; steps: { title: string; text: string }[] }
    | {
          type: 'caseStudy';
          heading: string;
          vehicle: string;
          paragraphs: string[];
          outcomes?: string[];
      }
    /**
     * Pulls rows straight from the cennik so numbers are never copied by hand.
     * `only`, when given, keeps just those service names out of the listed
     * categories (for when a cennik category mixes in unrelated items).
     */
    | { type: 'prices'; heading: string; categories: string[]; only?: string[] }
    | { type: 'faq'; heading: string; items: { q: string; a: string }[] }
    /** Photo from the workshop. Only real Ludato photos belong here. */
    | {
          type: 'image';
          src: string;
          alt: string;
          caption?: string;
          /** Defaults to landscape; use 'portrait' for tall shots. */
          orientation?: 'landscape' | 'portrait';
      };

export type ServiceContent = Section[];
