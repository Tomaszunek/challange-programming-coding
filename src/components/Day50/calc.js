const Node = (val, right, left) => ({
  val,
  right,
  left,
});

const calculationFromTree = (tree) => {
  if (Number.isInteger(tree.val)) return tree.val;

  const valLeft = calculationFromTree(tree.left);
  const valRight = calculationFromTree(tree.right);
  switch (tree.val) {
    case '+':
      return valLeft + valRight;
    case '-':
      return valLeft - valRight;
    case '*':
      return valLeft * valRight;
    default:
      return valLeft / valRight;
  }
};

export { calculationFromTree, Node };
