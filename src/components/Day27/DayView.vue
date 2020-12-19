<template>
  <transition name="Day27">
    <div>
      <InputWrapper>
        <span>String bracket:</span>
        <input
          v-model="bracketString"
          type="text"
          style="width: 300px;"
        >           
      </InputWrapper>
      <OutputWrapper>
        <span> Is balanced brackets string: {{ output }}
        </span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { balancedBrackets } from './calc';

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
  name: "Day27",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    bracketStringProp: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      bracketString: this.bracketStringProp,
    }
  }, 
  computed: {
    output: function() {
      const { bracketString } = this;
      return balancedBrackets(bracketString);
    }    
  }
};
</script>
