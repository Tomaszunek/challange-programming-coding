const mutations = { substitute: 0, append: 0, delete: 0 };

const findMutations = (mutableString, resultString) => {
  const currentMutations = Object.assign({}, mutations);
  const isMutableStringLonger = mutableString.length >= resultString.length;
  const interableString = isMutableStringLonger ? mutableString : resultString;
  const notInterableString = isMutableStringLonger
    ? resultString
    : mutableString;
  interableString.split('').forEach((letter, index) => {
    const resultLetter = notInterableString[index];
    if (letter && resultLetter && letter !== resultLetter) {
      currentMutations.substitute += 1;
    } else {
      if (isMutableStringLonger && !resultLetter) {
        currentMutations.delete += 1;
      } else if (!isMutableStringLonger && !resultLetter) {
        currentMutations.append += 1;
      }
    }
  });
  return currentMutations;
};

export { findMutations };
