import { LinkedList } from '../../../Models/LinkedList/LinkedList';
import { removeFromIndex } from '../calc';

describe('day26 calc', () => {
  it('should remove at index from list', () => {
    expect.assertions(2);

    const list = new LinkedList();
    list.add(3);
    list.add(6);
    list.add(9);

    removeFromIndex(list, 2);
    removeFromIndex(list, 0);

    expect(list.size).toBe(1);
    expect(list.head.element).toBe(6);
  });
});
