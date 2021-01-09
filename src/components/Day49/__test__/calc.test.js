import { maxSum } from '../calc';

describe('day49 calc', () => {
  it('should return max sum from alignment items', () => {
    expect.assertions(1);

    expect(maxSum([34, -50, 42, 14, -5, 86])).toBe(137);
  });

  it('should return max sum from negative numbers equal 0', () => {
    expect.assertions(1);

    expect(maxSum([-5, -1, -8, -9])).toBe(0);
  });
});
