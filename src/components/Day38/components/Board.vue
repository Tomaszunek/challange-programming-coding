<template>
  <transition name="Board">
    <BoardGrid :size="Math.sqrt(output.length)">
      <Field 
        v-for="(field, index) in output"
        :key="index"
        :field="String(field)"
        :even="Boolean(index % 2 === 0 && !output.length % 2 === 0)"
        :queen="field === -1"
      />
    </BoardGrid>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import Field from './Field'

const boardGridProps = {
  size: Number,
}

const BoardGrid = styled('div', boardGridProps)`
  display: grid;
  padding: ${props => props.size}px;
  grid-template-columns: repeat(${props => props.size}, 1fr);
  grid-template-rows: repeat(${props => props.size}, 1fr);
`;

export default {
  name: "Board",
  components: {
    BoardGrid,
    Field,
  },
  props: {
    board: {
      type: Array,
      required: true,
    },
  },
  computed: {
    output: function() {
      const { board } = this;
      return board.flat();
    }    
  }
};
</script>
