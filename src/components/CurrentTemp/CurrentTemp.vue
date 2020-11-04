<template>
  <div :class="styles.currentTemp">
    <div>In The Name of GOD</div>
    <div>LocationAndDate</div>




    <div class="dropdown is-hoverable">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Dropdown item
          </a>
          <a class="dropdown-item">
            Other dropdown item
          </a>
          <a href="#" class="dropdown-item is-active">
            Active dropdown item
          </a>
          <a href="#" class="dropdown-item">
            Other dropdown item
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            With a divider
          </a>
        </div>
      </div>
    </div>





    <div>DescriptionAndTemp</div>
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
