import { getStaircaseUniqueWays } from '../calc';

describe('day11 calc', () => {
  it('should return proper words with prefix', () => {
    expect.assertions(2);

    const numberStairs = 4;
    const numberSteps = [1, 2];
    const uniqueWays = 5;
    const expectedWays = [22, 211, 112, 121, 1111];
    const output = getStaircaseUniqueWays(numberStairs, numberSteps);

    expect(output).toStrictEqual(expectedWays);
    expect(output.length).toHaveLength(uniqueWays);
  });
});
