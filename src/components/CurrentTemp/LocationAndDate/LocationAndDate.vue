<template>
  <div :class="styles.locationAndDate">
    <div :class="styles.inTheName">In The Name of GOD</div>
    <div :class="styles.city">{{cityName}}</div>
    <div :class="styles.country">{{countryName}}</div>
    <div :class="styles.dateTime">{{date}}, {{time}}</div>
  </div>
</template>

<script>
import styles from './LocationAndDate.module.scss'

export default {
  name: 'LocationAndDate',
  data() {
    return {
      styles
    }
  },
  props: ['cityName', 'countryName', 'date', 'time'],
}
</script>
