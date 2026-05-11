import { describe, expect, test } from "vitest";
import { add, subtract, multiply, divide } from "./mathOperations";

describe("Math Operations", () => {
  test(
    "should add two negative numbers correctly",
    { tags: ["frontend"] },
    () => {
      expect(add(-1, -1)).toBe(-2);
    },
  );
  test(
    "should add two positive numbers correctly",
    { tags: ["frontend"] },
    () => {
      expect(add(2, 3)).toBe(5);
    },
  );
  test(
    "should subtract two positive numbers correctly",
    { tags: ["backend"] },
    () => {
      expect(subtract(5, 2)).toBe(3);
    },
  );
  test(
    "should substract two negative numbers correctly",
    { tags: ["backend"] },
    () => {
      expect(subtract(-7, -9)).toBe(2);
    },
  );
  test(
    "should multiply two positive numbers correctly",
    { tags: ["frontend"] },
    () => {
      expect(multiply(3, 4)).toBe(12);
    },
  );
  test("should multiply numbers correctly", { tags: ["frontend"] }, () => {
    expect(multiply(-3, 4)).toBe(-12);
  });
  test("should divide 2 numbers correctly", { tags: ["backend"] }, () => {
    expect(divide(10, 2)).toBe(5);
  });
  test("should divide a number by 0", { tags: ["backend"] }, () => {
    expect(() => divide(10, 0)).toThrow(Error);
  });
});
