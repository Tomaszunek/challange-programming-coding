const getAllLevelsStructure = (string) => string.split('\t').length + 1;

const itemIsFile = (path) => path && path.includes('.');

const pathToDirStructure = (path) => {
  const splitArray = path.split('\n\t') || [];
  const structure = { [splitArray[0]]: {} };
  let lastDir = [splitArray[0]];
  let lastLevel = 1;
  for (let element of splitArray) {
    if (element === 'dir') {
      continue;
    }
    const level = getAllLevelsStructure(element);
    element = element.split('\t').join('');
    console.log(lastDir, element);
    const isFile = itemIsFile(element);
    if (!isFile) {
      if (lastLevel > level) {
        console.log(lastDir, 0, lastLevel - level);
        lastDir = lastDir.splice(0, level);
        console.log(lastDir);
        lastLevel = level;
      } else if (level === lastLevel) {
        lastDir.pop();
        lastDir.push(element);
        lastLevel = lastDir.length;
      }
    }
    console.log(lastDir);
    if (isFile) {
      const [one, two, three, four] = lastDir;
      // switch (lastDir.length) {
      //   case 1:
      //     structure[one] = {
      //       ...structure[one],
      //       [element]: element,
      //     };
      //     break;
      //   case 2:
      //     structure[one][two] = {
      //       ...structure[one][two],
      //       [element]: element,
      //     };
      //     break;
      //   case 3:
      //     structure[one][two][three] = {
      //       ...structure[one][two][three],
      //       [element]: element,
      //     };
      //     break;
      //   case 4:
      //     structure[one][two][three][four] = {
      //       ...structure[one][two][three][four],
      //       [element]: element,
      //     };
      //     break;
      // }
    } else {
      const [one, two, three, four] = lastDir;
      console.log({ one, two, three, four, length: lastDir.length });
      switch (lastDir.length) {
        case 1:
          structure[one][element] = {};
          break;
        case 2:
          structure[one][two][element] = {};
          break;
        case 3:
          structure[one][two][three][element] = {};
          break;
        case 4:
          structure[one][two][three][four][element] = {};
          break;
      }
    }
    if (!isFile && lastLevel < level) {
      lastDir.push(element);
      lastLevel = lastDir.length;
    }
    console.log(lastDir);
    console.log(structure);
  }
  return structure;
};
export { pathToDirStructure };
