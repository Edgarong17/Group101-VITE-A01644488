import { describe, test, expect, it } from "vitest";
import { shoppingList, taskData } from "../constants";
import { compileCode } from "../utils";


describe("matchers example files", () => {
    test.skip("toBe matcher", () => {
        // toBe para valores primitivos, compara la referencia ejemplo: string, number, boolean
        expect(2 + 2).toBe(4); // checa la referencia, no el valor
    });

    test.skip("object matcher", () => {
        // toEqual para objetos, compara la estructura del objeto, no la referencia ej arrays, sets, maps, objetos literales
        const obj1 = { name: "John", age: 30 };
        const obj2 = { name: "John", age: 30 };
        expect(obj1).toEqual(obj2); //cheaca la estructura del objeto, no la referencia
    });

    test.skip("compare decimals", () => {
        // toBeCloseTo para comparar números decimales, ya que pueden tener problemas de precisión
        const result = 0.2 + 0.1;
        expect(result).toBeCloseTo(0.3); // compara los números decimales con una tolerancia
        expect(result).approximately(0.3, 5); // compara los números decimales con una tolerancia de 5 dígitos decimales
    });

    test.skip("compare decimals", () => {
        const val = 5;
        // toBeGreaterThan para comparar si un número es mayor que otro
        expect(val).toBeGreaterThan(3); // compara si 5 es mayor que 3
        expect(val).toBeGreaterThanOrEqual(5); // compara si 5 es mayor o igual que 5
        expect(val).toBeLessThan(10); // compara si 5 es menor que 10
        expect(val).toBeLessThanOrEqual(5); // compara si 5 es menor o igual que 5
    });

    it.skip("truthy and false", () => {
        const a = null;
        const b = undefined;
        const c = "hello";
        const d = "";
        const e = false;
        const f = null;
        /*
        toBeNull para verificar si un valor es null
        toBeUndefined para verificar si un valor es undefined
        toBeTruthy para verificar si un valor es truthy (cualquier valor que no sea false, 0, '', null, undefined, NaN)
        toBeFalsy para verificar si un valor es falsy (false, 0, '', null, undefined, NaN)
        tobeDefined para verificar si un valor es definido (no es undefined)
         */
        expect(a).toBeNull();
        expect(b).toBeUndefined();
        expect(c).toBeTruthy();
        expect(d).toBeFalsy();
        expect(e).toBeFalsy();
        expect(f).not.toBeTruthy(); 
    });


    test.skip("There is no I in team", () => {
        const errorMessage = "This is a error message, reach out to support";
        const team = "team";
        expect(team).not.toContain("I");
        expect(team).not.toMatch(/I/); // para regex, no debe contener la letra I
        expect(errorMessage).toMatch(/error/); // el mensaje de error debe contener la palabra error
    });

    test.skip("Shiping list", () => {
        expect(shoppingList).toContain('milk');
    });


    

    test.skip("assignToMe", () => {
        expect (taskData.assign).toMatch(/Edgar/);
        expect (taskData.priority).toBeGreaterThan(1);

        expect(taskData).toMatchObject({
            assign: "Edgar",
            priority: 2
        });

        expect(taskData).toHaveProperty('assign');
    });

    test.skip('Compiling an example string',() => {
        expect(() => compileCode('')).toThrow( 'Cannot compile empty string');
        expect(() => compileCode('')).toThrow();

    });

    test('should compare expected fields', () => {
         expect.soft(() => compileCode('')).toThrow( 'Cannot compile empty string');
        expect.soft(() => compileCode('')).toThrow();
    })
});
