import { productFromArray } from '../day2Calculation';

describe("day1Calculation", () => {
  it("returns proper product array from increasing array", () => {
    expect.assertions(1);

    const arrayInput = [1, 2, 3, 4, 5];
    const expectedArray = [120, 60, 40, 30, 24];

    const result = productFromArray(arrayInput);

    expect(result).toStrictEqual(expectedArray);
  });

  it("returns proper product array from decreasing array", () => {
    expect.assertions(1);

    const arrayInput = [3, 2, 1];
    const expectedArray = [2, 3, 6];

    const result = productFromArray(arrayInput);

    expect(result).toStrictEqual(expectedArray);
  });
});
