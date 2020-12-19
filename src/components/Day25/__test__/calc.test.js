import { matchRegexp } from '../calc';

describe('day25 calc', () => {
  it('should match ra. regexp', () => {
    expect.assertions(2);

    const regexp = 'ra.';
    const goodMatch = 'ray';
    const wrongMatch = 'raymond';

    expect(matchRegexp(regexp, goodMatch)).toBe(true);
    expect(matchRegexp(regexp, wrongMatch)).toBe(false);
  });

  it('should match .*at regexp', () => {
    expect.assertions(2);

    const regexp = '.*at';
    const goodMatch = 'chat';
    const wrongMatch = 'chats';

    expect(matchRegexp(regexp, goodMatch)).toBe(true);
    expect(matchRegexp(regexp, wrongMatch)).toBe(false);
  });
});
