<template>
  <transition name="Day11">
    <div>
      <InputWrapper>
        <span>Words:</span>
        <input
          v-model="words"
          type="text"
        >
        <span>prefix:</span>
        <input
          v-model="prefix"
          type="text"
        > 
      </InputWrapper>
      <OutputWrapper>
        <span>Words with prefix: {{ output }}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { getStringsWithPrefix } from './calc';

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
  name: "Day11",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    wordsArray: {
      type: String,
      required: true,
    },
    prefixString: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      words: this.wordsArray,
      prefix: this.prefixString,
    }
  },
  computed: {
    output: function() {
      const { words, prefix } = this;
      const arrayFromString = JSON.parse(words);
      return getStringsWithPrefix(prefix, arrayFromString);
    },    
  }
};
</script>
