import {DadataFmsUnitType} from '../types';

/**
 * @see https://dadata.ru/api/suggest/fms_unit/#response
 */
export interface DadataFmsUnitSuggestion {
    code: string;
    name: string;
    region_code: string;
    type: DadataFmsUnitType;
}
