const UnivelTree = (val, left, right) => {
  return {
    val,
    left,
    right,
  };
};

const countUnivalSubtres = (tree) => {
  let count = 0;
  if (tree.left === null && tree.right === null) return 1;
  if (tree.left.val === tree.right.val) count += 1;
  if (tree.left !== null) count += countUnivalSubtres(tree.left);
  if (tree.right !== null) count += countUnivalSubtres(tree.right);

  return count;
};

export { countUnivalSubtres, UnivelTree };
