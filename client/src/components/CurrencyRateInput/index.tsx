import { FC, useRef, useCallback, RefObject, KeyboardEvent } from "react";
import { Button } from "../Elements/Button";
import { Input } from "../Elements/Input";

type Props = {
  setSEKNumber: (val: number) => void;
};

const CurrencyRateInput: FC<Props> = ({ setSEKNumber }) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const keyUpHandler = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLInputElement;
      if (e.key === "Enter") {
        setSEKNumber(+(target.value || 0));
      }
    },
    [setSEKNumber]
  );

  const clickHandler = useCallback(() => {
    setSEKNumber(+(inputRef?.current?.value || 0));
  }, [setSEKNumber]);

  return (
    <div>
      <Input
        style={{ marginRight: 5, width: 70 }}
        type="number"
        ref={inputRef}
        onKeyUp={keyUpHandler}
      />
      <Button onClick={clickHandler}>Convert SEK</Button>
    </div>
  );
};

export default CurrencyRateInput;
