<template>
  <div :class="styles.descriptionAndTemp">
    <div :class="styles.description">
      <img :src="getWeatherIcon" alt=""/>
      <div>{{description}}</div>
    </div>

    <div :class="styles.minMax">
      <UpArrowIcon></UpArrowIcon>
      <span>{{maxTemp}}&deg;</span>
      <DownArrowIcon></DownArrowIcon>
      <span>{{minTemp}}&deg;</span>
    </div>

    <div :class="styles.tempAndUnits">
      <div :class="styles.temp">{{currentTemp}}&deg;</div>
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
import { getWeatherIcon } from '../../../utilities/utilitiesPart1'
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
    }
  },
  methods: {
    setUnitFCMethod() {
      if (this.unitFC === 'f') {
        this.setUnitFC('c')
      } else {
        this.setUnitFC('f')
      }
    }
  },
  updated() {
    console.log('In mounted: ', this.unitFC)
    if (this.unitFC && this.unitFC !== 'initial') {
      window.localStorage.setItem('storedUnitFC', this.unitFC)
    }
  },
}
</script>
