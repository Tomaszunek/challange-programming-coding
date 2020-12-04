const getPossibleNumbersCount = (numberString, count = 0) => {
  if (numberString.length) {
    count = getPossibleNumbersCount(
      numberString.slice(1, numberString.length),
      count,
    );
    const numCurr = parseInt(numberString[0]);
    const numNext =
      'undefined' === typeof numberString[1] ? null : parseInt(numberString[1]);
    if (numCurr && numNext && numCurr < 3 && numCurr + numNext <= 26) {
      count = getPossibleNumbersCount(
        numberString.slice(2, numberString.length),
        count,
      );
    }
  } else {
    count++;
  }
  return count;
};

export { getPossibleNumbersCount };
