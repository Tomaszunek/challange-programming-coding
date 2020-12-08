<template>
  <transition name="Day20">
    <div>
      <InputWrapper>
        <span>Node(3, Node(7, Node(8, Node(10)))):</span>
        <span>Node(99, Node(1, Node(8, Node(10)))):</span>            
      </InputWrapper>
      <OutputWrapper>
        <span> Output: {{ output }}
        </span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { Node, findIntersection } from './calc';

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

const ll1 = Node(3, Node(7, Node(8, Node(10))));
const ll2 = Node(99, Node(1, Node(8, Node(10))));

console.log(findIntersection(ll1, ll2));

export default {
  name: "Day20",
  components: {
    InputWrapper,
    OutputWrapper,
  }, 
  computed: {
    output: function() {
      return findIntersection(ll1, ll2);
    }    
  }
};
</script>
