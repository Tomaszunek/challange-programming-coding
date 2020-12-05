const createTree = (value, left, right) => ({ value, left, right });

function dive(t, res, arr) {
  if (t.value != null && t.value != undefined) {
    res = res ? `${res}${t.value}` : `${t.value}`;
  }
  if (t.left) {
    dive(t.left, res, arr);
  }
  if (t.right) {
    dive(t.right, res, arr);
  }
  if (!t.left && !t.right) {
    console.log(res);
    arr.push(res);
    return;
  }
}

function getPaths(t) {
  let arr = [];
  if (!t.left && !t.right) {
    t.value != null && t.value != undefined && arr.push(`${t.value}`);
    console.log(arr);
    return arr;
  }
  dive(t, null, arr);
  console.log(arr);
  return arr;
}

const reduceSteps = (
  step,
  restStairs,
  stepsCount,
  tree = createTree(0, null, null),
) => {
  const [leftStep, rightStep] = stepsCount;
  console.log({
    step,
    restStairs,
    stepsCount,
    tree,
  });
  if (restStairs - leftStep >= 0) {
    tree.left = createTree(leftStep, null, null);
    console.log(restStairs, leftStep);
    reduceSteps(leftStep, restStairs - leftStep, stepsCount, tree.left);
  }
  if (restStairs - rightStep >= 0) {
    tree.right = createTree(rightStep, null, null);
    console.log(restStairs, rightStep);
    reduceSteps(rightStep, restStairs - rightStep, stepsCount, tree.right);
  }
  return tree;
};

const getStaircaseUniqueWays = (stairsCount, stepsCount) => {
  const treeRoot = reduceSteps(0, stairsCount, stepsCount);
  console.log(treeRoot, getPaths(treeRoot).map(Number));
};

export { getStaircaseUniqueWays };
