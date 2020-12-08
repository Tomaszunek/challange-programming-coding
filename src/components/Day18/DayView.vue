<template>
  <transition name="Day18">
    <div>
      <InputWrapper>
        <span>Array:</span>
        <input
          v-model="array"
          type="text"
        >
      </InputWrapper>
      <OutputWrapper>
        <span> Output: {{ output }}
        </span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { maxInRanges } from './calc';

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
  name: "Day18",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    arrayProps: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      array: this.arrayProps,
    }
  },  
  computed: {
    output: function() {
      const { array } = this;
      const parseArray = JSON.parse(array);
      return maxInRanges(parseArray, 3);
    }    
  }
};
</script>
