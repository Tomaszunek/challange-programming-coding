export const twoNumbersFromArrayAddUpToNumber = (array, sum) => {
  if(array && array.length <= 1 || !sum) return [];

  const pairs = [];
  array.forEach(element => {
    pairs.push([element]);
    pairs.forEach((pair, index) => {
      if(pair.length === 1) {
        const isAddUpToSum = pair[0] + element === sum;
        if(isAddUpToSum) pairs[index].push(element);        
      }
    });
  });
  
  const filterOnlyPairs = pairs.filter(pair => pair.length === 2);
  return filterOnlyPairs.length === 1 ? filterOnlyPairs[0] : filterOnlyPairs;
}

