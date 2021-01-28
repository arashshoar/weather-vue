<template>
  <div :class="styles.linkItem">
    <font-awesome-icon :icon="icon" />
    <a :href="linkHref" target="_blank">{{linkText}}</a>
    <div>{{linkLine1}}</div>
    <div>{{linkLine2}}</div>
  </div>
</template>

<script>

import styles from './LinkItem.module.scss'

export default {
  name: 'LinkItem',
  data() {
    return {
      styles
    }
  },
  props: ['icon', 'linkHref', 'linkText', 'linkLine1', 'linkLine2']
}
</script>
