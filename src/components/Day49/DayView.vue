<template>
  <transition name="Day49">
    <div>
      <InputWrapper>
        <span>Input numbers:</span>
        <input
          v-model="numbersInput"
          type="text"
          style="width: 500px;"
        >
      </InputWrapper>
      <OutputWrapper>
        <code> Biggest sum: {{ output }}
        </code>        
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { maxSum } from './calc';

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
  width: 88%;
`;

export default {
  name: "Day49",
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
      numbersInput: this.numbers,
    }
  }, 
  computed: {
    output: function() {
      const { numbersInput } = this;
      const parseArray = JSON.parse(numbersInput);
      return maxSum(parseArray);
    }    
  }
};
</script>
