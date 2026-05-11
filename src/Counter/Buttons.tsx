import type { Dispatch, SetStateAction } from "react";

type ButtonsProps = {
  dataTestId: string;
  setCounter: Dispatch<SetStateAction<number>>;
};

export function Buttons({ dataTestId, setCounter }: ButtonsProps) {
  return (
    <div>
      <button
        data-testid={`${dataTestId}-IncrementBtn`}
        name="increment"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Increment
      </button>

      <button
        data-testid={`${dataTestId}-DecrementBtn`}
        name="decrement"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        Decrement
      </button>
    </div>
  );
}