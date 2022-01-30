export type CountryType = {
  name?: string;
  population?: number;
  currencies?: string[];
};

export interface ConvertedCountryType extends CountryType {
  convertedCurrencies?: { [key: string]: number | "NaN" };
}
