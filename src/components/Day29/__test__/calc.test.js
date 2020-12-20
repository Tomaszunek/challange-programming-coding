import { encodingString } from '../calc';

describe('day29 calc', () => {
  it('should convert string to letter and number of letters', () => {
    expect.assertions(1);

    const inputString = 'AAAABBBCCDAA';
    const expectedResult = '4A3B2C1D2A';

    expect(encodingString(inputString)).toStrictEqual(expectedResult);
  });
});
