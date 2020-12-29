<template>
  <transition name="Day44">
    <div>
      <InputWrapper>
        <span>Numbers:</span>
        <input
          v-model="numbersArray"
          type="text"
          style="width: 500px;"
        >   
      </InputWrapper>
      <OutputWrapper>
        <code> inversions count: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { findInversions } from './calc';

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
  name: "Day44",
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
      numbersArray: this.numbers,
    }
  }, 
  computed: {
    output: function() {
      const { numbersArray } = this;
      const parseArray = JSON.parse(numbersArray);
      return JSON.stringify(findInversions(parseArray));
    }    
  }
};
</script>
