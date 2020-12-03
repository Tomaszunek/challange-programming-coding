import { getMinimalNumberFromArray } from '../day4Calculation';

describe('day3Calculation', () => {
  it('returns minimal positive value form array', () => {
    expect.assertions(1);

    const array = [3, 4, -1, 1];

    expect(getMinimalNumberFromArray(array)).toBe(2);
  });

  it('returns minimal positive value when value is greater the all elements', () => {
    expect.assertions(1);

    const array = [1, 2, 0];

    expect(getMinimalNumberFromArray(array)).toBe(3);
  });
});
