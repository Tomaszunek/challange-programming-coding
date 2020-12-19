class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    let current;

    if (this.head == null) this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index > 0 && index >= this.size) return -1;
    else {
      let it = 0;
      let curr = this.head;
      let prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;

      return curr.element;
    }
  }

  printList() {
    let listString = 'head';
    if (this.head == null) listString += '->';
    else {
      let current = this.head;
      listString += `->${current.element}`;

      while (current.next) {
        current = current.next;
        listString += `->${current.element}`;
      }
    }
    this.size++;
    return listString;
  }
}

export { LinkedList };
