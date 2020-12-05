<template>
  <transition name="Day12">
    <div>
      <InputWrapper>
        <span>Number N steps:</span>
        <input
          v-model="count"
          type="number"
        >
        <span>Number stairs count:</span>
        <input
          v-model="stairs1"
          type="number"
        >
        <span>Number stairs count:</span>
        <input
          v-model="stairs2"
          type="number"
        > 
      </InputWrapper>
      <OutputWrapper>
        <span>Unique ways: {{ output }}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { getStaircaseUniqueWays } from './calc';

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
  name: "Day12",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    countN: {
      type: Number,
      required: true,
    },
    stairsCount1: {
      type: Number,
      required: true,
    },
    stairsCount2: {
      type: Number,
      required: true,
    },
  },  
  data() {
    return {
      count: this.countN,
      stairs1: this.stairsCount1,
      stairs2: this.stairsCount2
    }
  },
  computed: {
    output: function() {
      const { count, stairs1, stairs2 } = this;
      return getStaircaseUniqueWays(count, [stairs1, stairs2]);
    },    
  }
};
</script>
