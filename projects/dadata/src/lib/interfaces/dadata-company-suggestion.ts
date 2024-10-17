import {DadataManager} from './dadata-manager';
import {DadataFounder} from './dadata-founder';
import {DadataCompanyBranchType, DadataCompanyType} from '../enums';
import {DadataAddressSuggestion} from './dadata-address-suggestion';
import {DadataSuggestion} from './dadata-suggestion';
import {DadataCompanyName} from "./dadata-company-name";
import {DadataCompanyFio} from "./dadata-company-fio";
import {DadataCompanyManagement} from "./dadata-company-management";
import {DadataCompanyOpf} from "./dadata-company-opf";
import {DadataCompanyState} from "./dadata-company-state";

/**
 * @see https://confluence.hflabs.ru/pages/viewpage.action?pageId=204669122
 */
export interface DadataCompanySuggestion {
    address?: DadataSuggestion<DadataAddressSuggestion>;
    branch_count?: number;
    branch_type?: DadataCompanyBranchType;
    fio?: DadataCompanyFio;
    inn: string;
    kpp?: string;
    ogrn?: string;
    ogrn_date?: number;
    management?: DadataCompanyManagement;
    name?: DadataCompanyName;
    founders?: DadataFounder[];
    okato?: string;
    oktmo?: string;
    okpo?: string;
    okogu?: string;
    okfs?: string;
    okved?: string;
    okved_type?: string;
    opf?: DadataCompanyOpf;
    state?: DadataCompanyState;
    managers?: DadataManager[];
    type?: DadataCompanyType;
}
