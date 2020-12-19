import { balancedBrackets } from '../calc';

describe('day27 calc', () => {
  it('should return true on balanced brackets', () => {
    expect.assertions(1);

    expect(balancedBrackets('([])[]({})')).toBe(true);
  });

  it('should return false on not balanced brackets', () => {
    expect.assertions(2);

    expect(balancedBrackets('([)]')).toBe(false);
    expect(balancedBrackets('((()')).toBe(false);
  });
});
