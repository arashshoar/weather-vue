<template>
  <GadgetContainer :cardTitle="cardTitle">

    <div :class="`${styles.sunMoon} clearfix`">
      <SunLocation
        v-if="isDay"
        :sunRiseTime="getSunRiseTime"
        :sunSetTime="getSunSetTime"
        :baseMoveToLeft="baseMoveToLeft"
      >
      </SunLocation>
      <WeatherIcon
        v-else
        :sunRise="windState.sunRise"
        :sunSet="windState.sunSet"
        :dt="windState.dt"
        :description="windState.weather[0].description"
      >
      </WeatherIcon>
      <div :class="`${styles.tableContainer}`">
        <div>Sun Rise: {{ getSunRiseTime }}</div>
        <div>Sun Set: {{ getSunSetTime }}</div>
        <div>Sun Hours: {{ getDayHours }}</div>
      </div>
    </div>
  </GadgetContainer>
</template>

<script>
import { mapGetters } from 'vuex'

import { getDayHours, getTimeFromMilliSeconds, getQuarter, getIfItIsDay } from '../../utilities/utilitiesPart1'
import GadgetContainer from '../common/GadgetContainer/GadgetContainer'
import SunLocation from './SunLocation/SunLocation'
import WeatherIcon from './WeatherIcon/WeatherIcon'

import styles from './SunMoon.module.scss'

export default {
  name: 'SunMoon',
  components: {
    GadgetContainer,
    WeatherIcon,
    SunLocation,
  },
  data() {
    return ({
      styles,
      cardTitle: "Sun & Moon",
      sunRiseTime: 'Loading'
    })
  },
  computed: {
    ...mapGetters(['getCurrentWeatherData']),
    windState () {
      const {
        sys: { sunrise: sunRise, sunset: sunSet },
        dt,
        timezone: timeZone,
        weather
      } = this.getCurrentWeatherData

      return {
        sunRise,
        sunSet,
        dt,
        timeZone,
        weather,
      }
    },
    baseMoveToLeft() {
      return this.dayQuarter() * 200
    },
    isDay() {
      return getIfItIsDay(this.windState.sunRise, this.windState.sunSet, this.windState.dt)
    },
    getDayHours() {
      return getDayHours(this.windState.sunRise, this.windState.sunSet)
    },
    getSunRiseTime() {
      return getTimeFromMilliSeconds(this.windState.sunRise, this.windState.timeZone)
    },
    getSunSetTime() {
      return getTimeFromMilliSeconds(this.windState.sunSet, this.windState.timeZone)
    }
  },
  methods: {
    dayQuarter() {
      return getQuarter({ sunRise: this.windState.sunRise, sunSet: this.windState.sunSet, dt: this.windState.dt})
    },
  },
}
</script>


