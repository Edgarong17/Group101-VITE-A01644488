import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Buttons } from "./Buttons";
import "@testing-library/jest-dom";
import type { ReactElement } from "react";
import userEvent from "@testing-library/user-event";

type RenderOptions = Parameters<typeof render>[1];

function setupUserEvent(ui: ReactElement, options?: RenderOptions) {
  return {
    ...render(ui, options),
    user: userEvent.setup(),
  };
}

function createCounterHarness(initial = 0) {
  let counter = initial;

  const setCounter = (update: number | ((prev: number) => number)) => {
    counter = typeof update === "function" ? update(counter) : update;
  };

  return {
    get counter() {
      return counter;
    },
    setCounter,
  };
}

describe("Buttons", () => {
  test("it should render the Buttons component", () => {
    render(<Buttons dataTestId="Counter" setCounter={() => {}} />);
    const incrementBtn = screen.getByTestId("Counter-IncrementBtn");
    expect(incrementBtn).toBeInTheDocument();
  });

  test("it should increment the counter", async () => {
    const harness = createCounterHarness(0);

    const { user } = setupUserEvent(
      <Buttons dataTestId="Counter" setCounter={harness.setCounter} />
    );

    const incrementBtn = screen.getByRole("button", { name: "Increment" });

    expect(harness.counter).toBe(0);
    await user.click(incrementBtn);
    expect(harness.counter).toBe(1);
  });

  test("it should decrement the counter", async () => {
    const harness = createCounterHarness(0);

    const { user } = setupUserEvent(
      <Buttons dataTestId="Counter" setCounter={harness.setCounter} />
    );

    const decrementBtn = screen.getByRole("button", { name: "Decrement" });

    expect(harness.counter).toBe(0);
    await user.click(decrementBtn);
    expect(harness.counter).toBe(-1);
  });

  test("it should increment and decrement the counter", async () => {
    const harness = createCounterHarness(0);
    const { user } = setupUserEvent(
      <Buttons dataTestId="Counter" setCounter={harness.setCounter} />
    );
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });

    expect(harness.counter).toBe(0);
    await user.click(incrementBtn);
    expect(harness.counter).toBe(1);
    await user.click(decrementBtn);
    expect(harness.counter).toBe(0);
  });

});




