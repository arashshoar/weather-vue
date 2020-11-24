<template>
  <div :class="`${styles.gadgetContainer} ${className}`">
    <div :class="styles.header">
      {{ cardTitle }}
    </div>
    <div :class="styles.content">
      <slot />
    </div>
  </div>
</template>

<script>

import styles from './GadgetContainer.module.scss'

export default {
  name: 'GadgetContainer',
  props: ['className', 'cardTitle'],
  data() {
    return {
      styles,
    }
  },
}
</script>
