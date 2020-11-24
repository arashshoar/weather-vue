<template>
  <div>
    <GadgetContainer :cardTitle="cardTitle">I am Wind component</GadgetContainer>
  </div>
</template>

<script>
import GadgetContainer from '../common/GadgetContainer/GadgetContainer'

export default {
  name: 'Wind',
  data() {
    return ({
      cardTitle: "Wind & Pressure",
    })
  },
  components: {
    GadgetContainer,
  },
}
</script>
