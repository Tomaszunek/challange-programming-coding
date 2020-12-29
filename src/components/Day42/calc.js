const nextSumElement = (
  sumArrays,
  numbers,
  sum,
  number,
  currentElements = [],
) => {
  if (number) currentElements.push(number);
  numbers = numbers.filter((item) => item <= sum);
  if (sum === 0) {
    sumArrays.push(currentElements);
  } else if (numbers.length === 0) {
    return;
  } else {
    numbers.forEach((item, numIndex) => {
      nextSumElement(
        sumArrays,
        numbers.filter((i, index) => index > numIndex),
        sum - item,
        item,
        [...currentElements],
      );
    });
  }
};
const findSum = (numbers, sum) => {
  const sumArrays = [];
  nextSumElement(sumArrays, numbers, sum);
  if (sumArrays.length === 0) return null;
  return sumArrays;
};

export { findSum };
