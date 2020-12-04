<template>
  <transition name="Day7">
    <div>
      <InputWrapper>
        <span>Number:</span>
        <input
          v-model="stringNumber"
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
import { getPossibleNumbersCount } from './day7Calculation';

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
  name: "Day7",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    number: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      stringNumber: this.number,
    }
  },
  computed: {
    output: function() {
      const { stringNumber } = this;
      if(isNaN(Number(stringNumber))) {
        return 'Wrong input. Please use only numbers.';
      }
      return getPossibleNumbersCount(stringNumber);
    },    
  }
};
</script>
