import { LinkedList } from '../LinkedList';

describe('linkedList', () => {
  it('should construct linked list', () => {
    expect.assertions(3);

    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.next).toBeFalsy();
    expect(list.size).toBe(0);
  });

  it('should add elements to list', () => {
    expect.assertions(4);

    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.size).toBe(3);
    expect(list.head.element).toBe(1);
    expect(list.head.next.element).toBe(2);
    expect(list.head.next.next.element).toBe(3);
  });

  it('should remove at index from list', () => {
    expect.assertions(6);

    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.size).toBe(3);
    expect(list.head.element).toBe(1);
    expect(list.head.next.element).toBe(2);
    expect(list.head.next.next.element).toBe(3);

    list.removeFrom(2);
    list.removeFrom(0);

    expect(list.size).toBe(1);
    expect(list.head.element).toBe(2);
  });

  it('should print list', () => {
    expect.assertions(1);

    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.printList()).toBe('head->1->2->3');
  });
});
