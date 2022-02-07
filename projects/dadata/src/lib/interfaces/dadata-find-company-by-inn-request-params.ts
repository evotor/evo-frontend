import { DadataCompanyType } from '../enums/dadata-company-type';
import { DadataCompanyBranchType } from '../enums/dadata-company-branch-type';

export interface DadataFindCompanyByInnRequestParams {
    count?: number;
    kpp?: string;
    type?: DadataCompanyType;
    branch_type?: DadataCompanyBranchType;
}
