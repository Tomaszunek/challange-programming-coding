<template>
  <transition name="Day43">
    <div>
      <InputWrapper>
        <button @click="push">
          Push to Stack
        </button>
        <button @click="pop">
          Pop From Stack
        </button>
      </InputWrapper>
      <OutputWrapper>
        <code> 
          Top element: {{ topElement }}
          Stack size: {{ stackSize }}
          Max item: {{ maxValue }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { Stack } from '../../Models/Stack/Stack';

const stack = new Stack();

const InputWrapper = styled.section`
  padding: 1em 4em;
  display: flex;
  justify-content: space-around;
`;

const OutputWrapper = styled.section`
  padding: 1em 4em;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export default {
  name: "Day43",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  data() {
    return {
      topElement: null,
      stackSize: 0,
      maxValue: 0,
    }
  },
  methods: {
    push: function push() {
      const randomElement = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
      stack.push(randomElement);
      this.topElement = randomElement;
      this.stackSize = stack.stack.length;
      this.maxValue = stack.max();
    },
    pop: function pop() {
      stack.pop();
      this.topElement = stack.stack[stack.stack.length - 1];
      this.stackSize = stack.stack.length;
      this.maxValue = stack.max();
    }
  },
};
</script>
