<template>
  <transition name="Day34">
    <div>
      <InputWrapper>
        <span>Word:</span>
        <input
          v-model="wordText"
          type="wordText"
          style="width: 300px;"
        >        
      </InputWrapper>
      <OutputWrapper>
        <code> Shortest palindrom: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { findShortestPalindrom } from './calc';

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
  name: "Day34",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    word: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      wordText: this.word,
    }
  }, 
  computed: {
    output: function() {
      const { wordText } = this;
      return findShortestPalindrom(wordText);
    }    
  }
};
</script>
