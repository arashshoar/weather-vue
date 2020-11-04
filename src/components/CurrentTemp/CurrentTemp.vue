<template>
  <div :class="styles.currentTemp">
    <LocationAndDate></LocationAndDate>
    <LocationList></LocationList>
    <DescriptionAndTemp></DescriptionAndTemp>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getUsersLocation } from '../../api/api'
import { getLocationName, getDateFromMilSeconds, getTimeFromMilliSeconds, getDesOfWeather } from '../../utilities/utilitiesPart1'

import LocationAndDate from './LocationAndDate/LocationAndDate'
import LocationList from './LocationList/LocationList'
import DescriptionAndTemp from './DescriptionAndTemp/DescriptionAndTemp'

import styles from './CurrentTemp.module.scss'

export default ({
  name: 'CurrentTemp',
  components: { LocationAndDate, LocationList, DescriptionAndTemp },
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
