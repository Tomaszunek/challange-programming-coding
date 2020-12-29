<template>
  <transition name="Day40">
    <div>
      <InputWrapper>
        <span>Array:</span>
        <input
          v-model="numbers"
          type="text"
          style="width: 600px;"
        >        
      </InputWrapper>
      <OutputWrapper>
        <code> unique number: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { findUniqueNumber } from './calc';

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
  name: "Day40",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    numbersArray: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      numbers: this.numbersArray,
    }
  }, 
  computed: {
    output: function() {
      const { numbersArray } = this;
      const parseArray = JSON.parse(numbersArray);
      return findUniqueNumber(parseArray);
    }    
  }
};
</script>
