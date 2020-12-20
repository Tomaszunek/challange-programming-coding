<template>
  <transition name="Day28">
    <div>
      <InputWrapper>
        <span>Words:</span>
        <input
          v-model="words"
          type="text"
          style="width: 700px;"
        >           
      </InputWrapper>
      <InputWrapper>
        <span>Line length:</span>
        <input
          v-model="lineLength"
          type="number"
          style="width: 100px;"
        >           
      </InputWrapper>
      <OutputWrapper>
        <code> {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { divideWordsToStrings } from './calc';

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
  name: "Day28",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    wordsProp: {
      type: String,
      required: true,
    },
    lineLengthProp: {
      type: Number,
      required: true,
    },
  },  
  data() {
    return {
      words: this.wordsProp,
      lineLength: this.lineLengthProp,
    }
  }, 
  computed: {
    output: function() {
      const { words, lineLength } = this;
      const parseWords = words.split(',');
      return divideWordsToStrings(parseWords, lineLength);
    }    
  }
};
</script>
