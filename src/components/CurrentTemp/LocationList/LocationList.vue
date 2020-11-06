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
      Dropdown button
    </button>
    <div :class="`dropdown-menu ${styles.dropdownMenuLinks}`" aria-labelledby="dropdownMenuButton">
      <location-input></location-input>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</template>

<script>
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
  components: { LocationInput, LocationIcon }
}
</script>
