import {DadataCompanyStatus, DadataCompanyType} from '../enums';
import {DadataCompanyLocation} from "./dadata-company-location";

export interface DadataFindCompanyRequestParams {
    count?: number;
    type?: DadataCompanyType;
    status?: DadataCompanyStatus[];
    okved?: string[];
    locations: DadataCompanyLocation[];
    locations_boost: DadataCompanyLocation[];
}
