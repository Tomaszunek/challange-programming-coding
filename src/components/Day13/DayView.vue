<template>
  <transition name="Day13">
    <div>
      <InputWrapper>
        <span>String:</span>
        <input
          v-model="stringItem"
          type="text"
        >        
        <span>Unique letters count:</span>
        <input
          v-model="uniqueLetters"
          type="number"
        > 
      </InputWrapper>
      <OutputWrapper>
        <span>Unique substring: {{ output }}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { findLongestDistinctCharSubstring } from './calc';

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
  name: "Day13",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    stringProp: {
      type: String,
      required: true,
    },
    uniqueLettersCount: {
      type: Number,
      required: true,
    },
  },  
  data() {
    return {
      stringItem: this.stringProp,
      uniqueLetters: this.uniqueLettersCount,
    }
  },
  computed: {
    output: function() {
      const { stringItem, uniqueLetters } = this;
      return findLongestDistinctCharSubstring(stringItem, uniqueLetters);
    },    
  }
};
</script>
