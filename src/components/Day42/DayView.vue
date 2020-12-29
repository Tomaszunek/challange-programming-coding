<template>
  <transition name="Day42">
    <div>
      <InputWrapper>
        <span>Numbers:</span>
        <input
          v-model="numbersArray"
          type="text"
          style="width: 500px;"
        >
        <span>Sum:</span>
        <input
          v-model="sumNumber"
          type="number"
          style="width: 100px;"
        >      
      </InputWrapper>
      <OutputWrapper>
        <code> Possible sums: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { findSum } from './calc';

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
  name: "Day42",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    numbers: {
      type: String,
      required: true,
    },
    sum: {
      type: Number,
      required: true,
    },
  },  
  data() {
    return {
      numbersArray: this.numbers,
      sumNumber: this.sum,
    }
  }, 
  computed: {
    output: function() {
      const { numbersArray, sumNumber } = this;
      const parseArray = JSON.parse(numbersArray);
      return JSON.stringify(findSum(parseArray, sumNumber));
    }    
  }
};
</script>
