import { describe, expect, test, vi } from "vitest";

describe("Mocking functions examples", () => {
  test.skip("should mock getNumber function", () => {
    // Mocking function vi.fn() == vi.fn(() => undefined)
    const getNumber = vi.fn(() => 5000);

    const number = getNumber();

    expect(number).toBe(5000);
    expect(getNumber).toHaveBeenCalled();
    expect(getNumber).toHaveReturnedWith(5000);
  });

  test.skip("should mock getNumber function", () => {
    // Mocking function vi.fn() == vi.fn(() => undefined)
    const getNumber = vi.fn(() => 5000);
    const number = getNumber();
    expect(number).toBe(5000);
    getNumber.mockImplementation(() => 3000);
    expect (getNumber()).toBe(3000);
  });

  test('should mock async function', async () => {
    const fetchUser = vi.fn();
    fetchUser.mockResolvedValue({ name: 'Alice' });
    const user = await fetchUser();
    expect(user.name).toBe('Alice');

    fetchUser.mockRejectedValue(new Error('Not found'));
    await expect (fetchUser()).rejects.toThrow('Not found');
  });

  test ('inspecting mock calls', () => {
    const greet = vi.fn();
    greet('Alice');
    greet ('Bob', 'Jesus');

    // Number of times called
    expect(greet).toHaveBeenCalledTimes(2);

    //Check specific arguments
    expect(greet).toHaveBeenCalledWith('Alice');
    expect(greet).toHaveBeenCalledWith('Bob', 'Jesus');
    expect(greet.mock.calls).toEqual([['Alice'], ['Bob', 'Jesus']]);

    console.log('mock calls: ' + greet.mock.calls);
    console.log ('mock.results: ' + greet.mock.results);

  });

  test('Mocking multiplication by 2 function', () => {
    const multiply = vi.fn((a) => a * 2);
    expect(multiply(5)).toBe(10);
    expect(multiply).toHaveBeenCalledWith(5);
    expect(multiply).toHaveReturnedWith(10);
  });

});
