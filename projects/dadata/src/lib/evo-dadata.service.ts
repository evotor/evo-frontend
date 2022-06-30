import {Inject, Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EVO_DADATA_SERVICE_ENDPOINTS} from './constants/evo-dadata-service-endpoints';
import {EVO_DADATA_PROXY_BASE_URL} from './tokens/evo-dadata-proxy-base-url';
import {DadataCompanySuggestion} from './interfaces/dadata-company-suggestion';
import {DadataBankSuggestion} from './interfaces/dadata-bank-suggestion';
import {DadataSuggestionsResponse} from './interfaces/dadata-suggestions-response';
import {DadataAddressSuggestion} from './interfaces/dadata-address-suggestion';
import {DadataFindCompanyByInnRequestParams} from './interfaces/dadata-find-company-by-inn-request-params';
import {DadataFindCompanyRequestParams} from './interfaces/dadata-find-company-request-params';
import {DadataFindBankRequestParams} from './interfaces/dadata-find-bank-request-params';
import {EvoDadataServiceEndpoints} from './types/evo-dadata-service-endpoints';
import {DadataCountrySuggestion} from './interfaces/dadata-country-suggestion';
import {DadataAddressRequestParams} from './interfaces';

@Injectable()
export class EvoDadataService {
    constructor(
        private readonly http: HttpClient,
        @Inject(EVO_DADATA_PROXY_BASE_URL) private readonly baseUrl: string,
    ) {}

    /**
     * Get company by strict INN
     *
     * @see https://dadata.ru/api/find-party/
     */
    // eslint-disable-next-line max-len
    findCompanyByInn(
        inn: string,
        params?: DadataFindCompanyByInnRequestParams,
    ): Observable<DadataSuggestionsResponse<DadataCompanySuggestion>> {
        const body = Object.assign(
            {
                query: inn,
            },
            params || {},
        );
        return this.http.post<DadataSuggestionsResponse<DadataCompanySuggestion>>(
            this.getEndpoint('findPartyById'),
            body,
        );
    }

    /**
     * Get country by fields: code, alfa2, alfa3
     *
     * @see https://dadata.ru/api/suggest/country/
     */
    // eslint-disable-next-line max-len
    findCountryByCode(
        code: string,
        params?: DadataFindCompanyByInnRequestParams,
    ): Observable<DadataSuggestionsResponse<DadataCompanySuggestion>> {
        const body = Object.assign(
            {
                query: code,
            },
            params || {},
        );
        return this.http.post<DadataSuggestionsResponse<DadataCompanySuggestion>>(
            this.getEndpoint('findPartyById'),
            body,
        );
    }

    /**
     * Find companies by partial INN or name
     *
     * @see https://dadata.ru/api/suggest/party/
     */
    // eslint-disable-next-line max-len
    findCompany(
        query: string,
        params?: DadataFindCompanyRequestParams,
    ): Observable<DadataSuggestionsResponse<DadataCompanySuggestion>> {
        const body = Object.assign(
            {
                query,
            },
            params || {},
        );
        return this.http.post<DadataSuggestionsResponse<DadataCompanySuggestion>>(
            this.getEndpoint('suggestParty'),
            body,
        );
    }

    /**
     * Find banks by partial BIC, SWIFT or INN
     *
     * @see https://dadata.ru/api/suggest/bank/
     */
    findBank(
        query: string,
        params?: DadataFindBankRequestParams,
    ): Observable<DadataSuggestionsResponse<DadataBankSuggestion>> {
        const body = Object.assign(
            {
                query,
            },
            params || {},
        );
        return this.http.post<DadataSuggestionsResponse<DadataBankSuggestion>>(this.getEndpoint('suggestBank'), body);
    }

    /**
     * Address suggestions
     *
     * @see https://dadata.ru/api/suggest/address/
     */
    findAddress(
        query: string,
        params?: DadataAddressRequestParams,
    ): Observable<DadataSuggestionsResponse<DadataAddressSuggestion>> {
        const body = Object.assign({
            query,
        });
        return this.http.post<DadataSuggestionsResponse<DadataAddressSuggestion>>(
            this.getEndpoint('suggestAddress'),
            body,
        );
    }

    /**
     * Suggest country
     *
     * @see https://dadata.ru/api/suggest/country/
     */
    findCountry(query: string): Observable<DadataSuggestionsResponse<DadataCountrySuggestion>> {
        const body = Object.assign({
            query,
        });
        return this.http.post<DadataSuggestionsResponse<DadataCountrySuggestion>>(
            this.getEndpoint('suggestCountry'),
            body,
        );
    }

    private getEndpoint(key: keyof EvoDadataServiceEndpoints, ...params: any[]): string {
        return `${this.baseUrl}${EVO_DADATA_SERVICE_ENDPOINTS[key](...params)}`;
    }
}
