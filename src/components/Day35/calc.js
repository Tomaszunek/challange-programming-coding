const R = 'R';
const G = 'G';
const B = 'B';
const sortRGB = (rgbArray) => {
  let r = '';
  let g = '';
  let b = '';
  rgbArray.forEach((letter) => {
    switch (letter) {
      case R:
        r += R;
        break;
      case G:
        g += G;
        break;
      case B:
        b += B;
        break;
    }
  });
  return `${r}${g}${b}`.split('');
};

export { sortRGB };
