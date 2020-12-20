const mergeStrings = (words, stringLength) => {
  const wordsLength = words.reduce((curr, word) => (curr += word.length), 0);
  const spaceCount =
    Boolean(words.length - 1) &&
    Math.floor((stringLength - wordsLength) / (words.length - 1));
  const addionalSpace =
    stringLength - wordsLength - spaceCount * (words.length - 1);
  if (addionalSpace === 0) {
    const spaces = [...Array(spaceCount).keys()].map(() => ' ').join('');
    return words.join(spaces);
  } else {
    let line = '';
    words.forEach((word, index) => {
      const spaces = [...Array(spaceCount).keys()].map(() => ' ').join('');
      if (index === 0) {
        const spacesAdd = [...Array(addionalSpace).keys()]
          .map(() => ' ')
          .join('');
        line += word + spacesAdd;
      } else {
        line += spaces + word;
      }
    });
    return line;
  }
};

const divideWordsToStrings = (words, stringLength) => {
  if (Math.max(...words.map((word) => word.length)) > stringLength)
    return `Some word have more letters then ${stringLength}`;
  let lines = [];
  let singleLineWords = [];
  let lineCurrentLength = 0;
  words.forEach((word) => {
    if (lineCurrentLength + word.length + 1 <= stringLength) {
      singleLineWords.push(word);
      lineCurrentLength += word.length + 1;
    } else {
      lines.push(mergeStrings(singleLineWords, stringLength));
      singleLineWords = [word];
      lineCurrentLength = word.length;
    }
  });
  lines.push(mergeStrings(singleLineWords, stringLength));
  return lines;
};
export { divideWordsToStrings };
