## Linked link intersecting node

This problem was asked by Snapchat.

Given an array of time intervals (`start`, `end`) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given `[(30, 75), (0, 50), (60, 150)]`, you should return `2`.

```jsx
import { Node } from './calc';
const tree = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node2.insertRight(node4);
node3.insertRight(node5);
tree.insertLeft(node2);
tree.insertRight(node3);

<Day24 v-bind:tree="tree" v-bind:nodeToLock="node2" />;
```
