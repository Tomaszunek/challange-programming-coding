import { findLongestDistinctCharSubstring } from '../calc';

describe('day12 calc', () => {
  it('should return possible stairs ways', () => {
    expect.assertions(1);

    expect(findLongestDistinctCharSubstring('abcba', 2)).toBe('bcb');
  });
});
