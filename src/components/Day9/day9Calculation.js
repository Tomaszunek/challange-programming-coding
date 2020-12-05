const getMaxSumNonAdjuacentNumbers = (array) => {
  let first = 0;
  let second = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    const sum = Math.max(array[i] + second, first);
    second = first;
    first = sum;
  }

  return first;
};

export { getMaxSumNonAdjuacentNumbers };
