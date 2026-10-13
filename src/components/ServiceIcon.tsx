import {
    Activity,
    Car,
    CarBattery,
    CarFront,
    ClipboardCheck,
    Cog,
    Crosshair,
    Disc,
    Droplet,
    Fan,
    Fuel,
    Luggage,
    MoveVertical,
    ScanSearch,
    ShoppingCart,
    Snowflake,
    Sparkles,
    SprayCan,
    Thermometer,
    Timer,
    Torus,
    Truck,
    Warehouse,
    Wrench,
    type LucideIcon,
} from 'lucide-react';

// One line pictogram per service, so cards across the site are easy to scan.
const icons: Record<string, LucideIcon> = {
    'pneuservis-bratislava': Torus,
    'vymena-oleja-bratislava': Droplet,
    'brzdy-bratislava': Disc,
    'pocitacova-diagnostika-bratislava': Activity,
    'servis-klimatizacie-bratislava': Snowflake,
    'stk-ek-bratislava': ClipboardCheck,
    'geometria-bratislava': Crosshair,
    'podvozok-bratislava': MoveVertical,
    'rozvody-bratislava': Timer,
    'uskladnenie-pneumatik-bratislava': Warehouse,
    'nahradne-vozidlo-bratislava': CarFront,
    'zlozita-diagnostika-bratislava': ScanSearch,
    'turboduchadlo-bratislava': Fan,
    'servis-veteranov-bratislava': Car,
    'odtah-vozidla-bratislava': Truck,
    'autobateria-bratislava': CarBattery,
    'prevodovka-spojka-bratislava': Cog,
    'vstrekovace-bratislava': Fuel,
    'predaj-pneumatik-bratislava': ShoppingCart,
    'kontrola-pred-dovolenkou-bratislava': Luggage,
    'ozonova-dezinfekcia-bratislava': Sparkles,
    'tepovanie-interieru-bratislava': SprayCan,
    'chladenie-kurenie-bratislava': Thermometer,
};

export default function ServiceIcon({ slug, className = 'w-6 h-6' }: { slug: string; className?: string }) {
    const Icon = icons[slug] ?? Wrench;
    return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
