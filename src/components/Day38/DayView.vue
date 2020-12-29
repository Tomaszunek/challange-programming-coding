<template>
  <transition name="Day38">
    <div>
      <InputWrapper>
        <span>Number rows:</span>
        <input
          v-model="number"
          type="number"
          style="width: 200;"
        >        
      </InputWrapper>
      <BoardContainer :boards="output" />
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import BoardContainer from './components/BoardsCont';
import { possibleArrangements } from './calc';

const InputWrapper = styled.section`
  padding: 1em 4em;
  display: flex;
  justify-content: space-around;
`;

export default {
  name: "Day38",
  components: {
    InputWrapper,    
    BoardContainer,
  },
  props: {
    boardSize: {
      type: Number,
      required: true,
    },
  },  
  data() {
    return {
      number: this.boardSize,
    }
  }, 
  computed: {
    output: function() {
      const { number } = this;
      const minNumber = Math.min(5, number)
      return possibleArrangements(minNumber);
    }    
  }
};
</script>
