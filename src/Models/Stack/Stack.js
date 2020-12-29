class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }
  push(val) {
    this.stack.push(val);
    this.top = this.top + 1;
  }
  pop() {
    this.top = this.top - 1;
    return this.stack.pop();
  }
  max() {
    return (this.stack.length && Math.max(...this.stack)) || null;
  }
}

export { Stack };
