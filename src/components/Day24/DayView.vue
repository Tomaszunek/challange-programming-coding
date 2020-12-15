<template>
  <transition name="Day24">
    <div>      
      <OutputWrapper>
        <span> {{ output }}
        </span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';

const OutputWrapper = styled.section`
  padding: 1em 4em;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export default {
  name: "Day24",
  components: {
    OutputWrapper,
  },
  props: {
    tree: {
      type: Object,
      required: true,
    },
    nodeToLock: {
      type: Object,
      required: true,
    },
  },
  computed: {
    output: function() {
      const { tree, nodeToLock } = this;
      return `Possible to lock node with val (${nodeToLock.val}): ${nodeToLock.lock(tree)}`;
    }    
  }
};
</script>
