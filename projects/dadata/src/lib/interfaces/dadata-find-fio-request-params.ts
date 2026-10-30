import {DadataFioGender, DadataFioPart} from '../types';

/**
 * @see https://dadata.ru/api/suggest/name/
 */
export interface DadataFindFioRequestParams {
    count?: number;
    gender?: DadataFioGender;
    parts?: DadataFioPart[];
}
