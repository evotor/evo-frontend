import { DadataFounderShareType } from '../enums/dadata-founder-share-type';

export interface DadataFounderShare {
    type: DadataFounderShareType;
    value?: number;
    numerator?: number;
    denominator?: number;
}
