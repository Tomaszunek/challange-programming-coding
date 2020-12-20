import { divideWordsToStrings } from '../calc';

describe('day28 calc', () => {
  it('should divide array to strings with same k length', () => {
    expect.assertions(1);

    const words = [
      'the',
      'quick',
      'brown',
      'fox',
      'jumps',
      'over',
      'the',
      'lazy',
      'dog',
    ];
    const expectedResult = [
      'the  quick brown',
      'fox  jumps  over',
      'the   lazy   dog',
    ];

    expect(divideWordsToStrings(words, 16)).toStrictEqual(expectedResult);
  });

  it('should divide array to strings with same k length2', () => {
    expect.assertions(1);

    const words = [
      'mall',
      'extent',
      'mode',
      'math',
      'truth',
      'method',
      'situation',
      'appointment',
      'uncle',
      'buyer',
      'intention',
      'session',
      'week',
      'surgery',
      'painting',
      'responsibility',
      'organization',
      'map',
      'patience',
      'negotiation',
    ];
    const expectedResult = [
      'mall   extent   mode',
      'math   truth  method',
      'situation           ',
      'appointment    uncle',
      'buyer      intention',
      'session week surgery',
      'painting            ',
      'responsibility      ',
      'organization     map',
      'patience negotiation',
    ];

    expect(divideWordsToStrings(words, 20)).toStrictEqual(expectedResult);
  });

  it('should return error about word length', () => {
    expect.assertions(1);

    const words = ['responsibility'];

    expect(divideWordsToStrings(words, 5)).toStrictEqual(
      'Some word have more letters then 5',
    );
  });
});
