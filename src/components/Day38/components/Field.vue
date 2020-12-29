<template>
  <transition name="Field">
    <QueenField v-if="queen" />
    <EvenField v-else-if="!queen && even" />
    <OddField v-else-if="!queen && !even" />
  </transition>
</template>

<script>
import styled from 'vue-styled-components';

const FieldSpan = styled.span`
  width: 10px;
  height: 10px;
  border: 1px solid gray;
`;

const QueenField = FieldSpan.extend`
  background: red;
`;
const EvenField = FieldSpan.extend`
  background: #bdc789;
`;
const OddField = FieldSpan.extend`
  background: #682309;
`;

export default {
  name: "Field",
  components: {
    QueenField,    
    EvenField,
    OddField,
  }, 
  props: {
    field: {
      type: String,
      required: true,
    },
    even: {
      type: Boolean,
      required: true,
    },
    queen: {
      type: Boolean,
      required: true,
    }
  },
};
</script>
