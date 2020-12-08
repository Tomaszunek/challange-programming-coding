import { maxInRanges } from '../calc';

describe('day18 calc', () => {
  it('should return max in ranges', () => {
    expect.assertions(1);
    const result = maxInRanges([10, 5, 2, 7, 8, 7], 3);

    expect(result).toStrictEqual([10, 7, 8, 8]);
  });
});
