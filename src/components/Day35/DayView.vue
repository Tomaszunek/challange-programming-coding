<template>
  <transition name="Day35">
    <div>
      <InputWrapper>
        <span>RGB Array Letters:</span>
        <input
          v-model="rgbLetters"
          type="text"
          style="width: 600px;"
        >        
      </InputWrapper>
      <OutputWrapper>
        <code> Sorted RGB Array {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { sortRGB } from './calc';

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
  name: "Day35",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    letters: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      rgbLetters: this.letters,
    }
  }, 
  computed: {
    output: function() {
      const { rgbLetters } = this;
      const parseArray = rgbLetters.split(',');
      const parseTrim = parseArray.map(letter => letter.trim());
      return `[${sortRGB(parseTrim).join(', ')}]`;
    }    
  }
};
</script>
