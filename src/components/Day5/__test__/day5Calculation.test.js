import { cons, car, cdr } from '../day5Calculation';

describe('day3Calculation', () => {
  it('car should return left element from pair', () => {
    expect.assertions(1);

    expect(car(cons(3, 4))).toBe(3);
  });

  it('car should return right element from pair', () => {
    expect.assertions(1);

    expect(cdr(cons(3, 4))).toBe(4);
  });
});
