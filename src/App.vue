<template>
  <div :class="styles.app" id="app">
    <div :class="styles.asideContainer">
        Aside
    </div>
    <div :class="styles.currentTempContainer">

      <CurrentTemp />
    </div>
    <div :class="styles.links">
      Advertisement
    </div>
    <div :class="styles.addSecondary">
      AdvertisementSecondary
    </div>
    <div :class="styles.componentsSetOne">
      Wind
    </div>
    <div :class="styles.componentsSetTwo">
      SunMoon
    </div>
  </div>
</template>

<script>
import CurrentTemp from '@/components/CurrentTemp/CurrentTemp'
import styles from './App.module.scss'

export default {
  name: 'App',
  components: {
    CurrentTemp
  },
  data() {
    return ({
      styles
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
