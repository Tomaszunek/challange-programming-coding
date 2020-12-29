import { possibleArrangements } from '../calc';

describe('day38 calc', () => {
  it('should return all possible arrangments in board 2x2', () => {
    expect.assertions(1);

    const expectArrangements = [
      [
        [-1, false],
        [false, false],
      ],
      [
        [false, -1],
        [false, false],
      ],
      [
        [false, false],
        [-1, false],
      ],
      [
        [false, false],
        [false, -1],
      ],
    ];

    expect(possibleArrangements(2)).toStrictEqual(expectArrangements);
  });

  it('should return all possible arrangments in board 3x3', () => {
    expect.assertions(1);

    const expectArrangements = [
      [
        [-1, false, false],
        [false, false, -1],
        [false, false, false],
      ],
      [
        [-1, false, false],
        [false, false, false],
        [false, -1, false],
      ],
      [
        [false, -1, false],
        [false, false, false],
        [-1, false, false],
      ],
      [
        [false, -1, false],
        [false, false, false],
        [false, false, -1],
      ],
      [
        [false, false, -1],
        [-1, false, false],
        [false, false, false],
      ],
      [
        [false, false, -1],
        [false, false, false],
        [false, -1, false],
      ],
      [
        [false, false, -1],
        [-1, false, false],
        [false, false, false],
      ],
      [
        [false, false, false],
        [-1, false, false],
        [false, false, -1],
      ],
      [
        [false, false, false],
        [false, -1, false],
        [false, false, false],
      ],
    ];

    expect(possibleArrangements(3)).toStrictEqual(expectArrangements);
  });

  it('should return all possible arrangments in board 4x4', () => {
    expect.assertions(1);

    expect(possibleArrangements(4)).toHaveLength(72);
  });

  it('should return all possible arrangments in board 5x5', () => {
    expect.assertions(1);

    expect(possibleArrangements(5)).toHaveLength(1056);
  });
});
