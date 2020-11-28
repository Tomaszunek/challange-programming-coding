<template>
  <transition name="Day1">
    <div>
      <InputWrapper>
        <span>Input</span>
        <input type="text" v-model="items"/>
        <span>Number</span>
        <input type="number" v-model="sumNumber"/>
      </InputWrapper>
      <OutputWrapper>
        <span>Output: {{output}}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { twoNumbersFromArrayAddUpToNumber } from './day1Calculation';

const InputWrapper = styled.section`
  padding: 4em;
  display: flex;
  justify-content: space-around;
`;

const OutputWrapper = styled.section`
  padding: 4em;
  display: flex;
  justify-content: start;
`;

const parseStringToArray = (items, number) => {
  return false || twoNumbersFromArrayAddUpToNumber(JSON.parse(items), Number(number))
}

export default {
  name: "Day1",
  props: {
    arrayItems: {
      type: String,
      required: true,
    },
    sumInput: {
      type: String,
      required: true,
    }
  },
  computed: {
    output: function() {
      return parseStringToArray(this.items, Number(this.sumNumber));
    }    
  },  
  data() {
    return {
      items: this.arrayItems,
      sumNumber: this.sumInput,
    }
  },
  components: {
    InputWrapper,
    OutputWrapper,
  }
};
</script>
