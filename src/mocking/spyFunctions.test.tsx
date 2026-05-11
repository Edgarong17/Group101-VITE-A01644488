import { describe, test, vi, expect, afterEach, beforeEach } from "vitest";
import { calculator } from "./mocking";



describe('Spy functions examples', () => {
    // Limpia el contexto de los mocks después de cada test
    afterEach(() => {
        vi.restoreAllMocks();
    });

    beforeEach(() => {
        vi.restoreAllMocks(); // Limpia todo
        vi.resetAllMocks(); // Limpia el historico de llamadas, pero mantiene la implementación del mock
        vi.clearAllMocks(); //Limpia el historico, no las llamadas especificas (mock implementation, mock return value, etc)
    });

    test('spying on add function', () => {
        const spy = vi.spyOn(calculator, 'add');

        expect(calculator.add(1, 3)).toBe(4);
        // We use spy to observe calls
        expect(spy).toHaveBeenCalledWith(1, 3);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});