const brackets = {
  '}': '{',
  ')': '(',
  ']': '[',
};
const openingBrackets = Object.values(brackets);

const balancedBrackets = (string) => {
  const tempBrackets = [];
  const splitBrackets = string.split('');
  let openingCount = 0;
  let closingCount = 0;
  splitBrackets.forEach((element) => {
    const isOpeningBracket = openingBrackets.includes(element);
    if (isOpeningBracket) {
      tempBrackets.push(element);
      openingCount++;
    } else if (brackets[element] === tempBrackets[tempBrackets.length - 1]) {
      tempBrackets.pop();
      closingCount++;
    } else {
      return false;
    }
  });
  return tempBrackets.length === 0 && openingCount === closingCount;
};
export { balancedBrackets };
