<template>
  <div :class="`input-group md-3 ${styles.locationInput}`">
    <input
        type="text"
        class="form-control"
        v-model="locationNameInput"
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
    ...mapActions(['setCoords', 'setMapData', 'setCurrentWeatherData', 'setLocationName']),
    handleSearchButtonClick: async function() {

      const { data: { features: [{ center: [longitude, latitude] }] } } = await fetchMapData({locationName: this.locationNameInput})
      getWholeData({
        latitude,
        longitude,
        setCoords: this.setCoords,
        setMapData: this.setMapData,
        setCurrentWeatherData: this.setCurrentWeatherData,
        setLocationName: this.setLocationName,
      })
    },
    handleKeyDown: async function() {
      const { data: mapData } = await fetchMapData({locationName: this.locationNameInput})
      this.setMapData(mapData)
    }
  },
}
</script>
