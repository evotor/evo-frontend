import {DadataBankStatus, DadataBankType} from '../enums';
import {DadataAddressSuggestion} from './dadata-address-suggestion';
import {DadataSuggestion} from './dadata-suggestion';

export interface DadataBankSuggestion {
    bic?: string;
    swift?: string;
    innFd?: string;
    kpp?: string;
    registration_number?: string; // Регистрационный номер в ЦБ РФ
    correspondent_account?: string; // Корреспондентский счет в ЦБ РФ
    name?: {
        payment?: string; // платежное наименование
    };
    address?: DadataSuggestion<DadataAddressSuggestion>;
    opf?: {
        type?: DadataBankType;
    };
    payment_city?: string;
    state?: {
        status?: DadataBankStatus;
    };
}
