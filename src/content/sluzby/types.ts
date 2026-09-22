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
    /** Pulls rows straight from the cennik so numbers are never copied by hand. */
    | { type: 'prices'; heading: string; categories: string[] }
    | { type: 'faq'; heading: string; items: { q: string; a: string }[] };

export type ServiceContent = Section[];
