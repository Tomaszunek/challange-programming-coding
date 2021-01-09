const longestPalindrom = (string) => {
  const allPalindroms = [];
  for (let i = 0; i < string.length; i++) {
    let palindrom = string[i];
    for (let j = 1; j < string.length - i; j++) {
      const nextLetter = string[i + j];
      const lastLetter = string[i - j];
      if (lastLetter && nextLetter && lastLetter === nextLetter)
        palindrom = `${lastLetter}${palindrom}${nextLetter}`;
    }
    allPalindroms.push(palindrom);
  }
  return allPalindroms.sort((a, b) => b.length - a.length)[0];
};

export { longestPalindrom };
