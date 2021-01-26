<template>
  <div :class="styles.moonIconContainer">
    <div :class="styles.svgContainer">
      <img :src="getWeatherIcon" alt="" />
    </div>
  </div>
</template>

<script>
import { getWeatherIcon, getIfItIsDay } from '../../../utilities/utilitiesPart1'

import styles from '../SunMoon.module.scss'

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
