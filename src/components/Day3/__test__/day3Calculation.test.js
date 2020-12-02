import { serialize, deserialize, Node } from '../day3Calculation';

describe('day3Calculation', () => {
  it('returns proper single array pain', () => {
    expect.assertions(1);

    const node = Node('root', Node('left', Node('left.left')), Node('right'));
    const p = [];
    serialize(node, p);

    expect(deserialize(p).left.left.val).toBe('left.left');
  });
});
