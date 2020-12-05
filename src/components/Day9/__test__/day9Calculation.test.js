import { getMaxSumNonAdjuacentNumbers } from '../day9Calculation';

describe('day3Calculation', () => {
  it('should return count of possible ways to decode', () => {
    expect.assertions(2);

    const input1 = [2, 4, 6, 2, 5];
    const input2 = [5, 1, 1, 5];

    expect(getMaxSumNonAdjuacentNumbers(input1)).toBe(13);
    expect(getMaxSumNonAdjuacentNumbers(input2)).toBe(10);
  });
});
