const matchRegexp = (regexp, wordMatch) =>
  new RegExp('^' + regexp + '$').test(wordMatch);

export { matchRegexp };
