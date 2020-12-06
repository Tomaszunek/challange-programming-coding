<template>
  <transition name="Day14">
    <div>
      <InputWrapper>
        <span>Interval number:</span>
        <input
          v-model="inverval"
          type="number"
        >
      </InputWrapper>
      <OutputWrapper>
        <span>Estimation: {{ output }}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { estimatePiValue } from './calc';

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
  name: "Day14",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    invervalNumber: {
      type: Number,
      required: true,
    },
  },  
  data() {
    return {
      inverval: this.invervalNumber,
    }
  },
  computed: {
    output: function() {
      const { inverval } = this;
      return estimatePiValue(inverval);
    },    
  }
};
</script>
