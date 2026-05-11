import React, {act} from "react";
import { createRoot } from "react-dom/client";
import { describe, test, expect } from "vitest";
import Counter from "./Counter";


describe("Avoid testing like this", () => {
    test('Test Counter with React DOM', () => {
        const div = document.createElement('div');

        const root = createRoot(div);
        act(() => {
            // Use the createRoot to renedr the <Counter /> to the div
            root.render(<Counter />);
        });

        const [increment, reset] = div.querySelectorAll('button');
        const count = (div.firstChild as HTMLElement).querySelector('h2');

        expect(count!.textContent).toBe('0');
        act(() => increment.click());
        expect(count!.textContent).toBe('1');
    });

    test('Test Counter with React DOM Simulate mouse click', () => {
        const div = document.createElement('div');

        const root = createRoot(div);
        act(() => {
            // Use the createRoot to renedr the <Counter /> to the div
            root.render(<Counter />);
        });

        const [increment, reset] = div.querySelectorAll('button');
        const count = (div.firstChild as HTMLElement).querySelector('h2');

        //MouseEvent
        const incrementClickEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            button: 0,
        });
        expect(count!.textContent).toBe('0');
        act(() => increment.dispatchEvent(incrementClickEvent));
        expect(count!.textContent).toBe('1');
    })
})