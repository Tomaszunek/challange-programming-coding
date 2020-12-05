<template>
  <transition name="Day8">
    <div>      
      <OutputWrapper>
        <span>Count: {{ output }}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { countUnivalSubtres, UnivelTree } from './day8Calculation';

const OutputWrapper = styled.section`
  padding: 1em 4em;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const tree = UnivelTree(
  0,
  UnivelTree(1, null, null),
  UnivelTree(
    0,
    UnivelTree(1, UnivelTree(1, null, null), UnivelTree(1, null, null)),
    UnivelTree(0, null, null),
  ),
);

export default {
  name: "Day8",
  components: {    
    OutputWrapper,
  },
  computed: {
    output: function() {      
      return countUnivalSubtres(tree);
    },    
  }
};
</script>
