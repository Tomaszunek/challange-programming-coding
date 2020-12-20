const waterToFill = (groundArray) => {
  let count = 0;

  let left_max = 0;
  let right_max = 0;

  let lo = 0;
  let hi = groundArray.length - 1;

  while (lo <= hi) {
    if (groundArray[lo] < groundArray[hi]) {
      if (groundArray[lo] > left_max) left_max = groundArray[lo];
      else count += left_max - groundArray[lo];
      lo++;
    } else {
      if (groundArray[hi] > right_max) right_max = groundArray[hi];
      else count += right_max - groundArray[hi];
      hi--;
    }
  }

  return count;
};

export { waterToFill };
