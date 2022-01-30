import { useState } from "react";
import SelectedCountries from "../../components/SelectedCountries";
import SearchCountry from "../../components/SearchCountry";
import { CountryType } from "../../types/country";

const CountryList = () => {
  const [selectedCountryList, setSelectedCountryList] = useState<CountryType[]>(
    []
  );

  const addCountry = (country: CountryType) => {
    const countries = [...selectedCountryList];
    if (countries.findIndex((conItem) => conItem.name === country.name) < 0) {
      countries.push(country);
    }
    setSelectedCountryList(countries);
  };

  const removeItem = (name: string) => {
    const countries = selectedCountryList.filter(
      (conItem) => conItem.name !== name
    );
    setSelectedCountryList(countries);
  };

  return (
    <div>
      <SearchCountry setSelectedCountry={(country) => addCountry(country)} />
      <SelectedCountries
        countryList={selectedCountryList}
        removeItem={(name) => removeItem(name)}
      />
    </div>
  );
};

export default CountryList;
