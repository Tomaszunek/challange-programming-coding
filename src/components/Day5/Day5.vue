<template>
  <transition name="Day5">
    <div>
      <InputWrapper>
        <span>Left Element</span>
        <input
          v-model="leftElement"
          type="text"
        >
        <span>Right Element</span>
        <input
          v-model="rightElement"
          type="text"
        >
      </InputWrapper>
      <OutputWrapper>
        <span>Output: {{ output }}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { cons, car, cdr } from './day5Calculation';

const InputWrapper = styled.section`
  padding: 4em;
  display: flex;
  justify-content: space-around;
`;

const OutputWrapper = styled.section`
  padding: 4em;
  display: flex;
  justify-content: start;
`;

const getCar = (l, r) => car(cons(l, r));


const getCdr = (l, r) => cdr(cons(l, r));

export default {
  name: "Day5",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    leftElementProps: {
      type: String,
      required: true,
    },
    rightElementProps: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      leftElement: this.leftElementProps,
      rightElement: this.rightElementProps,
    }
  },
  computed: {
    output: function() {
      const { rightElement, leftElement } = this;
      return `car(cons${leftElement}, ${rightElement})) : ${getCar(leftElement, rightElement)} 
      cdr(cons${leftElement}, ${rightElement})) : ${getCdr(leftElement, rightElement)}`
    }    
  }
};
</script>
