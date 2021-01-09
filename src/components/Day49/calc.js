const maxSum = (array) => {
  const maxSums = [];
  for (let i = 1; i < array.length - 1; i++) {
    let maxCurrent = 0;
    for (let j = i; j < array.length; j++) {
      maxCurrent = maxCurrent + array[j];
    }
    maxSums.push(maxCurrent);
  }
  const maxItem = maxSums.sort((a, b) => b - a)[0];
  return maxItem >= 0 ? maxItem : 0;
};

export { maxSum };
