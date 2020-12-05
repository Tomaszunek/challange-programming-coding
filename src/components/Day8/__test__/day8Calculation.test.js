import { countUnivalSubtres, UnivelTree } from '../day8Calculation';

describe('day8Calculation', () => {
  it('should return count of univel tree nodes', () => {
    expect.assertions(1);

    const tree = UnivelTree(
      0,
      UnivelTree(1, null, null),
      UnivelTree(
        0,
        UnivelTree(1, UnivelTree(1, null, null), UnivelTree(1, null, null)),
        UnivelTree(0, null, null),
      ),
    );
    expect(countUnivalSubtres(tree)).toBe(5);
  });
});
