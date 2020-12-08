const maxInRanges = (array, k) => {
  const arrayResult = [];
  for (let i = 0; i < array.length - k + 1; i++) {
    const subArray = array.slice(i, i + 3);
    arrayResult.push(Math.max(...subArray));
  }
  return arrayResult;
};
export { maxInRanges };
