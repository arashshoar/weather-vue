<template>
  <div :class="`input-group md-3 ${styles.locationInput}`">
    <input type="text" class="form-control"/>
    <div class="input-group-append">
      <button class="input-group-append btn btn-light" type="button">
        Search
      </button>
    </div>
  </div>
</template>

<script>
import styles from './LocationInput.scss'

export default {
  name: 'LocationInput',
  data() {
    return {
      styles
    }
  },
}
</script>
