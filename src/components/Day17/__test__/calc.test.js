import { pathToDirStructure } from '../calc';

describe('day17 calc', () => {
  // it('should return dir structure', () => {
  //   expect.assertions(1);
  //   const path = 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext';
  //   const expectedStructure = {
  //     dir: {
  //       subdir1: {},
  //       subdir2: {
  //         'file.ext': 'file.ext',
  //       },
  //     },
  //   };

  //   expect(pathToDirStructure(path)).toStrictEqual(expectedStructure);
  // });

  it('should return dir structure2', () => {
    expect.assertions(1);
    const path =
      'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext';
    const expectedStructure = {
      dir: {
        subdir1: {
          'file1.ext': 'file1.ext',
          subsubdir1: {},
        },
        subdir2: {
          subsubdir2: {
            'file2.ext': 'file2.ext',
          },
        },
      },
    };

    expect(pathToDirStructure(path)).toBe(expectedStructure);
  });
});
