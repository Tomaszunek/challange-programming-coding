const getMinimumNumberRooms = (intervals) => {
  const minutes = [];
  let maxRoomCount = 0;
  intervals.forEach((element) => {
    const [start, stop] = element;
    for (let i = start; i <= stop; i++) {
      minutes.push(i);
    }
  });
  const counts = minutes.reduce(
    (acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1,
    }),
    {},
  );
  for (const item in counts) {
    maxRoomCount = Math.max(maxRoomCount, counts[item]);
  }
  return maxRoomCount;
};

export { getMinimumNumberRooms };
