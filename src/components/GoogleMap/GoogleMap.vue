<template>
  <GadgetContainer cardTitle="Map">
    <div id="map" :class="styles.googleMap"></div>
  </GadgetContainer>
</template>

<script>
import { mapGetters } from 'vuex'

import { initMapFunctionString, removeOldScriptElement } from '../../utilities/utilitiesPart1'
import GadgetContainer from '../common/GadgetContainer/GadgetContainer'

import styles from './GoogleMap.module.scss'

export default {
  name: 'GoogleMap',
  components: { GadgetContainer },
  data() {
    return ({
      styles
    })
  },
  watch: {
    gMapState(value, oldValue) {
      const { lat, lng } = value
      const { lat: oldLat, lng: oldLng} = oldValue
      if (lat !== oldLat) {
        this.loadScriptInintMap()
        this.loadScript()
      }
    }
  },
  computed: {
    ...mapGetters(['getCoords']),
    gMapState() {
      const [lng, lat] = this.getCoords.split(',')
      return ({
        lng,
        lat,
      })
    }
  },
  methods: {
    loadScriptInintMap() {
      removeOldScriptElement('googleMapFunction')
      const script = document.createElement('script')
      const rootElement = document.getElementById('app')

      script.innerHTML = initMapFunctionString({ lat: this.gMapState.lat, lng: this.gMapState.lng })
      script.setAttribute('id', 'googleMapFunction')
      if (document.getElementById('googleMapScript')) {
        document.getElementById('googleMapScript').before(script)
      } else {
        rootElement.append(script)
      }
    },
    loadScript() {
      removeOldScriptElement('googleMapScript')
      const script = document.createElement('script')
      const rootElement = document.getElementById('app')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_MAP}&callback=initMap`
      script.setAttribute('id', 'googleMapScript')
      script.setAttribute('defer', 'true')
      rootElement.append(script)
    }
  },
}
</script>
