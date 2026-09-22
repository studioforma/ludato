import type { ServiceContent } from './types';
import pneuservisBratislava from './pneuservis-bratislava';

export const serviceContent: Record<string, ServiceContent> = {
    'pneuservis-bratislava': pneuservisBratislava,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
    return serviceContent[slug];
}
