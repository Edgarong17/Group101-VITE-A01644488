/// Snapshot testing
// captures the output of a piece of code and saves it to a file.

import { describe, expect, test } from "vitest";

function generateGreeting(name: string) {
  return {
    message: `Hello, ${name}!`,
    timestamp: null,
    version: 2,
  };
}

describe('test snapshot', () => {
  test("generates a greeting with snapshot", () => {
    expect(generateGreeting("Jesus")).toMatchSnapshot();
  });

  test('generates an inlineSnapshot', () => {
    expect(generateGreeting("Jesus")).toMatchInlineSnapshot(`
      {
        "message": "Hello, Jesus!",
        "timestamp": null,
        "version": 2,
      }
    `);
  });

  test('throws on invalid input', () => {
    expect(() => parseFloat('')).toThrowErrorMatchingInlineSnapshot(
        "[Error: unexpected end of input at position 0]"
    );
  });
});
