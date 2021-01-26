<template>
  <div :class="styles.sunMoonContainer">
    <div :class="styles.svgContainer">
      <svg :class="styles.arcStroke" height="100" width="200">
        <circle
          cx="100"
          cy="100"
          r="99"
        ></circle>
      </svg>
      <svg
        :style="styleLeft"
        :class="styles.arcFill"
        height="100"
        width="200"
      >
        <circle
          :cx="centerX"
          cy="100"
          r="99"
          strokeWidth="1"
        ></circle>
      </svg>

      <img
        :src="SRC.clearDayIcon"
        alt=""
        :class="styles.clearDayIcon"
        :style="imgStyle"
      />

      <svg
        :class="styles.dotLeft"
        height="6"
        width="6"
      >
        <circle
          cx="3"
          cy="3"
          r="3"
        ></circle>
      </svg>

      <svg
        :class="styles.dotRight"
        height="6"
        width="6"
      >
        <circle
          cx="3"
          cy="3"
          r="3"
        ></circle>
      </svg>

      <div :class="styles.sunRise">{{ sunRiseTime[0] === '0' ? sunRiseTime.substr(1) : sunRiseTime }}</div>
      <div :class="styles.sunSet">{{ sunSetTime[0] === '0' ? sunSetTime.substr(1) : sunSetTime }}</div>

    </div>
  </div>
</template>

<script>
import { SRC } from '../../../utilities/constants'

import styles from './SunLocation.module.scss'

export default {
  name: 'SunLocation',
  data() {
    return {
      styles,
      SRC
    }
  },
  props: ['sunRiseTime', 'sunSetTime', 'baseMoveToLeft'],
  computed: {
    styleLeft() {
      return `left:${-200 + this.baseMoveToLeft}`
    },
    centerX() {
      return `${100 - this.baseMoveToLeft + 200}`
    },
    imgStyle() {
      return `left: ${this.baseMoveToLeft - 8}px;top: ${92 - Math.sqrt(10000 - (100 - (200 - this.baseMoveToLeft)) ** 2)}px`
    },
  }
}
</script>
