<template>
  <transition name="Day3">
    <div>
      <p>Node('root', Node('left', Node('left.left')), Node('right'))</p>
      <p>deserialize(serialize(node, p);).left.left.val</p>
      <p>{{leftLeft}}</p>
    </div>
  </transition>
</template>

<script>
import { Node, serialize, deserialize } from './day3Calculation';

const node = Node('root', Node('left', Node('left.left')), Node('right'));
const p = [];
serialize(node, p);
const leftLeft = deserialize(p).left.left.val;

export default {
  name: "Day3",
  data() {
    return {
      leftLeft
    }
  }
};
</script>
