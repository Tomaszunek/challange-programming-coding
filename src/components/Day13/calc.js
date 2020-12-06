const findLongestDistinctCharSubstring = (string, distinctChar) => {
  const substrings = [];
  for (let i = 0; i < string.length; i++) {
    const distinctLetters = [];
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!distinctLetters.includes(letter)) {
        distinctLetters.push(letter);
      }
      if (distinctLetters.length > distinctChar) {
        substrings.push(string.substring(i, j));
        break;
      }
    }
  }
  return substrings.sort((a, b) => b.length - a.length)[0];
};
export { findLongestDistinctCharSubstring };
