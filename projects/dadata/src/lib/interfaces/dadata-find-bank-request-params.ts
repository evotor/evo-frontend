import {DadataBankStatus, DadataBankType} from '../enums';
import {DadataCompanyLocation} from "./dadata-company-location";

export interface DadataFindBankRequestParams {
    count?: number;
    status?: DadataBankStatus[];
    type?: DadataBankType[];
    locations: DadataCompanyLocation[];
    locations_boost: DadataCompanyLocation[];
}
