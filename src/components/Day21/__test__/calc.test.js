import { getMinimumNumberRooms } from '../calc';

describe('day21 calc', () => {
  it('should return mininam room count', () => {
    expect.assertions(1);

    const intervals = [
      [30, 75],
      [0, 50],
      [60, 150],
    ];

    expect(getMinimumNumberRooms(intervals)).toBe(2);
  });

  it('should return mininam room count1', () => {
    expect.assertions(1);

    const intervals = [
      [30, 75],
      [0, 50],
      [60, 150],
      [60, 150],
      [50, 160],
    ];

    expect(getMinimumNumberRooms(intervals)).toBe(4);
  });
});
