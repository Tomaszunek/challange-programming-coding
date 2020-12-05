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
    arr.push(res);
    return;
  }
}

function getPaths(t) {
  let arr = [];
  if (!t.left && !t.right) {
    t.value != null && t.value != undefined && arr.push(`${t.value}`);
    return arr;
  }
  dive(t, null, arr);
  return arr;
}

const createSideCaller = (side, stepCount, restStairs, stepsCount, tree) => {
  if (restStairs - stepCount >= 0) {
    tree[side] = createTree(stepCount, null, null);
    reduceSteps(restStairs - stepCount, stepsCount, tree[side]);
  }
};

const reduceSteps = (
  restStairs,
  stepsCount,
  tree = createTree(0, null, null),
) => {
  const [leftStep, rightStep] = stepsCount;
  createSideCaller('left', leftStep, restStairs, stepsCount, tree);
  createSideCaller('right', rightStep, restStairs, stepsCount, tree);
  if (restStairs < leftStep && restStairs < rightStep) {
    createSideCaller('left', 1, restStairs, stepsCount, tree);
  }
  return tree;
};

const getStaircaseUniqueWays = (stairsCount, stepsCount) =>
  getPaths(reduceSteps(stairsCount, stepsCount))
    .map(Number)
    .reduce(function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, [])
    .sort((a, b) => a - b);

export { getStaircaseUniqueWays };
