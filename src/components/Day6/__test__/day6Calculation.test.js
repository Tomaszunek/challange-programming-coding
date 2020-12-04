import { createLinkedList } from '../day6Calculation';

describe('day3Calculation', () => {
  const linkedList = createLinkedList('root');
  it('should add items to linked list', () => {
    expect.assertions(1);

    linkedList.add('abc');
    linkedList.add('node2');
    linkedList.add('node3');
    linkedList.add('node4');
    linkedList.add('node5');

    expect(linkedList.get(5).nodeValue).toBe('node5');
  });

  it('should return item from index', () => {
    expect.assertions(3);

    expect(linkedList.get(0).nodeValue).toBe('root');
    expect(linkedList.get(1).nodeValue).toBe('abc');
    expect(linkedList.get(3).nodeValue).toBe('node3');
  });
});
