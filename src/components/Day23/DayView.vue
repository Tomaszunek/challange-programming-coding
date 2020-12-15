<template>
  <transition name="Day23">
    <div>
      <InputWrapper>
        <span>Array intervals:</span>
        <input
          v-model="array"
          type="text"
          style="width: 500px;"
        >       
      </InputWrapper>
      <InputWrapper>
        <span>start points:</span>
        <input
          v-model="startPoint"
          type="text"
          style="width: 100px;"
        >
        <span>end points:</span>
        <input
          v-model="endPoint"
          type="text"
          style="width: 100px;"
        >       
      </InputWrapper>
      <OutputWrapper>
        <span> Path: {{ output }}
        </span>
        <span> In count moves: {{ output.length }}
        </span>
      </OutputWrapper>
      <Grid :grid="JSON.parse(array)" />
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { findShortestPathMain} from './calc';
import Grid from './Grid';

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
  name: "Day23",
  components: {
    InputWrapper,
    OutputWrapper,
    Grid,
  },
  props: {
    arrayProps: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    }
  },  
  data() {
    return {
      array: this.arrayProps,
      endPoint: this.end,
      startPoint: this.start,
      countMoves: 0,
    }
  }, 
  computed: {
    output: function() {
      const { array, startPoint, endPoint } = this;
      const parseArray = JSON.parse(array);
      const parseStart = JSON.parse(startPoint);
      const parseEnd = JSON.parse(endPoint);
      const path = findShortestPathMain(parseStart, parseEnd, parseArray);
      return path || 'Impossible to go between points.';
    }    
  }
};
</script>
