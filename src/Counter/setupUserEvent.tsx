import { fireEvent, render, screen } from "@testing-library/react";
import type { ReactElement } from "react";
import Counter from "./Counter";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

type RenderOptions = Parameters<typeof render>[1];

function setupUserEvent(ui: ReactElement, options: RenderOptions) {
    return {
        ...render(ui, options),
        user: userEvent.setup(),
    };
}