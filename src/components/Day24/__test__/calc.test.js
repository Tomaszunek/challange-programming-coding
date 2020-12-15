import { Node } from '../calc';

describe('day24 calc', () => {
  it('should possible to lock node', () => {
    expect.assertions(1);

    const tree = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    node2.insertRight(node4);
    node3.insertRight(node5);
    tree.insertLeft(node2);
    tree.insertRight(node3);

    expect(node4.lock(tree)).toBe(true);
  });

  it('should impossible to lock childrens tree nodes, but other childrens could be lock', () => {
    expect.assertions(3);

    const tree = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    node2.insertRight(node4);
    node3.insertRight(node5);
    tree.insertLeft(node2);
    tree.insertRight(node3);

    tree.lock(tree);

    expect(node2.lock(tree)).toBe(false);
    expect(node3.lock(tree)).toBe(false);
    expect(node4.lock(tree)).toBe(true);
  });
});
