import { Node, findIntersection } from '../calc';

describe('day20 calc', () => {
  it('should return max in ranges', () => {
    expect.assertions(1);

    const ll1 = Node(3, Node(7, Node(8, Node(10))));
    const ll2 = Node(99, Node(1, Node(8, Node(10))));

    expect(findIntersection(ll1, ll2)).toBe(8);
  });
});
