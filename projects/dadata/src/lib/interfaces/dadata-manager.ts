import { DadataFio } from './dadata-fio';

export interface DadataManager {
    fio: DadataFio;
    inn: string;
    post: string;
    type: string;
}
