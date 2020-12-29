import { findPath } from '../calc';

describe('day41 calc', () => {
  it('should return path in airport naming', () => {
    expect.assertions(1);

    const originDest = [
      ['SFO', 'HKO'],
      ['YYZ', 'SFO'],
      ['YUL', 'YYZ'],
      ['HKO', 'ORD'],
    ];
    const start = 'YUL';
    const expectedPath = ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'];

    expect(findPath(originDest, start)).toStrictEqual(expectedPath);
  });

  it('should return null if no path', () => {
    expect.assertions(1);

    const originDest = [
      ['SFO', 'COM'],
      ['COM', 'YYZ'],
    ];
    const start = 'COM';

    expect(findPath(originDest, start)).toBeNull();
  });

  it('should return path in letter naming', () => {
    expect.assertions(1);

    const originDest = [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'C'],
      ['C', 'A'],
    ];
    const start = 'A';
    const expectedPath = ['A', 'B', 'C', 'C'];

    expect(findPath(originDest, start)).toStrictEqual(expectedPath);
  });
});
