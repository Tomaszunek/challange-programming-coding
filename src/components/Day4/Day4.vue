<template>
  <transition name="Day4">
    <div>
      <InputWrapper>
        <span>Input</span>
        <input
          v-model="items"
          type="text"
        >
      </InputWrapper>
      <OutputWrapper>
        <span>Output: {{ output }}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { getMinimalNumberFromArray} from './day4Calculation';

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

const parseStringToArray = items => {
  return false || getMinimalNumberFromArray(JSON.parse(items));
}

export default {
  name: "Day4",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    arrayItems: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      items: this.arrayItems,
    }
  },
  computed: {
    output: function() {
      return parseStringToArray(this.items);
    }    
  }
};
</script>
