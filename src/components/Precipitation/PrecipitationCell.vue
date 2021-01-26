<template>
  <div :class="styles.cell">
    <div>{{cellHeader}}</div>
    <div><img alt="" :src="imgSrc" /></div>
    <div>{{precipitation}}</div>
  </div>
</template>

<script>
import styles from './PrecipitationCell.module.scss'

export default {
  name: 'PrecipitationCell',
  data() {
    return {
      styles,
    }
  },
  props: ['cellHeader', 'imgSrc', 'precipitation'],
}
</script>
