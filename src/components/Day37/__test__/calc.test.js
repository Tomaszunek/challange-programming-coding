import { createSubsets } from '../calc';

describe('day37 calc', () => {
  it('should return second largest element in search binary tree', () => {
    expect.assertions(1);

    const set = [1, 2, 3];
    const expectSubsets = [
      [],
      [1],
      [2],
      [3],
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ];

    expect(createSubsets(set)).toStrictEqual(expectSubsets);
  });
});
