import { findSum } from '../calc';

describe('day42 calc', () => {
  it('should return sums', () => {
    expect.assertions(1);

    const numbers = [12, 1, 61, 5, 9, 2];
    const sum = 24;
    const expectedElements = [[12, 1, 9, 2]];

    expect(findSum(numbers, sum)).toStrictEqual(expectedElements);
  });

  it('should return sums from 24', () => {
    expect.assertions(1);

    const numbers = [24, 24, 24, 24, 24];
    const sum = 24;
    const expectedElements = [[24], [24], [24], [24], [24]];

    expect(findSum(numbers, sum)).toStrictEqual(expectedElements);
  });
});
