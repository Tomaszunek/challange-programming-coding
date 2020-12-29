import { Stack } from '../Stack';

describe('stack', () => {
  it('should insert to stack', () => {
    expect.assertions(1);

    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(99);

    expect(stack.max()).toBe(99);
  });

  it('should pop from stack', () => {
    expect.assertions(2);

    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    const two = stack.pop();

    expect(stack.max()).toBe(1);
    expect(two).toBe(2);
  });
});
