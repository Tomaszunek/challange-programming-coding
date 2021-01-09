const maxProfit = (array) => {
  const pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      pairs.push(array[j] - array[i]);
    }
  }
  return Math.max(...pairs);
};

export { maxProfit };
