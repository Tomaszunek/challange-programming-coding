import { findShortestPathMain } from '../calc';

describe('day21 calc', () => {
  it('should return mininam room count', () => {
    expect.assertions(1);
    const t = 1;
    const f = 0;

    const board = [
      [f, f, f, f],
      [t, t, f, t],
      [f, f, f, f],
      [f, f, f, f],
    ];
    const start = [3, 0];
    const end = [0, 0];
    const expectedMoves = 7;

    expect(findShortestPathMain(start, end, board)).toHaveLength(expectedMoves);
  });
});
