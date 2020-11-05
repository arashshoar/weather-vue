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
        <div :class="`${styles.celc} ${styles.notCurrent}`">C</div>
        <div :class="styles.faren">F</div>
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
  props: ['description', 'maxTemp', 'minTemp', 'currentTemp', 'isDay'],
  computed: {
    getWeatherIcon() {
      return getWeatherIcon(this.description, this.isDay)
    }
  },
  created() {
    if (this.unitFC && this.unitFC !== 'initial') {
      window.localStorage.setItem('storedUnitFC', this.unitFC)
    }
  },
}
</script>
