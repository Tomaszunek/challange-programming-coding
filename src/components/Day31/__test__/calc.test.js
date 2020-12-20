import { findMutations } from '../calc';

describe('day31 calc', () => {
  it('should return needed min number string mutations', () => {
    expect.assertions(1);

    const expectedResult = { substitute: 2, append: 1, delete: 0 };

    expect(findMutations('kitten', 'sitting')).toStrictEqual(expectedResult);
  });
});
