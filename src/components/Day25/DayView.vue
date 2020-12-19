<template>
  <transition name="Day25">
    <div>
      <InputWrapper>
        <span>Word:</span>
        <input
          v-model="word"
          type="text"
          style="width: 300px;"
        >
        <span>Regexp:</span>
        <input
          v-model="regexp"
          type="text"
          style="width: 300px;"
        >    
      </InputWrapper>
      <OutputWrapper>
        <span> Regexp match word: {{ output }}
        </span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { matchRegexp } from './calc';

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
  name: "Day25",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    regexpProp: {
      type: String,
      required: true,
    },
    wordProp: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      word: this.wordProp,
      regexp: this.regexpProp,
    }
  }, 
  computed: {
    output: function() {
      const { word, regexp } = this;
      return matchRegexp(regexp, word);
    }    
  }
};
</script>
