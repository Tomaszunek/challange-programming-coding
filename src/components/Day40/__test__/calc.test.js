import { findUniqueNumber } from '../calc';

describe('day40 calc', () => {
  it('should return unique element', () => {
    expect.assertions(1);

    const set = [6, 1, 3, 3, 3, 6, 6];

    expect(findUniqueNumber(set)).toBe(1);
  });

  it('should return unique element2', () => {
    expect.assertions(1);

    const set = [13, 19, 13, 13];

    expect(findUniqueNumber(set)).toBe(19);
  });
});
