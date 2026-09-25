import Link from 'next/link';
import { INLINE_LINK } from '@/lib/richText';

export default function RichText({ text }: { text: string }) {
    const nodes: React.ReactNode[] = [];
    let cursor = 0;
    let match: RegExpExecArray | null;

    const re = new RegExp(INLINE_LINK.source, 'g');
    while ((match = re.exec(text)) !== null) {
        if (match.index > cursor) {
            nodes.push(text.slice(cursor, match.index));
        }
        nodes.push(
            <Link
                key={match.index}
                href={match[2]}
                className="text-[#E31C25] hover:text-white transition-colors underline"
            >
                {match[1]}
            </Link>
        );
        cursor = match.index + match[0].length;
    }
    if (cursor < text.length) {
        nodes.push(text.slice(cursor));
    }

    return <>{nodes}</>;
}
