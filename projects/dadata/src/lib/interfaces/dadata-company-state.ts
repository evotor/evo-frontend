import {DadataCompanyStatus} from "../enums";

/**
 * @see https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669122
 */
export interface DadataCompanyState {
    actuality_date?: number;
    registration_date?: number;
    liquidation_date?: number;
    code?: string;
    status: DadataCompanyStatus;
}
