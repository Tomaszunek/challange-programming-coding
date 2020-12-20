<template>
  <transition name="Day30">
    <div>
      <InputWrapper>
        <span>Array ground:</span>
        <input
          v-model="ground"
          type="text"
          style="width: 700px;"
        >           
      </InputWrapper>
      <OutputWrapper>
        <code> Water units to fill ground: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { waterToFill } from './calc';

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
  name: "Day30",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    groundProp: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      ground: this.groundProp,
    }
  }, 
  computed: {
    output: function() {
      const { ground } = this;
      const pargeGround = JSON.parse(ground)
      return waterToFill(pargeGround);
    }    
  }
};
</script>
