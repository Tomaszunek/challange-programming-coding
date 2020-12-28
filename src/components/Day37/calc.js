const createSubsets = (array = []) =>
  array
    .reduce(
      (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
      [[]],
    )
    .sort((a, b) => a.length - b.length)
    .map((set) => set.sort((a, b) => a - b));

export { createSubsets };
