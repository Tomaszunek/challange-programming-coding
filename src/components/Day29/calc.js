const countLetter = (count, letter) => (count > 0 ? `${count}${letter}` : '');

const encodingString = (string) => {
  let currentLetter = null;
  let letterCount = 0;
  let encodedString = '';
  string.split('').forEach((letter) => {
    if (currentLetter === letter) {
      letterCount++;
    } else {
      encodedString += countLetter(letterCount, currentLetter);
      currentLetter = letter;
      letterCount = 1;
    }
  });
  return encodedString + countLetter(letterCount, currentLetter);
};

export { encodingString };
