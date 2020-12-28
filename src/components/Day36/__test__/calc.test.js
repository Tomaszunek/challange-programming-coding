import { BinarySearchTree } from '../../../Models/BinarySearchTree/BinarySearchTree';
import { secondLargestNode } from '../calc';

describe('day36 calc', () => {
  it('should return second largest element in search binary tree', () => {
    expect.assertions(1);

    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);
    tree.insert(8);
    tree.insert(50);

    expect(secondLargestNode(tree)).toBe(20);
  });
});
