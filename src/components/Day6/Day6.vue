<template>
  <transition name="Day6">
    <div>
      <InputWrapper>
        <span>Array to create linked list</span>
        <input
          v-model="array"
          type="text"
        >
        <span>Custom element index</span>
        <input
          v-model="findIndex"
          type="text"
        >
      </InputWrapper>
      <OutputWrapper>
        <span>Output: {{ output }}</span>
        <span>get(1): {{ getFromIndex(1) }}</span>
        <span>get(2): {{ getFromIndex(2) }}</span>
        <span>get(4): {{ getFromIndex(4) }}</span>
        <span>get({{ Number(findIndex) }}): {{ getFromIndex(Number(findIndex)) }}</span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { createLinkedList } from './day6Calculation';

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

let linkedList = createLinkedList('root');

export default {
  name: "Day6",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    items: {
      type: String,
      required: true,
    },
    index: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      array: this.items,
      findIndex: this.index,
    }
  },
  computed: {
    output: function() {
      const { array } = this;
      const itemsArray = JSON.parse(array);
      let string = 'root';
      linkedList = createLinkedList(string);
      itemsArray.forEach(item => {
        linkedList.add(item);
        string += ` <-> ${item}`
      });
      return string;
    },
    getFromIndex: function() {
      return (index) => {
        const customIndex = index || 0;
        if(linkedList.get(customIndex)) {
          return linkedList.get(customIndex).nodeValue;
        }
        return 'null';
      }
    }
  }
};
</script>
