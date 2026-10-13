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
import odtahVozidlaBratislava from './odtah-vozidla-bratislava';
import autobateriaBratislava from './autobateria-bratislava';
import prevodovkaSpojkaBratislava from './prevodovka-spojka-bratislava';
import vstrekovaceBratislava from './vstrekovace-bratislava';
import predajPneumatikBratislava from './predaj-pneumatik-bratislava';
import kontrolaPredDovolenkouBratislava from './kontrola-pred-dovolenkou-bratislava';
import ozonovaDezinfekciaBratislava from './ozonova-dezinfekcia-bratislava';
import tepovanieInterieruBratislava from './tepovanie-interieru-bratislava';
import chladenieKurenieBratislava from './chladenie-kurenie-bratislava';

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
    'odtah-vozidla-bratislava': odtahVozidlaBratislava,
    'autobateria-bratislava': autobateriaBratislava,
    'prevodovka-spojka-bratislava': prevodovkaSpojkaBratislava,
    'vstrekovace-bratislava': vstrekovaceBratislava,
    'predaj-pneumatik-bratislava': predajPneumatikBratislava,
    'kontrola-pred-dovolenkou-bratislava': kontrolaPredDovolenkouBratislava,
    'ozonova-dezinfekcia-bratislava': ozonovaDezinfekciaBratislava,
    'tepovanie-interieru-bratislava': tepovanieInterieruBratislava,
    'chladenie-kurenie-bratislava': chladenieKurenieBratislava,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
    return serviceContent[slug];
}
