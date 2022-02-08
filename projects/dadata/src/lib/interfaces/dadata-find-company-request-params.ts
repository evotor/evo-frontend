import { DadataCompanyType } from '../enums/dadata-company-type';
import { DadataCompanyBranchType } from '../enums/dadata-company-branch-type';

export interface DadataFindCompanyRequestParams {
    count?: number;
    kpp?: string;
    type?: DadataCompanyType;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    branch_type?: DadataCompanyBranchType[];
}
