<template>
  <div :class="styles.currentTemp">
    In The Name of God
  </div>
</template>

<script>

import styles from './CurrentTemp.module.scss'

export default ({
  name: 'CurrentTemp',
  data() {
    return ({
      styles
    })
  }
})

</script>
