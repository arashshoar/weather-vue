<template>
  <GadgetContainer :cardTitle="cardTitle">
    <div :class="styles.details">
      <div :class="styles.borderBottom">
        <div :class="styles.detailsIconContainer">
          <img
            alt="Status"
            :src="getWeatherIcon"
            :class="styles.detailsIcon" />
        </div>

        <div :class="styles.detailsTable">
          <div :class="styles.cell">
            <div>Feels like:</div>
            <div>{{getFeelsLikeTemp}}&deg;</div>
          </div>
          <div :class="styles.cell">
            <div>humidity:</div>
            <div>{{detailsState.humidity}}%</div>
          </div>
          <div :class="styles.cell">
            <div>visibility:</div>
            <div>{{getVisibility}} miles</div>
          </div>
          <div :class="`${styles.cell} ${styles.noBorders}`">
            <div>Wind Dir:</div>
            <div>{{getWindDir}}</div>
          </div>
        </div>
      </div>

      <div :class="styles.detailsReport">
        <div>
          Today - Sunny with a high of {{Math.round(detailsState.maxTemp)}} °F ({{farenheitToCelcius(detailsState.maxTemp)}} °C).
          Winds from {{getWindDir}} at {{meterPerSecToMph(detailsState.windSpeed)}} mph
          ({{meterPerSecToKph(detailsState.windSpeed)}} kph).
        </div>
        <div>
          Tonight - Clear. Winds variable at {{meterPerSecToMph(detailsState.windSpeed)}} mph
          ({{meterPerSecToKph(detailsState.windSpeed)}} kph).
          The overnight low will be {{Math.round(detailsState.minTemp)}} °F ({{farenheitToCelcius(detailsState.minTemp)}} °C).
        </div>
      </div>

    </div>
  </GadgetContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  getTemp,
  getWindDir,
  farenheitToCelcius,
  meterPerSecToMph,
  meterPerSecToKph,
  meterToMiles,
  getWeatherIcon,
  getIfItIsDay,
} from '../../utilities/utilitiesPart1'

import GadgetContainer from '../common/GadgetContainer/GadgetContainer'

import styles from './Details.module.scss'

export default {
  name: 'Details',
  components: {
    GadgetContainer
  },
  data() {
    return {
      styles,
      cardTitle: "Details",
    }
  },
  computed: {
    ...mapGetters(['getCurrentWeatherData', 'getUnitFC']),
    detailsState() {
      const {
        dt,
        sys: { sunrise: sunRise, sunset: sunSet },
        weather,
        main: { feels_like: feelsLike, temp_max: maxTemp, temp_min: minTemp, humidity },
        wind: { speed: windSpeed, deg: windDeg },
        visibility,
      } = this.getCurrentWeatherData
      const unitFC = this.getUnitFC

      return {
        feelsLike,
        windSpeed,
        windDeg,
        humidity,
        visibility,
        maxTemp,
        minTemp,
        dt,
        sunRise,
        sunSet,
        weather,
        unitFC,
      }
    },
    getWeatherIcon() {
      const { weather, sunRise, sunSet, dt } = this.detailsState
      return getWeatherIcon(weather[0].description, getIfItIsDay(sunRise, sunSet, dt))
    },
    getFeelsLikeTemp() {
      return getTemp(this.detailsState.unitFC, this.detailsState.feelsLike)
    },
    getVisibility() {
      return meterToMiles(this.detailsState.visibility)
    },
    getWindDir() {
      return getWindDir(this.detailsState.windDeg)
    },
    farenheitToCelcius() {
      return temp => farenheitToCelcius(temp)
    },
    meterPerSecToMph() {
      return speed => meterPerSecToMph(speed)
    },
    meterPerSecToKph() {
      return speed => meterPerSecToKph(speed)
    },
  },
}
</script>
