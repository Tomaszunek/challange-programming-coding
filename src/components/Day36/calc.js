const getValuesFromTree = (tree, elements) => {
  if (tree.element) elements.push(tree.element);
  if (tree.left) getValuesFromTree(tree.left, elements);
  if (tree.right) getValuesFromTree(tree.right, elements);
};

const secondLargestNode = (tree, array = []) => {
  getValuesFromTree(tree.root, array);
  return array.sort((a, b) => b - a)[1];
};

export { secondLargestNode };
