const findInversions = (numbers) => {
  let countInversions = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      const minorValue = numbers[i];
      const majorValue = numbers[k];
      if (minorValue > majorValue) {
        countInversions++;
      }
    }
  }
  return countInversions;
};

export { findInversions };
