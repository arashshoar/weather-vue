<template>
  <GadgetContainer :cardTitle="cardTitle">
    <Links :class="styles.aside"></Links>
  </GadgetContainer>
</template>

<script>
import GadgetContainer from '../common/GadgetContainer/GadgetContainer'
import Links from '../common/Links/Links'

import styles from './Aside.module.scss'

export default {
  name: 'Aside',
  components: {
    GadgetContainer,
    Links,
  },
  data() {
    return {
      cardTitle: "Aside",
      styles,
    }
  },
}
</script>
