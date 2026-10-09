import type { ServiceContent } from '../sluzby/types';
import raca from './raca';
import vajnory from './vajnory';
import ruzinov from './ruzinov';
import stareMesto from './stare-mesto';
import karlovaVes from './karlova-ves';
import dubravka from './dubravka';
import kramare from './kramare';
import koliba from './koliba';

export const areaContent: Record<string, ServiceContent> = {
    raca,
    vajnory,
    ruzinov,
    'stare-mesto': stareMesto,
    'karlova-ves': karlovaVes,
    dubravka,
    kramare,
    koliba,
};

export function getAreaContent(slug: string): ServiceContent | undefined {
    return areaContent[slug];
}
