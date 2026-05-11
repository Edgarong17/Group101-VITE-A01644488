import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import type { ReactElement } from "react";

type RenderOptions = Parameters<typeof render>[1];

function setupUserEvent(ui: ReactElement, options?: RenderOptions) {
  return {
    ...render(ui, options),
    user: userEvent.setup(),
  };
}

describe("Counter", () => {
  test("it should render the Counter component", () => {
    render(<Counter />);
    const currentCount = screen.getByTestId("Counter-Value");
    expect(currentCount.textContent).toBe("0");
  });

  test("it should render the Counter component with jest-dom", () => {
    render(<Counter />);
    const currentCount = screen.getByTestId("Counter-Value");
    expect(currentCount).toHaveTextContent("0");
  });

  test("it should increment the counter", async () => {
    const { user } = setupUserEvent(<Counter />);

    const currentCount = screen.getByTestId("Counter-Value");
    const incrementBtn = screen.getByRole("button", { name: "Increment" });

    expect(currentCount).toHaveTextContent("0");
    await user.click(incrementBtn);
    expect(currentCount).toHaveTextContent("1");
  });

  test("it should reset the counter", async () => {
    const { user } = setupUserEvent(<Counter />);

    const currentCount = screen.getByTestId("Counter-Value");
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const resetBtn = screen.getByRole("button", { name: "Reset" });

    expect(currentCount).toHaveTextContent("0");
    await user.click(incrementBtn);
    expect(currentCount).toHaveTextContent("1");
    await user.click(resetBtn);
    expect(currentCount).toHaveTextContent("0");
  });

  test("it should decrement the counter", async () => {
    render(<Counter />);
    const user = userEvent.setup();

    const currentCount = screen.getByTestId("Counter-Value");
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });

    expect(currentCount).toHaveTextContent("0");
    await user.click(decrementBtn);
    expect(currentCount).toHaveTextContent("-1");
  });

  test("it should decrement after incrementing (1 -> 0)", async () => {
    render(<Counter />);
    const user = userEvent.setup();

    const currentCount = screen.getByTestId("Counter-Value");
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementBtn);
    expect(currentCount).toHaveTextContent("1");

    await user.click(decrementBtn);
    expect(currentCount).toHaveTextContent("0");
  });
});

