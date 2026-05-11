export function getNumber() {
    return 2000;
}

export const calculator = {
    add(a: number,b: number): number {
        return a + b;
    },
    subtract(a: number,b: number): number {
        return a - b;
    },
    multiply(a: number,b: number): number {
        return a * b;
    },
    divide(a: number,b: number): number {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}

export function getUser() {
    return 'Alice';
}

export const variable = 'Example';