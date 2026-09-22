import type { ServiceContent } from './types';
import pneuservisBratislava from './pneuservis-bratislava';
import vymenaOlejaBratislava from './vymena-oleja-bratislava';

export const serviceContent: Record<string, ServiceContent> = {
    'pneuservis-bratislava': pneuservisBratislava,
    'vymena-oleja-bratislava': vymenaOlejaBratislava,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
    return serviceContent[slug];
}
