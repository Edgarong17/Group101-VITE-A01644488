import { useState } from "react";
import { Buttons } from "./Buttons";

type CounterProps = {
  initialCount?: number;
};

interface ICounterProps {
  initialCount?: number;
}

const dataTestId: string = "Counter";

export default function Counter() {
  const [count, setCount] = useState(0);

  function reset() {
    setCount(0);
  }

  const handleIncrement = () => setCount((c) => c + 1);
  const handleDecrement = () => setCount((c) => c - 1);

  return (
    <div>
      <header>
        <h1 data-testid="Counter-Header">This is a Counter</h1>
      </header>

      <h2 data-testid="Counter-Value">{count}</h2>

      <div>
        <div>
          <button
            data-testid="Counter-IncrementBtn"
            name="increment"
            onClick={handleIncrement}
          >
            Increment
          </button>

          <button
            data-testid="Counter-ResetBtn"
            name="reset"
            onClick={reset}
          >
            Reset
          </button>
        </div>

        <button
          data-testid="Counter-DecrementBtn"
          name="decrement"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
