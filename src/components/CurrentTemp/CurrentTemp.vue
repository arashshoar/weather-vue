<template>
  <div :class="styles.currentTemp">
    <div :class="styles.tempHeader">
      <LocationAndDate
        :cityName="currentTempState.cityName"
        :countryName="currentTempState.countryName"
        :date="currentTempState.date"
        :time="currentTempState.placeTime"
      >
      </LocationAndDate>
      <LocationList></LocationList>
    </div>
    <DescriptionAndTemp
      :description="currentTempState.description"
      :maxTemp="currentTempState.maxTemp"
      :minTemp="currentTempState.minTemp"
      :currentTemp="currentTempState.currentTemp"
      :isDay="currentTempState.isDay"
      :descriptionFirst="currentTempState.descriptionFirst"
    ></DescriptionAndTemp>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getUsersLocation } from '../../api/api'
import {
  getLocationName,
  getDateFromMilSeconds,
  getTimeFromMilliSeconds,
  getDesOfWeather,
  getIfItIsDay
} from '../../utilities/utilitiesPart1'

import LocationAndDate from './LocationAndDate/LocationAndDate'
import LocationList from './LocationList/LocationList'
import DescriptionAndTemp from './DescriptionAndTemp/DescriptionAndTemp'

import styles from './CurrentTemp.module.scss'

export default ({
  name: 'CurrentTemp',
  components: { LocationAndDate, LocationList, DescriptionAndTemp },
  data() {
    return ({
      styles,
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
        main: { temp: currentTemp, temp_min: minTemp, temp_max: maxTemp },
        sys: { sunrise: sunRise, sunset: sunSet },
      } = this.getCurrentWeatherData
      const date = getDateFromMilSeconds(dt, timeZone)
      const placeTime = getTimeFromMilliSeconds(dt, timeZone)
      const description = getDesOfWeather(weather)
      const isDay = getIfItIsDay(sunRise, sunSet, dt)

      return {
        cityName,
        countryName,
        maxTemp,
        minTemp,
        currentTemp,
        date,
        placeTime,
        description,
        isDay,
        descriptionFirst: weather[0].description
      }
    }
  },
  created() {
    getUsersLocation(this.setCoords, this.setMapData, this.setCurrentWeatherData)
  }
})

</script>
