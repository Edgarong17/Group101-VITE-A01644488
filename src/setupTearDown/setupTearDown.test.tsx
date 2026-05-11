import { describe, expect, test, afterEach, beforeEach, beforeAll, afterAll } from "vitest";

let db;

async function connectToDatabase() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Database Connected');
        }, 1000);
    });
}

describe('Test afterall and beforeAll', () => {
    beforeAll(async () => {
        db = await connectToDatabase();
    });

    afterAll(async () => {
        await db.close();
    });

    test('can query users', async () => {
        const users = await db.query('SELECT * FROM users');
        expect(users.length).toBeGreaterThan(0);
    });

    test('can query products', async () => {
        const products = await db.query('SELECT * FROM products');
        expect(products.length).toBeGreaterThan(0);
    });
});

describe('setupTearDown', () => { 
    let items: string[]

    beforeEach(() => {
        items = ['item1', 'item2', 'item3'];
    });

    afterEach(() => {
        items = [];
    });

    test('should run before each test', () => {
        expect(items).toEqual(['item1', 'item2', 'item3']);
    });

    test('should add an item', () => {        
        items.push('item4');
        expect(items).toHaveLength(4);
    });
})