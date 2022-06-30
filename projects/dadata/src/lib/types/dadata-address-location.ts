export type DadataAddressLocation =
    | {
          kladr_id: string;
      }
    | {
          country_iso_code: string;
          region_iso_code?: string;
      }
    | {
          region: string;
      }
    | {
          country: string;
      }
    | {
          fias_id: string;
      }
    | {
          region_fias_id: string;
      }
    | {
          area_fias_id: string;
      }
    | {
          city_fias_id: string;
      }
    | {
          settlement_fias_id: string;
      }
    | {
          street_fias_id: string;
      }
    | {
          region_type_full: string;
      }
    | {
          area_type_full: string;
      }
    | {
          city_type_full: string;
      }
    | {
          settlement_type_full: string;
      }
    | {
          street_type_full: string;
      };
