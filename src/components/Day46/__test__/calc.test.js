import { longestPalindrom } from '../calc';

describe('day46 calc', () => {
  it('should return longest palindromic substring', () => {
    expect.assertions(1);

    expect(longestPalindrom('aabcdcb')).toBe('bcdcb');
  });

  it('should return longest palindromic substring2', () => {
    expect.assertions(1);

    expect(longestPalindrom('bananas')).toBe('anana');
  });
});
