<template>
  <div :class="`input-group md-3 ${styles.locationInput}`">
    <input
      v-model="locationNameInput"
      type="text"
      class="form-control"
      @keydown.enter="handleKeyDown"
    />
    <div class="input-group-append">
      <button
        class="input-group-append btn btn-outline-secondary"
        type="button"
        @click="handleSearchButtonClick"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { fetchMapData, getWholeData } from '../../../api/api'

import styles from './LocationInput.scss'

export default {
  name: 'LocationInput',
  data() {
    return {
      styles,
      locationNameInput:""
    }
  },
  methods: {
    ...mapActions(['setCoords', 'setMapData', 'setCurrentWeatherData', 'setForecastWeatherData', 'setLocationName']),
    handleSearchButtonClick: async function() {

      const { data: { features: [{ center: [longitude, latitude] }] } } = await fetchMapData({locationName: this.locationNameInput})
      getWholeData({
        latitude,
        longitude,
        setCoords: this.setCoords,
        setMapData: this.setMapData,
        setCurrentWeatherData: this.setCurrentWeatherData,
        setLocationName: this.setLocationName,
        setForecastWeatherData: this.setForecastWeatherData,
      })
    },
    handleKeyDown: async function() {
      const { data: mapData } = await fetchMapData({locationName: this.locationNameInput})
      this.setMapData(mapData)
    }
  },
}
</script>
