const cons = (left, right) => ({
  left,
  right,
});

const car = (pair) => pair.left;
const cdr = (pair) => pair.right;

export { cons, car, cdr };
