const Logs = (n) => {
  const maxSize = n;
  const circularBuffer = [];
  let currIdx = 0;

  const record = (orderId) => {
    circularBuffer[currIdx] = orderId;
    currIdx = (currIdx + 1) % maxSize;
  };

  const getLast = (i) => circularBuffer[(currIdx - i + maxSize) % maxSize];

  const getLength = () => circularBuffer.length;

  return {
    record,
    getLast,
    getLength,
  };
};
export { Logs };
