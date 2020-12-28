<template>
  <transition name="Day36">
    <div>
      <InputWrapper>
        <span>RGB Array Letters:</span>
        <span>Tree: {data: 10, left: {data: 5, left: {data: 8} right: {data: 20, right: {data: 50}}}</span>   
      </InputWrapper>
      <OutputWrapper>
        <code> Second biggest node {{ output }}
        </code>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { BinarySearchTree } from '../../Models/BinarySearchTree/BinarySearchTree';
import { secondLargestNode } from './calc';

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
  name: "Day36",
  components: {
    InputWrapper,
    OutputWrapper,
  }, 
  computed: {
    output: function() {
      const tree = new BinarySearchTree();

      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      tree.insert(8);
      tree.insert(50);

      return secondLargestNode(tree);
    }    
  }
};
</script>
