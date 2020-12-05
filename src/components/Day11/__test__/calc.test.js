import { getStringsWithPrefix } from '../calc';

describe('day11 calc', () => {
  it('should return proper words with prefix', () => {
    expect.assertions(1);

    const inputString = ['dog', 'deer', 'deal'];
    const prefix = 'de';
    const result = ['deer', 'deal'];

    expect(getStringsWithPrefix(prefix, inputString)).toStrictEqual(result);
  });

  it('should return proper words with prefix2', () => {
    expect.assertions(1);

    const inputString = ['beer', 'bear', 'be', 'bee', 'banknote', 'ballon'];
    const prefix = 'be';
    const result = ['beer', 'bear', 'be', 'bee'];

    expect(getStringsWithPrefix(prefix, inputString)).toStrictEqual(result);
  });
});
