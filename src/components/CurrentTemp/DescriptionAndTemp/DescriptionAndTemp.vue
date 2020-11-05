<template>
  <div :class="styles.descriptionAndTemp">
    <div :class="styles.description">
      <img src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png" alt=""/>
      <div>{{description}}</div>
    </div>

    <div>
<!--      <UpArrowIcon/>-->
      <span>{{maxTemp}}&deg;</span>
<!--      <DownArrowIcon/>-->
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

export default {
  name: 'DescriptionAndTemp',
  data() {
    return {
      styles
    }
  },
  props: ['description', 'maxTemp', 'minTemp', 'currentTemp'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
