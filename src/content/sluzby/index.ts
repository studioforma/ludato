import type { ServiceContent } from './types';
import pneuservisBratislava from './pneuservis-bratislava';
import vymenaOlejaBratislava from './vymena-oleja-bratislava';
import brzdyBratislava from './brzdy-bratislava';
import pocitacovaDiagnostikaBratislava from './pocitacova-diagnostika-bratislava';
import servisKlimatizacieBratislava from './servis-klimatizacie-bratislava';
import stkEkBratislava from './stk-ek-bratislava';

export const serviceContent: Record<string, ServiceContent> = {
    'pneuservis-bratislava': pneuservisBratislava,
    'vymena-oleja-bratislava': vymenaOlejaBratislava,
    'brzdy-bratislava': brzdyBratislava,
    'pocitacova-diagnostika-bratislava': pocitacovaDiagnostikaBratislava,
    'servis-klimatizacie-bratislava': servisKlimatizacieBratislava,
    'stk-ek-bratislava': stkEkBratislava,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
    return serviceContent[slug];
}
