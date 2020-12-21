import { calculateMedianFromArray } from '../calc';

describe('day33 calc', () => {
  it('should return medians of array', () => {
    expect.assertions(1);

    const input = [2, 1, 5, 7, 2, 0, 5];

    const expectedResult = [2, 1.5, 2, 3.5, 2, 2, 2];

    expect(calculateMedianFromArray(input)).toStrictEqual(expectedResult);
  });

  it('should return medians of array2', () => {
    expect.assertions(1);

    const input = [8, 1, 3, 3, 1, 8, 2, 6, 10];

    const expectedResult = [8, 4.5, 3, 3, 3, 3, 3, 3, 3];

    expect(calculateMedianFromArray(input)).toStrictEqual(expectedResult);
  });
});
