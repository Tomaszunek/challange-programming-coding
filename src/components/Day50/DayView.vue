<template>
  <transition name="Day50">
    <div>
      <OutputWrapper>
        <code> calculation: {{ output }}
        </code>        
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { calculationFromTree } from './calc';

const OutputWrapper = styled.section`
  padding: 1em 4em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 88%;
`;

export default {
  name: "Day50",
  components: {
    OutputWrapper,
  },
  props: {
    tree: {
      type: Object,
      required: true,
    },
  },  
  computed: {
    output: function() {
      const { tree } = this;
      console.log(tree)
      return calculationFromTree(tree);
    }    
  }
};
</script>
