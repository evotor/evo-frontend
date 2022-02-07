import { DadataManager } from './dadata-manager';
import { DadataFounder } from './dadata-founder';
import { DadataCompanyType } from '../enums/dadata-company-type';
import { DadataAddressSuggestion } from './dadata-address-suggestion';
import { DadataCompanyStatus } from '../enums/dadata-company-status';
import { DadataSuggestion } from './dadata-suggestion';

export interface DadataCompanySuggestion {
    managers?: DadataManager[];
    founders?: DadataFounder[];
    name?: {
        full_with_opf?: string;
        latin?: string;
        short_with_opf?: string;
    };
    fio?: {
        name: string;
        surname: string;
        patronymic: string;
    };
    inn: string;
    kpp?: string;
    ogrn?: string;
    okved?: string;
    okpo?: string;
    okato?: string;
    type?: DadataCompanyType;
    address?: DadataSuggestion<DadataAddressSuggestion>;
    state?: {
        status: DadataCompanyStatus;
    };
}
