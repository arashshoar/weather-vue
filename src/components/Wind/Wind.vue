<template>
  <GadgetContainer :cardTitle="cardTitle">
    <div :class="`${styles.windContainer} clearfix`">
      <div :class="`styles.items`">
        <div :class="styles.bigGen">
          WindGen
        </div>
        <div :class="styles.smallGen">
          WindGen
        </div>
        <div :class="styles.wind">
          <div>Wind</div>
          <div>10 mph</div>
        </div>
        <div :class="styles.pressure">
          <div>Barometer</div>
          <div>20 hpa</div>
        </div>
      </div>
      <div :class="styles.border"></div>
    </div>
  </GadgetContainer>
</template>

<script>
import GadgetContainer from '../common/GadgetContainer/GadgetContainer'

import styles from './Wind.module.scss'

export default {
  name: 'Wind',
  data() {
    return ({
      styles,
      cardTitle: "Wind & Pressure",
    })
  },
  components: {
    GadgetContainer,
  },
}
</script>
