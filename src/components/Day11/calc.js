const getStringsWithPrefix = (prefix, array) =>
  array.filter((word) => word.substring(0, prefix.length) === prefix);

export { getStringsWithPrefix };
