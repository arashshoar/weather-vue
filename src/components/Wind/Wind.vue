<template>
  <GadgetContainer :cardTitle="cardTitle">
    <div :class="`${styles.windContainer} clearfix`">
      <div :class="styles.items">
        <div :class="styles.bigGen">
          <WindGen />
        </div>
        <div :class="styles.smallGen">
          <WindGen :small="true" />
        </div>
        <div :class="styles.wind">
          <div>Wind</div>
          <div>{{`${windState.speed ? windState.speed : 'loading'} mph`}}</div>
        </div>
        <div :class="styles.pressure">
          <div>Barometer</div>
          <div>{{`${windState.pressure ? windState.pressure : 'loading'} hpa`}}</div>
        </div>
      </div>
      <div :class="styles.border"></div>
    </div>
  </GadgetContainer>
</template>

<script>
import { mapGetters } from 'vuex'

import GadgetContainer from '../common/GadgetContainer/GadgetContainer'
import WindGen from './WindGen/WindGen'

import styles from './Wind.module.scss'

export default {
  name: 'Wind',
  components: {
    WindGen,
    GadgetContainer,
  },
  data() {
    return ({
      styles,
      cardTitle: "Wind & Pressure",
    })
  },
  computed: {
    ...mapGetters(['getCurrentWeatherData']),
    windState () {
      const {
        wind: { speed },
        main: { pressure }
      } = this.getCurrentWeatherData

      return {
        speed,
        pressure,
      }
    },
  }
}
</script>
