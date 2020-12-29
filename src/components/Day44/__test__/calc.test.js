import { findInversions } from '../calc';

describe('day44 calc', () => {
  it('should return 3 inversions', () => {
    expect.assertions(1);

    const numbers = [2, 4, 1, 3, 5];
    const expected = 3;

    expect(findInversions(numbers)).toBe(expected);
  });

  it('should return 10 inversions', () => {
    expect.assertions(1);

    const numbers = [5, 4, 3, 2, 1];
    const expected = 10;

    expect(findInversions(numbers)).toBe(expected);
  });

  it('should return no inversions', () => {
    expect.assertions(1);

    const numbers = [1, 2, 3, 4, 5];
    const expected = 0;

    expect(findInversions(numbers)).toBe(expected);
  });
});
