import { FC, useState } from "react";
import CountryItem from "./Item";
import CurrencyRateInput from "../CurrencyRateInput";
import { useCurrencyRateQuery } from "../../generated/graphql";
import { CountryType } from "../../types/country";
import useConvertedCountryList from "../../hooks/useConvertedCountryList";
import { Button } from "../Elements/Button";
import { TitleContainer } from "./style";

type Props = {
  countryList: CountryType[];
  removeItem: (name: string) => void;
};

const SelectedCountries: FC<Props> = ({ countryList, removeItem }) => {
  const [SEKNumber, setSEKNumber] = useState(0);

  const { data, error, loading, refetch } = useCurrencyRateQuery({
    skip: SEKNumber === 0,
  });

  const convertedCountryList = useConvertedCountryList(
    data?.currency?.currencies,
    countryList,
    SEKNumber
  );

  return countryList.length ? (
    <div>
      <TitleContainer>
        <h3>Selected countries</h3>

        {error ? (
          <Button onClick={() => refetch()}>
            Error happened {loading ? "Loading" : "(try again)"}
          </Button>
        ) : (
          <CurrencyRateInput setSEKNumber={setSEKNumber} />
        )}
      </TitleContainer>
      {convertedCountryList.map((country) => (
        <CountryItem
          SEKNumber={SEKNumber}
          key={country.name}
          country={country}
          removeItem={removeItem}
        />
      ))}
    </div>
  ) : null;
};

export default SelectedCountries;
