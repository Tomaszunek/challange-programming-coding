<template>
  <transition name="Day31">
    <div>
      <InputWrapper>
        <span>Mutable string:</span>
        <input
          v-model="mutable"
          type="text"
          style="width: 300px;"
        >
        <span>Result string:</span>
        <input
          v-model="result"
          type="text"
          style="width: 300px;"
        >          
      </InputWrapper>
      <OutputWrapper>
        <code> Needed mutations: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { findMutations } from './calc';

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
  name: "Day31",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    mutableString: {
      type: String,
      required: true,
    },
    resultString: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      mutable: this.mutableString,
      result: this.resultString,
    }
  }, 
  computed: {
    output: function() {
      const { mutable, result } = this;
      return findMutations(mutable, result);
    }    
  }
};
</script>
