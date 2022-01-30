import { useMemo } from "react";
import { CountryType, ConvertedCountryType } from "../types/country";

type CurrenciesObjType = { [key: string]: number | "NaN" };

const useConvertedCountryList = (
  currencies: CurrenciesObjType,
  countryList: CountryType[],
  SEKValue: number
) => {
  const convertedCountryList = useMemo(() => {
    if (SEKValue && currencies) {
      const countryListClone: ConvertedCountryType[] = [];
      countryList.forEach((country) => {
        const convertedCurrencies: CurrenciesObjType = {};
        const newCountryObj: ConvertedCountryType = {
          name: country.name,
          population: country.population,
          currencies: country.currencies,
        };
        country.currencies?.length &&
          country.currencies.forEach((currency) => {
            convertedCurrencies[currency] = currencies[currency]
              ? +(SEKValue * +currencies[currency]).toFixed(2)
              : "NaN";
          });
        newCountryObj.convertedCurrencies = convertedCurrencies;
        countryListClone.push(newCountryObj);
      });

      return countryListClone;
    } else {
      return countryList;
    }
  }, [countryList, SEKValue, currencies]);

  return convertedCountryList || [];
};

export default useConvertedCountryList;
