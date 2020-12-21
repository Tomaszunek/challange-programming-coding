import { findShortestPalindrom } from '../calc';

describe('day34 calc', () => {
  it('should shortest palidrom from word race', () => {
    expect.assertions(1);

    const input = 'race';
    const expectedResult = 'ecarace';

    expect(findShortestPalindrom(input)).toBe(expectedResult);
  });

  it('should shortest palidrom from word google', () => {
    expect.assertions(1);

    const input = 'google';
    const expectedResult = 'elgoogle';

    expect(findShortestPalindrom(input)).toBe(expectedResult);
  });
});
