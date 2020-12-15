import { estimatePiValue } from '../calc';

describe('day12 calc', () => {
  it('should return possible stairs ways', () => {
    expect.assertions(1);

    expect(parseFloat(estimatePiValue(530000).toFixed(1))).toBe(3.1);
  });
});
