/* Exercise 06: React Testing Library - UserAccount /
/
    In this exercise, you will be testing the UserAccount component using React Testing Library.
    The UserAccount component receives a user prop and displays the user's name and edit button.
    You will write tests to check if the component renders correctly based on the user prop.
    1) Test if the UserAccount component renders correctly with a user prop.
    2) Test if the Edit button is displayed only when the user is a manager.
    3) Test if the Edit button is not displayed when the user is not a manager.
    Remember to prepare user test data per test.
    */

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserAccount, type IUserAccount } from "./UserAccount";
import "@testing-library/jest-dom";

describe("User Account", () => {
    test("It should render the UserAccount component", () =>{
        const mockData: IUserAccount = { id:1, name: "Edgar", isManager: true };
        render(<UserAccount user={mockData} />);

        const currentUser = screen.getByTestId("Employee-Name");
        expect(currentUser.textContent).toBe("Name: Edgar")
    });
    test("Edit Button is render for Manager Only", () =>{
        const mockDataManager: IUserAccount = { id:1, name: "Edgar", isManager: true };
        render(<UserAccount user={mockDataManager} />);

        const currentUser = screen.getByTestId("Employee-Name");
        expect(currentUser.textContent).toBe("Name: Edgar")
    })
})