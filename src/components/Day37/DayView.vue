<template>
  <transition name="Day37">
    <div>
      <InputWrapper>
        <span>Set:</span>
        <input
          v-model="set"
          type="text"
          style="width: 600px;"
        >        
      </InputWrapper>
      <OutputWrapper>
        <code> All power sets: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { createSubsets } from './calc';

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
  name: "Day37",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    arraySet: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      set: this.arraySet,
    }
  }, 
  computed: {
    output: function() {
      const { set } = this;
      const parseArray = JSON.parse(set);
      return createSubsets(parseArray);
    }    
  }
};
</script>
