import { getPossibleNumbersCount } from '../day7Calculation';

describe('day3Calculation', () => {
  it('should return count of possible ways to decode', () => {
    expect.assertions(5);

    expect(getPossibleNumbersCount('111')).toBe(3);
    expect(getPossibleNumbersCount('271')).toBe(2);
    expect(getPossibleNumbersCount('1282')).toBe(3);
    expect(getPossibleNumbersCount('11122')).toBe(8);
    expect(getPossibleNumbersCount('111625')).toBe(10);
  });
});
