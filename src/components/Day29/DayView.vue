<template>
  <transition name="Day29">
    <div>
      <InputWrapper>
        <span>String:</span>
        <input
          v-model="string"
          type="text"
          style="width: 700px;"
        >           
      </InputWrapper>
      <OutputWrapper>
        <code> Encoded string: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { encodingString } from './calc';

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
  name: "Day29",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    stringProp: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      string: this.stringProp,
    }
  }, 
  computed: {
    output: function() {
      const { string } = this;
      return encodingString(string);
    }    
  }
};
</script>
