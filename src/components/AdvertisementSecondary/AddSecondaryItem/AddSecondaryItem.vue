<template>
  <GadgetContainer :cardTitle="cardTitle">
    <img :src="img" alt='' :class="styles.addImages" />
  </GadgetContainer>
</template>

<script>
import GadgetContainer from '../../common/GadgetContainer/GadgetContainer'

import styles from './AddSecondaryItem.module.scss'

export default {
  name: 'AddSecondaryItem',
  components: {
    GadgetContainer,
  },
  data() {
    return {
      cardTitle: "Advertisement 2nd",
      styles
    }
  },
  props: ['img'],
}
</script>
