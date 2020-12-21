const findShortestPalindrom = (string) => {
  const generatedPalindroms = [];
  string.split('').forEach((letter, index, arr) => {
    const nextLetterIsTheSame = letter === arr[index + 1];
    let palindrom = letter;
    if (nextLetterIsTheSame) {
      palindrom = letter + letter;
      for (let i = index + 2; i < arr.length; i++) {
        const newLetter = arr[i];
        palindrom = `${newLetter}${palindrom}${newLetter}`;
      }
      generatedPalindroms.push(palindrom);
    }
    palindrom = letter;
    for (let i = index + 1; i < arr.length; i++) {
      const newLetter = arr[i];
      palindrom = `${newLetter}${palindrom}${newLetter}`;
    }
    generatedPalindroms.push(palindrom);
  });
  return generatedPalindroms
    .filter((item) => item.indexOf(string) > -1)
    .sort((a, b) => a.length - b.length)[0];
};

export { findShortestPalindrom };
