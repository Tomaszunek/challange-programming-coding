const getMinimalNumberFromArray = (array) => {
  if (!array && array.length) return;
  let minimalValue = array[0];
  let maximalValue = 1;
  array.forEach((item) => {
    if (minimalValue > item - 1 && item > 1) minimalValue = item - 1;
    if (maximalValue <= item) maximalValue = item + 1;
  });
  if (minimalValue <= 1 && array.includes(minimalValue)) return maximalValue;
  return minimalValue;
};

export { getMinimalNumberFromArray };
