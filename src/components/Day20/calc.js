const Node = (value, next) => ({
  value,
  next: next || null,
});
const getLinkedListLength = (nodeHead) => {
  let length = 0;
  let nodeTemp = nodeHead;
  while (nodeTemp !== null) {
    length += 1;
    nodeTemp = nodeTemp.next;
  }
  return length;
};

const findIntersectionOfEqualSizeList = (nodeHead1, nodeHead2) => {
  let temp1 = nodeHead1;
  let temp2 = nodeHead2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.value == temp2.value) {
      return temp1.value;
    }
    temp1 = temp1.next;
    temp2 = temp2.next;
  }
  return null;
};

const findIntersection = (nodeHead1, nodeHead2) => {
  let intersectionNode;
  if (nodeHead1 === null && nodeHead2 === null) return null;
  const firstlengthLL = getLinkedListLength(nodeHead1);
  const secondlengthLL = getLinkedListLength(nodeHead2);
  if (firstlengthLL === secondlengthLL) {
    intersectionNode = findIntersectionOfEqualSizeList(nodeHead1, nodeHead2);
  } else {
    if (firstlengthLL > secondlengthLL) {
      let lengthDiff = firstlengthLL - secondlengthLL;
      let temp = nodeHead1;
      while (lengthDiff != 0) {
        temp = temp.next;
        lengthDiff = lengthDiff - 1;
      }
      intersectionNode = findIntersectionOfEqualSizeList(temp, nodeHead2);
    } else {
      let lengthDiff = secondlengthLL - firstlengthLL;
      let temp = nodeHead2;
      while (lengthDiff != 0) {
        temp = temp.next;
        lengthDiff = lengthDiff - 1;
      }
      intersectionNode = findIntersectionOfEqualSizeList(nodeHead1, temp);
    }
  }
  return intersectionNode;
};
export { Node, findIntersection };
