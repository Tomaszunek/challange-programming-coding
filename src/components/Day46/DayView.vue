<template>
  <transition name="Day46">
    <div>
      <InputWrapper>
        <span>String:</span>
        <input
          v-model="stringInput"
          type="text"
          style="width: 100px;"
        >
      </InputWrapper>
      <OutputWrapper>
        <code> Longest palindrom: {{ output }}
        </code>        
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { longestPalindrom } from './calc';

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
  name: "Day46",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    string: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      stringInput: this.string,
    }
  }, 
  computed: {
    output: function() {
      const { stringInput } = this;     
      return longestPalindrom(stringInput);
    }    
  }
};
</script>
