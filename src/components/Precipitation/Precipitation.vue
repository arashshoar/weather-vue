<template>
  <GadgetContainer :cardTitle="cardTitle">
    <div :class="styles.precipitation">

      <PrecipitationCell
        :cellHeader="'Morning'"
        :imgSrc="getPrecipitationIcon(precipState.morning.maxKey)"
        :precipitation="`${precipState.morning.rain} mm`"
      ></PrecipitationCell>

      <PrecipitationCell
        :cellHeader="'Noon'"
        :imgSrc="getPrecipitationIcon(precipState.noon.maxKey)"
        :precipitation="`${precipState.noon.rain} mm`"
      ></PrecipitationCell>

      <PrecipitationCell
        :cellHeader="'Afternoon'"
        :imgSrc="getPrecipitationIcon(precipState.afternoon.maxKey)"
        :precipitation="`${precipState.afternoon.rain} mm`"
      ></PrecipitationCell>

      <PrecipitationCell
        :cellHeader="'Evening'"
        :imgSrc="getPrecipitationIcon(precipState.evening.maxKey)"
        :precipitation="`${precipState.evening.rain} mm`"
      ></PrecipitationCell>

    </div>
  </GadgetContainer>
</template>

<script>
import { mapGetters } from 'vuex'

import { getPrecipitationIcon, getPrecipitationIconData } from '../../utilities/utilitiesPart1'
import GadgetContainer from '../common/GadgetContainer/GadgetContainer'
import PrecipitationCell from './PrecipitationCell'

import styles from './Precipitation.module.scss'

export default {
  name: 'Precipitation',
  components: {
    GadgetContainer,
    PrecipitationCell,
  },
  data() {
    return {
      cardTitle: "Sun & Moon",
      styles,
    }
  },
  computed: {
    ...mapGetters(['getForecastWeatherData']),
    precipState() {
      const forecast = this.getForecastWeatherData
      // deconstructing
      const {
        firstQuarterDesc: morning,
        secondQuarterDesc: noon,
        thirdQuarterDesc: afternoon,
        forthQuarterDesc: evening
      } = getPrecipitationIconData(forecast)

      return {
        morning,
        noon,
        afternoon,
        evening,
      }
    },
    getPrecipitationIcon() {
      return iconName => getPrecipitationIcon(iconName)
    }
  }
}
</script>
