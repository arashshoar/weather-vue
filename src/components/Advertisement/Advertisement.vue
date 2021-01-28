<template>
  <GadgetContainer :cardTitle="cardTitle">
    <Links></Links>
  </GadgetContainer>
</template>

<script>
import GadgetContainer from '../common/GadgetContainer/GadgetContainer'
import Links from '../common/Links/Links'


export default {
  name: 'Advertisement',
  components: {
    GadgetContainer,
    Links,
  },
  data() {
    return {
      cardTitle: "Links",
    }
  },
}
</script>
