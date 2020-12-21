const calculateMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);

  if (sorted.length == 0) return 0;

  if (sorted.length == 1) return sorted[0];

  if (sorted.length % 2 == 0) {
    const firstIndex = sorted.length / 2;
    const secondIndex = firstIndex - 1;
    return (sorted[firstIndex] + sorted[secondIndex]) / 2;
  } else {
    const middleIndex = Math.floor(sorted.length / 2);
    return sorted[middleIndex];
  }
};

const calculateMedianFromArray = (array) => {
  const result = [];
  array.forEach((el, index, ar) => {
    result.push(calculateMedian(ar.slice(0, index + 1)));
  });
  return result;
};

export { calculateMedianFromArray };
