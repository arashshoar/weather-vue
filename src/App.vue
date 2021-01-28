<template>
  <div :class="styles.app" id="app">
    <div :class="styles.asideContainer">
      <Aside></Aside>
    </div>
    <div :class="styles.currentTempContainer">

      <CurrentTemp></CurrentTemp>
    </div>
    <div :class="styles.links">
      Advertisement
    </div>
    <div :class="styles.addSecondary">
      AdvertisementSecondary
    </div>
    <div :class="styles.componentsSetOne">
      <Wind></Wind>
      <Details></Details>
      <GoogleMap></GoogleMap>
    </div>
    <div :class="styles.componentsSetTwo">
      <SunMoon></SunMoon>
      <Precipitation></Precipitation>
      <Forecast></Forecast>
    </div>
  </div>
</template>

<script>
import CurrentTemp from '@/components/CurrentTemp/CurrentTemp'
import Wind from '@/components/Wind/Wind'
import SunMoon from '@/components/SunMoon/SunMoon'
import Details from '@/components/Details/Details'
import Precipitation from '@/components/Precipitation/Precipitation'
import Forecast from '@/components/Forecast/Forecast'
import GoogleMap from '@/components/GoogleMap/GoogleMap'
import Aside from '@/components/Aside/Aside.vue'

import styles from './App.module.scss'

export default {
  name: 'App',
  components: {
    CurrentTemp,
    Wind,
    SunMoon,
    Details,
    Precipitation,
    Forecast,
    GoogleMap,
    Aside,
  },
  data() {
    return ({
      styles
    })
  },
}
</script>
