import type { ServiceContent } from './types';
import pneuservisBratislava from './pneuservis-bratislava';
import vymenaOlejaBratislava from './vymena-oleja-bratislava';
import brzdyBratislava from './brzdy-bratislava';
import diagnostikaBratislava from './diagnostika-bratislava';
import klimatizaciaBratislava from './klimatizacia-bratislava';
import stkEkBratislava from './stk-ek-bratislava';

export const serviceContent: Record<string, ServiceContent> = {
    'pneuservis-bratislava': pneuservisBratislava,
    'vymena-oleja-bratislava': vymenaOlejaBratislava,
    'brzdy-bratislava': brzdyBratislava,
    'diagnostika-bratislava': diagnostikaBratislava,
    'klimatizacia-bratislava': klimatizaciaBratislava,
    'stk-ek-bratislava': stkEkBratislava,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
    return serviceContent[slug];
}
