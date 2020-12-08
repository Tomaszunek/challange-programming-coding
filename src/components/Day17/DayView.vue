<template>
  <transition name="Day16">
    <div>
      <InputWrapper>
        <span>Log message:</span>
        <input
          v-model="message"
          type="text"
        >
        <button @click="addToLog">
          Add to log
        </button>
      </InputWrapper>
      <OutputWrapper>
        <span 
          v-for="n in length" 
          :key="n"
        >
          <span>get({{ n }}): {{ getFromId(n) }}</span> 
        </span>
      </OutputWrapper>
    </div>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
import { Logs } from './calc';

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

const logs = Logs(8);

export default {
  name: "Day16",
  components: {
    InputWrapper,
    OutputWrapper,
  },
  props: {
    messageProps: {
      type: String,
      required: true,
    },
  },  
  data() {
    return {
      message: this.messageProps,
      length: logs.getLength,
    }
  },  
  computed: {
    getFromId: function() {
      return (id) => {
        return logs.getLast(id);
      }
    }    
  },
  methods: {
    addToLog: function() {
      const { message } = this;
      if(message !== '') {
        logs.record(message);
        this.message = '';
        this.length = logs.getLength();
      }
    }
  },
};
</script>
