<template>
  <div :class="styles.currentTemp">
    <div>In The Name of GOD</div>
    <div>{{getLocationName.cityName}}</div>
    <div>{{getLocationName.countryName}}</div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; //getLocationName
import { getUsersLocation } from '../../api/api'
import { getLocationName } from '../../utilities/utilitiesPart1'

import styles from './CurrentTemp.module.scss'

export default ({
  name: 'CurrentTemp',
  data() {
    return ({
      styles
    })
  },
  methods: {
    ...mapActions(['setCoords', 'setMapData']),
  },
  computed: {
    ...mapGetters(['getCoords', 'getMapData']),
    getLocationName() {
      return getLocationName(this.getMapData)
    }
  },
  created() {
    getUsersLocation(this.setCoords, this.setMapData)
  }
})

</script>
