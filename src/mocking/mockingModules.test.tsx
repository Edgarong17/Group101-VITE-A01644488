import { describe, test, vi, expect } from "vitest";
import { getUser, variable } from "./mocking";



// import ('./mocking')
vi.mock('./mocking', () => {
    return {
        getUser: vi.fn(),
        variable: 'Mock'
    }
})

describe('Mocking modules examples', () => {
    test('mock a module', () => {
        vi.mocked(getUser).mockReturnValue('Mauricio');
        const user = getUser();
        expect(user).toBe('Mauricio');
        expect (variable).toBe('Mock');
    });
});