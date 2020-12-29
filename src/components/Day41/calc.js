const findSinglePath = (
  originPairs,
  start,
  originsCount,
  paths,
  currectOrigins = [],
  path = [],
) => {
  path.push(start);
  const currentDest = originPairs[start];
  if (
    originsCount === currectOrigins.length ||
    currectOrigins.length > 2 * originsCount
  ) {
    paths.push(path);
    return;
  }
  currentDest &&
    currentDest.forEach((dest) => {
      const existInPath = currectOrigins.filter((item) => item === dest);
      if (!existInPath.length) {
        currectOrigins.push(dest);
      }
      findSinglePath(
        originPairs,
        dest,
        originsCount,
        paths,
        currectOrigins,
        path,
      );
    });
};

const findPath = (originDest, start) => {
  const pairs = {};
  const paths = [];
  originDest.forEach((originPair) => {
    const [origin, dest] = originPair;
    if (pairs[origin]) {
      pairs[origin].push(dest);
    } else {
      pairs[origin] = [dest];
    }
  });
  const originsCount = [...new Set(originDest.flat())].length;
  findSinglePath(pairs, start, originsCount, paths, [start]);
  const firstPath = paths[0];
  if (!firstPath) {
    return null;
  }
  return paths[0];
};

export { findPath };
