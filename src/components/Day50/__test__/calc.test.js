import { calculationFromTree, Node } from '../calc';

describe('day50 calc', () => {
  it('should return max sum from alignment items', () => {
    expect.assertions(1);

    const tree = Node(
      '*',
      Node('+', Node(3), Node(2)),
      Node('+', Node(4), Node(5)),
    );

    expect(calculationFromTree(tree)).toBe(45);
  });
});
