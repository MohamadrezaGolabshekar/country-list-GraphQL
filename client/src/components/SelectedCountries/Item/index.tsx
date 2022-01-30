import { FC } from "react";
import { ConvertedCountryType } from "../../../types/country";
import { Card } from "../../Elements/Card";
import { Button } from "../../Elements/Button";
import { numberWithCommas } from "../../../utils/numberFormatter";

type Props = {
  SEKNumber: number;
  country: ConvertedCountryType;
  removeItem: (name: string) => void;
};

const Item: FC<Props> = ({ country, removeItem, SEKNumber }) => {
  return (
    <Card>
      <div>Name: {country.name}</div>
      <div>Population: {numberWithCommas(country.population)} people</div>
      <div>
        {country.convertedCurrencies
          ? Object.keys(country.convertedCurrencies).map((currency) => (
              <div key={currency}>
                {currency}{" "}
                {numberWithCommas(country?.convertedCurrencies?.[currency])} =
                SEK {numberWithCommas(SEKNumber)}
              </div>
            ))
          : country.currencies?.join(", ")}
      </div>
      <Button
        style={{ marginTop: 10 }}
        onClick={() => removeItem(country.name || "")}
      >
        Remove
      </Button>
    </Card>
  );
};

export default Item;
