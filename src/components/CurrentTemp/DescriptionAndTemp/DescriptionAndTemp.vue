<template>
  <div :class="styles.descriptionAndTemp">
    <div :class="styles.description">
      <img :src="getWeatherIcon" alt=""/>
      <div>{{description}}</div>
    </div>

    <div :class="styles.minMax">
      <UpArrowIcon></UpArrowIcon>
      <span>{{getTempComputed.maxTemp}}&deg;</span>
      <DownArrowIcon></DownArrowIcon>
      <span>{{getTempComputed.minTemp}}&deg;</span>
    </div>

    <div :class="styles.tempAndUnits">
      <div :class="styles.temp">{{getTempComputed.currentTemp}}&deg;</div>
      <div :class="styles.units">
        <div
          :class="`${styles.celc} ${unitFC === 'f' && styles.notCurrent}`"
          @click="setUnitFCMethod"
        >
          C
        </div>
        <div
          :class="`${styles.faren} ${unitFC === 'c' && styles.notCurrent}`"
          @click="setUnitFCMethod"
        >
          F
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import styles from './DescriptionAndTemp.module.scss'
import { getTemp, getWeatherIcon, fakeDispatch } from '../../../utilities/utilitiesPart1'
import UpArrowIcon from '../../common/UpArrowIcon'
import DownArrowIcon from '../../common/DownArrowIcon'

export default {
  name: 'DescriptionAndTemp',
  components: {DownArrowIcon, UpArrowIcon},
  data() {
    return {
      styles
    }
  },
  props: ['description', 'maxTemp', 'minTemp', 'currentTemp', 'isDay', 'unitFC', 'setUnitFC'],
  computed: {
    getWeatherIcon() {
      return getWeatherIcon(this.description, this.isDay)
    },
    getTempComputed() {
      return {
        currentTemp: getTemp(this.unitFC, this.currentTemp),
        minTemp: getTemp(this.unitFC, this.maxTemp),
        maxTemp: getTemp(this.unitFC, this.minTemp),
      }
    },
  },
  methods: {
    setUnitFCMethod() {
      if (this.unitFC === 'f') {
        fakeDispatch(this.setUnitFC('c'))
      } else {
        fakeDispatch(this.setUnitFC('f'))
      }
    }
  },
  updated() {
    if (this.unitFC && this.unitFC !== 'initial') {
      window.localStorage.setItem('storedUnitFC', this.unitFC)
    }
  },
}
</script>
