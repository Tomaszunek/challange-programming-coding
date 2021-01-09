import { maxProfit } from '../calc';

describe('day47 calc', () => {
  it('should return max profit', () => {
    expect.assertions(1);

    expect(maxProfit([9, 11, 8, 5, 7, 10])).toBe(5);
  });
});
