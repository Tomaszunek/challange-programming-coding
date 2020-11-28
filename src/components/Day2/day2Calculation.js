export const productFromArray = inputArray => { 
  const front = []; 
  const back = [];
    
  front[0] = 1; 
  
  back[inputArray.length - 1] = 1;

  for(let i = 1; i < inputArray.length; i++) {
    front[i] = inputArray[i - 1] * front[i - 1];
  }

  for(let j = inputArray.length - 2; j >= 0; j--) {
    back[j] = inputArray[j + 1] * back[j + 1];
  }

  for(let k = 0; k < front.length; k++) {
    inputArray[k] = front[k] * back[k];
  }

  return inputArray;
}