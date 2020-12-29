<template>
  <transition name="BoardsCont">      
    <OutputWrapper>    
      <Board 
        v-for="(board, index) in boards" 
        :key="index" 
        :board="board" 
      />
    </OutputWrapper>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import Board from './Board';

const OutputWrapper = styled.section`
  padding: 1em 4em;
  display: flex;
  flex-wrap: wrap;
`;

export default {
  name: "BoardsCont",
  components: {
    OutputWrapper,
    Board,
  },
  props: {
    boards: {
      type: Array,
      required: true,
    },
  },
};
</script>
