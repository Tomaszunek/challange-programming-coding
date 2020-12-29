const findUniqueNumber = (array = []) => {
  const sortedArray = array.sort((a, b) => a - b);
  let res = sortedArray[0];
  let numberItems = 1;
  for (let i = 1; i < sortedArray.length; i++) {
    const element = sortedArray[i];
    if (res !== element && numberItems === 1) return res;
    if (res === element) ++numberItems;
    if (res < element) {
      res = element;
      numberItems = 1;
    }
  }
  return numberItems === 1 && res;
};

export { findUniqueNumber };
