import {EvoDadataServiceEndpoints} from '../types/evo-dadata-service-endpoints';

const path = `/suggestions/api/4_1/rs`;

export const EVO_DADATA_SERVICE_ENDPOINTS: EvoDadataServiceEndpoints = {
    suggestAddress: () => `${path}/suggest/address`,
    suggestParty: () => `${path}/suggest/party`,
    suggestBank: () => `${path}/suggest/bank`,
    suggestCountry: () => `${path}/suggest/country`,
    findPartyById: () => `${path}/findById/party`,
    findCountryById: () => `${path}/findById/country`,
};
