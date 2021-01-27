<template>
  <div :class="styles.table">
    <div v-for="(hour) in hourly" :key="hour.dt" :class="`text-center ${styles.cell}`">
      <div>{{getHourAMPMComputed(hour.dt, timeZone)}}</div>
      <div>
        <img alt="" :src="getWeatherIconComputed(hour.weather[0].description, hour.dt)" />
      </div>
      <div>{{getTempComputed(hour.temp)}}&deg;</div>
    </div>
  </div>
</template>


<script>
import { getTimeFromMilliSeconds, getWeatherIcon, getIfItIsDay, getTemp, getHourAMPM } from '../../../utilities/utilitiesPart1'

import styles from './HourlyForecast.module.scss'

export default {
  name: 'HourlyForecast',
  data() {
    return ({
      styles
    })
  },
  props: ['hourly', 'timeZone', 'sunRise', 'sunSet', 'unitFC'],
  computed: {
    getHourAMPMComputed() {
      return (time, timeZone) => getHourAMPM((getTimeFromMilliSeconds(time, timeZone)))
    },
    getWeatherIconComputed() {
      return (description, time) => getWeatherIcon(description, getIfItIsDay(this.sunRise, this.sunSet, time))
    },
    getTempComputed() {
      return temp => getTemp(this.unitFC, temp)
    }
  },
}
</script>

