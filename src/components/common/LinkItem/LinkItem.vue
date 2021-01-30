<template>
  <div :class="styles.linkItem">
    <FontAwesomeIcon :icon="icon" />
    <a :href="linkHref" target="_blank">{{linkText}}</a>
    <div>{{linkLine1}}</div>
    <div>{{linkLine2}}</div>
  </div>
</template>

<script>

import styles from './LinkItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'LinkItem',
  components: { FontAwesomeIcon },
  data() {
    return {
      styles
    }
  },
  props: ['icon', 'linkHref', 'linkText', 'linkLine1', 'linkLine2']
}
</script>
