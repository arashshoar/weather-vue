<template>
  <div :class="styles.currentTemp">
    <div>In The Name of GOD</div>
    <div>city: {{currentTempState.cityName}}</div>
    <div>{{currentTempState.countryName}}</div>
    <div>{{currentTempState.date}}</div>
    <div>{{currentTempState.currentTemp}}</div>
    <div>{{currentTempState.maxTemp}}</div>
    <div>{{currentTempState.minTemp}}</div>
    <div>{{currentTempState.placeTime}}</div>
    <div>{{currentTempState.description}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getUsersLocation } from '../../api/api'
import { getLocationName, getDateFromMilSeconds, getTimeFromMilliSeconds, getDesOfWeather } from '../../utilities/utilitiesPart1'

import styles from './CurrentTemp.module.scss'

export default ({
  name: 'CurrentTemp',
  data() {
    return ({
      styles
    })
  },
  methods: {
    ...mapActions(['setCoords', 'setMapData', 'setCurrentWeatherData']),
  },
  computed: {
    ...mapGetters(['getCoords', 'getMapData', 'getCurrentWeatherData']),
    currentTempState () {
      const { cityName, countryName } = getLocationName(this.getMapData)
      const {
        dt,
        timezone: timeZone,
        weather,
        main: { temp: currentTemp, temp_min: minTemp, temp_max: maxTemp }
      } = this.getCurrentWeatherData
      const date = getDateFromMilSeconds(dt, timeZone)
      const placeTime = getTimeFromMilliSeconds(dt, timeZone)
      const description = getDesOfWeather(weather)

      return {
        cityName,
        countryName,
        currentTemp,
        minTemp,
        maxTemp,
        date,
        placeTime,
        description
      }
    }
  },
  created() {
    getUsersLocation(this.setCoords, this.setMapData, this.setCurrentWeatherData)
  }
})

</script>
