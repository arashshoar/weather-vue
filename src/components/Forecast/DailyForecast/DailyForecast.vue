<template>
  <div>
    <div v-for="day in daily" :key="day.dt" :class="styles.forecastRow">
      <div :class="styles.day">{{getDayComputed(day.dt)}}</div>
      <div :class="styles.icons">
        <img alt="" :src="getWeatherIconComputed(day.weather[0].description, day.dt)" />
        <img alt="" :src="getPrecipitationIconComputed(day.weather[0].description)" />
      </div>
      <div :class="styles.icons">
        <div>{{getTempComputed(day.temp.max)}}&deg;</div>
        <div>{{getTempComputed(day.temp.min)}}&deg;</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWeatherIcon, getIfItIsDay, getTemp, getPrecipitationIcon, getDay } from '../../../utilities/utilitiesPart1'

import styles from './DailyForecast.module.scss'

export default {
  name: 'DailyForecast',
  data() {
    return {
      styles
    }
  },
  props: ['daily', 'timeZone', 'unitFC'],
  computed: {
    getDayComputed() {
      return time => getDay(time, this.timeZone)
    },
    getWeatherIconComputed() {
      return (description, time) => getWeatherIcon(description, getIfItIsDay(this.sunRise, this.sunSet, time))
    },
    getPrecipitationIconComputed() {
      return description => getPrecipitationIcon(description)
    },
    getTempComputed() {
      return temp => getTemp(this.unitFC, temp)
    }
  }
}
</script>
