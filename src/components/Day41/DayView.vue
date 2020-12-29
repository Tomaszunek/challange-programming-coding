<template>
  <transition name="Day41">
    <div>
      <InputWrapper>
        <span>Origins/Dest:</span>
        <input
          v-model="origins"
          type="text"
          style="width: 500px;"
        >
        <span>Start</span>
        <input
          v-model="startPlace"
          type="text"
          style="width: 100px;"
        >      
      </InputWrapper>
      <OutputWrapper>
        <code> Path: {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { findPath } from './calc';

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
  name: "Day41",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    orginsDest: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      origins: this.orginsDest,
      startPlace: this.start,
    }
  }, 
  computed: {
    output: function() {
      const { origins, startPlace } = this;
      const cuttedString = origins.substring(1, origins.length-1);
      const orig = cuttedString.split('],[');
      const pairs = orig.map(pair => pair.split(','))
      return JSON.stringify(findPath(pairs, startPlace));
    }    
  }
};
</script>
