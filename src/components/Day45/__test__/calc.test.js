import { genRandom } from '../calc';

describe('day44 calc', () => {
  it('should random from 1 to 7', () => {
    expect.assertions(2);

    const rand7 = genRandom(1, 7);
    const number = rand7();

    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(7);
  });

  it('should random from 1 to 7 in similar count', () => {
    expect.assertions(2);

    const allRandomCount = 10000;
    const maxRandNumber = 7;
    const countPerNumber = Math.round(allRandomCount / maxRandNumber);
    const rand7 = genRandom(1, maxRandNumber);
    const array = [...Array(allRandomCount)].map(() => rand7());
    const countObject = {};
    array.forEach((item) => {
      if (countObject[item]) countObject[item] = ++countObject[item];
      else countObject[item] = 1;
    });
    const maxCount = Math.max(...Object.values(countObject));
    const minCount = Math.min(...Object.values(countObject));

    expect(minCount - 50).toBeLessThanOrEqual(countPerNumber);
    expect(maxCount + 50).toBeGreaterThanOrEqual(countPerNumber);
  });
});
