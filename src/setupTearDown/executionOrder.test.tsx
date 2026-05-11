// probar beforeAll, afterAll, beforeEach, afterEach execution order
import { describe, expect, test, afterEach, beforeEach, beforeAll, afterAll } from "vitest";

const order: string[] = [];

beforeEach(() => {
    order.push('beforeEachExterno');
});

afterEach(() => {
    order.push('afterEachExterno');
});


describe('execution order', () => {
    

    beforeAll(() => {
        order.push('beforeAll');
    });

    beforeEach(() => {
        order.push('beforeEach');
    });

    afterEach(() => {
        order.push('afterEach');
    });

    afterAll(() => {
        order.push('afterAll');

        console.log(order);
    });

    test('test1', () => {
        const expectOrder = ['beforeAll', 'beforeEachExterno', 'beforeEach'];
        expect(order).toEqual(expectOrder);
    });

    test('test2', () => {
        const expectOrder = ['beforeAll', 'beforeEachExterno', 'beforeEach', 'afterEach', 'afterEachExterno', 'beforeEachExterno', 'beforeEach'];
        expect(order).toEqual(expectOrder);
    });
});