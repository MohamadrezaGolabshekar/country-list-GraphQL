import { gql } from "@apollo/client";

export const QUERY_COUNTRY_LIST = gql`
  query CurrencyRate {
    currency {
      currencies
    }
  }
`;
