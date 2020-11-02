<template>
  <div :class="styles.currentTemp">
    <div>In The Name of GOD</div>
    <div>{{getCoords}}</div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getUsersLocation } from '../../api/api'

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
    ...mapGetters(['getCoords'])
  },
  created() {
    getUsersLocation(this.setCoords, this.setMapData)
  }
})

</script>
