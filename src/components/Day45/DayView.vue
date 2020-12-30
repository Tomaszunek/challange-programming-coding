<template>
  <transition name="Day45">
    <div>
      <InputWrapper>
        <span>Count:</span>
        <input
          v-model="numbersCount"
          type="number"
          style="width: 100px;"
        >
        <span>Min:</span>
        <input
          v-model="minValue"
          type="number"
          style="width: 100px;"
        >  
        <span>Max:</span>
        <input
          v-model="maxValue"
          type="number"
          style="width: 100px;"
        >  
      </InputWrapper>
      <OutputWrapper>
        <code> generated numbers: {{ output }}
        </code>        
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { genRandom } from './calc';

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
  name: "Day45",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    count: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },  
  data() {
    return {
      numbersCount: this.count,
      minValue: this.min,
      maxValue: this.max,
    }
  }, 
  computed: {
    output: function() {
      const { numbersCount, minValue, maxValue } = this;
      const rand = genRandom(minValue, maxValue);
      const array = [...Array(Number(numbersCount))]
        .map(() => rand())
        .reduce((acc, item) => acc + ' ' + item, '');      
      return array;
    }    
  }
};
</script>
