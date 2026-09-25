// Content paragraphs carry inline links as [text](/cesta) so the copy can stay
// plain data. This is the one place that pattern is defined.

export const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Plain-text version for JSON-LD, where markup would leak into search results. */
export function stripLinks(text: string): string {
    return text.replace(INLINE_LINK, '$1');
}
