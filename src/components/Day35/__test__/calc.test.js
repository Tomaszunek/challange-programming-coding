import { sortRGB } from '../calc';

describe('day35 calc', () => {
  it('should return sorted RGB array', () => {
    expect.assertions(1);

    const input = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
    const expectedResult = ['R', 'R', 'R', 'G', 'G', 'B', 'B'];

    expect(sortRGB(input)).toStrictEqual(expectedResult);
  });
});
