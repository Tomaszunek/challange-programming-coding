import { twoNumbersFromArrayAddUpToNumber } from '../day1Calculation';

describe("day1Calculation", () => {
  it("returns proper single array pain", () => {
    expect.assertions(1);

    const arrayInput = [10, 15, 3, 7];
    const expectedSum = 17;
    const expectedArray = [10, 7];

    const result = twoNumbersFromArrayAddUpToNumber(arrayInput, expectedSum);

    expect(result).toStrictEqual(expectedArray);
  });

  it("returns empty array when not sum find", () => {
    expect.assertions(1);

    const arrayInput = [10, 15, 3, 7];
    const expectedSum = 19;
    const expectedArray = [];

    const result = twoNumbersFromArrayAddUpToNumber(arrayInput, expectedSum);

    expect(result).toStrictEqual(expectedArray);
  });

  it("returns all possible pairs sum to needed number", () => {
    expect.assertions(1);

    const arrayInput = [10, 15, 3, 7, 4, 2, 6, 1, 8, -1];
    const expectedSum = 9;
    const expectedArray = [[10, -1], [3, 6], [7, 2], [1, 8]];

    const result = twoNumbersFromArrayAddUpToNumber(arrayInput, expectedSum);

    expect(result).toStrictEqual(expectedArray);
  });
});
