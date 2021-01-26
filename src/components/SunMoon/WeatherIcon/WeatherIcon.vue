<template>
  <div :class="styles.moonIconContainer">
      <img :src="getWeatherIcon" alt="" />
  </div>
</template>

<script>
import { getWeatherIcon, getIfItIsDay } from '../../../utilities/utilitiesPart1'

import styles from './WeatherIcon.module.scss'

export default {
  name: 'WeatherIcon',
  data() {
    return {
      styles
    }
  },
  props: ['sunRise', 'sunSet', 'dt', 'description'],
  computed: {
    getWeatherIcon() {
      return getWeatherIcon(this.description, getIfItIsDay(this.sunRise, this.sunSet, this.dt))
    }
  }
}
</script>
