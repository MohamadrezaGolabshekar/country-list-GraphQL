import {
  FC,
  useRef,
  useState,
  useCallback,
  RefObject,
  KeyboardEvent,
} from "react";
import { useCountryItemQuery } from "../../generated/graphql";
import ErrorBox from "../Elements/ErrorBox";
import { CountryType } from "../../types/country";
import { Input } from "../Elements/Input";
import { Button } from "../Elements/Button";
import { Card } from "../Elements/Card";
import { Container } from "./style";
import { numberWithCommas } from "../../utils/numberFormatter";

type Props = {
  setSelectedCountry: (country: CountryType) => void;
};

const SearchCountry: FC<Props> = ({ setSelectedCountry }) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const [countryName, setCountryName] = useState("");
  const { data, error, loading } = useCountryItemQuery({
    variables: { name: countryName },
    skip: !countryName,
  });

  const search = useCallback(() => {
    setCountryName(inputRef?.current?.value || "");
  }, []);

  const keyUpHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        search();
      }
    },
    [search]
  );

  return (
    <Container>
      <div>
        <Input
          style={{ marginRight: 10 }}
          type="text"
          ref={inputRef}
          onKeyUp={keyUpHandler}
          inputSize="medium"
        />
        <Button onClick={search} size="medium" disabled={loading}>
          {loading ? "loading" : "Search"}
        </Button>
      </div>

      {error && (
        <ErrorBox message={error?.networkError?.message || error?.message} />
      )}

      {!loading && data && (
        <Card
          style={{
            marginTop: 30,
            position: "absolute",
            top: 35,
            zIndex: 10,
            width: "100%",
          }}
        >
          <div>Name: {data.country?.name}</div>
          <div>
            Population: {numberWithCommas(data.country?.population)} people
          </div>
          <div>Currencies: {data.country?.currencies?.join(", ")}</div>

          <Button
            style={{ marginTop: 20 }}
            onClick={() => {
              setSelectedCountry(data.country as CountryType);
              setCountryName("");
              if (inputRef.current) {
                inputRef.current.value = "";
                inputRef.current.focus();
              }
            }}
          >
            Add to your list +
          </Button>
        </Card>
      )}
    </Container>
  );
};

export default SearchCountry;
