<template>
  <div>
    <div :class="`${styles.windGenContainer} ${small ? styles.small : null}`">
      <img :src="SRC.blade" alt="" :class="`${styles.blade} ${styles.rotate}`" />
      <img :src="SRC.pole" alt="" :class="styles.pole" />
    </div>
  </div>
</template>

<script>
import { SRC } from '../../../utilities/constants'

import styles from './WindGen.module.scss'

export default {
  name: 'WindGen',
  data() {
    return ({
      styles,
      SRC,
    })
  },
  props: ['small'],
}
</script>
