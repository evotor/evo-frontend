import { DadataFio } from './dadata-fio';
import { DadataFounderShare } from './dadata-founder-share';

export interface DadataFounder {
    fio: DadataFio;
    inn: string;
    share: DadataFounderShare;
    type: string;
}
