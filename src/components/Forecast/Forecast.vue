<template>
  <GadgetContainer :cardTitle="cardTitle">
    <div :class="styles.forecast">
      <div :class="styles.dropDown">
        Temperature:
      </div>
      <HourlyForecast
        :hourly="forecastState.hourly"
        :timeZone="forecastState.timeZone"
        :sunRise="forecastState.sunRise"
        :sunSet="forecastState.sunSet"
        :unitFC="forecastState.unitFC">
      </HourlyForecast>
      <DailyForecast
        :daily="forecastState.daily"
        :timeZone="forecastState.timeZone"
        :unitFC="forecastState.unitFC"
      ></DailyForecast>
    </div>
  </GadgetContainer>
</template>

<script>
import { mapGetters } from 'vuex'

import GadgetContainer from '../common/GadgetContainer/GadgetContainer'
import HourlyForecast from './HourlyForecast/HourlyForecast'
import DailyForecast from './DailyForecast/DailyForecast'

import styles from './Forecast.module.scss'

export default {
  name: 'Forecast',
  components: {
    GadgetContainer,
    HourlyForecast,
    DailyForecast
  },
  data() {
    return ({
      styles,
      cardTitle: "Forecast",
    })
  },
  computed: {
    ...mapGetters(['getForecastWeatherData', 'getUnitFC']),
    forecastState() {
      const {
        hourly,
        daily,
        timezone_offset: timeZone,
        current: {sunrise: sunRise, sunset: sunSet}
      } = this.getForecastWeatherData
      const unitFC = this.getUnitFC

      return {
        hourly,
        daily,
        timeZone,
        sunRise,
        sunSet,
        unitFC,
      }
    },
  },
}
</script>
