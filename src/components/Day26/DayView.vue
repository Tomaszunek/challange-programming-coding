<template>
  <transition name="Day26">
    <div>
      <InputWrapper>
        <span>Remove index element:</span>
        <input
          v-model="indexNumber"
          type="number"
          style="width: 300px;"
        >           
      </InputWrapper>
      <OutputWrapper>
        <span> Regexp match word: {{ output }}
        </span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { LinkedList } from '../../Models/LinkedList/LinkedList';
import { removeFromIndex } from './calc';

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
  name: "Day26",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    indexProp: {
      type: Number,
      required: true,
    },
  },  
  data() {
    return {
      indexNumber: this.indexProp,
    }
  }, 
  computed: {
    output: function() {
      const { indexNumber } = this;
      const list = new LinkedList();

      list.add(3);
      list.add(6);
      list.add(9);
      list.add(3);
      list.add(6);
      list.add(9); 
      list.add(3);
      list.add(6);
      list.add(9); 
      list.add(3);
      list.add(6);
      list.add(9);    
      removeFromIndex(list, indexNumber);

      return list.printList();
    }    
  }
};
</script>
