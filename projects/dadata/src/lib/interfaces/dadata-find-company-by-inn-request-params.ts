import {DadataCompanyBranchType, DadataCompanyStatus, DadataCompanyType} from '../enums';

export interface DadataFindCompanyByInnRequestParams {
    count?: number;
    kpp?: string;
    type?: DadataCompanyType;
    branch_type?: DadataCompanyBranchType;
    status?: DadataCompanyStatus[]
}
