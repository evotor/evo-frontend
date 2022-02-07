import { DadataSuggestion } from './dadata-suggestion';

export interface DadataSuggestionsResponse<T> {
    suggestions: DadataSuggestion<T>[];
}
