<template>
  <transition name="Day21">
    <div>
      <InputWrapper>
        <span>Array intervals:</span>
        <input
          v-model="array"
          type="text"
          style="width: 500px;"
        >       
      </InputWrapper>
      <OutputWrapper>
        <span> Minimal room count: {{ output }}
        </span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { getMinimumNumberRooms} from './calc';

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
  name: "Day21",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    arrayProps: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      array: this.arrayProps,
    }
  }, 
  computed: {
    output: function() {
      const { array } = this;
      const parseArray = JSON.parse(array);
      return getMinimumNumberRooms(parseArray);
    }    
  }
};
</script>
