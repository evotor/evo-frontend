export type EvoDadataServiceEndpoints = {
    suggestAddress: (...params: any[]) => string;
    suggestParty: (...params: any[]) => string;
    suggestBank: (...params: any[]) => string;
    suggestCountry: (...params: any[]) => string;
    findPartyById: (...params: any[]) => string;
    findCountryById: (...params: any[]) => string;
};
