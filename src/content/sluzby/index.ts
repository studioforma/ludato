import type { ServiceContent } from './types';
import pneuservisBratislava from './pneuservis-bratislava';
import vymenaOlejaBratislava from './vymena-oleja-bratislava';
import brzdyBratislava from './brzdy-bratislava';
import pocitacovaDiagnostikaBratislava from './pocitacova-diagnostika-bratislava';
import servisKlimatizacieBratislava from './servis-klimatizacie-bratislava';
import stkEkBratislava from './stk-ek-bratislava';
import geometriaBratislava from './geometria-bratislava';
import podvozokBratislava from './podvozok-bratislava';
import rozvodyBratislava from './rozvody-bratislava';
import uskladneniePneumatikBratislava from './uskladnenie-pneumatik-bratislava';
import nahradneVozidloBratislava from './nahradne-vozidlo-bratislava';
import zlozitaDiagnostikaBratislava from './zlozita-diagnostika-bratislava';
import turboduchadloBratislava from './turboduchadlo-bratislava';
import servisVeteranovBratislava from './servis-veteranov-bratislava';

export const serviceContent: Record<string, ServiceContent> = {
    'pneuservis-bratislava': pneuservisBratislava,
    'vymena-oleja-bratislava': vymenaOlejaBratislava,
    'brzdy-bratislava': brzdyBratislava,
    'pocitacova-diagnostika-bratislava': pocitacovaDiagnostikaBratislava,
    'servis-klimatizacie-bratislava': servisKlimatizacieBratislava,
    'stk-ek-bratislava': stkEkBratislava,
    'geometria-bratislava': geometriaBratislava,
    'podvozok-bratislava': podvozokBratislava,
    'rozvody-bratislava': rozvodyBratislava,
    'uskladnenie-pneumatik-bratislava': uskladneniePneumatikBratislava,
    'nahradne-vozidlo-bratislava': nahradneVozidloBratislava,
    'zlozita-diagnostika-bratislava': zlozitaDiagnostikaBratislava,
    'turboduchadlo-bratislava': turboduchadloBratislava,
    'servis-veteranov-bratislava': servisVeteranovBratislava,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
    return serviceContent[slug];
}
