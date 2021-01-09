## Binary tree calculations

This problem was asked by `Microsoft`.

Suppose an arithmetic expression is given as a `binary tree`. Each leaf is an integer and each internal node is one of `'+', '−', '∗', or '/'`.

Given the root to such a tree, write a function to evaluate it.

```jsx
import { Node } from './calc';

const tree = Node(
  '*',
  Node('+', Node(3), Node(2)),
  Node('+', Node(4), Node(5)),
);

<Day50 v-bind:tree="tree" />;
```

```jsx
import { Node } from './calc';

const tree = Node(
  '-',
  Node('*', Node(3), Node(2)),
  Node('*', Node(4), Node('-', Node(5), Node(-2))),
);

<Day50 v-bind:tree="tree" />;
```
