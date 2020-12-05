import { getStaircaseUniqueWays } from '../calc';

describe('day12 calc', () => {
  it('should return possible stairs ways', () => {
    expect.assertions(2);

    const numberStairs = 4;
    const numberSteps = [1, 2];
    const uniqueWays = 5;
    const expectedWays = [22, 112, 121, 211, 1111];
    const output = getStaircaseUniqueWays(numberStairs, numberSteps);

    expect(output).toStrictEqual(expectedWays);
    expect(output).toHaveLength(uniqueWays);
  });

  it('should return possible stairs ways2', () => {
    expect.assertions(2);

    const numberStairs = 9;
    const numberSteps = [2, 3];
    const uniqueWays = 9;
    const expectedWays = [333, 2223, 2232, 2322, 2331, 3222, 3231, 3321, 22221];
    const output = getStaircaseUniqueWays(numberStairs, numberSteps);

    expect(output).toStrictEqual(expectedWays);
    expect(output).toHaveLength(uniqueWays);
  });
});
