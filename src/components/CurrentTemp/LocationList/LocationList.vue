<template>
  <div :class="`dropdown ${styles.locationList}`">
    <button
      :class="`btn btn-outline-light dropdown-toggle ${styles.dropButton}`"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <LocationIcon></LocationIcon>
      <span>Change Location</span>
    </button>
    <div :class="`dropdown-menu ${styles.dropdownMenuLinks}`" aria-labelledby="dropdownMenuButton">
      <location-input></location-input>
      <div @click="handleChangeLocationList">
        <a
          class="dropdown-item"
          href="#"
          v-for="(place) in getPlaces"
          :key="place.id"
          :data-coords="place.center"
        >
          {{`${place.text}, ${getPlaceDescriptionMethod(place.place_name)}`}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

import { getWholeData } from '../../../api/api'
import { getPlaceDescription, getLatLngFromCoords } from '../../../utilities/utilitiesPart1'
import LocationInput from '../../../components/common/LocationInput/LocationInput'
import LocationIcon from '../../../components/common/LocationIcon/LocationIcon'

import styles from './LocationList.module.scss'

export default {
  name: 'LocationList',
  data() {
    return {
      styles
    }
  },
  components: { LocationInput, LocationIcon },
  methods: {
    ...mapActions(['setCoords', 'setMapData', 'setCurrentWeatherData', 'setLocationName']),
    getPlaceDescriptionMethod(placeName) {
      return getPlaceDescription(placeName)
    },
    handleChangeLocationList(event) {
      event.preventDefault()
      const coords = event.target.dataset.coords
      console.log('Coords: ', coords)
      const { latitude, longitude } = getLatLngFromCoords(coords)
      getWholeData({
        latitude,
        longitude,
        setCoords: this.setCoords,
        setMapData: this.setMapData,
        setCurrentWeatherData: this.setCurrentWeatherData,
        setLocationName: this.setLocationName,
      })
    }
  },
  computed: {
    ...mapGetters(['getMapData']),
    getPlaces() {
      return this.getMapData.features
    }
  },
}
</script>
