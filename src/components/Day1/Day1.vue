<template>
  <transition name="Day1">
    <Wrapper>
      <StyledTitle>Day1</StyledTitle>
    </Wrapper>
  </transition>
</template>

<script>
import styled from 'vue-styled-components';
const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default {
  name: "Day1",
  props: {},
  components: {
    StyledTitle,
    Wrapper,
  }
};
</script>
