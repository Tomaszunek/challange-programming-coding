const nextSumElement = (
  sumArrays,
  numbers,
  number,
  sum,
  currentElements = [],
) => {
  if (number !== 0) {
    currentElements.push(number);
  }
  numbers = numbers.filter((number) => number <= sum);
  if (sum === 0) {
    sumArrays.push(currentElements);
  } else if (numbers.length === 0) {
    return;
  } else {
    numbers.forEach((number, numIndex) => {
      nextSumElement(
        sumArrays,
        numbers.filter((i, index) => index > numIndex),
        number,
        sum - number,
        [...currentElements],
      );
    });
  }
};
const findSum = (numbers, sum) => {
  const sumArrays = [];
  nextSumElement(sumArrays, numbers, 0, sum);
  return sumArrays;
};

export { findSum };
