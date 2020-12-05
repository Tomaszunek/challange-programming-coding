<template>
  <transition name="Day9">
    <div>
      <InputWrapper>
        <span>Number:</span>
        <input
          v-model="array"
          type="text"
        >        
      </InputWrapper>
      <OutputWrapper>
        <span>Count: {{ output }}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { getMaxSumNonAdjuacentNumbers } from './day9Calculation';

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
  name: "Day9",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    numbers: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      array: this.numbers,
    }
  },
  computed: {
    output: function() {
      const { array } = this;
      const arrayFromString = JSON.parse(array);
      return getMaxSumNonAdjuacentNumbers(arrayFromString);
    },    
  }
};
</script>
