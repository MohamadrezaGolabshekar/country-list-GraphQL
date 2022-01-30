import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Country = {
  __typename?: "Country";
  currencies?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name?: Maybe<Scalars["String"]>;
  population?: Maybe<Scalars["Int"]>;
};

export type Currency = {
  __typename?: "Currency";
  currencies?: Maybe<Scalars["JSONObject"]>;
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  country?: Maybe<Country>;
  currency?: Maybe<Currency>;
};

export type RootQueryTypeCountryArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type CountryItemQueryVariables = Exact<{
  name: Scalars["String"];
}>;

export type CountryItemQuery = {
  __typename?: "RootQueryType";
  country?:
    | {
        __typename?: "Country";
        name?: string | null | undefined;
        population?: number | null | undefined;
        currencies?: Array<string | null | undefined> | null | undefined;
      }
    | null
    | undefined;
};

export type CurrencyRateQueryVariables = Exact<{ [key: string]: never }>;

export type CurrencyRateQuery = {
  __typename?: "RootQueryType";
  currency?:
    | { __typename?: "Currency"; currencies?: any | null | undefined }
    | null
    | undefined;
};

export const CountryItemDocument = gql`
  query CountryItem($name: String!) {
    country(name: $name) {
      name
      population
      currencies
    }
  }
`;

/**
 * __useCountryItemQuery__
 *
 * To run a query within a React component, call `useCountryItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryItemQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCountryItemQuery(
  baseOptions: Apollo.QueryHookOptions<
    CountryItemQuery,
    CountryItemQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CountryItemQuery, CountryItemQueryVariables>(
    CountryItemDocument,
    options
  );
}
export function useCountryItemLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CountryItemQuery,
    CountryItemQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CountryItemQuery, CountryItemQueryVariables>(
    CountryItemDocument,
    options
  );
}
export type CountryItemQueryHookResult = ReturnType<typeof useCountryItemQuery>;
export type CountryItemLazyQueryHookResult = ReturnType<
  typeof useCountryItemLazyQuery
>;
export type CountryItemQueryResult = Apollo.QueryResult<
  CountryItemQuery,
  CountryItemQueryVariables
>;
export const CurrencyRateDocument = gql`
  query CurrencyRate {
    currency {
      currencies
    }
  }
`;

/**
 * __useCurrencyRateQuery__
 *
 * To run a query within a React component, call `useCurrencyRateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrencyRateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrencyRateQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrencyRateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrencyRateQuery,
    CurrencyRateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrencyRateQuery, CurrencyRateQueryVariables>(
    CurrencyRateDocument,
    options
  );
}
export function useCurrencyRateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrencyRateQuery,
    CurrencyRateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CurrencyRateQuery, CurrencyRateQueryVariables>(
    CurrencyRateDocument,
    options
  );
}
export type CurrencyRateQueryHookResult = ReturnType<
  typeof useCurrencyRateQuery
>;
export type CurrencyRateLazyQueryHookResult = ReturnType<
  typeof useCurrencyRateLazyQuery
>;
export type CurrencyRateQueryResult = Apollo.QueryResult<
  CurrencyRateQuery,
  CurrencyRateQueryVariables
>;
