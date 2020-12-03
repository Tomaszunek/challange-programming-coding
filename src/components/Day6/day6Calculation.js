const createLinkedList = (nodeValue) => ({
  nodeValue: nodeValue,
  next: null,
  previous: null,
  get: function (index = 0) {
    let counter = 0;
    let thisNode = this;
    while (thisNode.next !== null) {
      if (counter === index) {
        break;
      }
      thisNode = thisNode.next;
      counter++;
    }
    if (counter === index) return thisNode;
    return null;
  },
  add: function (nodeValue) {
    let thisNode = this;
    while (thisNode.next !== null) {
      thisNode = thisNode.next;
    }
    thisNode.next = {
      nodeValue,
      next: null,
      previous: thisNode,
    };
  },
});

export { createLinkedList };
