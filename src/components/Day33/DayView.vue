<template>
  <transition name="Day33">
    <div>
      <InputWrapper>
        <span>Input array:</span>
        <input
          v-model="inputArray"
          type="text"
          style="width: 300px;"
        >        
      </InputWrapper>
      <OutputWrapper>
        <code> Median array: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { calculateMedianFromArray } from './calc';

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
  name: "Day33",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    array: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      inputArray: this.array,
    }
  }, 
  computed: {
    output: function() {
      const { inputArray } = this;
      const parseArray = JSON.parse(inputArray);
      return calculateMedianFromArray(parseArray);
    }    
  }
};
</script>
