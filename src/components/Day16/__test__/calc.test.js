import { Logs } from '../calc';

describe('day16 calc', () => {
  it('should record logs', () => {
    expect.assertions(0);
    const logs = Logs(3);
    logs.record(1);
    logs.record(2);
    logs.record(3);
  });

  it('should return logs from id', () => {
    expect.assertions(5);
    const logs = Logs(9);
    logs.record(1);
    logs.record(2);
    logs.record(3);
    logs.record(1);
    logs.record(2);
    logs.record(3);
    logs.record(1);
    logs.record(2);
    logs.record(3);

    expect(logs.getLast(9)).toBe(1);
    expect(logs.getLast(7)).toBe(3);
    expect(logs.getLast(4)).toBe(3);
    expect(logs.getLast(1)).toBe(3);
    expect(logs.getLast(13)).toBeFalsy();
  });
});
