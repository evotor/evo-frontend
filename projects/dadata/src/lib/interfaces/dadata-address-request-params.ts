import {DadataAddressBound, DadataAddressLocation} from '../types';

/**
 * @see https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669107
 */
export interface DadataAddressRequestParams {
    count?: number;
    language?: string;
    division?: string;
    locations?: DadataAddressLocation[];
    location_boost?: DadataAddressLocation[];
    location_geo?: DadataAddressLocation[];
    from_bound?: {
        value: DadataAddressBound;
    };
    to_bound?: {
        value: DadataAddressBound;
    };
}
