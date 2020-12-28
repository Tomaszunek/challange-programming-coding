import { BinarySearchTree } from '../BinarySearchTree';

describe('binarySearchTree', () => {
  it('should insert elements to tree', () => {
    expect.assertions(5);

    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);
    tree.insert(8);
    tree.insert(50);

    expect(tree.root.element).toBe(10);
    expect(tree.root.left.element).toBe(5);
    expect(tree.root.right.element).toBe(20);
    expect(tree.root.right.left).toBeNull();
    expect(tree.root.right.right.element).toBe(50);
  });
});
