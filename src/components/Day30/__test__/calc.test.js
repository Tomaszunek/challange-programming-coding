import { waterToFill } from '../calc';

describe('day30 calc', () => {
  it('should trap in flat ground', () => {
    expect.assertions(1);

    const input = [2, 1, 2];
    const expectedResult = 1;

    expect(waterToFill(input)).toBe(expectedResult);
  });

  it('should trap in "montain" ground', () => {
    expect.assertions(1);

    const input = [3, 0, 1, 3, 0, 5];
    const expectedResult = 8;

    expect(waterToFill(input)).toBe(expectedResult);
  });
});
