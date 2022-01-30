import { gql } from "@apollo/client";

export const QUERY_COUNTRY_LIST = gql`
  query CountryItem($name: String!) {
    country(name: $name) {
      name
      population
      currencies
    }
  }
`;
