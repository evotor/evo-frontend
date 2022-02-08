import { DadataBankStatus } from '../enums/dadata-bank-status';
import { DadataBankType } from '../enums/dadata-bank-type';

export interface DadataFindBankRequestParams {
    count?: number;
    status?: DadataBankStatus[];
    type?: DadataBankType[];
    locations?: {kladr_id: string}[];
}
