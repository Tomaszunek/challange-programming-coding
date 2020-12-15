<template>
  <transition name="Grid">
    <GridElement>
      <Row 
        v-for="(items, i) in grid" 
        :key="i"
      >
        [<GridP 
          v-for="(item, j) in items" 
          :key="i + j"
        >
          {{ item }}
        </GridP>]
      </Row>
    </GridElement>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';

const Row = styled.span`
  display: flex;
  height: 20px;
`;

const GridElement = styled.p`
  height: 150px;
`;

const GridP = styled.p`
  margin: 0;
`;

export default {
  name: "Grid",
  components: {
    Row,
    GridElement,
    GridP,
  },
  props: {
    grid: {
      type: Array,
      required: true,
    },
  },
};
</script>
